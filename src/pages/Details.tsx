import React from 'react';
import Navbar from '../components/Navbar';
import { MapPin, Clock, Car, Hotel, UtensilsCrossed, Music, Calendar, Heart, Wine, Sparkles } from 'lucide-react';

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
                  description: 'We will be getting married at the "Romantic Gardens" at the Denver Botanic Gardens. We assume the ceremony will take 30 minutes with 30 minutes to take photos.',
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
                  title: 'Speeches & Dances',
                  time: '6:00 PM – 7:00 PM',
                  description: 'We will share some speeches and a few dances!',
                  headerClass: 'bg-sky-100',
                },
                {
                  icon: Sparkles,
                  title: 'Enjoy the Party!',
                  time: '7:00 PM – 8:00 PM',
                  description: 'Dance and enjoy drinks and food!',
                  headerClass: 'bg-rose-100',
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
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop&crop=center"
                  alt="Denver Botanic Gardens"
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
                  src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=600&fit=crop&crop=center"
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

      {/* Accommodations */}
      <div className="py-16 bg-pale-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-black mb-4">
              Hotel Recommendations
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Hotel 1 - Halcyon Hotel Cherry Creek */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-pale-yellow">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=300&fit=crop&crop=center"
                  alt="Halcyon Hotel Cherry Creek"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 sm:p-6 flex flex-col">
                <div className="flex items-center mb-4">
                  <Hotel className="w-5 h-5 text-[#7BA7BC] mr-2" />
                  <h3 className="text-xl font-semibold text-black">Halcyon Hotel Cherry Creek</h3>
                </div>
                <div className="flex-grow">
                  <p className="text-black text-sm">
                    A stylish boutique hotel in the Cherry Creek neighborhood, just a short walk from Denver Botanic Gardens. One of the closest hotels to the ceremony venue.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mt-4 gap-3">
                  <span className="text-black font-medium text-lg">~$300/night</span>
                  <a
                    href="https://www.halcyonhotelcherrycreek.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm bg-pale-yellow hover:bg-white border border-pale-yellow text-black px-4 py-2 rounded-full transition-colors text-center"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>

            {/* Hotel 2 - Hampton Inn Cherry Creek */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-pale-yellow">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=300&fit=crop&crop=center"
                  alt="Hampton Inn & Suites Denver Cherry Creek"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 sm:p-6 flex flex-col">
                <div className="flex items-center mb-4">
                  <Hotel className="w-5 h-5 text-[#7BA7BC] mr-2" />
                  <h3 className="text-xl font-semibold text-black">Hampton Inn & Suites Cherry Creek</h3>
                </div>
                <div className="flex-grow">
                  <p className="text-black text-sm">
                    A comfortable and affordable option in the Cherry Creek area, close to Denver Botanic Gardens. Great value with all the essentials covered.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mt-4 gap-3">
                  <span className="text-black font-medium text-lg">~$160/night</span>
                  <a
                    href="https://www.hilton.com/en/hotels/denechx-hampton-suites-denver-cherry-creek/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm bg-pale-yellow hover:bg-white border border-pale-yellow text-black px-4 py-2 rounded-full transition-colors text-center"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>

            {/* Hotel 3 - The Brown Palace */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-pale-yellow">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://marriott.cdn.tambourine.com/the-brown-palace-hotel-and-spa/media/intro-68f6825d00edc.jpg"
                  alt="The Brown Palace Hotel Denver"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 sm:p-6 flex flex-col">
                <div className="flex items-center mb-4">
                  <Hotel className="w-5 h-5 text-[#7BA7BC] mr-2" />
                  <h3 className="text-xl font-semibold text-black">The Brown Palace Hotel</h3>
                </div>
                <div className="flex-grow">
                  <p className="text-black text-sm">
                    Denver's iconic historic landmark hotel in downtown, about 15 minutes from the venue. A great option if you want to experience classic Denver charm.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mt-4 gap-3">
                  <span className="text-black font-medium text-lg">~$280/night</span>
                  <a
                    href="https://www.brownpalace.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm bg-pale-yellow hover:bg-white border border-pale-yellow text-black px-4 py-2 rounded-full transition-colors text-center"
                  >
                    Book Now
                  </a>
                </div>
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
                  Parking at ESP Hifi is all street parking, with the exception of a small lot close to the venue reserved for handicap parking or those who are elderly.
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
              Additional Information
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
