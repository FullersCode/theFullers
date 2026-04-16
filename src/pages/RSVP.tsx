import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';

const RSVP = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <div className="pt-24 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-6xl font-serif text-black mb-4">
            RSVP
          </h1>
          <p className="text-xl text-black max-w-2xl mx-auto leading-relaxed">
            We can't wait to celebrate with you! Please fill out the form below.
          </p>
        </div>
      </div>

      {/* Tally Embed */}
      <div className="pb-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <iframe
            data-tally-src="https://tally.so/embed/A7xMDl?transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="500"
            frameBorder="0"
            title="RSVP"
          />
        </div>
      </div>
    </div>
  );
};

export default RSVP;
