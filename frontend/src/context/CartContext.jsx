import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from "react";

const CartContext = createContext();
const STORAGE_KEY = "ghar_ka_order_v2"; // change key if you want to avoid old state issues

// initial state
const initialState = { items: [] };

// helper: safe parse
const safeParse = (str) => {
  try {
    return JSON.parse(str);
  } catch {
    return null;
  }
};

// reducer
function reducer(state, action) {
  switch (action.type) {
    case "SET_STATE":
      return action.payload;

    case "ADD_ITEM": {
      const { item, quantity = 1 } = action.payload;
      if (!item || !item.id) return state;

      // normalize values
      const id = String(item.id);
      const variantLabel = item.variantLabel
        ? String(item.variantLabel)
        : "default";
      const unitPrice = Number(item.unitPrice) || 0;
      const image = item.image || null;
      const name = item.name || "Product";

      // find existing same id+variant
      const idx = state.items.findIndex(
        (it) => it.id === id && it.variantLabel === variantLabel
      );

      if (idx !== -1) {
        // update existing quantity
        const updated = state.items.map((it, i) =>
          i === idx ? { ...it, quantity: it.quantity + Number(quantity) } : it
        );
        return { ...state, items: updated };
      }

      // push new item
      return {
        ...state,
        items: [
          ...state.items,
          {
            id,
            name,
            variantLabel,
            unitPrice,
            image,
            quantity: Number(quantity),
          },
        ],
      };
    }

    case "REMOVE_ITEM": {
      const { id, variantLabel } = action.payload;
      return {
        ...state,
        items: state.items.filter(
          (it) =>
            !(String(it.id) === String(id) && it.variantLabel === variantLabel)
        ),
      };
    }

    case "UPDATE_QUANTITY": {
      const { id, variantLabel, quantity } = action.payload;
      const q = Number(quantity);
      if (isNaN(q) || q < 0) return state;

      // if zero -> remove
      if (q === 0) {
        return {
          ...state,
          items: state.items.filter(
            (it) =>
              !(
                String(it.id) === String(id) && it.variantLabel === variantLabel
              )
          ),
        };
      }

      const updated = state.items.map((it) =>
        String(it.id) === String(id) && it.variantLabel === variantLabel
          ? { ...it, quantity: q }
          : it
      );
      return { ...state, items: updated };
    }

    case "CLEAR_CART":
      return { ...state, items: [] };

    default:
      return state;
  }
}

// Provider
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const saveTimeout = useRef(null);

  // hydrate from storage once
  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const parsed = safeParse(raw);
    if (parsed && Array.isArray(parsed.items)) {
      // sanitize parsed items minimally
      const sanitized = parsed.items
        .map((it) => ({
          id: String(it.id),
          name: it.name || "Product",
          variantLabel: it.variantLabel || "default",
          unitPrice: Number(it.unitPrice) || 0,
          image: it.image || null,
          quantity: Number(it.quantity) || 0,
        }))
        .filter((it) => it.quantity > 0);

      dispatch({ type: "SET_STATE", payload: { items: sanitized } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // persist with small debounce
  useEffect(() => {
    if (saveTimeout.current) clearTimeout(saveTimeout.current);
    saveTimeout.current = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } catch (e) {
        // fail silently
        console.warn("Failed to save cart to localStorage", e);
      }
    }, 250);

    return () => clearTimeout(saveTimeout.current);
  }, [state]);

  // selectors / derived values
  const items = state.items;
  const total = items.reduce(
    (s, it) => s + (Number(it.unitPrice) || 0) * (Number(it.quantity) || 0),
    0
  );
  const cartCount = items.reduce((s, it) => s + (Number(it.quantity) || 0), 0); // total quantity
  const uniqueCount = items.length; // number of distinct product+variant entries

  // actions
  /**
   * addToCart(item, qty = 1)
   * item should include: id, name, variantLabel, unitPrice, image (optional)
   */
  const addToCart = (item, qty = 1) => {
    // defensive guard: ensure single numeric qty
    const q = Number(qty) || 1;
    dispatch({ type: "ADD_ITEM", payload: { item, quantity: q } });
  };

  const removeFromCart = (id, variantLabel = "default") =>
    dispatch({ type: "REMOVE_ITEM", payload: { id, variantLabel } });

  const updateQuantity = (id, variantLabel = "default", quantity = 1) =>
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id, variantLabel, quantity },
    });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  // build WhatsApp-friendly message
  const buildWhatsAppMessage = (opts = {}) => {
    if (!items || items.length === 0) return "";

    const lines = [];
    lines.push(opts.header || "New Order");
    lines.push("");

    items.forEach((it) => {
      lines.push(
        `${it.name} (${it.variantLabel}) x${it.quantity} = ₹${
          (Number(it.unitPrice) || 0) * it.quantity
        }`
      );
    });

    lines.push("");
    lines.push(`Total: ₹${total}`);
    if (opts.footer) lines.push("", opts.footer);

    return encodeURIComponent(lines.join("\n"));
  };

  return (
    <CartContext.Provider
      value={{
        items,
        total,
        cartCount,
        uniqueCount,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        buildWhatsAppMessage,
        // also expose raw dispatch if advanced usage needed
        _dispatch: dispatch,
      }}>
      {children}
    </CartContext.Provider>
  );
};

// hook
export const useCart = () => useContext(CartContext);
