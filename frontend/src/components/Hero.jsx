import React, { useEffect, useState } from "react";

const Hero = () => {
  const images = [
    "https://organicindia.com/cdn/shop/files/gokshura-capsules-for-men.jpg?v=1743679785",
    "https://organicindia.com/cdn/shop/files/website-banner-1920x600.jpg?v=1751021100",
        "https://organicindia.com/cdn/shop/files/website-banner-1920x600.jpg?v=1751021100",

    "https://organicindia.com/cdn/shop/files/website-home-banner_1920x600_765c7819-cc35-4c88-a3da-c60e100f6d72.png?v=1762919703",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // change every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden flex justify-center items-center">
      <img
        src={images[index]}
        alt={`hero-${index}`}
        className="w-full h-full object-cover transition-all duration-700"
      />
    </div>
  );
};

export default Hero;
