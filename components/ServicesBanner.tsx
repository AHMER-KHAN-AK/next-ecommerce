import React from "react";

const ServicesBanner = () => {
  return (
    <div className="w-screen flex justify-center  items-center bg-[#FAF4F4] h-80 py-10 px-28 gap-10">
      <div className="">
        <h3 className="font-medium text-4xl">Free Delivery</h3>
        <p className="font-normal text-xl text-[#9F9F9F]">
          For all oders over $50, consectetur adipim scing elit.
        </p>
      </div>
      <div className="">
        <h3 className="font-medium text-4xl">90 Days Return</h3>
        <p className="font-normal text-xl text-[#9F9F9F]">
          If goods have problems, consectetur adipim scing elit.
        </p>
      </div>
      <div className="">
        <h3 className="font-medium text-4xl">Secure Payment</h3>
        <p className="font-normal text-xl text-[#9F9F9F]">
          100% secure payment, consectetur adipim scing elit.
        </p>
      </div>
    </div>
  );
};

export default ServicesBanner;
