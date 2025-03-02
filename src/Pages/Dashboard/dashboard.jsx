import React from 'react'

const dashboard = () => {
  return (
    <div>
      <div className="w-full">
        {/* Paw icon and header */}
        <div className="flex items-start mb-2">
          <div className="mr-2">
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M35,60 C25,50 15,55 10,65 C5,75 10,90 25,90 C35,90 40,80 35,60Z" fill="#FFDE59" />
              <path d="M65,60 C75,50 85,55 90,65 C95,75 90,90 75,90 C65,90 60,80 65,60Z" fill="#FFDE59" />
              <path d="M35,40 C35,25 25,20 15,25 C5,30 0,45 10,55 C20,65 35,55 35,40Z" fill="#FFDE59" />
              <path d="M65,40 C65,25 75,20 85,25 C95,30 100,45 90,55 C80,65 65,55 65,40Z" fill="#FFDE59" />
              <path d="M50,70 C35,70 30,85 35,95 C40,105 60,105 65,95 C70,85 65,70 50,70Z" fill="#FFDE59" />
            </svg>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">YOUR PET IS PART</h1>
            <h2 className="text-3xl font-bold text-yellow-400">OF OUR FAMILY</h2>
          </div>
        </div>
        
        {/* Description text */}
        <p className="text-gray-600 my-6">
          Lorem Ipsum is simply dummy text of the printing and types 
          industry. Lorem Ipsum has been the industry's standard 
          dummy text ever since the 1500s.
        </p>
        
        {/* Buttons */}
        <div className="flex space-x-4 mt-4">
          <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-300">
            Book a Schedule
          </button>
          <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-100 transition duration-300">
            Learn more
          </button>
        </div>
      </div>
    
    </div>
  )
}

export default dashboard