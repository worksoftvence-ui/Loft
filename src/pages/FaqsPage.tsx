import React, { useState } from 'react';
import { FAQS_DATA } from '../data/mockData';
import { ChevronDown, Search, HelpCircle, MessageSquare, Calendar } from 'lucide-react';

interface FaqsPageProps {
  navigate: (route: string) => void;
}

export const FaqsPage: React.FC<FaqsPageProps> = ({ navigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');

  const categories = [
    'All',
    'Ordering',
    'Memorial Programs & Products',
    'Design & Personalization',
    'Obituaries & Content',
    'Turnaround & Rush Orders',
    'Proofing & Approval',
    'Printing/Pickup & Delivery',
    'Digital Memorials',
    'Funeral Service Providers',
  ];

  const filteredFaqs = FAQS_DATA.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="py-12 bg-white space-y-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1F6F6B]">
            Studio Knowledge Base
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#1A1A1A]">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-[#1A1A1A]/75 leading-relaxed">
            Find prompt answers regarding order workflows, proof approvals, rush timelines, photo capacities, and delivery logistics.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search FAQs (e.g. proofing, cutoff time, photo limit, delivery)..."
            className="w-full pl-12 pr-4 py-3 bg-[#FAF8F5] border border-slate-300 rounded text-sm text-[#1A1A1A] focus:border-[#1F6F6B] focus:bg-white focus:outline-hidden shadow-xs"
          />
        </div>

        {/* Category Pills (Tabs) */}
        <div className="flex flex-wrap items-center gap-1.5 pb-6 border-b border-slate-200">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-bold px-3 py-1.5 rounded transition-colors cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#1F6F6B] text-white shadow-xs'
                  : 'bg-[#FAF8F5] text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 pt-4">
          {filteredFaqs.map((faq) => {
            const isOpen = expandedId === faq.id;
            return (
              <div
                key={faq.id}
                className="border border-slate-200 rounded-sm overflow-hidden bg-white transition-colors"
              >
                <button
                  onClick={() => toggleExpand(faq.id)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-[#FAF8F5] transition-colors focus:outline-hidden cursor-pointer"
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#C9973F]">
                      {faq.category}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#1A1A1A]">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#1F6F6B] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-5 pt-0 text-sm text-[#1A1A1A]/85 leading-relaxed bg-[#FAF8F5]/50 border-t border-slate-100 animate-in fade-in duration-150">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12 text-slate-500 bg-[#FAF8F5] rounded">
              <HelpCircle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <p className="text-sm font-semibold">No questions found matching your search.</p>
              <p className="text-xs mt-1">Try another keyword or reach out directly to our team below.</p>
            </div>
          )}
        </div>

        {/* STILL NEED HELP? (Section 13, Page 13) */}
        <div className="mt-16 p-8 bg-[#F5EFE6] border border-[#C9973F]/30 rounded-sm text-center space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A]">
            Still Need Help?
          </h2>
          <p className="text-sm text-[#1A1A1A]/75 max-w-lg mx-auto">
            Our compassionate studio team is available Monday through Friday to address custom questions, verify deadlines, or review special materials.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => navigate('/contact')}
              className="btn-primary text-xs py-3 px-6"
            >
              <MessageSquare className="w-4 h-4" />
              Contact Us
            </button>
            <button
              onClick={() => navigate('/schedule-a-consultation')}
              className="btn-secondary text-xs py-3 px-6 bg-white"
            >
              <Calendar className="w-4 h-4" />
              Schedule a Virtual Consultation
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
