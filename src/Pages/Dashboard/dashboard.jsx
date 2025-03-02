import React from 'react';
import Dashboardimg from '../../assets/dashboard image.jpeg';
import SubscriptionVsPaid from '../../Components/SubscriptionCaerd';

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        <div className="w-full md:w-3/4 max-w-lg">
          {/* Header section with paw icon */}
          <div className="flex items-start mb-4 mt-20">

            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">YOUR PET IS PART</h1>
              <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 leading-tight mr-10">OF OUR FAMILY</h2>
            </div>
          </div>
          
          {/* Description text */}
          <p className="text-gray-600 my-6 text-start text-lg">
            Lorem Ipsum is simply dummy text of the printing and types 
            industry. Lorem Ipsum has been the industry's standard 
            dummy text ever since the 1500s.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition duration-300 font-medium shadow-md">
              Check Your Dog
            </button>
          </div>
        </div>
        
        {/* Image section */}
        <div className="w-full flex justify-center md:justify-end">
          <div className="overflow-hidden rounded-lg shadow-xl">
            <img 
              src={Dashboardimg} 
              alt="Pet care services" 
              className="h-full w-full object-cover max-w-[500px] max-h-[500px]"
            />
          </div>
        </div>
      </div>

      <div>
        
      </div>
      <div className='mt-10'>
      <SubscriptionVsPaid />
      </div>
    </div>
  );
};

export default Dashboard;