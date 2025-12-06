import ProductCard from "./ProductCard";

export default function ProductSection({
  id,
  title,
  text_col,
  description,
  products,
  sortBy,
}) {
  const sorted = [...products];

  if (sortBy === "price-low") sorted.sort((a, b) => a.price - b.price);
  if (sortBy === "price-high") sorted.sort((a, b) => b.price - a.price);

  return (
    <section id={id} className="py-14 bg-[#F9FFF6]">
      <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2
          className={`text-3xl px-3 font-semibold tracking-wide mb-1`}
          style={{
            color: text_col || "#2F5D3A",
            fontWeight: "bold",
          }}>
          {" "}
          {title}
        </h2>

        {/* Underline */}
        <div className="w-24 px-6 h-1 bg-gradient-to-r from-[#74A27A] to-[#3D7A50] rounded-full mb-4"></div>

        <p className="text-[#4F7357] px-3 text-lg mb-10">{description}</p>

        {/* Product Grid */}
        {sorted.length > 0 ? (
          <div
            className="grid 
  grid-cols-2     
  sm:grid-cols-2 
  md:grid-cols-3  
  lg:grid-cols-4 
  gap-2 md:gap-4">
            {" "}
            {sorted.map((p) => (
              <ProductCard key={p.id} item={p} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10 text-[#3D7A50]">
            <p>No products found in this section.</p>
          </div>
        )}
      </div>
    </section>
  );
}
