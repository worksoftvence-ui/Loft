import React from 'react';
import {
  BookOpen,
  ListOrdered,
  Scroll,
  Heart,
  PenTool,
  HelpCircle,
  Calendar,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface ResourcesPageProps {
  navigate: (route: string) => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ navigate }) => {
  const resourceGuides = [
    {
      title: 'Creating a Memorial Program',
      desc: 'Our comprehensive 11-step visual guide to choosing sizes, organizing pages, selecting photos, and planning layout elements.',
      route: '/resources/creating-a-memorial-program',
      icon: BookOpen,
      tag: 'Step-by-Step Guide',
    },
    {
      title: 'Order of Service Outlines',
      desc: 'Four standard service formats: Traditional Funeral Service, Homegoing Celebration, Memorial Service, and Celebration of Life.',
      route: '/resources/order-of-service',
      icon: ListOrdered,
      tag: 'Service Planning',
    },
    {
      title: 'Poems, Prayers & Scriptures',
      desc: 'Curated collection of beloved biblical passages, comforting poems, and uplifting verses categorized for easy placement.',
      route: '/resources/poems-prayers-scriptures',
      icon: Scroll,
      tag: 'Inspirational Readings',
    },
    {
      title: 'Acknowledgments Wording',
      desc: 'Sample expressions of gratitude for families, clergy, hospital caregivers, medical staff, friends, and community members.',
      route: '/resources/acknowledgments',
      icon: Heart,
      tag: 'Sample Wording',
    },
    {
      title: 'Obituary Writing Assistance',
      desc: 'Guided worksheet covering 9 key life areas and 5 distinct storytelling styles to help celebrate your loved one’s unique journey.',
      route: '/resources/obituary-assistance',
      icon: PenTool,
      tag: 'Interactive Worksheet',
    },
    {
      title: 'Frequently Asked Questions',
      desc: 'Answers to common questions regarding turnarounds, photo submission standards, proofs, rush policies, and deliveries.',
      route: '/faqs',
      icon: HelpCircle,
      tag: 'Studio FAQ',
    },
  ];

  return (
    <div className="py-12 bg-white space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1F6F6B]">
            Support & Planning Library
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#1A1A1A]">
            Helpful Guidance When You Need It Most
          </h1>
          <p className="text-base sm:text-lg text-[#1A1A1A]/75 leading-relaxed">
            Planning a celebration of life requires making numerous meaningful decisions in a short period of time. We provide clear, comforting guidance, practical outlines, and copy-ready templates to ease the process.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
          {resourceGuides.map((guide, idx) => {
            const Icon = guide.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAF8F5] border border-slate-200 rounded-sm p-7 flex flex-col justify-between hover:shadow-lg transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-full bg-white border border-slate-200 text-[#1F6F6B] flex items-center justify-center group-hover:bg-[#1F6F6B] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#C9973F]">
                      {guide.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] group-hover:text-[#1F6F6B] transition-colors">
                    {guide.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#1A1A1A]/75 leading-relaxed">
                    {guide.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-200/80">
                  <button
                    onClick={() => navigate(guide.route)}
                    className="text-xs font-bold uppercase tracking-wider text-[#1F6F6B] group-hover:text-[#1A1A1A] inline-flex items-center gap-1.5"
                  >
                    Read Guide <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Virtual Consultation Block (Section 13, Page 13) */}
        <div className="bg-[#F5EFE6] border border-[#C9973F]/30 rounded-sm p-8 sm:p-10 space-y-6 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1F6F6B]">
                Complimentary Consultation
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A]">
                Schedule a Virtual Consultation
              </h2>
              <p className="text-sm text-[#1A1A1A]/80 max-w-xl">
                For families who would like personal assistance selecting products or planning their memorial materials, our studio offers one-on-one virtual consultations Monday through Friday.
              </p>
            </div>

            <button
              onClick={() => navigate('/schedule-a-consultation')}
              className="btn-primary whitespace-nowrap text-xs py-3.5 px-6 shadow-sm cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              Book Free Consultation
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
