
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-white pt-20 md:pt-24 pb-12 md:pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Image Box */}
        <div className="rounded-2xl overflow-hidden shadow-lg aspect-[16/10] md:aspect-[16/9] bg-pale-yellow/20">
          <img
            src="/theFullers/images/JAW08523.jpg"
            alt=""
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Details */}
        <div className="text-center text-black mt-10 md:mt-12 animate-fade-in">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light mb-6 tracking-wide">
            {/* CUSTOMIZE: Replace with couple's names */}
            LinZi <span className="text-sage-green">&</span> Caymen
          </h1>
          <p className="text-base sm:text-xl md:text-2xl font-light mb-8 opacity-80 max-w-3xl mx-auto">
            {/* CUSTOMIZE: Replace with your wedding tagline */}
            To all of our friends and family, we invite you to celebrate with us on our big day!
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8 mb-8 md:mb-12">
            <div className="flex items-center gap-3 text-lg">
              <Calendar className="w-6 h-6 text-sage-green" />
              {/* CUSTOMIZE: Replace with your wedding date */}
              <span>September 26, 2026</span>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <MapPin className="w-6 h-6 text-sage-green" />
              {/* CUSTOMIZE: Replace with your venue name and location */}
              <span>Denver Botanic Gardens</span>
            </div>
          </div>

          <div className="flex justify-center">
            <Link
              to="/rsvp"
              className="bg-white hover:bg-pale-yellow border border-black text-black px-8 py-3 rounded-full font-medium transition-colors duration-200 hover:scale-105 transform"
            >
              RSVP Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
