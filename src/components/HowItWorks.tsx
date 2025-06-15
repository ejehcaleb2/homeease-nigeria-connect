
import React from 'react';
import { Search, Shield, Key, Heart } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: 'Search & Filter',
      description: 'Use our AI-powered search to find properties that match your exact needs and budget',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Shield,
      title: 'Verify & Visit',
      description: 'Our agents verify every property detail and arrange safe, guided viewings',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Key,
      title: 'Apply & Pay',
      description: 'Submit your application digitally and pay only 10% agent fee through our secure platform',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Heart,
      title: 'Move In',
      description: 'Get your keys and move into your new home with full support from our team',
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            How HomeEase Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Finding your perfect home has never been easier. Our streamlined process 
            saves you time, money, and stress.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className={`h-16 w-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <step.icon className="h-8 w-8" />
                </div>
                <div className="absolute -top-2 -left-2 bg-gray-900 text-white text-sm font-bold h-8 w-8 rounded-full flex items-center justify-center">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gray-300"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Find Your Dream Home?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Join thousands of Nigerians who have found better homes at fair prices
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Searching
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              List Property
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
