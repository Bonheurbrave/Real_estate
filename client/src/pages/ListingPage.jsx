import React, { useEffect, useState } from "react";
import axios from 'axios'
const ListingPage = () => {
  const [estateImage, setEstateImage] = useState("");
  const [formdata, setformdata] =useState({
    estateName:"" ,
    price:"" ,
    description:"",
    isSold:false,
    rent:false,
    hasParkingSpot:false,
    isFurnished:false,
    regularPrice:"" ,
    discount:"",
    // estateImage:estateImage,
    location:"",
    bathrooms:"",
    beds:""

  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setEstateImage(file);
  };

  console.log(estateImage)
  
  const handlechange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const val = type === 'checkbox' ? checked : type === 'file' ? files[0] : value;

    setformdata({
      ...formdata,
      [name]: val,
    });
  };

  const handleSubmit = (e) => {
    console.log(formdata);
    axios.post("http://localhost:4000/post" , {formdata , })
    setformdata({
      price:"" ,
      description:"",
      regularPrice:"" ,
      discount:"",
      image:"",
      location:"",
      bathrooms:"",
      beds:"",
      estateName: '',
      isFurnished: false,
      isSold: false,
      rent: false,
      // estateImage: estateImage,
    });
  };


  return (
    <div className="max-w-md mx-auto">
      <form
        // onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="estateName"
          >
            Estate Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="estateName"
            type="text"
            placeholder="Estate Name"
            value={formdata.estateName}
            onChange={handlechange}
            name="estateName"

          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="text"
            placeholder="Price"
            value={formdata.price}
            onChange={handlechange}
            name="price"

          />
        </div>
        <div className=" flex">

        <div className="mb-4 px-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="beds"
            >
            Bedrooms
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="beds"
            type="number"
            placeholder="beds"
            value={formdata.beds}
             onChange={handlechange}
             name="beds"

            />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="bathrooms"
          >
            Bathrooms
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="bathrooms"
            type="text"
            placeholder="bathrooms"
            value={formdata.bathrooms}
             onChange={handlechange}
             name="bathrooms"

            />
        </div>
            </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Description"
            value={formdata.description}
             onChange={handlechange}
             name="description"

          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="location"
          >
            Location
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="location"
            type="text"
            placeholder="estate location"
            value={formdata.location}
             onChange={handlechange}
             name="location"

          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="regularPrice"
          >
            Regular Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="regularPrice"
            type="text"
            placeholder="Regular Price"
            value={formdata.regularPrice}
             onChange={handlechange}
             name="regularPrice"

          />
        </div>
        
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="discount"
          >
            Discount
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="discount"
            type="text"
            placeholder="Discount"
            value={formdata.discount}
             onChange={handlechange}
             name="discount"

          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Image
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            type="file"
            onChange={handleImageChange}
            name="estateImages"

          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Options:
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox text-indigo-600 h-5 w-5"
              checked={formdata.isSold}
              onChange={handlechange}
              name="isSold"

            />
            <span className="ml-2">Sold</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="checkbox"
              className="form-checkbox text-indigo-600 h-5 w-5"
              checked={formdata.isRent}
               onChange={handlechange}
               name="isRent"

            />
            <span className="ml-2">Rent</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="checkbox"
              className="form-checkbox text-indigo-600 h-5 w-5"
              checked={formdata.hasParkingSpot}
               onChange={handlechange}
               name="hasParkingSpot"

            />
            <span className="ml-2">Parking Spot</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="checkbox"
              className="form-checkbox text-indigo-600 h-5 w-5"
              checked={formdata.isFurnished}
               onChange={handlechange}
               name="isFurnished"

            />
            <span className="ml-2">Furnished</span>
          </label>
        </div>
        <div className="flex items-center justify-between">
        </div>
      </form>
          <button
            className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handleSubmit}
            >
            Submit
          </button>
            
          
    </div>
  );
};

export default ListingPage;
