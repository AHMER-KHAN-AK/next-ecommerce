import Image from "next/image";
import React from "react";

const ProductCard = ({
  product,
}: {
  product: {
    title: string;
    price: number;
    thumbnail: string;
  };
}) => {
  const { title, price, thumbnail } = product;
  return (
    <div className="lg:w-1/5 md:w-1/2 p-4 w-full ">
      <a className="block relative h-48 rounded overflow-hidden">
        
        <Image src={thumbnail} alt={title} width={420} height={260} />
      </a>
      <div className="mt-4">
        <h2 className="text-gray-900 title-font text-lg font-normal">
          {title}
        </h2>
        <p className="mt-1">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
