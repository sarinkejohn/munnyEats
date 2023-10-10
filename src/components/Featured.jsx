import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
// copy right reserved done by Sarinke john Sarijore  whatsup me +255789204208
function Featured() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliders = [
    {
      url: "/images/slider/pizza-1.jpg"
    },
    {
      url: "/images/slider/pizza-2.jpg"
    },
    {
      url: "/images/slider/pizza-3.jpg"
    },
    {
      url: "/images/slider/pizza-4.jpg"
    },
    {
      url: "/images/slider/pizza-5.jpg"
    },
    {
      url: "/images/slider/pizza-6.jpg"
    }
  ];
  const prevSlide = () => {
    const isFirstslide = currentIndex === 0;
    const newSlider = isFirstslide ? sliders.length - 1 : currentIndex - 1;
    setCurrentIndex(newSlider);
  };
  const nextSlide = () => {
    const isLastslide = currentIndex === sliders.length - 1;
    const newSlider = isLastslide ? 0 : currentIndex + 1;
    setCurrentIndex(newSlider);
  };
  const moveToSlider = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div>
      <div className="relative max-w-[1920px] w-full py-4 bg-slate-0 px-4 h-[500px] group">
        <div
          className="w-full h-full bg-center rounded-2xl bg-cover duration-500"
          style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
        ></div>
        <div className="hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50] rounded-full p-2 left-5 bg-orange-700 text-white cursor-pointer text-2xl">
          <BsChevronCompactLeft onClick={prevSlide} size={30} className="p-0" />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50] rounded-full p-2 right-5 bg-orange-700 text-white cursor-pointer text-2xl">
          <BsChevronCompactRight
            onClick={nextSlide}
            size={30}
            className="p-0"
          />
        </div>
        <div className="flex justify-center top-4 py-2 ">
          {sliders.map((sliderItems, sliderIndex) => (
            <div className="text-2xl cursor-pointer" 
            onClick={()=>moveToSlider(sliderIndex)}
            key={sliderIndex}
            >
                <GoDotFill size={25} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Featured;
