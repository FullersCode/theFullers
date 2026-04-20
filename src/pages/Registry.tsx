import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Heart, ExternalLink, PawPrint, GraduationCap, FlaskConical } from 'lucide-react';

const VENMO_URL = 'https://venmo.com/u/LinZi-Fuller';
const QR_URL = `https://api.qrserver.com/v1/create-qr-code/?size=320x320&data=${encodeURIComponent(VENMO_URL)}`;

const Registry = () => {
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

      {/* Intro */}
      <div className="pt-24 pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-10 h-10 mx-auto mb-6 fill-sage-green text-sage-green" />
          <h1 className="text-4xl md:text-6xl font-serif text-black mb-6">
            Registry
          </h1>
          <p className="text-lg md:text-xl text-black leading-relaxed mb-6">
            We are not asking for presents or gifts for our wedding. We will be going to China and South Korea for our honeymoon, so any money will be used to fund our trip!
          </p>
          <p className="text-lg md:text-xl text-black leading-relaxed">
            If you would like to make a donation in our name instead, that would also be appreciated. Things we are passionate about:
          </p>
        </div>
      </div>

      {/* Causes */}
      <div className="pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-white border border-pale-yellow rounded-xl p-6 flex flex-col items-center text-center shadow-sm">
              <PawPrint className="w-8 h-8 text-sage-green mb-3" />
              <h3 className="font-semibold text-black">Wildlife Conservation</h3>
            </div>
            <div className="bg-white border border-pale-yellow rounded-xl p-6 flex flex-col items-center text-center shadow-sm">
              <GraduationCap className="w-8 h-8 text-sage-green mb-3" />
              <h3 className="font-semibold text-black">Education</h3>
            </div>
            <div className="bg-white border border-pale-yellow rounded-xl p-6 flex flex-col items-center text-center shadow-sm">
              <FlaskConical className="w-8 h-8 text-sage-green mb-3" />
              <h3 className="font-semibold text-black">STEM for Women</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Venmo QR */}
      <div className="pb-20">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-pale-yellow rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-serif text-black mb-3">
              Contribute via Venmo
            </h2>
            <p className="text-black mb-6">
              Scan the QR code or tap the button below.
            </p>
            <div className="flex justify-center mb-6">
              <img
                src={QR_URL}
                alt="Venmo QR code for LinZi-Fuller"
                width={240}
                height={240}
                className="rounded-xl border border-pale-yellow"
              />
            </div>
            <a
              href={VENMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-sage-green hover:bg-white hover:text-black border border-sage-green text-white px-6 py-3 rounded-full font-medium transition-colors"
            >
              Open in Venmo
              <ExternalLink className="w-4 h-4" />
            </a>
            <p className="mt-4 text-sm text-black/70">@LinZi-Fuller</p>
          </div>
        </div>
      </div>

      {/* Personalized Message Form */}
      <div className="pb-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-serif text-black mb-3">
              Leave us a message
            </h2>
            <p className="text-black">
              We'd love to hear from you — share a note, well-wish, or memory below.
            </p>
          </div>
          <iframe
            data-tally-src="https://tally.so/embed/68QzWB?transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="500"
            frameBorder="0"
            title="Leave a message"
          />
        </div>
      </div>
    </div>
  );
};

export default Registry;
