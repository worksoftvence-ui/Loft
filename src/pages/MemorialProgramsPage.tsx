import React from 'react';
import { PROGRAMS_IMAGE, HERO_IMAGE } from '../data/mockData';
import { ReadyByCalculatorWidget } from '../components/common/ReadyByCalculatorWidget';
import {
  FileText,
  Image as ImageIcon,
  Heart,
  CheckCircle2,
  Layers,
  Sparkles,
  BookOpen,
  ArrowRight,
} from 'lucide-react';

interface MemorialProgramsPageProps {
  navigate: (route: string) => void;
}

export const MemorialProgramsPage: React.FC<MemorialProgramsPageProps> = ({ navigate }) => {
  return (
    <div className="py-12 bg-white space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero / Intro (The Classic Memorial Program) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1F6F6B]">
              Lilies of the Field Program Guide
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#1A1A1A]">
              The Classic Memorial Program
            </h1>
            <p className="text-lg text-[#1A1A1A]/85 leading-relaxed">
              A memorial program is more than an itinerary of the day; it is a permanent tactile legacy piece that attendees carry home in their hands, place inside family bibles, and preserve for generations.
            </p>
            <p className="text-base text-[#1A1A1A]/80 leading-relaxed">
              We design every program from the ground up, harmonizing classic editorial dignity with your loved one&apos;s unique colors, floral favorites, cultural heritage, and personal faith traditions. From traditional four-page bifold programs to rich eight-page commemorative magazine-style booklets, our studio provides attentive guidance every step of the way.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/place-an-order')}
                className="btn-primary"
              >
                Order Memorial Programs
              </button>
              <button
                onClick={() => navigate('/resources/creating-a-memorial-program')}
                className="btn-secondary"
              >
                View 11-Step Program Guide
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-sm overflow-hidden shadow-xl border-4 border-white bg-slate-50">
              <img
                src={PROGRAMS_IMAGE}
                alt="Classic memorial programs designed by Lilies of the Field"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Anatomy of a Program: Order of Service, Obituary, Photos, Back Cover */}
        <div className="pt-8 border-t border-slate-200 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1F6F6B]">
              Essential Content Sections
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A]">
              What Goes Inside Your Program
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1. Order of Service */}
            <div className="bg-[#FAF8F5] border border-slate-200 rounded p-6 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#1F6F6B]/15 text-[#1F6F6B] flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1A1A1A]">Order of Service</h3>
              <p className="text-xs text-[#1A1A1A]/75 leading-relaxed">
                Guides participants through hymns, invocations, musical tributes, scripture readings, remarks from friends, the formal eulogy, and benediction recessional.
              </p>
              <button
                onClick={() => navigate('/resources/order-of-service')}
                className="text-xs font-bold text-[#1F6F6B] hover:underline inline-flex items-center gap-1 pt-1"
              >
                Service Outlines →
              </button>
            </div>

            {/* 2. Obituary / Life Story */}
            <div className="bg-[#FAF8F5] border border-slate-200 rounded p-6 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#1F6F6B]/15 text-[#1F6F6B] flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1A1A1A]">Obituary & Life Story</h3>
              <p className="text-xs text-[#1A1A1A]/75 leading-relaxed">
                Families submit a completed obituary or biography. Our typography designers format and typeset the text for perfect readability and visual balance across your pages.
              </p>
              <button
                onClick={() => navigate('/resources/obituary-assistance')}
                className="text-xs font-bold text-[#1F6F6B] hover:underline inline-flex items-center gap-1 pt-1"
              >
                Obituary Writing Guide →
              </button>
            </div>

            {/* 3. Photographs & Capacities */}
            <div className="bg-[#FAF8F5] border border-slate-200 rounded p-6 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#1F6F6B]/15 text-[#1F6F6B] flex items-center justify-center">
                <ImageIcon className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1A1A1A]">Photo Capacities</h3>
              <p className="text-xs text-[#1A1A1A]/75 leading-relaxed">
                <strong>15–20 photos</strong> for a standard collage page in a 4-page bifold. <strong>35–40 photos</strong> for our Premium 8-Page Booklet or Large Format presentation pieces.
              </p>
              <span className="text-xs font-semibold text-[#C9973F] block pt-1">
                High-res originals recommended
              </span>
            </div>

            {/* 4. Back Cover */}
            <div className="bg-[#FAF8F5] border border-slate-200 rounded p-6 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#1F6F6B]/15 text-[#1F6F6B] flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1A1A1A]">Back Cover Elements</h3>
              <p className="text-xs text-[#1A1A1A]/75 leading-relaxed">
                The traditional home for Words of Acknowledgment, closing poems or scriptures, active and honorary pallbearers, interment and cemetery details, and repast location.
              </p>
              <button
                onClick={() => navigate('/resources/acknowledgments')}
                className="text-xs font-bold text-[#1F6F6B] hover:underline inline-flex items-center gap-1 pt-1"
              >
                Sample Wordings →
              </button>
            </div>
          </div>
        </div>

        {/* Need More Space? 3 Cards (Section 11, Page 11) */}
        <div className="pt-8 border-t border-slate-200 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1F6F6B]">
              Flexibility for Larger Reflections
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A]">
              Need More Space?
            </h2>
            <p className="text-sm text-[#1A1A1A]/75">
              When a life was too full, active, and well-traveled to fit into four panels, we offer three natural expansion formats:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Photo Collage Insert */}
            <div className="bg-white border border-[#C9973F]/40 rounded-sm p-6 space-y-4 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C9973F]">
                  Option 1
                </span>
                <Layers className="w-5 h-5 text-[#C9973F]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1A1A1A]">
                Photo Collage Insert
              </h3>
              <p className="text-xs text-[#1A1A1A]/75 leading-relaxed">
                An insert is an independent, two-sided coordinated piece placed neatly inside the center of your program without being stapled in.
              </p>
              <ul className="text-xs text-[#1A1A1A]/80 space-y-1.5 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1F6F6B]" />
                  Adds 2 extra full pages of photography
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1F6F6B]" />
                  Easy for guests to remove as an art keepsake
                </li>
              </ul>
            </div>

            {/* Card 2: Additional Pages */}
            <div className="bg-white border border-[#C9973F]/40 rounded-sm p-6 space-y-4 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C9973F]">
                  Option 2
                </span>
                <Layers className="w-5 h-5 text-[#C9973F]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1A1A1A]">
                Additional Program Pages
              </h3>
              <p className="text-xs text-[#1A1A1A]/75 leading-relaxed">
                Additional pages become bound directly into the program as part of the saddle-stitched, multi-leaf program structure.
              </p>
              <ul className="text-xs text-[#1A1A1A]/80 space-y-1.5 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1F6F6B]" />
                  Securely stitched binding
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1F6F6B]" />
                  Accommodates comprehensive extended bios
                </li>
              </ul>
            </div>

            {/* Card 3: Premium 8-Page Booklet */}
            <div className="bg-white border border-[#1F6F6B]/50 rounded-sm p-6 space-y-4 shadow-md bg-linear-to-b from-[#F5EFE6]/30 to-white">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1F6F6B]">
                  Signature Choice
                </span>
                <Sparkles className="w-5 h-5 text-[#1F6F6B]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1A1A1A]">
                Premium 8-Page Large Booklet
              </h3>
              <p className="text-xs text-[#1A1A1A]/75 leading-relaxed">
                Our flagship commemorative booklet format, crafted like an archival magazine with ample space for multi-chapter tributes and photo timelines.
              </p>
              <ul className="text-xs text-[#1A1A1A]/80 space-y-1.5 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1F6F6B]" />
                  Holds 35 to 40 high-resolution photos
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1F6F6B]" />
                  Velvet matte or lustre heavy card cover
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Program Styles Lineup */}
        <div className="pt-8 border-t border-slate-200">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] mb-6">
            Program Collection Formats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Classic Memorial Programs (4-Page)',
                desc: 'Folded 8.5" x 11", standard 4 panels. Ideal for traditional church, chapel, or graveside services.',
                turnaround: '4 business days',
              },
              {
                title: 'Classic & Premium Trifold (6-Page)',
                desc: 'Six distinct content panels allowing full separation between liturgy, biography, and tributes.',
                turnaround: '4 business days',
              },
              {
                title: 'Premium Large Format Programs',
                desc: 'Oversized presentation programs with high-impact visual layouts and spacious spreads.',
                turnaround: '4 business days',
              },
              {
                title: 'Premium 8-Page Large Booklet',
                desc: 'Multi-generational keepsake with saddle-stitched magazine binding and expansive collages.',
                turnaround: '5 business days',
              },
              {
                title: 'Additional Program Pages',
                desc: 'Seamless expansions bound into multi-leaf programs for extensive family records.',
                turnaround: 'Aligned with booklet',
              },
              {
                title: 'Coordinating Inserts',
                desc: 'Loose, high-gloss insert leaves for repast venue directions or special family acknowledgments.',
                turnaround: 'Aligned with program',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-5 border border-slate-200 rounded-sm bg-[#FAF8F5] space-y-2">
                <h4 className="font-serif font-bold text-lg text-[#1A1A1A]">{item.title}</h4>
                <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">{item.desc}</p>
                <div className="text-[11px] font-bold text-[#1F6F6B] uppercase tracking-wider pt-2">
                  Turnaround: {item.turnaround}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* "Creating Your Memorial Program" Presentation Placeholder (Section 11, Page 11) */}
        <div className="bg-[#F5EFE6] border border-[#C9973F]/30 rounded-sm p-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1F6F6B]">
            Interactive Showcase
          </span>
          <h3 className="font-serif text-2xl text-[#1A1A1A]">
            Creating Your Memorial Program Presentation
          </h3>
          <p className="text-sm text-[#1A1A1A]/80 max-w-xl mx-auto">
            Browse our curated digital booklet walkthrough to see page flows, cover typography, and photo layout treatments.
          </p>
          <div className="max-w-lg mx-auto bg-white border border-slate-200 rounded p-6 shadow-xs text-xs text-slate-600 space-y-3">
            <BookOpen className="w-8 h-8 text-[#1F6F6B] mx-auto" />
            <p className="font-semibold text-[#1A1A1A]">
              Simplebooklet Digital Viewer & Sample Layout Showcase
            </p>
            <p>
              Explore sample programs with realistic turning pages, high-resolution rendering, and mobile-friendly pinch zoom.
            </p>
            <button
              onClick={() => navigate('/memorial-garden/eleanor-grace-dawson')}
              className="btn-secondary text-xs py-2 px-4"
            >
              Open Sample Digital Program Viewer
            </button>
          </div>
        </div>

        {/* Ready Date Calculator Embed & CTA */}
        <div className="pt-6 space-y-8">
          <div className="max-w-3xl mx-auto">
            <ReadyByCalculatorWidget initialProductId="prog-classic-4" />
          </div>

          <div className="text-center">
            <button
              onClick={() => navigate('/place-an-order')}
              className="btn-header-order text-base px-10 py-4 shadow-md"
            >
              Place an Order for Memorial Programs
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
