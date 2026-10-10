import React from 'react';
import { POSTERS_IMAGE } from '../data/mockData';
import { ReadyByCalculatorWidget } from '../components/common/ReadyByCalculatorWidget';
import { Sparkles, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

interface PostersLargeFormatPageProps {
  navigate: (route: string) => void;
}

export const PostersLargeFormatPage: React.FC<PostersLargeFormatPageProps> = ({ navigate }) => {
  const displays = [
    {
      title: 'Memorial Welcome Signs & Easel Boards',
      desc: 'Mounted rigid boards set upon wooden or brass easels at chapel entrances, funeral home foyers, and repast halls welcoming family and guests with warmth and dignity.',
      sizes: '18" x 24" · 24" x 36"',
      substrate: '3/16" Heavyweight Foam Core Board (Rigid display-ready)',
      turnaround: '3 business days',
    },
    {
      title: 'Celebration of Life Photo Collage Posters',
      desc: 'Artfully composed multi-photo tribute boards capturing milestones, military service, family travel, and treasured memories in rich vivid archival ink.',
      sizes: '20" x 30" · 24" x 36"',
      substrate: 'Glare-resistant velvet matte print on archival core',
      turnaround: '3 business days',
    },
    {
      title: 'Memorial Display Signs & Sanctuary Prints',
      desc: 'Custom-designed signage highlighting favorite family recipes, beloved quotes, sports or musical honors, or special poems displayed during visitation services.',
      sizes: '16" x 20" · 18" x 24"',
      substrate: 'Premium coated photographic board',
      turnaround: '3 business days',
    },
    {
      title: 'Large Format Commemorative Tributes',
      desc: 'Panoramic, cinematic large-scale prints honoring veterans, civil servants, clergy, and patriarchs/matriarchs with grandeur and photographic excellence.',
      sizes: '24" x 48" · 30" x 40"',
      substrate: 'Heavyweight reinforced archival foam board',
      turnaround: '4 business days',
    },
    {
      title: 'Casket Panels & Specialty Memorial Graphics',
      desc: 'Custom-fitted head panel inserts crafted to harmonize with the overall memorial design and family traditions, installed directly inside the casket lid.',
      sizes: 'Tailored to exact casket dimensions',
      substrate: 'Embroidered or high-density printed satin fabric',
      turnaround: '4 business days (Direct funeral home coordination)',
    },
  ];

  return (
    <div className="py-12 bg-white space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1F6F6B]">
              Large Format Memorial Presentation
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#1A1A1A]">
              Posters & Large Format Displays
            </h1>
            <p className="text-lg text-[#1A1A1A]/85 leading-relaxed">
              Create an unforgettable presence at your loved one&apos;s memorial service. Our easel welcome boards and large format photo retrospectives provide a stunning focal point as guests arrive.
            </p>
            <p className="text-base text-[#1A1A1A]/80 leading-relaxed">
              Every piece is printed with wide-gamut archival pigment inks on sturdy display-ready board—no framing needed. Easels, venues, and chapels across Brooklyn and the greater New York area can receive these directly prior to calling hours.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/place-an-order')}
                className="btn-header-order text-sm px-8 py-3.5"
              >
                Place an Order
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('options-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-secondary text-sm"
              >
                Explore Display Options
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-sm overflow-hidden shadow-xl border-4 border-white bg-slate-50">
              <img
                src={POSTERS_IMAGE}
                alt="Celebration of life welcome sign on easel in chapel"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Display Options Grid */}
        <div id="options-section" className="pt-8 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1F6F6B]">
              Visual Showcase
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A]">
              Easel Signs & Specialty Display Categories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displays.map((disp, i) => (
              <div
                key={i}
                className="bg-[#FAF8F5] border border-slate-200 rounded-sm p-6 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-[#1F6F6B]">
                    <span>Format #{i + 1}</span>
                    <span className="inline-flex items-center gap-1 text-slate-500 font-normal">
                      <Clock className="w-3.5 h-3.5 text-[#1F6F6B]" />
                      {disp.turnaround}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#1A1A1A]">
                    {disp.title}
                  </h3>

                  <p className="text-xs text-[#1A1A1A]/75 leading-relaxed">
                    {disp.desc}
                  </p>

                  <div className="pt-3 border-t border-slate-200 space-y-2 text-xs text-[#1A1A1A]/80">
                    <div>
                      <span className="font-semibold text-slate-700 block">Available Sizes:</span>
                      <span>{disp.sizes}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-700 block">Substrate:</span>
                      <span>{disp.substrate}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-200">
                  <button
                    onClick={() => navigate('/place-an-order')}
                    className="btn-header-order w-full text-xs py-2.5 justify-center"
                  >
                    Select in Order Builder
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ready Date Calculator Embed */}
        <div className="max-w-3xl mx-auto pt-8">
          <ReadyByCalculatorWidget initialProductId="poster-welcome" />
        </div>

      </div>
    </div>
  );
};
