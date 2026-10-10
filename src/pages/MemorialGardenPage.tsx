import React, { useState } from 'react';
import { SAMPLE_MEMORIALS } from '../data/mockData';
import { MemorialRecord } from '../types';
import { Search, Lock, Eye, Calendar, ArrowRight, Flower2 } from 'lucide-react';

interface MemorialGardenPageProps {
  navigate: (route: string) => void;
  onSelectMemorial: (slug: string) => void;
}

export const MemorialGardenPage: React.FC<MemorialGardenPageProps> = ({ navigate, onSelectMemorial }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Only public memorials appear in the garden (Section 15, Page 20)
  const publicMemorials = SAMPLE_MEMORIALS.filter((m) => m.visibility === 'Public');

  const filteredMemorials = publicMemorials.filter((m) =>
    m.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenMemorial = (slug: string) => {
    onSelectMemorial(slug);
    navigate(`/memorial-garden/${slug}`);
  };

  return (
    <div className="py-12 bg-white space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#1F6F6B]/15 text-[#1F6F6B] flex items-center justify-center mx-auto">
            <Flower2 className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#1F6F6B]">
            Permanent Remembrance
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#1A1A1A]">
            Remembering Lives. Preserving Legacies.
          </h1>
          <p className="text-base sm:text-lg text-[#1A1A1A]/75 leading-relaxed">
            Welcome to the Lilies of the Field Memorial Garden. Here we celebrate lives richly lived, offering a quiet digital sanctuary where family and friends can revisit programs, read life stories, and leave heartfelt remembrances.
          </p>
        </div>

        {/* Find a Memorial Search Box */}
        <div className="max-w-xl mx-auto pt-4">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Find a memorial by loved one's name..."
              className="w-full pl-12 pr-4 py-3 bg-[#FAF8F5] border border-slate-300 rounded-sm text-sm text-[#1A1A1A] focus:bg-white focus:border-[#1F6F6B] focus:outline-hidden shadow-xs transition-colors"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3.5 top-3 text-xs text-slate-400 hover:text-slate-700"
              >
                Clear
              </button>
            )}
          </div>
          <div className="text-center text-xs text-slate-500 mt-2">
            Showing {filteredMemorials.length} of {publicMemorials.length} public memorials
          </div>
        </div>

        {/* Memorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMemorials.map((memorial) => (
            <div
              key={memorial.id}
              className="bg-white border border-slate-200 rounded-sm overflow-hidden flex flex-col group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                <img
                  src={memorial.photo}
                  alt={memorial.fullName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs text-[#1F6F6B] text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-xs">
                  {memorial.memorialType}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] group-hover:text-[#1F6F6B] transition-colors">
                    {memorial.fullName}
                  </h3>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#C9973F] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{memorial.birthYear} — {memorial.passingYear}</span>
                  </div>
                  <p className="text-xs text-[#1A1A1A]/70 line-clamp-3 italic pt-1 leading-relaxed">
                    {memorial.quote}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => handleOpenMemorial(memorial.slug)}
                    className="btn-secondary w-full text-xs py-2.5 tracking-wider uppercase font-bold justify-center"
                  >
                    {memorial.memorialType === 'Legacy Tribute'
                      ? 'Visit Legacy Tribute'
                      : 'View Memorial Program'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredMemorials.length === 0 && (
          <div className="text-center py-12 bg-[#FAF8F5] rounded border border-slate-200 max-w-lg mx-auto p-6 space-y-2">
            <p className="text-sm font-semibold text-[#1A1A1A]">No memorials found matching &ldquo;{searchTerm}&rdquo;</p>
            <p className="text-xs text-slate-500">
              Check spelling or verify if the memorial was designated as an unlisted private memorial by the family.
            </p>
          </div>
        )}

        {/* Public vs Private Explanation (Section 15, Page 20) */}
        <div className="bg-[#F5EFE6] border border-[#C9973F]/30 rounded-sm p-8 max-w-4xl mx-auto space-y-4">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#1F6F6B]" />
            <h3 className="font-serif text-xl font-bold text-[#1A1A1A]">
              Memorial Garden Privacy Information
            </h3>
          </div>
          <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
            At Lilies of the Field, honoring family wishes and privacy is paramount:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1 text-xs text-[#1A1A1A]/85">
            <div className="bg-white p-4 rounded border border-slate-200/80 space-y-1.5">
              <span className="font-bold text-[#1F6F6B] flex items-center gap-1.5 text-sm">
                <Eye className="w-4 h-4 text-[#1F6F6B]" />
                Public Memorials
              </span>
              <p>
                Featured with express family permission in our searchable garden. Anyone visiting the site can browse programs, read tributes, and leave memories.
              </p>
            </div>
            <div className="bg-white p-4 rounded border border-slate-200/80 space-y-1.5">
              <span className="font-bold text-[#1A1A1A] flex items-center gap-1.5 text-sm">
                <Lock className="w-4 h-4 text-[#C9973F]" />
                Private (Unlisted) Memorials
              </span>
              <p>
                Excluded from this directory and invisible to public search. Given an unguessable URL and noindex tags so only those holding the private link or printed QR card can access it.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
