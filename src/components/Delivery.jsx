import React from "react";

// copy right reserved done by Sarinke john Sarijore  whatsup me +255789204208
function Delivery() {
  return (
    <div className="w-full py-16 px-4 bg-white">
      <div className="font-bold text-center text-orange-500 text-2xl">
        {" "}
        Quick Delivary App
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[550px] mx-auto my-4"
          src="/images/delivery/munnyeats-delivery.png"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">Get The App</p>
          <h1 className="md:text-4xl sm:text-3xl font-bold py-2 text-2xl">
            Limitless Convinience on-demand{" "}
          </h1>
          <p className="text">
            “Food for us comes from our relatives, whether they have wings or
            fins or roots. That is how we consider food. Food has a culture. It
            has a history. It has a story. It has relationships.” – Winona
            LaDuke ---“Food brings people together on many different levels.
            It’s nourishment of the soul and body; it’s truly love.” – Giada De
            Laurentiis ***“Food can be very transformational, and it can be more
            than just about a dish. That’s what happened to me when I first went
            to France. I fell in love. And if you fall in love, well, then
            everything is easy.” – Alice Waters “Food for us comes from our
            relatives, whether they have wings or fins or roots. That is how we
            consider food. Food has a culture. It has a history. It has a story.
            It has relationships.” – Winona LaDuke ***“Food brings people
            together on many different levels. It’s nourishment of the soul and
            body; it’s truly love.” – Giada De Laurentiis --“Food can be very
            transformational, and it can be more than just about a dish. That’s
            what happened to me when I first went to France. I fell in love. And
            if you fall in love, well, then everything is easy.” – Alice Waters
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
