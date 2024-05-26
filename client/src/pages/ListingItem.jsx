import React from "react";
import { FaBed  , FaBath , FaParking , } from "react-icons/fa";
import { IoLogoPlaystation } from "react-icons/io5";

import house1 from "../images/house1.png";
import { MdLocationPin } from "react-icons/md";
function ListingItem() {
  return (
    <>
      <div className="">
        <img
          src={house1}
          alt="no internet connection"
          className=" w-screen h-96"
        />

        <div className=" w-2/3 mx-auto">
          <div>
            <h1 className=" font-bold text-3xl font-sans">
              Cottage in the heart of Willow <span> - $ {530}</span> / month
            </h1>
          </div>
          <div>
            <h1 className=" flex">
              <MdLocationPin size={20} className=" text-green-600" />
              {124} Maple Lane , Willbrook , FAKE123
            </h1>
            <div className=" flex ">
              <div className=" pr-10">
                <button className=" bg-red-800 text-white rounded-md px-10 capitalize py-1 font-semibold">
                  for rent
                </button>
              </div>
              <button className=" bg-green-800 text-white rounded-md px-10 capitalize py-1 font-semibold">
                ${20} discount
              </button>
            </div>
          </div>
          <div>
            <h1>
              <span className=" font-extrabold">Description -</span>{" "}
              <span>
                Welcome to this luxurious mansion exuding elegance and comfort
                at every turn. This spacious residence boasts four beautifully
                appointed bedrooms and three modern bathrooms, offering ample
                space for relaxation and rejuvenation. The interior is
                thoughtfully furnished with tasteful decor, blending
                contemporary style with timeless sophistication
              </span>
            </h1>
          </div>
          <div className=" flex w-3/5 justify-between pt-4">
                <span className=" flex text-green-700">
                <FaBed size={27}/>
                <span className=" pt-1 font-bold px-1">3 beds</span>
                </span>
                <span className=" flex  text-green-700">
                <FaBath size={27}/>
                <span className=" pt-1 font-bold px-1">4 baths</span>
                </span>
                <span className=" text-green-700 flex ">
                <FaParking size={27}/>
                <span className=" pt-1 font-bold px-1">Parking spot</span>
                </span>
                <span className=" text-green-700 flex">
                <IoLogoPlaystation size={27}/>
                <span className=" pt-1 font-bold px-1">Furnished</span>
                </span>
            
          </div>
          <div className=" py-4">
            <button className=" py-2 px-10 rounded-sm bg-black font-semibold text-white"> Quest now </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListingItem;
