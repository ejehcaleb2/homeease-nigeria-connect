
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MapPin, Home, DollarSign } from 'lucide-react';

const SearchSection = () => {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [budget, setBudget] = useState('');

  const handleSearch = () => {
    console.log('Searching with:', { location, propertyType, budget });
    // TODO: Implement search functionality
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Find Your Perfect Home in Nigeria
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Search thousands of verified properties in Lagos, Abuja, and Benin City. 
            No hidden fees, no exploitation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Location (e.g., Yaba, Lagos)"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="relative">
                <Home className="absolute left-3 top-3 h-5 w-5 text-gray-400 z-10" />
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger className="pl-10">
                    <SelectValue placeholder="Property Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-bedroom">1 Bedroom</SelectItem>
                    <SelectItem value="2-bedroom">2 Bedroom</SelectItem>
                    <SelectItem value="3-bedroom">3 Bedroom</SelectItem>
                    <SelectItem value="4-bedroom">4 Bedroom</SelectItem>
                    <SelectItem value="duplex">Duplex</SelectItem>
                    <SelectItem value="bungalow">Bungalow</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="relative">
                <DollarSign className="absolute left-3 top-3 h-5 w-5 text-gray-400 z-10" />
                <Select value={budget} onValueChange={setBudget}>
                  <SelectTrigger className="pl-10">
                    <SelectValue placeholder="Budget Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-500k">Under ₦500k</SelectItem>
                    <SelectItem value="500k-1m">₦500k - ₦1M</SelectItem>
                    <SelectItem value="1m-2m">₦1M - ₦2M</SelectItem>
                    <SelectItem value="2m-5m">₦2M - ₦5M</SelectItem>
                    <SelectItem value="above-5m">Above ₦5M</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={handleSearch}
                className="bg-green-600 hover:bg-green-700 text-white"
                size="lg"
              >
                <Search className="mr-2 h-5 w-5" />
                Search
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-600">Popular searches:</span>
              {['2 Bedroom Lagos', 'Duplex Abuja', '3 Bedroom Yaba', 'Flat Ikeja'].map((term) => (
                <button
                  key={term}
                  className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                  onClick={() => setLocation(term)}
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
