import React from 'react';
import { HERO_IMAGE, PROGRAMS_IMAGE } from '../data/mockData';
import { Flower2, Heart, Award, ShieldCheck, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  navigate: (route: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ navigate }) => {
  return (
    <div className="py-12 bg-white space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1F6F6B]">
              Our Story & Heritage
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#1A1A1A]">
              About Lilies of the Field
            </h1>
            <p className="text-lg text-[#1A1A1A]/85 leading-relaxed">
              Based in Brooklyn, New York, Lilies of the Field was founded on a simple yet profound belief: <em>every life deserves to be celebrated with genuine artistic dignity, reverence, and beauty.</em>
            </p>
            <p className="text-base text-[#1A1A1A]/80 leading-relaxed">
              When families face the loss of someone they love, organizing memorial paperwork should not feel transactional or sterile. We treat every order as a sacred family archive—weaving together personal reflections, cultural traditions, cherished photographs, and faith-filled expressions into heirloom keepsakes that stand the test of time.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/collection')}
                className="btn-primary"
              >
                Explore Keepsakes
              </button>
              <button
                onClick={() => navigate('/memorial-garden')}
                className="btn-secondary"
              >
                Visit Memorial Garden
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-sm overflow-hidden shadow-xl border-4 border-white bg-slate-50">
              <img
                src={HERO_IMAGE}
                alt="Lilies of the Field craft and memorial programs"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Studio Pillars */}
        <div className="pt-8 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1F6F6B]">
              What Sets Us Apart
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A]">
              The Craftsmanship Behind Our Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FAF8F5] border border-slate-200 rounded p-6 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#1F6F6B]/10 text-[#1F6F6B] flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1A1A1A]">
                Human Empathy First
              </h3>
              <p className="text-xs sm:text-sm text-[#1A1A1A]/75 leading-relaxed">
                We take the time to listen, provide patient guidance on photo selections, and ensure every name, relationship, and musical title is formatted with absolute precision.
              </p>
            </div>

            <div className="bg-[#FAF8F5] border border-slate-200 rounded p-6 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#1F6F6B]/10 text-[#1F6F6B] flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1A1A1A]">
                Archival Print Quality
              </h3>
              <p className="text-xs sm:text-sm text-[#1A1A1A]/75 leading-relaxed">
                Heavyweight acid-free cover stocks, fade-resistant pigment printing, and precision mechanical folding ensure programs never crack or deteriorate over decades.
              </p>
            </div>

            <div className="bg-[#FAF8F5] border border-slate-200 rounded p-6 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#1F6F6B]/10 text-[#1F6F6B] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1A1A1A]">
                Mortuary Partnership
              </h3>
              <p className="text-xs sm:text-sm text-[#1A1A1A]/75 leading-relaxed">
                We work side-by-side with funeral directors, ensuring proofs are cleared, deadlines are met, and materials arrive directly at chapels prior to viewing hours.
              </p>
            </div>
          </div>
        </div>

        {/* Brooklyn Studio Note */}
        <div className="bg-[#F5EFE6] border border-[#C9973F]/30 rounded-sm p-8 sm:p-10 max-w-4xl mx-auto space-y-4 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-white text-[#1F6F6B] flex items-center justify-center shrink-0 border border-[#C9973F]/30">
              <Flower2 className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">
                A Dedicated Design Studio
              </h3>
              <p className="text-xs sm:text-sm text-[#1A1A1A]/80 leading-relaxed">
                Lilies of the Field operates as a focused production studio rather than a walk-in retail storefront. All orders, revisions, and proofs are handled through our coordinated digital systems, with local Brooklyn pickups, chapel couriers, and consultations arranged by appointment.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
