
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CountdownTimer from '../components/CountdownTimer';
import QuickDetails from '../components/QuickDetails';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <CountdownTimer />
      <QuickDetails />
      
      {/* Call to Action Section */}
      <div className="py-16 bg-pale-yellow text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-black">
            {/* CUSTOMIZE: Replace with your CTA heading */}
            We hope to see you there!
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              to="/rsvp"
              className="self-center sm:self-auto bg-white border border-black text-black hover:bg-pale-yellow px-5 py-2 sm:px-8 sm:py-3 text-sm sm:text-base rounded-full font-medium transition-colors duration-200 hover:scale-105 transform"
            >
              RSVP Now
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white text-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-serif mb-2 text-black">
              {/* CUSTOMIZE: Replace with couple's names */}
              LinZi & Caymen
            </h3>
            <p className="text-black">
              {/* CUSTOMIZE: Replace with your wedding date and location */}
              September 26, 2026 • Denver Botanic Gardens
            </p>
          </div>
          <div className="border-t border-black pt-6">
            <p className="text-black text-sm">
              {/* CUSTOMIZE: Replace with your footer message */}
              Made with ❤️ by LinZi
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
