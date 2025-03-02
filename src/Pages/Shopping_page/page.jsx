import React from 'react';
import { Search, Filter, Heart, ShoppingCart, Award, Truck, Shield, CreditCard, Star, ChevronDown } from 'lucide-react';
import Dog1 from "../../assets/Dog1.jpg"
import Dog2 from "../../assets/Dog2.jpg"
import Dog3 from "../../assets/Dog3.webp"
import Dog4 from "../../assets/Dog4.jpg"

const Page = () => {
 
    const bestSellers = [
      { id: 1, name: "Premium Dog Food", category: "Food", price: 99.99, imageUrl: Dog1 },
      { id: 2, name: "Chewy Bone Treats", category: "Snacks", price: 199.99, imageUrl: Dog2 },
      { id: 3, name: "Organic Dog Biscuits", category: "Food", price: 29.99, imageUrl: Dog3 },
      { id: 4, name: "Chicken Jerky Sticks", category: "Treats", price: 79.99, imageUrl: Dog4 },
      { id: 5, name: "Beef Flavored Kibble", category: "Food", price: 59.99, imageUrl: Dog1 },
      { id: 6, name: "Soft Dog Chews", category: "Snacks", price: 49.99, imageUrl: Dog2 },
      { id: 7, name: "Dental Chew Sticks", category: "Health", price: 89.99, imageUrl: Dog3 },
      { id: 8, name: "Freeze-Dried Liver Bites", category: "Treats", price: 39.99, imageUrl: Dog4 }
    
      ];


  return (
    <div className=" min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Pawsome Shop</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Premium products for your furry companions, carefully selected for quality and value</p>
        </div>

        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              <Award className="w-6 h-6 mr-2 text-yellow-500" />
              Best Sellers
            </h2>
            <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
              View all <ChevronDown className="w-4 h-4 ml-1 transform rotate-270" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {bestSellers.map(product => (
              <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 transform ">
                <div className="relative">
                  <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover" />
                  
                </div>
                <div className="p-5">
                  <div className="mb-2">
                    <span className="text-sm font-medium text-blue-600">{product.category}</span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1 line-clamp-1">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-xl text-gray-800">${product.price}</span>
                    <button className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition flex items-center">
                      <ShoppingCart className="w-5 h-5 mr-1" />
                      <span>Add to cart</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Purchase With Us Section */}
        <div className="bg-white rounded-2xl shadow-sm p-10 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-10 text-center">Why Choose Pawsome Shop</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-4 group">
              <div className="bg-blue-50 p-4 rounded-full mb-5 group-hover:bg-blue-100 transition-colors duration-300">
                <Award className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-gray-800">Premium Quality</h3>
              <p className="text-gray-600">All products are rigorously tested and meet our high standards for quality and safety</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4 group">
              <div className="bg-green-50 p-4 rounded-full mb-5 group-hover:bg-green-100 transition-colors duration-300">
                <Truck className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-gray-800">Fast & Free Delivery</h3>
              <p className="text-gray-600">Free shipping on all orders over $50. Same-day delivery available for select locations</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4 group">
              <div className="bg-purple-50 p-4 rounded-full mb-5 group-hover:bg-purple-100 transition-colors duration-300">
                <Shield className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-gray-800">Satisfaction Guarantee</h3>
              <p className="text-gray-600">30-day hassle-free returns. If you or your pet aren't happy, we'll make it right</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4 group">
              <div className="bg-red-50 p-4 rounded-full mb-5 group-hover:bg-red-100 transition-colors duration-300">
                <CreditCard className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-gray-800">Secure Payment</h3>
              <p className="text-gray-600">Multiple secure payment methods. Your data is always protected with encryption</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Page;