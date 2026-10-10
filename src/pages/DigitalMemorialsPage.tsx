import React from 'react';
import { DIGITAL_IMAGE } from '../data/mockData';
import {
  Smartphone,
  QrCode,
  Globe,
  Video,
  CheckCircle2,
  Lock,
  Eye,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface DigitalMemorialsPageProps {
  navigate: (route: string) => void;
}

export const DigitalMemorialsPage: React.FC<DigitalMemorialsPageProps> = ({ navigate }) => {
  const legacyItems = [
    'Featured Memorial Portrait & Theme Header',
    'Full Written Life Story & Biography',
    'Interactive Multi-Photo Remembrance Gallery',
    'Embedded Digital Memorial Flipbook Program',
    'Service, Viewing & Repast Location Information',
    'Scripture, Poems & Favorite Words',
    'Embedded Tribute Video Presentation (YouTube/Vimeo)',
    'Personalized Permanent QR Code Card for Guests',
  ];

  return (
    <div className="py-12 bg-white space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1F6F6B]">
              Interactive Keepsakes
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#1A1A1A]">
              Digital Memorials & Legacy Pages
            </h1>
            <p className="text-lg text-[#1A1A1A]/85 leading-relaxed">
              Celebrate your loved one beyond physical boundaries. Enable out-of-town family, friends unable to travel, and future generations to experience their tribute from anywhere in the world on any smartphone or computer.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/place-an-order')}
                className="btn-header-order text-sm px-8 py-3.5"
              >
                Add Digital Memorial to Order
              </button>
              <button
                onClick={() => navigate('/memorial-garden/eleanor-grace-dawson')}
                className="btn-secondary text-sm"
              >
                View Sample Tribute Page
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-sm overflow-hidden shadow-xl border-4 border-white bg-slate-50">
              <img
                src={DIGITAL_IMAGE}
                alt="Digital Memorial QR Code and mobile view"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Option 1: Digital Memorial Program ($50 One-Time) */}
        <div className="pt-8 border-t border-slate-200">
          <div className="bg-[#FAF8F5] border border-slate-200 rounded-sm p-8 sm:p-10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1F6F6B]">
                  Option 1 · Fast Mobile Access
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] mt-1">
                  Digital Memorial Program — $50 one-time
                </h2>
              </div>
              <div className="text-right">
                <span className="font-serif text-3xl font-bold text-[#1F6F6B]">$50</span>
                <span className="text-xs text-slate-500 block">No monthly fee</span>
              </div>
            </div>

            <p className="text-base text-[#1A1A1A]/80 leading-relaxed">
              <strong>Your Memorial Program — Available Anytime, From Any Device.</strong> A pristine, mobile-friendly interactive digital version of your printed program accessible via custom QR code. Perfect for family members viewing from home, virtual attendees, or anyone who wants to carry the program on their phone.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
              {[
                'Digital version of your completed program',
                'Personalized printable QR code graphic',
                'Mobile-friendly responsive flipbook viewing',
                'Easy sharing via text message or email',
                'Unlimited access from any device',
                'No recurring subscription fee',
              ].map((inc, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-[#1A1A1A]/80 bg-white p-3 rounded border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-[#1F6F6B] shrink-0 mt-0.5" />
                  <span>{inc}</span>
                </div>
              ))}
            </div>

            <div className="pt-3">
              <button
                onClick={() => navigate('/place-an-order')}
                className="btn-primary text-xs"
              >
                Add a Digital Program ($50)
              </button>
            </div>
          </div>
        </div>

        {/* Option 2: Legacy Tribute Page ($125 One-Time) */}
        <div className="pt-2">
          <div className="bg-white border-2 border-[#1F6F6B] rounded-sm p-8 sm:p-10 space-y-6 shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#C9973F]">
                  Option 2 · Comprehensive Online Sanctuary
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] mt-1">
                  Legacy Tribute Page — $125
                </h2>
              </div>
              <div className="text-right">
                <span className="font-serif text-3xl font-bold text-[#1F6F6B]">$125</span>
                <span className="text-xs text-slate-500 block">Includes 1st year of hosting</span>
              </div>
            </div>

            <p className="text-base text-[#1A1A1A]/80 leading-relaxed">
              <strong>More Than a Digital Program. A Lasting Place to Remember.</strong> An enduring online memorial sanctuary dedicated to honoring your loved one. Far more comprehensive than a single booklet, a Legacy Tribute Page brings together their complete life biography, multimedia photo memories, video tributes, and a guestbook for friends to share loving memories.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {legacyItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-[#1A1A1A]/85 p-2.5 bg-[#F5EFE6]/50 rounded">
                  <CheckCircle2 className="w-4 h-4 text-[#1F6F6B] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#FAF8F5] p-4 rounded border border-slate-200 text-xs text-[#1A1A1A]/80 space-y-1">
              <span className="font-bold text-[#1F6F6B] block">After the First Year:</span>
              <p>
                Includes full hosting for 12 months. After the first year, annual hosting renewal is just <strong>$25 per year</strong> to maintain the active online sanctuary and guest condolences.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/place-an-order')}
                className="btn-header-order text-xs px-6 py-3"
              >
                Create a Legacy Tribute ($125)
              </button>
              <button
                onClick={() => navigate('/memorial-garden/eleanor-grace-dawson')}
                className="btn-secondary text-xs py-2.5 px-5"
              >
                Experience Live Tribute Demo →
              </button>
            </div>
          </div>
        </div>

        {/* Side-by-Side Comparison: Which Option is Right for You? */}
        <div className="pt-8 border-t border-slate-200 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1F6F6B]">
              Direct Comparison
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A]">
              Not Sure Which Option?
            </h2>
            <p className="text-sm text-[#1A1A1A]/75">
              Review both digital options side by side to choose the best fit for your family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#FAF8F5] border border-slate-200 rounded p-6 space-y-4">
              <h3 className="font-serif text-xl font-bold text-[#1A1A1A]">
                Digital Memorial Program ($50)
              </h3>
              <p className="text-xs font-semibold text-[#1F6F6B] uppercase tracking-wide">
                Best For:
              </p>
              <ul className="text-xs text-[#1A1A1A]/80 space-y-2">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F6F6B] shrink-0 mt-0.5" />
                  <span>Families who want an instant mobile replica of their printed booklet.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F6F6B] shrink-0 mt-0.5" />
                  <span>Virtual guests attending via church live stream or Zoom.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F6F6B] shrink-0 mt-0.5" />
                  <span>Fast sharing via QR code on prayer cards and bulletins.</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#FAF8F5] border border-slate-200 rounded p-6 space-y-4">
              <h3 className="font-serif text-xl font-bold text-[#1A1A1A]">
                Legacy Tribute Page ($125)
              </h3>
              <p className="text-xs font-semibold text-[#C9973F] uppercase tracking-wide">
                Best For:
              </p>
              <ul className="text-xs text-[#1A1A1A]/80 space-y-2">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F6F6B] shrink-0 mt-0.5" />
                  <span>Families creating an enduring multimedia archive of their loved one&apos;s story.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F6F6B] shrink-0 mt-0.5" />
                  <span>Displaying expansive photo galleries and video presentations.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F6F6B] shrink-0 mt-0.5" />
                  <span>Allowing attendees to post condolences, memories, and tributes.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Public vs Private Memorial Notice (Section 3 decision 13) */}
        <div className="bg-[#F5EFE6] border border-[#C9973F]/30 rounded-sm p-6 space-y-3">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#1F6F6B]" />
            <h4 className="font-bold text-[#1A1A1A] text-sm">
              Memorial Wall / Garden Privacy Options
            </h4>
          </div>
          <p className="text-xs text-[#1A1A1A]/80 leading-relaxed">
            Every digital memorial can be published with your choice of visibility:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 text-xs text-[#1A1A1A]/80">
            <div className="bg-white p-3 rounded border border-slate-200">
              <span className="font-bold text-[#1F6F6B] flex items-center gap-1.5 mb-1">
                <Eye className="w-4 h-4 text-[#1F6F6B]" />
                Public Memorial
              </span>
              Featured in our Memorial Garden directory so extended friends and church members can easily search and discover it.
            </div>
            <div className="bg-white p-3 rounded border border-slate-200">
              <span className="font-bold text-[#1A1A1A] flex items-center gap-1.5 mb-1">
                <Lock className="w-4 h-4 text-[#C9973F]" />
                Private (Unlisted) Memorial
              </span>
              Hidden from the Memorial Garden, configured with an unguessable direct link, excluded from search engines, and accessible strictly by those with the direct link or QR code.
            </div>
          </div>
        </div>

        {/* Closing Banner */}
        <div className="text-center py-8 space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A]">
            Preserve the Program. Share the Memories. Celebrate the Legacy.
          </h3>
          <p className="text-sm text-[#1A1A1A]/75">
            Add a digital memorial during checkout or contact our team to upgrade an existing printed order.
          </p>
          <button
            onClick={() => navigate('/place-an-order')}
            className="btn-header-order text-sm px-8 py-3.5 shadow-md"
          >
            Add Digital Memorial
          </button>
        </div>

      </div>
    </div>
  );
};
