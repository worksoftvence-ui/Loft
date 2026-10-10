import React, { useState } from 'react';
import { ArrowLeft, Copy, Check, BookOpen, Heart, Sparkles } from 'lucide-react';
import { POEMS_AND_SCRIPTURES } from '../data/mockData';

interface PoemsPrayersScripturesPageProps {
  navigate: (route: string) => void;
}

export const PoemsPrayersScripturesPage: React.FC<PoemsPrayersScripturesPageProps> = ({ navigate }) => {
  const [activeTab, setActiveTab] = useState<'scriptures' | 'poems'>('scriptures');
  const [copiedTitle, setCopiedTitle] = useState<string | null>(null);

  const handleCopy = (title: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTitle(title);
    setTimeout(() => setCopiedTitle(null), 3000);
  };

  return (
    <div className="py-12 bg-white space-y-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <button
          onClick={() => navigate('/resources')}
          className="text-xs font-bold uppercase tracking-wider text-[#1F6F6B] hover:underline inline-flex items-center gap-1 mb-4"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Resources
        </button>

        {/* Header */}
        <div className="space-y-4 border-b border-slate-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1F6F6B]">
            Inspirational Readings Library
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#1A1A1A]">
            Poems, Prayers & Scriptures
          </h1>
          <p className="text-base sm:text-lg text-[#1A1A1A]/75 leading-relaxed">
            Finding the right words to express love, sorrow, and faith brings tremendous solace. Browse our curated collection of beloved biblical passages and poetic reflections for inclusion in your program, prayer cards, or bookmarks.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
          <button
            onClick={() => setActiveTab('scriptures')}
            className={`text-sm font-bold px-5 py-2.5 rounded-sm transition-colors cursor-pointer ${
              activeTab === 'scriptures'
                ? 'bg-[#1F6F6B] text-white shadow-xs'
                : 'bg-[#FAF8F5] text-slate-700 hover:bg-slate-200'
            }`}
          >
            Sacred Scriptures & Psalms
          </button>
          <button
            onClick={() => setActiveTab('poems')}
            className={`text-sm font-bold px-5 py-2.5 rounded-sm transition-colors cursor-pointer ${
              activeTab === 'poems'
                ? 'bg-[#1F6F6B] text-white shadow-xs'
                : 'bg-[#FAF8F5] text-slate-700 hover:bg-slate-200'
            }`}
          >
            Comforting Poems & Hymns
          </button>
        </div>

        {/* Tab Content */}
        <div className="space-y-8 pt-4">
          {activeTab === 'scriptures' && (
            <div className="space-y-6">
              {POEMS_AND_SCRIPTURES.scriptures.map((s, idx) => {
                const isCopied = copiedTitle === s.title;
                return (
                  <div
                    key={idx}
                    className="bg-[#FAF8F5] border border-slate-200 rounded-sm p-6 sm:p-8 space-y-4"
                  >
                    <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-[#1F6F6B]" />
                        <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">
                          {s.title}
                        </h3>
                      </div>

                      <button
                        onClick={() => handleCopy(s.title, `${s.title}\n\n${s.content}`)}
                        className="btn-secondary text-xs py-1 px-3 inline-flex items-center gap-1.5 bg-white cursor-pointer"
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Scripture</span>
                          </>
                        )}
                      </button>
                    </div>

                    <p className="font-serif text-base sm:text-lg text-[#1A1A1A]/85 italic leading-relaxed whitespace-pre-line">
                      &ldquo;{s.content}&rdquo;
                    </p>
                  </div>
                );
              })}
            </div>
          )}

          {activeTab === 'poems' && (
            <div className="space-y-6">
              {POEMS_AND_SCRIPTURES.poems.map((p, idx) => {
                const isCopied = copiedTitle === p.title;
                return (
                  <div
                    key={idx}
                    className="bg-[#FAF8F5] border border-slate-200 rounded-sm p-6 sm:p-8 space-y-4"
                  >
                    <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                      <div>
                        <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">
                          {p.title}
                        </h3>
                        <span className="text-xs text-[#1F6F6B] font-semibold">
                          By {p.author}
                        </span>
                      </div>

                      <button
                        onClick={() => handleCopy(p.title, `${p.title}\nBy ${p.author}\n\n${p.content}`)}
                        className="btn-secondary text-xs py-1 px-3 inline-flex items-center gap-1.5 bg-white cursor-pointer"
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Poem</span>
                          </>
                        )}
                      </button>
                    </div>

                    <p className="font-serif text-base sm:text-lg text-[#1A1A1A]/85 leading-relaxed whitespace-pre-line italic">
                      {p.content}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Placement Callout */}
        <div className="mt-12 p-8 bg-[#F5EFE6] border border-[#C9973F]/30 rounded-sm text-center space-y-3">
          <Heart className="w-6 h-6 text-[#1F6F6B] mx-auto" />
          <h3 className="font-serif text-2xl text-[#1A1A1A]">Have a Custom Family Poem or Scripture?</h3>
          <p className="text-sm text-[#1A1A1A]/75 max-w-lg mx-auto">
            You can enter your own unique verses, personal written reflections, or favorite song lyrics during order checkout.
          </p>
          <button
            onClick={() => navigate('/place-an-order')}
            className="btn-header-order text-xs py-3 px-8 mt-2"
          >
            Submit with Order
          </button>
        </div>

      </div>
    </div>
  );
};
