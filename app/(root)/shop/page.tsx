"use client";
import PageHeader from "@/components/PageHeader";
import ProductCard from "@/components/ProductCard";
import ServicesBanner from "@/components/ServicesBanner";
import React, { useEffect, useState } from "react";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, [products]);
  return (
    <div>
      <PageHeader heading="Shop" />
      <section>
        <div className=" px-10 py-24 mx-auto">
          <div className="flex justify-center flex-wrap gap-10">
            {products.slice(0, 8).map((product, index) => (
              <ProductCard
                key={"unique" + index}
                product={product}
              />
            ))}
          </div>
        </div>
      </section>
      <ServicesBanner />
    </div>
  );
};

export default Shop;
