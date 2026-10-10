import React from 'react';
import {
  HERO_IMAGE,
  PROGRAMS_IMAGE,
  DIGITAL_IMAGE,
  PRAYER_CARDS_IMAGE,
  POSTERS_IMAGE,
  SAMPLE_MEMORIALS,
} from '../data/mockData';
import { ReadyByCalculatorWidget } from '../components/common/ReadyByCalculatorWidget';
import {
  ArrowRight,
  ShieldCheck,
  Smartphone,
  QrCode,
  Calendar,
  Sparkles,
  HeartHandshake,
  CheckCircle,
} from 'lucide-react';

interface HomePageProps {
  navigate: (route: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  return (
    <div className="space-y-0">
      
      {/* 1. Hero Section (Section 11, Page 10) */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center bg-[#FAF8F5] overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMAGE}
            alt="Lilies of the Field Memorial Keepsakes and memorial booklet"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          {/* Light scrim ensuring text stays readable without turning dark */}
          <div className="absolute inset-0 bg-linear-to-r from-white/95 via-white/85 to-white/40 lg:to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1F6F6B]">
              <Sparkles className="w-4 h-4 text-[#C9973F]" />
              <span>Bespoke Memorial Design & Fine Printing · Brooklyn, NY</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] font-normal leading-[1.15]">
              Every Life Deserves to be Celebrated
            </h1>

            <p className="text-lg sm:text-xl text-[#1A1A1A]/85 leading-relaxed font-normal">
              Premium memorial programs, prayer cards, photo keepsakes and tribute pieces thoughtfully created to honor every life and every story.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={() => navigate('/collection')}
                className="btn-primary cursor-pointer shadow-md"
              >
                Explore Our Collection
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => navigate('/place-an-order')}
                className="btn-secondary cursor-pointer bg-white/80"
              >
                Place an Order
              </button>

              <div className="w-full sm:w-auto pt-1 sm:pt-0 sm:pl-2">
                <button
                  onClick={() => navigate('/funeral-service-providers')}
                  className="text-sm font-semibold text-[#1F6F6B] hover:text-[#1A1A1A] hover:underline inline-flex items-center gap-1.5 transition-colors"
                >
                  <ShieldCheck className="w-4 h-4 text-[#C9973F]" />
                  For Funeral Service Providers →
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-300/60 flex flex-wrap items-center gap-6 text-xs text-[#1A1A1A]/70">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle className="w-4 h-4 text-[#1F6F6B]" />
                Coordinated Matching Suites
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle className="w-4 h-4 text-[#1F6F6B]" />
                6:00 PM ET Daily Scheduling
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle className="w-4 h-4 text-[#1F6F6B]" />
                Direct Chapel & Home Delivery
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Estimated Ready Date Calculator Quick-Bar */}
      <section className="bg-white py-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <ReadyByCalculatorWidget compact />
          </div>
        </div>
      </section>

      {/* 2. Four Category Cards (Section 11, Page 10) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1F6F6B]">
              Handcrafted Tributes
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A]">
              Thoughtfully Coordinated Memorial Keepsakes
            </h2>
            <p className="text-base text-[#1A1A1A]/75">
              Each piece is created to honor your loved one&apos;s individuality with heirloom paper, heartfelt typography, and vibrant imagery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {/* 1. Memorial Programs */}
            <div className="bg-white border border-slate-200 rounded-sm overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300">
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                <img
                  src={PROGRAMS_IMAGE}
                  alt="Classic Memorial Programs"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#1A1A1A] group-hover:text-[#1F6F6B] transition-colors">
                    Memorial Programs
                  </h3>
                  <p className="text-sm text-[#1A1A1A]/70 mt-2">
                    Classic programs · Photo Collages · Premium 8-page booklets designed with precision scoring and archival papers.
                  </p>
                </div>
                <button
                  onClick={() => navigate('/memorial-programs')}
                  className="text-xs font-bold uppercase tracking-wider text-[#1F6F6B] hover:text-[#1A1A1A] inline-flex items-center gap-1 pt-2"
                >
                  Explore Programs <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* 2. Digital Memorials */}
            <div className="bg-white border border-slate-200 rounded-sm overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300">
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                <img
                  src={DIGITAL_IMAGE}
                  alt="Digital Memorials and Legacy Pages"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#1A1A1A] group-hover:text-[#1F6F6B] transition-colors">
                    Digital Memorials
                  </h3>
                  <p className="text-sm text-[#1A1A1A]/70 mt-2">
                    Mobile-friendly digital programs accessible through a custom QR code. Seamless viewing from any device, anywhere.
                  </p>
                </div>
                <button
                  onClick={() => navigate('/digital-memorials')}
                  className="text-xs font-bold uppercase tracking-wider text-[#1F6F6B] hover:text-[#1A1A1A] inline-flex items-center gap-1 pt-2"
                >
                  Explore Digital <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* 3. Prayer Cards & Keepsakes */}
            <div className="bg-white border border-slate-200 rounded-sm overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300">
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                <img
                  src={PRAYER_CARDS_IMAGE}
                  alt="Laminated Prayer Cards & Memorial Bookmarks"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#1A1A1A] group-hover:text-[#1F6F6B] transition-colors">
                    Prayer Cards & Keepsakes
                  </h3>
                  <p className="text-sm text-[#1A1A1A]/70 mt-2">
                    Laminated prayer cards · Bookmarks · Tribute cards · Register & guest books that guests hold close for years.
                  </p>
                </div>
                <button
                  onClick={() => navigate('/prayer-cards-keepsakes')}
                  className="text-xs font-bold uppercase tracking-wider text-[#1F6F6B] hover:text-[#1A1A1A] inline-flex items-center gap-1 pt-2"
                >
                  Explore Keepsakes <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* 4. Photo & Tribute Products */}
            <div className="bg-white border border-slate-200 rounded-sm overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300">
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                <img
                  src={POSTERS_IMAGE}
                  alt="Easel Memorial Welcome Signs & Large Displays"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#1A1A1A] group-hover:text-[#1F6F6B] transition-colors">
                    Photo & Tribute Products
                  </h3>
                  <p className="text-sm text-[#1A1A1A]/70 mt-2">
                    Posters · Easel Welcome Signs · Large Format displays · Casket Panels celebrating their journey with dignity.
                  </p>
                </div>
                <button
                  onClick={() => navigate('/posters-large-format')}
                  className="text-xs font-bold uppercase tracking-wider text-[#1F6F6B] hover:text-[#1A1A1A] inline-flex items-center gap-1 pt-2"
                >
                  Explore Displays <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/collection')}
              className="btn-primary cursor-pointer px-8"
            >
              View Our Full Collection
            </button>
          </div>
        </div>
      </section>

      {/* 3. Creating a Meaningful Tribute (Section 11, Page 10) */}
      <section className="py-20 bg-[#F5EFE6] border-y border-[#C9973F]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1F6F6B]">
                Our Philosophy
              </span>
              
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] leading-tight">
                Creating a Meaningful Tribute
              </h2>

              <p className="text-base sm:text-lg text-[#1A1A1A]/85 leading-relaxed">
                At Lilies of the Field, we believe that honoring a loved one is not merely about printing paper—it is about capturing the essence of a soul, their triumphs, their humor, their faith, and their lasting legacy in a form that families cherish forever.
              </p>

              <p className="text-base sm:text-lg text-[#1A1A1A]/85 leading-relaxed">
                Every custom layout is thoughtfully composed by experienced memorial artists who understand the delicate balance of reverence and celebration. We guide you step-by-step through selecting materials, organizing service readings, and curating cherished photographs.
              </p>

              <div className="pt-2">
                <p className="font-serif text-2xl sm:text-3xl font-semibold text-[#1F6F6B] italic">
                  &ldquo;Their life. Their story. Beautifully remembered.&rdquo;
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => navigate('/resources')}
                  className="btn-primary"
                >
                  Explore Memorial Guides
                </button>
                <button
                  onClick={() => navigate('/about')}
                  className="btn-secondary"
                >
                  About Our Studio
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-sm overflow-hidden shadow-xl border-4 border-white">
                <img
                  src={HERO_IMAGE}
                  alt="Lilies of the Field Commemorative Keepsake in studio"
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. How It Works (Section 11, Page 10) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1F6F6B]">
              Seamless Experience
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A]">
              How It Works
            </h2>
            <p className="text-base text-[#1A1A1A]/75">
              Five clear, supported steps from initial concept to printed perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            
            {/* Step 1 */}
            <div className="bg-[#FAF8F5] border border-slate-200 rounded p-6 text-center space-y-3 flex flex-col justify-between">
              <div>
                <span className="w-10 h-10 rounded-full bg-[#1F6F6B] text-white font-serif font-bold text-lg flex items-center justify-center mx-auto mb-3">
                  1
                </span>
                <h3 className="font-bold text-base text-[#1A1A1A]">Select Your Memorial Products</h3>
                <p className="text-xs text-[#1A1A1A]/70 mt-2 leading-relaxed">
                  Choose your program style, prayer cards, keepsake bookmarks, or digital tribute pieces.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#FAF8F5] border border-slate-200 rounded p-6 text-center space-y-3 flex flex-col justify-between">
              <div>
                <span className="w-10 h-10 rounded-full bg-[#1F6F6B] text-white font-serif font-bold text-lg flex items-center justify-center mx-auto mb-3">
                  2
                </span>
                <h3 className="font-bold text-base text-[#1A1A1A]">Submit Your Content</h3>
                <p className="text-xs text-[#1A1A1A]/70 mt-2 leading-relaxed">
                  Provide your obituary, order of service, reflections, and high-resolution photographs.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#FAF8F5] border border-slate-200 rounded p-6 text-center space-y-3 flex flex-col justify-between">
              <div>
                <span className="w-10 h-10 rounded-full bg-[#1F6F6B] text-white font-serif font-bold text-lg flex items-center justify-center mx-auto mb-3">
                  3
                </span>
                <h3 className="font-bold text-base text-[#1A1A1A]">We Create Your Design</h3>
                <p className="text-xs text-[#1A1A1A]/70 mt-2 leading-relaxed">
                  Our professional designers craft a bespoke, personalized tribute layout honoring your loved one.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-[#FAF8F5] border border-slate-200 rounded p-6 text-center space-y-3 flex flex-col justify-between">
              <div>
                <span className="w-10 h-10 rounded-full bg-[#1F6F6B] text-white font-serif font-bold text-lg flex items-center justify-center mx-auto mb-3">
                  4
                </span>
                <h3 className="font-bold text-base text-[#1A1A1A]">Review & Approve</h3>
                <p className="text-xs text-[#1A1A1A]/70 mt-2 leading-relaxed">
                  Examine your full digital proof, request any necessary adjustments, and provide final sign-off.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-[#FAF8F5] border border-slate-200 rounded p-6 text-center space-y-3 flex flex-col justify-between">
              <div>
                <span className="w-10 h-10 rounded-full bg-[#1F6F6B] text-white font-serif font-bold text-lg flex items-center justify-center mx-auto mb-3">
                  5
                </span>
                <h3 className="font-bold text-base text-[#1A1A1A]">Printing & Delivery</h3>
                <p className="text-xs text-[#1A1A1A]/70 mt-2 leading-relaxed">
                  Precision press production with scheduled local pickup or direct delivery to the funeral home.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/place-an-order')}
              className="btn-header-order text-base px-8 py-3.5"
            >
              Begin Your Order Now
            </button>
          </div>
        </div>
      </section>

      {/* 5. Digital Memorials Band (Sand) (Section 11, Page 11) */}
      <section className="py-20 bg-[#F5EFE6] border-y border-[#C9973F]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1F6F6B]">
                Interactive Keepsakes
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A]">
                Their Story. Their Memories. Always Within Reach.
              </h2>

              <p className="text-base sm:text-lg text-[#1A1A1A]/85 leading-relaxed">
                Connect friends and family across the globe with an interactive digital memorial. Easily accessible from printed programs and cards via personalized QR code, guests can open the full tribute program on any mobile phone or computer.
              </p>

              <p className="text-base text-[#1A1A1A]/80 leading-relaxed">
                Choose between a convenient Digital Memorial Program ($50 one-time) or a comprehensive Legacy Tribute Webpage ($125 one-time, includes full life story, video embed, multi-photo gallery, and condolence guestbook).
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => navigate('/digital-memorials')}
                  className="btn-primary cursor-pointer"
                >
                  Explore Digital Memorials
                </button>
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#1A1A1A]/70">
                  <QrCode className="w-4 h-4 text-[#C9973F]" />
                  <span>Permanent, Non-Expiring QR Codes</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative max-w-sm rounded-lg overflow-hidden shadow-xl border-4 border-white">
                <img
                  src={DIGITAL_IMAGE}
                  alt="Digital Memorial QR Code and mobile view"
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Memorial Garden Preview (Section 11, Page 11) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1F6F6B]">
                Public Tributes
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A]">
                Remembering Lives. Preserving Legacies.
              </h2>
              <p className="text-base text-[#1A1A1A]/75 max-w-xl">
                Browse recent commemorative programs and legacy tributes celebrated through Lilies of the Field.
              </p>
            </div>

            <button
              onClick={() => navigate('/memorial-garden')}
              className="btn-secondary whitespace-nowrap cursor-pointer shrink-0"
            >
              Visit the Memorial Garden
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SAMPLE_MEMORIALS.map((memorial) => (
              <div
                key={memorial.id}
                className="bg-white border border-slate-200 rounded-sm overflow-hidden flex flex-col group hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                  <img
                    src={memorial.photo}
                    alt={memorial.fullName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-[#1F6F6B] text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-xs">
                    {memorial.memorialType}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#1A1A1A]">
                      {memorial.fullName}
                    </h3>
                    <p className="text-xs font-bold tracking-wider text-[#C9973F] uppercase mt-1">
                      {memorial.birthYear} — {memorial.passingYear}
                    </p>
                    <p className="text-xs text-[#1A1A1A]/70 line-clamp-3 mt-3 italic">
                      {memorial.quote}
                    </p>
                  </div>

                  <button
                    onClick={() => navigate(`/memorial-garden/${memorial.slug}`)}
                    className="btn-secondary w-full text-xs py-2 tracking-wider uppercase font-bold"
                  >
                    {memorial.memorialType === 'Legacy Tribute' ? 'Visit Legacy Tribute' : 'View Memorial Program'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-[#1A1A1A]/60">
            Note: Only families who grant public consent are featured in the Memorial Garden. Private memorials remain strictly unlisted and accessible only by private link.
          </div>
        </div>
      </section>

      {/* 7. Funeral Service Providers Band (Section 11, Page 11) */}
      <section className="py-16 bg-[#1F6F6B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C9973F]">
                Professional Partnership
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal leading-tight">
                Reliable Memorial Design and Production Support for Funeral Professionals
              </h2>
              <p className="text-sm sm:text-base text-white/85 leading-relaxed">
                We partner with funeral homes, mortuary directors, and celebrants across the New York metropolitan area to deliver flawless keepsakes, strict deadline execution, and direct chapel delivery.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <button
                onClick={() => navigate('/funeral-service-providers')}
                className="bg-[#C9973F] hover:bg-white text-[#1A1A1A] font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded transition-colors shadow-md cursor-pointer whitespace-nowrap"
              >
                Funeral Service Providers Program
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Need Help? (Section 11, Page 11) */}
      <section className="py-20 bg-[#FAF8F5] border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-12 h-12 rounded-full bg-[#1F6F6B]/15 text-[#1F6F6B] flex items-center justify-center mx-auto">
            <HeartHandshake className="w-6 h-6" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A]">
            Not Sure Where to Begin? We&apos;re Here to Help.
          </h2>

          <p className="text-base sm:text-lg text-[#1A1A1A]/80 max-w-2xl mx-auto leading-relaxed">
            Planning a service can feel overwhelming. Our experienced memorial team is ready to answer questions, guide your content selection, or walk you through sample arrangements during a one-on-one virtual consultation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
            <button
              onClick={() => navigate('/resources')}
              className="btn-primary cursor-pointer"
            >
              Visit Our Resources & Guides
            </button>

            <button
              onClick={() => navigate('/schedule-a-consultation')}
              className="btn-secondary cursor-pointer bg-white"
            >
              Schedule a Virtual Consultation
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
