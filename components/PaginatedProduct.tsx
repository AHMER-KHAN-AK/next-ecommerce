"use client";

import ProductCard from "./ProductCard";
import React, { useEffect, useState } from "react";

const PaginatedProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, [products]);
  return (
    <div>
      <h2>{}</h2>
      <div className="">
        {products.slice(0, 4).map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
      <button></button>
    </div>
  );
};

export default PaginatedProduct;
