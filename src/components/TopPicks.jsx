import React from "react";
import { topPicks } from "../components/data/data";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function h1() {
  return (
    <div>
      <h1 className="text-orange-500 text-2xl py-2 text-center font-bold">
        Top Dishes
      </h1>
      <div className="hidden md:flex lg:flex max-w-[1920px] m-auto py-2 px-2">
        <Splide
          options={{ perPage: 4, gap: "0.5rem", drag: "free", arrows: false }}
        >
          {topPicks.map((item) => {
            return (
              <SplideSlide key={item.id}>
                <div className="rounded-3xl relative">
                  <div className="absolute w-full h-full bg-black/30 rounded-3xl text-white">
                    <p className="px-2 pt-4 text-2xl font-bold">{item.title}</p>
                    <p className="p-2">{item.price}</p>
                    <button className="border-dotted border-white mx-2 text-white bottom-4  absolute">
                      Add To Cart
                    </button>
                  </div>
                  <img
                    className="h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-300 "
                    src={item.image}
                    alt={item.title}
                  />
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
}

export default h1;
