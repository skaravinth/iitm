import React from 'react';
import { Check, X } from 'lucide-react';

const SubscriptionVsFree = () => {
  const plans = {
    free: {
      name: "Free Plan",
      price: 0,
      tagline: "Great for getting started",
      features: [
        { name: "Basic features", included: true },
        { name: "1 project", included: true },
        { name: "2GB storage", included: true },
        { name: "Community support", included: true },
        { name: "Limited exports", included: true },
        { name: "Advanced features", included: false },
        { name: "Team collaboration", included: false },
        { name: "Priority support", included: false }
      ],
      buttonText: "Get Started",
      buttonColor: "bg-gray-600 hover:bg-gray-700"
    },
    subscription: {
      name: "Premium",
      price: 14.99,
      tagline: "Everything you need",
      features: [
        { name: "Basic features", included: true },
        { name: "Unlimited projects", included: true },
        { name: "100GB storage", included: true },
        { name: "Community support", included: true },
        { name: "Unlimited exports", included: true },
        { name: "Advanced features", included: true },
        { name: "Team collaboration", included: true },
        { name: "Priority support", included: true }
      ],
      buttonText: "Subscribe Now",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      highlight: true
    }
  };

  return (
    <div className=" max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-8">Choose Your Plan</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Free Plan */}
        <div className="border rounded-lg shadow-sm p-6 flex flex-col h-full">
          <div className="mb-6">
            <h3 className="text-xl font-bold">{plans.free.name}</h3>
            <p className="text-gray-500 mt-1">{plans.free.tagline}</p>
            <div className="mt-4">
              <span className="text-3xl font-bold">
                ${plans.free.price}
              </span>
              <span className="text-gray-500">
                /month
              </span>
            </div>
          </div>
          
          <div className="flex-grow">
            <ul className="space-y-3">
              {plans.free.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-gray-600">
                    {feature.included ? <Check size={20} /> : <X size={20} className="text-gray-400" />}
                  </div>
                  <span className={`ml-3 ${!feature.included ? 'text-gray-400' : ''}`}>{feature.name}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <button className={`mt-6 w-full py-3 px-4 rounded-md text-white font-medium ${plans.free.buttonColor}`}>
            {plans.free.buttonText}
          </button>
        </div>
        
        {/* Subscription Plan */}
        <div className={`relative border rounded-lg shadow-sm p-6 flex flex-col h-full ${plans.subscription.highlight ? 'border-blue-200 ring-1 ring-blue-200' : ''}`}>
          {plans.subscription.highlight && (
            <div className="absolute -top-3 left-0 right-0 flex justify-center">
              <span className="bg-blue-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                Recommended
              </span>
            </div>
          )}
          
          <div className="mb-6">
            <h3 className="text-xl font-bold">{plans.subscription.name}</h3>
            <p className="text-gray-500 mt-1">{plans.subscription.tagline}</p>
            <div className="mt-4">
              <span className="text-3xl font-bold">
                ${plans.subscription.price}
              </span>
              <span className="text-gray-500">
                /month
              </span>
            </div>
          </div>
          
          <div className="flex-grow">
            <ul className="space-y-3">
              {plans.subscription.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-blue-600">
                    {feature.included ? <Check size={20} /> : <X size={20} className="text-gray-400" />}
                  </div>
                  <span className={`ml-3 ${!feature.included ? 'text-gray-400' : ''}`}>{feature.name}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <button className={`mt-6 w-full py-3 px-4 rounded-md text-white font-medium ${plans.subscription.buttonColor}`}>
            {plans.subscription.buttonText}
          </button>
        </div>
      </div>
      
    
    </div>
  );
};

export default SubscriptionVsFree;