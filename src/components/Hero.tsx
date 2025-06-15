
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search, Shield, Users } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-green-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Pay <span className="text-green-600">10%</span> Agent Fees,
              <br />
              Not <span className="text-red-500 line-through">30%</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              HomeEase eliminates housing exploitation in Nigeria. Find verified properties, 
              connect with trusted landlords, and pay fair fees backed by our transparency guarantee.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                <Search className="mr-2 h-5 w-5" />
                Find Your Home
              </Button>
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                List Your Property
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-green-600">10%</div>
                <div className="text-sm text-gray-600">Max Agent Fee</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600">Verified Properties</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-green-600 mr-2" />
                <span className="font-semibold text-gray-900">Verified Property</span>
              </div>
              
              <div className="h-48 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="h-16 w-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-sm text-gray-600">Professional Property Photo</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">3 Bedroom Flat</span>
                  <span className="font-bold text-gray-900">₦1,200,000/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">HomeEase Fee (10%)</span>
                  <span className="font-bold text-green-600">₦120,000</span>
                </div>
                <div className="border-t pt-2 flex justify-between">
                  <span className="font-semibold">Total</span>
                  <span className="font-bold text-lg">₦1,320,000</span>
                </div>
                <div className="text-xs text-gray-500 text-center">
                  Traditional agents charge ₦360,000+ for the same property
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
