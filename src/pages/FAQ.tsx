import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Shirt, MapPin, Car, Camera, Phone, Users } from 'lucide-react';

const faqs = [
  {
    id: 'dress-code',
    icon: Shirt,
    question: 'What is the dress code?',
    answer: (
      <>
        <p className="mb-3">The dress code is <strong>Formal / Semi-Formal</strong>.</p>
        <p>We don't have specific wedding colors — we'll be at Denver Botanic Gardens in late September, so dress in something nice, comfortable, and get a fit off!</p>
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
        <p><strong>Reception:</strong> ESP Hifi Denver — 748 Santa Fe Dr, Denver, CO 80204</p>
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
    id: 'guests',
    icon: Users,
    question: 'Can I bring guests?',
    answer: (
      <p>
        At this time, we are only allowing invited members and no children please.
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
          <h1 className="text-3xl md:text-6xl font-serif text-black mb-6">
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
              <div className="flex items-center gap-3 bg-pale-yellow px-4 sm:px-6 py-4">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-white rounded-full flex-shrink-0">
                  <faq.icon className="w-5 h-5 text-black" />
                </div>
                <h2 className="text-lg font-semibold text-black">{faq.question}</h2>
              </div>
              <div className="px-4 sm:px-6 py-5 text-black leading-relaxed">
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
