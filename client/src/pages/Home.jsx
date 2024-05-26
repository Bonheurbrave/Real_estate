import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import house1 from "../images/house1.png";
import house2 from "../images/house2.png";
import house3 from "../images/house3.png";
import { Link } from "react-router-dom";
import ListingItem from "./ListingItem";
import AllListingspage from "./AllListingspage";
const Home = ({interval=3000}) => {
  const ref = useRef();
  // ref.style.opacity = "1";
  const properties = [
    
    {
      id: 1,
      title: "Luxury Apartment in Downtown",
      description: "Modern apartment with stunning views",
      price: "$1,500,000",
      image: "https://placeimg.com/640/480/arch",
    },
    {
      id: 2,
      title: "Spacious Family House",
      description: "Perfect for a growing family",
      price: "$850,000",
      image: "https://placeimg.com/640/480/house",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images =  [house1 , house2 , house3]

  useEffect(() => {

    const intervalId = setInterval(() => {

      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(intervalId); // Clear the interval on component unmount
  }, [images, interval]);

  return (
    <>
    <div className=" py-4">
      <h1
        className="text-4xl text-slate-500 font-bold mx-auto w-5/6 mt-8 mb-4 px-0"
        style={{ fontFamily: "bahnschrift" }}
        >
        Unlock the Door to Your Ideal Home
      </h1>
        
        <p className=" px-28 py-3 w-3/4">
          Step into a realm of unparalleled real estate excellence with Bobo
          Estate - where dreams find their address. your premier destination for
          finding the perfect home sweet home Experience the epitome of luxury
          living us, where each property is a masterpiece waiting to be yours
        </p>
          <Link className=" px-28 font-bold">Let's start now...</Link>

        </div>
      <div>
      </div>
      <div className="w-5/6 mx-auto">
        <div>
          <div className="relative w-full h-96 ">
            <img
              className="object-cover w-full h-full transition-transform duration-500 ease-in-out"
              src={images[currentImageIndex]}
              alt={`Slide ${currentImageIndex}`}
              // className="transition-transform duration-500 ease-in-out"
            />

          </div>
        </div>
      </div>
      <AllListingspage />
    </>
  );
};

export default Home;
