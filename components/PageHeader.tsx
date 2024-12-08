import Image from "next/image";
import React from "react";
import Logo from "../public/assets/Logo.png";
import BreadCrumb from "./BreadCrumb";

const PageHeader = ({ heading }: { heading: string }) => {
  return (
    <div className="w-screen h-80 flex items-center justify-center bg-[url('../public/assets/Rectangle.png')] bg-cover bg-no-repeat">
      <div className="flex flex-col items-center">
        <Image src={Logo} height={100} width={100} alt="logo" />
        <h1 className="text-5xl font-medium">{heading}</h1>
        <BreadCrumb />
      </div>
    </div>
  );
};

export default PageHeader;
