import React, { useState } from 'react';
import { SAMPLE_MEMORIALS } from '../data/mockData';
import { MemorialRecord } from '../types';
import {
  Calendar,
  Clock,
  MapPin,
  Heart,
  BookOpen,
  Share2,
  QrCode,
  Send,
  MessageSquare,
  Flower2,
  X,
  CheckCircle2,
} from 'lucide-react';

interface LegacyTributeDetailPageProps {
  slug: string;
  navigate: (route: string) => void;
}

export const LegacyTributeDetailPage: React.FC<LegacyTributeDetailPageProps> = ({ slug, navigate }) => {
  const memorial = SAMPLE_MEMORIALS.find((m) => m.slug === slug) || SAMPLE_MEMORIALS[0];

  const [condolences, setCondolences] = useState(memorial.condolences || []);
  const [authorName, setAuthorName] = useState('');
  const [relation, setRelation] = useState('');
  const [message, setMessage] = useState('');
  const [showQrModal, setShowQrModal] = useState(false);
  const [showViewerModal, setShowViewerModal] = useState(false);
  const [tributeSuccess, setTributeSuccess] = useState(false);

  const handleAddCondolence = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !message.trim()) return;

    const newCondolence = {
      id: `c-${Date.now()}`,
      author: authorName,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      relation: relation || 'Friend',
      message: message,
    };

    setCondolences([newCondolence, ...condolences]);
    setAuthorName('');
    setRelation('');
    setMessage('');
    setTributeSuccess(true);
    setTimeout(() => setTributeSuccess(false), 5000);
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen pb-20">
      
      {/* 1. Hero Tribute Header (Section 15, Page 21) */}
      <div className="bg-white border-b border-[#C9973F]/30 pt-10 pb-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <button
            onClick={() => navigate('/memorial-garden')}
            className="text-xs font-bold text-[#1F6F6B] hover:underline uppercase tracking-wider mb-2 inline-flex items-center gap-1"
          >
            ← Back to Memorial Garden
          </button>

          {/* Hero Portrait */}
          <div className="relative w-40 h-40 sm:w-52 sm:h-52 mx-auto rounded-full overflow-hidden border-4 border-[#C9973F] shadow-xl p-1 bg-white">
            <img
              src={memorial.photo}
              alt={memorial.fullName}
              className="w-full h-full object-cover rounded-full"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1F6F6B]">
              In Loving Memory & Celebration
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl text-[#1A1A1A] font-bold">
              {memorial.fullName}
            </h1>
            <p className="font-serif text-lg sm:text-xl text-[#C9973F] font-medium">
              {memorial.birthDate} — {memorial.passingDate}
            </p>
          </div>

          {memorial.quote && (
            <div className="max-w-2xl mx-auto pt-2">
              <p className="font-serif italic text-base sm:text-lg text-[#1A1A1A]/80 leading-relaxed bg-[#F5EFE6] p-4 rounded-sm border-y border-[#C9973F]/20">
                {memorial.quote}
              </p>
            </div>
          )}

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <button
              onClick={() => setShowViewerModal(true)}
              className="btn-primary text-xs py-2.5 px-5"
            >
              <BookOpen className="w-4 h-4" />
              View Memorial Program
            </button>
            <button
              onClick={() => setShowQrModal(true)}
              className="btn-secondary text-xs py-2 px-4"
            >
              <QrCode className="w-4 h-4" />
              Scan & Share QR
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 space-y-14">
        
        {/* 2. Their Story (Biography) */}
        <section className="bg-white rounded-sm border border-slate-200 p-8 sm:p-10 shadow-xs space-y-5">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
            <div className="p-2 rounded-full bg-[#1F6F6B]/10 text-[#1F6F6B]">
              <Flower2 className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A]">
              Their Story
            </h2>
          </div>

          <div className="prose text-[#1A1A1A]/85 text-base sm:text-lg leading-relaxed whitespace-pre-line space-y-4 font-normal">
            {memorial.lifeStory}
          </div>
        </section>

        {/* 3. Celebrating Their Life (Photo Gallery) */}
        {memorial.gallery && memorial.gallery.length > 0 && (
          <section className="bg-white rounded-sm border border-slate-200 p-8 sm:p-10 shadow-xs space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A]">
                Celebrating Their Life
              </h2>
              <span className="text-xs text-slate-500">{memorial.gallery.length} Treasured Moments</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {memorial.gallery.map((imgUrl, i) => (
                <div key={i} className="aspect-4/3 rounded overflow-hidden shadow-xs border border-slate-200 bg-slate-100 group">
                  <img
                    src={imgUrl}
                    alt={`${memorial.fullName} remembrance photo ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 4. Service Information */}
        {memorial.serviceInfo && (
          <section className="bg-white rounded-sm border border-slate-200 p-8 sm:p-10 shadow-xs space-y-5">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] border-b border-slate-100 pb-3">
              Service Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#1A1A1A]/85">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-[#1F6F6B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-[#1A1A1A]">Service Date</span>
                    <span>{memorial.serviceInfo.date}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#1F6F6B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-[#1A1A1A]">Time</span>
                    <span>{memorial.serviceInfo.time}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#1F6F6B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-[#1A1A1A]">Location</span>
                    <span>{memorial.serviceInfo.location}</span>
                  </div>
                </div>

                {memorial.serviceInfo.officiant && (
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#C9973F] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block text-[#1A1A1A]">Officiant</span>
                      <span>{memorial.serviceInfo.officiant}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {memorial.serviceInfo.reception && (
              <div className="p-4 bg-[#F5EFE6] rounded border border-[#C9973F]/20 text-xs text-[#1A1A1A]/80 mt-4">
                <span className="font-bold text-[#1F6F6B] block mb-0.5">Reception & Repast:</span>
                {memorial.serviceInfo.reception}
              </div>
            )}
          </section>
        )}

        {/* 5. Words of Remembrance (Condolence Guestbook) */}
        <section className="bg-white rounded-sm border border-slate-200 p-8 sm:p-10 shadow-xs space-y-8">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A]">
                Words of Remembrance
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Share a memory, prayer, or tribute with the family.
              </p>
            </div>
            <MessageSquare className="w-6 h-6 text-[#1F6F6B]" />
          </div>

          {/* Submission Form */}
          <form onSubmit={handleAddCondolence} className="bg-[#FAF8F5] p-5 rounded-sm border border-slate-200 space-y-4">
            <h3 className="font-serif font-bold text-base text-[#1A1A1A]">Leave a Tribute Message</h3>
            
            {tributeSuccess && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Thank you. Your memory has been added to the family remembrance book.
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  placeholder="e.g. Sandra Washington"
                  className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Relationship to Loved One
                </label>
                <input
                  type="text"
                  value={relation}
                  onChange={(e) => setRelation(e.target.value)}
                  placeholder="e.g. Niece, Lifelong Friend, Neighbor"
                  className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Your Memory or Message *
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share a fond memory, scripture, or comforting reflection..."
                className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden resize-none"
              />
            </div>

            <button
              type="submit"
              className="btn-primary text-xs py-2 px-5 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              Post Tribute
            </button>
          </form>

          {/* List of Condolences */}
          <div className="space-y-4 pt-2">
            {condolences.map((c) => (
              <div key={c.id} className="p-4 bg-white rounded border border-slate-100 shadow-xs space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-[#1A1A1A]">{c.author}</span>
                    {c.relation && <span className="text-slate-500 ml-2">({c.relation})</span>}
                  </div>
                  <span className="text-slate-400">{c.date}</span>
                </div>
                <p className="text-sm text-[#1A1A1A]/80 leading-relaxed font-normal">
                  {c.message}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Studio Branding Footnote */}
        <div className="text-center pt-6 space-y-2 text-xs text-slate-500">
          <p className="font-serif italic text-sm text-[#1F6F6B]">
            Preserved with care by Lilies of the Field Memorial Keepsakes · Brooklyn, NY
          </p>
          <p>
            To create a lasting Legacy Tribute or order memorial keepsakes, contact us at (718) 924-2004 or orders@liliesofthefield.design
          </p>
        </div>

      </div>

      {/* QR Code Share Modal */}
      {showQrModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-lg shadow-2xl max-w-sm w-full p-6 text-center space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-serif font-bold text-lg text-[#1A1A1A]">Scan & Share Tribute</h3>
              <button onClick={() => setShowQrModal(false)} className="text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-[#FAF8F5] p-6 rounded border border-slate-200 flex flex-col items-center">
              <div className="w-48 h-48 bg-white p-3 border-2 border-[#1A1A1A] rounded shadow-sm flex items-center justify-center">
                {/* SVG QR Code Simulation */}
                <div className="w-full h-full flex flex-col justify-between p-2">
                  <div className="flex justify-between">
                    <div className="w-10 h-10 border-4 border-black p-1"><div className="w-full h-full bg-black"></div></div>
                    <div className="w-10 h-10 border-4 border-black p-1"><div className="w-full h-full bg-black"></div></div>
                  </div>
                  <div className="text-center font-mono font-bold text-[10px] text-black">
                    LOTF TRIBUTE
                  </div>
                  <div className="flex justify-between">
                    <div className="w-10 h-10 border-4 border-black p-1"><div className="w-full h-full bg-black"></div></div>
                    <div className="w-8 h-8 bg-black"></div>
                  </div>
                </div>
              </div>
              <p className="text-xs font-bold text-[#1F6F6B] mt-3">
                {memorial.fullName}
              </p>
              <p className="text-[11px] text-slate-500 mt-1">
                Permanent, Non-Expiring Memorial Link
              </p>
            </div>

            <p className="text-xs text-slate-600">
              Point your smartphone camera to immediately open this commemorative legacy page.
            </p>

            <button
              onClick={() => setShowQrModal(false)}
              className="btn-primary w-full text-xs py-2"
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* Program Flipbook Viewer Modal */}
      {showViewerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
          <div className="bg-white rounded-lg shadow-2xl max-w-3xl w-full p-6 space-y-4">
            <div className="flex justify-between items-center border-b border-slate-200 pb-3">
              <div>
                <h3 className="font-serif font-bold text-xl text-[#1A1A1A]">
                  Memorial Program Digital Viewer
                </h3>
                <p className="text-xs text-slate-500">
                  {memorial.fullName} · Commemorative Program
                </p>
              </div>
              <button onClick={() => setShowViewerModal(false)} className="text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-16/9 bg-[#F5EFE6] rounded border border-[#C9973F]/30 p-6 flex flex-col items-center justify-center text-center space-y-4">
              <BookOpen className="w-12 h-12 text-[#1F6F6B]" />
              <div>
                <h4 className="font-serif font-bold text-lg text-[#1A1A1A]">
                  Simplebooklet Interactive Viewer
                </h4>
                <p className="text-xs text-[#1A1A1A]/75 max-w-md mx-auto mt-1">
                  Presents complete high-resolution dual-page spreads with page-turn animations, pinch zoom, and printable PDF options.
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowViewerModal(false)}
                  className="btn-primary text-xs py-2 px-5"
                >
                  Close Viewer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
