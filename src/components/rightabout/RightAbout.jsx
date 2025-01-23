import React from "react";
import Logo from "../../assets/icons/category-logo.svg";
import Img from "../../assets/images/categoryImg.png";

export function RightAbout() {
  return (
    <div className="max-w-[260px]">
      <p className="text-3xl mb-3 font-bold">Поломоичные машины</p>
      <p className="text-base font-bold mb-4">Категории</p>
      <div className="flex gap-20 items-center mb-4 transition-all hover:bg-gray-200 cursor-pointer px-2 rounded-md">
        <p>поломоичные машины</p>
        <img src={Logo} alt="logo" />
      </div>
      <div className="flex gap-20 items-center mb-4 transition-all hover:bg-gray-200 cursor-pointer px-2 rounded-md">
        <p>поломоичные машины</p>
        <img src={Logo} alt="logo" />
      </div>
      <div className="flex gap-20 items-center mb-4 transition-all hover:bg-gray-200 cursor-pointer px-2 rounded-md">
        <p>поломоичные машины</p>
        <img src={Logo} alt="logo" />
      </div>
      <div className="flex gap-20 items-center mb-4 transition-all hover:bg-gray-200 cursor-pointer px-2 rounded-md">
        <p>поломоичные машины</p>
        <img src={Logo} alt="logo" />
      </div>
      <div className="flex gap-20 items-center mb-6 transition-all hover:bg-gray-200 cursor-pointer px-2 rounded-md">
        <p>поломоичные машины</p>
        <img src={Logo} alt="logo" />
      </div>

      <img src={Img} alt="image" />
    </div>
  );
}
