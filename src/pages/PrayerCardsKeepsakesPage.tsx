import React from 'react';
import { PRAYER_CARDS_IMAGE } from '../data/mockData';
import { ReadyByCalculatorWidget } from '../components/common/ReadyByCalculatorWidget';
import { Bookmark, Clock, Check, Sparkles, Heart, BookOpen } from 'lucide-react';

interface PrayerCardsKeepsakesPageProps {
  navigate: (route: string) => void;
}

export const PrayerCardsKeepsakesPage: React.FC<PrayerCardsKeepsakesPageProps> = ({ navigate }) => {
  const items = [
    {
      title: 'Laminated Memorial Prayer Cards',
      desc: 'Traditional 2.5" x 4.25" wallet-sized memorial prayer cards sealed in heavy, protective gloss laminate. Features a loving portrait on the front with your chosen prayer, poem, or scripture on the back.',
      turnaround: '3 business days',
      specs: ['Standard 2.5" x 4.25" pocket size', 'Durable heat-sealed lamination', 'Rounded corners available', 'Custom floral and religious themes'],
    },
    {
      title: 'Tribute Cards',
      desc: 'Modern, personalized memorial cards featuring contemporary typography, custom color palettes, and touching personal messages celebrating a cherished life.',
      turnaround: '3 business days',
      specs: ['Double-sided archival printing', 'Heavy cardstock finishes', 'Matching program design suite', 'Multi-photo options'],
    },
    {
      title: 'Memorial Keepsake Bookmarks',
      desc: 'Long-format 2.5" x 7" laminated keepsake bookmarks designed for daily remembrance in devotional books, family bibles, and personal reading.',
      turnaround: '3 business days',
      specs: ['Archival laminated finish', 'Optional silk tassel cord in gold, cream, or black', 'Front portrait with back life scripture', 'Cherished gift for attendees'],
    },
    {
      title: 'Tribute Wake Cards (2-Page Program)',
      desc: 'Concise flat double-sided cards designed specifically for viewing visitations, prayer services, and evening wake gatherings where a full booklet is not needed.',
      turnaround: '3 business days',
      specs: ['Streamlined 2-page flat format', 'Fast production turnaround', 'Photo, service schedule, and family note', 'Coordinating design themes'],
    },
    {
      title: 'Custom Register & Guest Books',
      desc: 'Casebound hard-cover personalized remembrance register books crafted to coordinate seamlessly with your memorial program design theme.',
      turnaround: '4 business days',
      specs: ['Foil or full-color cover personalization', 'Acid-free sign-in leaves for attendee notes', 'High-durability binding', 'Archival keepsake'],
    },
    {
      title: 'Specialty Memorial Keepsakes & Tribute Items',
      desc: 'Custom-designed commemorative pieces including commemorative buttons, lapel ribbons, and coordinated tribute tokens for service guests.',
      turnaround: '3–4 business days',
      specs: ['Coordinated color matching', 'Bespoke design arrangements', 'Family & church group packages', 'Special requests accommodated'],
    },
  ];

  return (
    <div className="py-12 bg-white space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1F6F6B]">
              Lasting Tokens of Remembrance
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#1A1A1A]">
              Prayer Cards & Keepsakes
            </h1>
            <p className="text-lg text-[#1A1A1A]/85 leading-relaxed">
              Long after services conclude, prayer cards and keepsake bookmarks remain tucked into prayer books, placed on bedside nightstands, and kept close in wallets.
            </p>
            <p className="text-base text-[#1A1A1A]/80 leading-relaxed">
              We produce every card on premium heavyweight cardstock sealed with crystal-clear archival lamination that resists moisture and wear over decades. Available as individual orders or coordinated in matching suites with your memorial programs.
            </p>

            <div className="pt-2">
              <button
                onClick={() => navigate('/place-an-order')}
                className="btn-header-order text-sm px-8 py-3.5"
              >
                Order Keepsakes Now
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-sm overflow-hidden shadow-xl border-4 border-white bg-slate-50">
              <img
                src={PRAYER_CARDS_IMAGE}
                alt="Laminated prayer cards and memorial bookmarks"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Shopping-Style Grid */}
        <div className="pt-8 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1F6F6B]">
              Catalog Selection
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A]">
              Memorial Keepsake Products
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-sm p-6 flex flex-col justify-between hover:shadow-lg transition-shadow group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-[#1F6F6B]">
                    <span className="inline-flex items-center gap-1">
                      <Bookmark className="w-3.5 h-3.5 text-[#C9973F]" />
                      Keepsake Series
                    </span>
                    <span className="inline-flex items-center gap-1 text-slate-500 font-normal">
                      <Clock className="w-3.5 h-3.5 text-[#1F6F6B]" />
                      {item.turnaround}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#1A1A1A] group-hover:text-[#1F6F6B] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#1A1A1A]/75 leading-relaxed">
                    {item.desc}
                  </p>

                  <ul className="pt-2 space-y-1.5 border-t border-slate-100 text-xs text-[#1A1A1A]/80">
                    {item.specs.map((spec, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#1F6F6B] shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100">
                  <button
                    onClick={() => navigate('/place-an-order')}
                    className="btn-header-order w-full text-xs py-2.5 justify-center"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Embedded Ready Date Calculation */}
        <div className="max-w-3xl mx-auto pt-8">
          <ReadyByCalculatorWidget initialProductId="cards-prayer" />
        </div>

      </div>
    </div>
  );
};
