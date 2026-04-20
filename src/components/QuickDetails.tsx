
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const QuickDetails = () => {
  const [showCalendarMenu, setShowCalendarMenu] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (calendarRef.current && !calendarRef.current.contains(e.target as Node)) {
        setShowCalendarMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleAppleCalendar = () => {
    const ics = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'CALSCALE:GREGORIAN',
      'BEGIN:VEVENT',
      'SUMMARY:LinZi & Caymen Wedding',
      'DTSTART;TZID=America/Denver:20260926T140000',
      'DTEND;TZID=America/Denver:20260926T160000',
      'LOCATION:Denver Botanic Gardens\\, 1007 York St\\, Denver\\, CO 80206',
      "DESCRIPTION:Join us to celebrate LinZi & Caymen's wedding!",
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');
    const blob = new Blob([ics], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'linzi-caymen-wedding.ics';
    a.click();
    URL.revokeObjectURL(url);
    setShowCalendarMenu(false);
  };

  const googleCalUrl =
    'https://calendar.google.com/calendar/render?action=TEMPLATE&text=LinZi+%26+Caymen+Wedding&dates=20260926T200000Z/20260926T220000Z&details=Join+us+to+celebrate+LinZi+%26+Caymen%27s+wedding!&location=Denver+Botanic+Gardens%2C+1007+York+St%2C+Denver%2C+CO+80206';

  const details = [
    {
      icon: Calendar,
      title: 'Wedding Date',
      info: 'September 26, 2026',
      type: 'calendar' as const,
    },
    {
      icon: Clock,
      title: 'Ceremony Time',
      info: '2:00 PM',
    },
    {
      icon: MapPin,
      title: 'Ceremony Venue',
      info: 'Denver Botanic Gardens',
      href: 'https://maps.app.goo.gl/2S2Rw29hJra9mt1n8',
    },
    {
      icon: Users,
      title: 'Dress Code',
      info: 'Formal (Tie optional)',
      to: '/faq#dress-code',
    },
    {
      icon: Clock,
      title: 'Reception Time',
      info: '4:00 PM',
    },
    {
      icon: MapPin,
      title: 'Reception Venue',
      info: 'ESP Hifi Denver',
      href: 'https://maps.app.goo.gl/QvVygQQBLRDepjDL8',
    },
  ];

  const baseTile = 'text-center p-6 rounded-xl bg-white border border-pale-yellow transition-all duration-200';
  const clickableTile = baseTile + ' cursor-pointer hover:shadow-lg hover:scale-105';

  const TileInner = ({ detail }: { detail: typeof details[number] }) => (
    <>
      <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-pale-yellow rounded-full mb-4">
        <detail.icon className="w-5 h-5 md:w-6 md:h-6 text-black" />
      </div>
      <h3 className="text-lg font-semibold text-black mb-2">{detail.title}</h3>
      <p className="text-black">{detail.info}</p>
    </>
  );

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-black mb-4">
            Wedding Details
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Here are all of the essential details for our special day. We can't wait to celebrate with you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {details.map((detail, index) => {
            if (detail.type === 'calendar') {
              return (
                <div key={index} className="relative" ref={calendarRef}>
                  <div
                    className={clickableTile}
                    onClick={() => setShowCalendarMenu(!showCalendarMenu)}
                  >
                    <TileInner detail={detail} />
                    <span className="inline-block mt-3 px-3 py-1 rounded-full bg-sage-green text-white text-xs font-semibold shadow-sm">+ Add to calendar</span>
                  </div>
                  {showCalendarMenu && (
                    <div className="absolute z-10 top-full mt-2 left-0 right-0 bg-white border border-pale-yellow rounded-xl shadow-xl overflow-hidden">
                      <a
                        href={googleCalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-3 hover:bg-pale-yellow transition-colors text-sm font-medium text-black"
                        onClick={() => setShowCalendarMenu(false)}
                      >
                        Google Calendar
                      </a>
                      <button
                        className="w-full text-left px-4 py-3 hover:bg-pale-yellow transition-colors text-sm font-medium text-black border-t border-pale-yellow"
                        onClick={handleAppleCalendar}
                      >
                        Apple Calendar
                      </button>
                    </div>
                  )}
                </div>
              );
            }

            if ('to' in detail && detail.to) {
              return (
                <Link
                  key={index}
                  to={detail.to}
                  className={clickableTile + ' block'}
                >
                  <TileInner detail={detail} />
                  <span className="inline-block mt-3 px-3 py-1 rounded-full bg-sage-green text-white text-xs font-semibold shadow-sm">View FAQ →</span>
                </Link>
              );
            }

            if (detail.href) {
              return (
                <a
                  key={index}
                  href={detail.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={clickableTile + ' block'}
                >
                  <TileInner detail={detail} />
                  <span className="inline-block mt-3 px-3 py-1 rounded-full bg-sage-green text-white text-xs font-semibold shadow-sm">Get directions →</span>
                </a>
              );
            }

            return (
              <div key={index} className={baseTile}>
                <TileInner detail={detail} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuickDetails;
