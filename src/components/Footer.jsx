import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaTiktok
} from "react-icons/fa";
// copy right reserveved done by Sarinke john Sarijore  whatsup me +255789204208

function Footer() {
  return (
    <div className="max-w-[1920px] m-auto px-4 py-2 bg-[#24262b]">
      <div className="py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
          <h2 className="text-3xl p-4 w-full">
            Munny<span className="font-bold text-orange-700">+Eats</span>
          </h2>
          <p>
            “Food for us comes from our relatives, whether they have wings or
            fins or roots. That is how we consider food. Food has a culture. It
            has a history. It has a story. It has relationships.” – Winona
            LaDuke.
          </p>{" "}
          <br />
          <p>
            “Food brings people together on many different levels. It’s
            nourishment of the soul and body; it’s truly love.” – Giada De
            Laurentiis
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            <FaFacebook size={30} />
            <FaInstagram size={30} />
            <FaTiktok size={30} />
            <FaTwitter size={30} />
            <FaYoutube size={30} />
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6 ">
        <div>
              <h6 className="font-medium text-[#969696]">Our Locations</h6>
              <ul className="text-[#00df9a]">
                <li className="py-2 text-sm">Kinondoni</li>
                <li className="py-2 text-sm">Mikocheni</li>
                <li className="py-2 text-sm">Kirakoo</li>
                <li className="py-2 text-sm">Mlinani City</li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium text-[#969696]">Our Locations</h6>
              <ul className="text-[#00df9a]">
                <li className="py-2 text-sm">Kinondoni</li>
                <li className="py-2 text-sm">Mikocheni</li>
                <li className="py-2 text-sm">Kirakoo</li>
                <li className="py-2 text-sm">Mlinani City</li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium text-[#969696]">Our Locations</h6>
              <ul className="text-[#00df9a]">
                <li className="py-2 text-sm">Kinondoni</li>
                <li className="py-2 text-sm">Mikocheni</li>
                <li className="py-2 text-sm">Kirakoo</li>
                <li className="py-2 text-sm">Mlinani City</li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium text-[#969696]">Our Locations</h6>
              <ul className="text-[#00df9a]">
                <li className="py-2 text-sm">Kinondoni</li>
                <li className="py-2 text-sm">Mikocheni</li>
                <li className="py-2 text-sm">Kirakoo</li>
                <li className="py-2 text-sm">Mlinani City</li>
              </ul>
            </div>
          </div>
          <p> &copy; right reserved done by Sarinke john  whatsup me +255789204208</p>
      </div>
      <p className="text-center -mt-20">&copy; right reserved done by Sarinke john  whatsup me +255789204208</p>
    </div>
  );
}

export default Footer;
