import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Shirt, MapPin, Car, Camera, Phone, HelpCircle } from 'lucide-react';

const faqs = [
  {
    id: 'dress-code',
    icon: Shirt,
    question: 'What is the dress code?',
    answer: (
      <>
        <p className="mb-3">The dress code is <strong>Formal</strong> (tie optional).</p>
        <p className="mb-3">We encourage guests to embrace the elegance of the occasion. Here are some guidelines:</p>
        <ul className="list-disc list-inside space-y-1 text-black">
          <li><strong>Women:</strong> Floor-length gowns, midi dresses, or elegant cocktail attire</li>
          <li><strong>Men:</strong> Suit or tuxedo — ties are encouraged but optional</li>
          <li>Please avoid wearing white, ivory, or cream out of respect for the bride</li>
          <li>The ceremony is outdoors at Denver Botanic Gardens — keep comfortable footwear in mind!</li>
        </ul>
      </>
    ),
  },
  {
    id: 'venue',
    icon: MapPin,
    question: 'Where are the ceremony and reception?',
    answer: (
      <>
        <p className="mb-2"><strong>Ceremony:</strong> Denver Botanic Gardens — 1007 York St, Denver, CO 80206</p>
        <p><strong>Reception:</strong> ESP Hifi Denver</p>
      </>
    ),
  },
  {
    id: 'parking',
    icon: Car,
    question: 'Is there parking available?',
    answer: (
      <p>
        Parking is available near Denver Botanic Gardens. We recommend arriving early to allow time to find a spot. Rideshare (Uber/Lyft) is also a great option for the evening!
      </p>
    ),
  },
  {
    id: 'photos',
    icon: Camera,
    question: 'Can I take photos during the ceremony?',
    answer: (
      <p>
        We ask that guests put their phones away during the ceremony so everyone can be fully present. Our photographer will capture all the special moments. Feel free to take as many photos as you'd like during cocktail hour and the reception!
      </p>
    ),
  },
  {
    id: 'contact',
    icon: Phone,
    question: 'Who can I contact with questions?',
    answer: (
      <p>
        If you have any questions leading up to the big day, please reach out to us directly. We're happy to help!
      </p>
    ),
  },
];

const FAQ = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
      }
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-black mb-6">
            FAQs
          </h1>
          <p className="text-xl text-black max-w-2xl mx-auto leading-relaxed">
            Everything you need to know before the big day. Can't find your answer? Reach out to us directly!
          </p>
        </div>
      </div>

      {/* FAQ Items */}
      <div className="py-8 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              id={faq.id}
              className="bg-white border border-pale-yellow rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden scroll-mt-24"
            >
              <div className="flex items-center gap-4 bg-pale-yellow px-6 py-4">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-white rounded-full flex-shrink-0">
                  <faq.icon className="w-5 h-5 text-black" />
                </div>
                <h2 className="text-lg font-semibold text-black">{faq.question}</h2>
              </div>
              <div className="px-6 py-5 text-black leading-relaxed">
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
