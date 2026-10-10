import React, { useState } from 'react';
import { ArrowLeft, Copy, Check, Heart, HeartHandshake } from 'lucide-react';
import { ACKNOWLEDGMENTS_SAMPLES } from '../data/mockData';

interface AcknowledgmentsPageProps {
  navigate: (route: string) => void;
}

export const AcknowledgmentsPage: React.FC<AcknowledgmentsPageProps> = ({ navigate }) => {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const handleCopy = (idx: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 3000);
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
            Family Expressions of Gratitude
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#1A1A1A]">
            Acknowledgments Sample Wording
          </h1>
          <p className="text-base sm:text-lg text-[#1A1A1A]/75 leading-relaxed">
            Writing an acknowledgment when grieving can be emotionally challenging. Here are dignified, heartfelt templates expressing gratitude to family, friends, spiritual leaders, and healthcare workers. You are welcome to adapt any of these directly for your program back cover.
          </p>
        </div>

        {/* Samples List */}
        <div className="space-y-6 pt-4">
          {ACKNOWLEDGMENTS_SAMPLES.map((sample, idx) => {
            const isCopied = copiedIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#FAF8F5] border border-slate-200 rounded-sm p-6 sm:p-8 space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#C9973F]">
                      {sample.category}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#1A1A1A] mt-0.5">
                      {sample.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => handleCopy(idx, sample.text)}
                    className="btn-secondary text-xs py-1.5 px-3 bg-white inline-flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Copied Wording</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Wording</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="font-serif text-base text-[#1A1A1A]/85 leading-relaxed italic pt-1">
                  &ldquo;{sample.text}&rdquo;
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Custom Wording Guide */}
        <div className="bg-[#F5EFE6] border border-[#C9973F]/30 rounded-sm p-8 space-y-4">
          <div className="flex items-center gap-2">
            <HeartHandshake className="w-5 h-5 text-[#1F6F6B]" />
            <h3 className="font-serif text-xl font-bold text-[#1A1A1A]">
              Helpful Tips for Back Cover Acknowledgments
            </h3>
          </div>
          <ul className="text-xs sm:text-sm text-[#1A1A1A]/80 space-y-2 list-disc pl-5 leading-relaxed">
            <li>Keep the message concise so it fits comfortably on the back cover alongside pallbearer listings and cemetery interment details.</li>
            <li>If you wish to thank specific individuals by name (e.g., a devoted nurse or childhood neighbor), you can insert a separate paragraph or sentence.</li>
            <li>Close with a brief collective signature, such as: <em>&ldquo;— With Sincere Gratitude, The [Family Name] Family&rdquo;</em>.</li>
          </ul>
        </div>

        {/* Next Step CTA */}
        <div className="text-center pt-4">
          <button
            onClick={() => navigate('/place-an-order')}
            className="btn-header-order text-xs py-3.5 px-8"
          >
            Submit Acknowledgment in Order Builder
          </button>
        </div>

      </div>
    </div>
  );
};
