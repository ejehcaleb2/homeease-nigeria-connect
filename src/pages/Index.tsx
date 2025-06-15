
import React from 'react';
import Hero from '../components/Hero';
import SearchSection from '../components/SearchSection';
import TrustIndicators from '../components/TrustIndicators';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <SearchSection />
      <TrustIndicators />
      <HowItWorks />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
