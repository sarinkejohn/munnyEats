import React from "react";
import { category } from "./data/data";

// copy right reserved done by Sarinke john Sarijore  whatsup me +255789204208
function Categories() {
  return (
    <div className="max-w-[1920px] m-auto px-4 py-2">
      <h1 className="font-bold text-orange-500 text-center text-2xl py-2">
        Trending Categories
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-5 px-2 py-5">
        {category.map((item) => {
          return (
            <div key={item.id} className="flex p-2  justify-center items-center hover:scale-105 duration-300">
              <img src={item.image} alt={item.name}  />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
