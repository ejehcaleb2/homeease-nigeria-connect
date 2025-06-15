
import React from 'react';
import { Shield, CheckCircle, Users, Clock } from 'lucide-react';

const TrustIndicators = () => {
  const indicators = [
    {
      icon: Shield,
      title: 'Verified Properties',
      description: 'Every listing is physically inspected by our trained agents',
      color: 'text-green-600'
    },
    {
      icon: CheckCircle,
      title: 'Fair Pricing',
      description: 'AI-powered pricing ensures you pay market rates, not inflated fees',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      title: 'Trusted Landlords',
      description: 'Background-checked property owners with verified documents',
      color: 'text-purple-600'
    },
    {
      icon: Clock,
      title: 'Quick Processing',
      description: 'Average move-in time reduced from 6 weeks to 2 weeks',
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Why Tenants Trust HomeEase
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've built Nigeria's most transparent housing platform with safeguards 
            at every step of your rental journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {indicators.map((indicator, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className={`h-12 w-12 ${indicator.color} mb-4 mx-auto flex items-center justify-center bg-gray-50 rounded-lg`}>
                <indicator.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center text-gray-900">
                {indicator.title}
              </h3>
              <p className="text-gray-600 text-center text-sm">
                {indicator.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">₦2.4B+</div>
              <div className="text-gray-600">Saved in agent fees</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">15,000+</div>
              <div className="text-gray-600">Verified properties</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600">Customer satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustIndicators;
