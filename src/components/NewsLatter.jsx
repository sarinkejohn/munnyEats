import React from "react";

function NewsLatter() {
  return (
    <div className="max-w-[1920px] m-auto px-4 bg-[#24262b] text-white">
      <div className="mx-auto grid lg:grid-cols-3 ">
        <div className="lg:col-span-2 my-4">
          <h1>Need advice to improve your apetite and maintain your weight?</h1>
          <p>Sign Up to join our newsletter to receive diate tips</p>
        </div>
        <div className="my-4">
          <div className=" flex flex-col sm:flex-row justify-between items-center w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-md p-3 text-black w-full"
            />
            <button className="rounded-md text-white bg-[#00df9a] font-medium w-[200px] ml-4 my-6 px-6 py-3">
              Notify Me
            </button>
          </div>
          <p>
            We're concerned about the security of your data, Read 
            {""}
            <span className="text-[#00df9a] mx-2 cursor-pointer">Privacy Policy</span>
          </p>
        </div>
        <hr className="bg-gray-700 my-8 border-1"/>
      </div>
    </div>
  );
}

export default NewsLatter;
