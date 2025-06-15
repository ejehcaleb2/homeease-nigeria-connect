
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-green-400">HomeEase</h3>
            <p className="text-gray-300 mb-4">
              Nigeria's first anti-exploitation housing platform. Fair fees, verified properties, trusted process.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">For Tenants</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Search Properties</a></li>
              <li><a href="#" className="hover:text-white">How It Works</a></li>
              <li><a href="#" className="hover:text-white">Fee Calculator</a></li>
              <li><a href="#" className="hover:text-white">Tenant Guide</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">For Landlords</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">List Property</a></li>
              <li><a href="#" className="hover:text-white">Tenant Screening</a></li>
              <li><a href="#" className="hover:text-white">Property Management</a></li>
              <li><a href="#" className="hover:text-white">Landlord Resources</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+234 800 HOME EASE</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>hello@homeease.ng</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Lagos, Abuja, Benin City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 HomeEase. All rights reserved. Licensed by Lagos State Government.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Lagos Tenancy Law</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
