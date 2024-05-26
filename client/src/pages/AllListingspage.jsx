import React , {useState} from 'react'
import house1 from '../images/house1.png'
function AllListingspage() {
  const listings= [
        { 
            id: 1,
            image:house1 ,
            beds: 4,
            baths: 3,
            description: 'Beautiful house with stunning views.',
            name: 'Luxury Villa',
            datePosted: '2024-05-22',
            furnished: true,
            parking: true,
            location: '123 Main Street, City, Country'
        } 
        ,
        { 
            id: 2,
            image:house1 ,
            beds: 3,
            baths: 2,
            description: 'Cozy home perfect for a family.',
            name: 'Family Home',
            datePosted: '2024-05-20',
            furnished: false,
            parking: true,
            location: '456 Elm Street, City, Country'
        },
        ,
        { 
            id: 2,
            image:house1 ,
            beds: 3,
            baths: 2,
            description: 'Cozy home perfect for a family.',
            name: 'Family Home',
            datePosted: '2024-05-20',
            furnished: false,
            parking: true,
            location: '456 Elm Street, City, Country'
        },
        ,
        { 
            id: 2,
            image:house1 ,
            beds: 3,
            baths: 2,
            description: 'Cozy home perfect for a family.',
            name: 'Family Home',
            datePosted: '2024-05-20',
            furnished: false,
            parking: true,
            location: '456 Elm Street, City, Country'
        },
        ,
        { 
            id: 2,
            image:house1 ,
            beds: 3,
            baths: 2,
            description: 'Cozy home perfect for a family.',
            name: 'Family Home',
            datePosted: '2024-05-20',
            furnished: false,
            parking: true,
            location: '456 Elm Street, City, Country'
        },
        ,
        { 
            id: 2,
            image:house1 ,
            beds: 3,
            baths: 2,
            description: 'Cozy home perfect for a family.',
            name: 'Family Home',
            datePosted: '2024-05-20',
            furnished: false,
            parking: true,
            location: '456 Elm Street, City, Country'
        },
    ] ;
     
      const [sortOption, setSortOption] = useState('');
      
        const handleSortChange = (option) => {
          setSortOption(option);
        //   handleSort(option);
        };      
    return (
        <>
        <div className=' flex'>

        <div className=' w-1/6 pt-24'>

         <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      {/* <h2 className="text-lg font-semibold mb-4">Sort By:</h2> */}
      <div className="space-y-2">
        <div>
          <h3 className="text-sm font-bold mb-2 ">Sort By:</h3>
          
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-indigo-600 h-4 w-4"
              value="oldest"
              checked={sortOption === 'oldest'}
              onChange={() => handleSortChange('oldest')}
              />
            <span className="ml-2">Oldest</span>
          </label>

          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-indigo-600 h-4 w-4"
              value="parking"
              checked={sortOption === 'parking'}
              onChange={() => handleSortChange('parking')}
              />
            <span className="ml-2">Parking</span>
          </label>

          <label className=" items-center">
            <input
              type="radio"
              className="form-radio text-indigo-600 h-4 w-4"
              value="furnished"
              checked={sortOption === 'furnished'}
              onChange={() => handleSortChange('furnished')}
              />
            <span className="ml-2">Oldest</span>
          </label>
          
        </div>
        <div>
          
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-indigo-600 h-4 w-4"
              value="latest"
              checked={sortOption === 'latest'}
              onChange={() => handleSortChange('latest')}
              />
            <span className="ml-2">Latest</span>
          </label>
          {/* Add similar radio inputs for other sorting options */}
        </div>
      </div>
    </div>
</div>
        
        <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold aft pt-10 pb-5 relative">The best Trending Estate </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {listings.map((listing) => (
                        <div key={listing.id} className="bg-white shadow-md rounded-lg overflow-hidden shadow-slate-500">
                            <img src={listing.image} alt={listing.name} className="w-full h-56 object-cover" />
                            <div className="p-4">
                                <h2 className="text-xl font-bold mb-2">{listing.name}</h2>
                                <p><span className="font-semibold">Beds:</span> {listing.beds}</p>
                                <p><span className="font-semibold">Baths:</span> {listing.baths}</p>
                                <p><span className="font-semibold">Description:</span> {listing.description}</p>
                                <p><span className="font-semibold">Date Posted:</span> {listing.datePosted}</p>
                                <p><span className="font-semibold">Furnished:</span> {listing.furnished ? 'Yes' : 'No'}</p>
                                <p><span className="font-semibold">Parking:</span> {listing.parking ? 'Available' : 'Not Available'}</p>
                                <p><span className="font-semibold">Location:</span> {listing.location}</p>
                                <div className="mt-4">
                                    <button onClick={() => this.handleGetIt(listing.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded">Get It</button>
                                    <button onClick={() => this.handleView(listing.id)} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">View</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

                    </>
)}


  export default AllListingspage