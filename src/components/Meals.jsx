import React, { useState } from "react";
import { meals } from "../components/data/data";
import { FaLongArrowAltRight } from "react-icons/fa";

function Meals() {
  const [dish, setDish] = useState(meals);
  const fillterCat = (category) => {
    setDish(
      meals.filter((item) => {
        return item.category == category;
      })
    );
  };
  return (
    <div className="max-w-[1920px] m-auto px-4 py-12">
      <h1 className="text-orange-500 text-2xl py-2 text-center font-bold">
        Our Meals
      </h1>
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="flex justify-center md:justify-center">
          <button
            onClick={() => setDish(meals)}
            className="m-1 bg-orange-700 border-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700 "
          >
            All
          </button>
          <button
            onClick={() => fillterCat("bites")}
            className="m-1 bg-orange-700 border-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700 "
          >
            Bites
          </button>
          <button
            onClick={() => fillterCat("chicken")}
            className="m-1 bg-orange-700 border-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700 "
          >
            Chicken
          </button>
          <button
            onClick={() => fillterCat('pizza')}
            className="m-1 bg-orange-700 border-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700 "
          >
            Pizza
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 ">
        {dish.map((item) => {
          return (
            <div
              key={item.id}
              className="border-none hover:scale-105 ease-out duration-300"
            >
              <img
                className="w-full h-[200px] object-cover rounded-lg"
                src={item.image}
                alt={item.category}
              />
              <div className="flex justify-between py-2 px-2">
                <p className="font-bold">{item.title}</p>
                <p className="bg-orange-700 rounded-full h-18 w-18 -mt-10 border-8 text-white py-4 px-2 font-bold ">
                  {item.price}
                </p>
              </div>
              <div className="pl-2 py-4  -mt-7">
                <p className="flex items-center text-indigo-600 font-semibold">
                  View More <FaLongArrowAltRight className="w-5 ml-2" />
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Meals;
