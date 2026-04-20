import React from 'react';
import Navbar from '../components/Navbar';
import { MapPin, Clock, Car, UtensilsCrossed, Music, Calendar, Heart, Wine } from 'lucide-react';

const Details = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-6xl font-serif text-black mb-6">
            Wedding Details
          </h1>
          <p className="text-base md:text-xl text-black max-w-2xl mx-auto leading-relaxed">
            {/* CUSTOMIZE: Replace with your wedding details introduction */}
            We're excited to share all the details you need for our special day. Please read through the information below to help plan your attendance.
          </p>
        </div>
      </div>

      {/* Schedule Section - Improved layout */}
      <div className="py-16 bg-pale-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-black mb-4">
              Wedding Day Schedule
            </h2>
            <p className="text-lg text-black max-w-2xl mx-auto">
              {/* CUSTOMIZE: Add a brief intro about your schedule */}
              Here is a rough time frame of what to expect on the day of our wedding.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative border-l-4 border-white ml-5 pl-8 space-y-8">
              {[
                {
                  icon: Heart,
                  title: 'Ceremony',
                  time: '2:00 PM – 3:00 PM',
                  description: 'We will be getting married at the "Romantic Gardens" at the Denver Botanic Gardens. The ceremony will take 30 minutes and will have time for photos after.',
                  headerClass: 'bg-violet-100',
                },
                {
                  icon: Wine,
                  title: 'Cocktail Hour',
                  time: '4:00 PM – 5:00 PM',
                  description: 'Head over to ESP Hifi Denver to enjoy some drinks and appetizers!',
                  headerClass: 'bg-amber-100',
                },
                {
                  icon: UtensilsCrossed,
                  title: 'Dinner',
                  time: '5:00 PM – 6:00 PM',
                  description: 'Enjoy some wood fired pizza and salad!',
                  headerClass: 'bg-emerald-100',
                },
                {
                  icon: Music,
                  title: 'Reception',
                  time: '6:00 PM – 8:00 PM',
                  description: 'Enjoy some dancing, speeches, food and drink!',
                  headerClass: 'bg-sky-100',
                },
              ].map((item, index) => (
                <div key={index} className="relative">
                  {/* Dot on the timeline */}
                  <div className="absolute -left-[2.85rem] top-5 w-5 h-5 bg-white rounded-full border-4 border-pale-yellow shadow-md" />

                  <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-pale-yellow hover:shadow-lg transition-shadow duration-300">
                    {/* Card header */}
                    <div className={`${'headerClass' in item ? item.headerClass : 'bg-pale-yellow'} px-5 py-4 flex items-center gap-3`}>
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                        <item.icon className="w-5 h-5 text-black" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-black text-lg leading-tight">{item.title}</h3>
                        <p className="text-sm text-black/70 font-medium mt-0.5">{item.time}</p>
                      </div>
                    </div>
                    {/* Card body */}
                    <div className="px-5 py-4">
                      <p className="text-black leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Venue Information */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-black mb-4">
              Venue Information
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Ceremony Venue */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-pale-yellow">
              <div className="bg-pale-yellow px-5 py-2">
                <span className="text-sm font-semibold text-black uppercase tracking-wider">Ceremony</span>
              </div>
              <div className="h-56 overflow-hidden">
                <img
                  src="https://www.botanicgardens.org/sites/default/files/image/2020-05/romanticgarden1.jpg"
                  alt="Romantic Gardens at Denver Botanic Gardens"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Denver Botanic Gardens</h3>
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-black">Address</p>
                    <p className="text-black">1007 York St, Denver, CO 80206</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 mb-6">
                  <Car className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-black">Parking</p>
                    <p className="text-black">Plenty of garage parking across the street from the venue!</p>
                  </div>
                </div>
                <a
                  href="https://maps.app.goo.gl/2S2Rw29hJra9mt1n8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-black font-medium hover:opacity-70 transition-opacity"
                >
                  View on Map
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Reception Venue */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-pale-yellow">
              <div className="bg-pale-yellow px-5 py-2">
                <span className="text-sm font-semibold text-black uppercase tracking-wider">Reception</span>
              </div>
              <div className="h-56 overflow-hidden">
                <img
                  src="https://www.tracksandtales.co/cdn/shop/articles/Copy_of_Phill_Argent_-_10.9.1.HG_4_fb808094-bdec-4609-8872-dc2bd408bb59.png?v=1773828648&width=1100"
                  alt="ESP Hifi Denver"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-semibold text-black mb-4">ESP Hifi Denver</h3>
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-black">Address</p>
                    <p className="text-black">748 Santa Fe Dr, Denver, CO 80204</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 mb-6">
                  <Car className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-black">Parking</p>
                    <p className="text-black">ESP Hifi is on Santa Fe and offers street parking. There is limited parking in a lot close to the venue reserved for handicap or family who need it.</p>
                  </div>
                </div>
                <a
                  href="https://maps.app.goo.gl/QvVygQQBLRDepjDL8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-black font-medium hover:opacity-70 transition-opacity"
                >
                  View on Map
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Travel Information */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-black mb-4">
              Travel Information
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-4 sm:p-8 border border-pale-yellow">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-black mb-3">Transportation</h3>
                <p className="text-black">
                  There is no shuttle service that will be provided by us, but we recommend getting an Uber to our venue if you are drinking. We want everyone to have a great time!
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-black mb-3">Parking at Denver Botanic Gardens</h3>
                <p className="text-black">
                  Denver Botanic Gardens has plenty of garage parking for free.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-black mb-3">Parking at ESP Hifi</h3>
                <p className="text-black">
                  Parking at ESP Hifi is all street parking with the exception of a small lot close to the venue reserved for those who need it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="py-16 bg-pale-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-black mb-4">
              Food and Drink Information
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Dinner Options */}
            <div className="bg-white rounded-xl p-6 text-center border border-pale-yellow shadow-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-pale-yellow rounded-full mb-4">
                <UtensilsCrossed className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Dinner</h3>
              <p className="text-black">
                Dinner will be a wood fired pizza truck — there will be 6 different pizzas to choose from and will have vegetarian options. We will also have roasted vegetables, charcuterie and salad!
              </p>
            </div>

            {/* Drinks */}
            <div className="bg-white rounded-xl p-6 text-center border border-pale-yellow shadow-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-pale-yellow rounded-full mb-4">
                <Wine className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Drinks</h3>
              <p className="text-black">
                We will have an open bar at ESP Hifi for the duration of our reception. Please be responsible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
