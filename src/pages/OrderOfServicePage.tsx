import React, { useState } from 'react';
import { ArrowLeft, Copy, Check, ListOrdered } from 'lucide-react';

interface OrderOfServicePageProps {
  navigate: (route: string) => void;
}

export const OrderOfServicePage: React.FC<OrderOfServicePageProps> = ({ navigate }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const formats = [
    {
      id: 'traditional',
      title: 'Traditional Funeral Service',
      subtitle: 'Formal church, chapel, or liturgical service structure',
      outline: [
        'Organ Prelude & Musical Meditation',
        'Processional (Clergy, Funeral Directors & Family)',
        'Opening Sentences & Invocation',
        'Hymn of Comfort (Congregational)',
        'Scripture Readings: Old Testament & New Testament',
        'Prayer of Comfort & Consolation',
        'Musical Selection or Soloist',
        'Reading of the Obituary & Life Story',
        'Acknowledgments & Cards of Condolence',
        'Reflections & Remarks (Limited to 2 minutes each)',
        'Selection / Choral Anthem',
        'The Eulogy (Words of Comfort by Officiating Minister)',
        'Benediction & Parting View',
        'Recessional',
      ],
    },
    {
      id: 'homegoing',
      title: 'Homegoing Celebration',
      subtitle: 'Uplifting gospel-centered celebration of triumph and transition into eternal glory',
      outline: [
        'Musical Prelude of Rejoicing',
        'Processional of Family & Ministers',
        'Invocation / Opening Prayer',
        'Congregational Hymn',
        'Scripture Readings: The Holy Scriptures (Psalms & Gospels)',
        'Prayer of Strength & Thanksgiving',
        'Choral Tribute / Gospel Selection',
        'Reading of the Silent Obituary (Reflective Music)',
        'Expressions of Love & Gratitude (Church, Civic & Family Representatives)',
        'Sermonic Selection',
        'The Homegoing Eulogy / Message of Hope',
        'Benediction & Closing Prayer',
        'Recessional to Graveside',
      ],
    },
    {
      id: 'memorial',
      title: 'Memorial Service (Without Casket Present)',
      subtitle: 'Focused commemorative service held in a chapel, community hall, or garden',
      outline: [
        'Welcome & Gathering Words',
        'Opening Prayer / Words of Remembrance',
        'Musical Reflection or Instrumental Tribute',
        'Scripture Reading or Sacred Poetry',
        'Remembrances by Loved Ones & Colleagues',
        'Video Tribute Presentation',
        'Reading of the Obituary & Significant Accomplishments',
        'Moment of Silent Meditation & Candle Lighting',
        'Closing Blessing & Words of Hope',
        'Reception & Gathering Announcement',
      ],
    },
    {
      id: 'celebration',
      title: 'Celebration of Life',
      subtitle: 'Contemporary, joyful gathering celebrating personal passions, stories, and humor',
      outline: [
        'Welcome & Opening Remarks by Master of Ceremonies',
        'Favorite Song or Uplifting Musical Tribute',
        'Sharing of Stories: "The Life & Joy of Our Beloved"',
        'Visual Slideshow & Favorite Photographs',
        'Readings of Favorite Poems, Quotes, and Lyrics',
        'Open Microphone for Tributes & Memories',
        'Toast to a Life Well-Lived',
        'Closing Thoughts & Family Thank You',
        'Celebration Gathering & Repast Reception',
      ],
    },
  ];

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 3000);
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
            Service Planning Guide
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#1A1A1A]">
            Order of Service Formats
          </h1>
          <p className="text-base sm:text-lg text-[#1A1A1A]/75 leading-relaxed">
            The Order of Service outlines each step of the ceremony so attendees can follow along respectfully. Choose from four customary formats below, or combine elements to suit your family’s traditions.
          </p>
        </div>

        {/* Formats Grid */}
        <div className="space-y-10 pt-4">
          {formats.map((fmt) => {
            const rawText = `${fmt.title}\n${fmt.subtitle}\n\n` + fmt.outline.map((o, idx) => `${idx + 1}. ${o}`).join('\n');
            const isCopied = copiedId === fmt.id;

            return (
              <div
                key={fmt.id}
                className="bg-[#FAF8F5] border border-slate-200 rounded-sm p-6 sm:p-8 space-y-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">
                      {fmt.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#1F6F6B] font-medium mt-0.5">
                      {fmt.subtitle}
                    </p>
                  </div>

                  <button
                    onClick={() => handleCopy(fmt.id, rawText)}
                    className="btn-secondary text-xs py-1.5 px-3.5 inline-flex items-center gap-1.5 bg-white self-start sm:self-auto cursor-pointer"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Copied to Clipboard</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Format</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {fmt.outline.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#1A1A1A]/85 p-2 bg-white rounded border border-slate-100">
                      <span className="font-mono font-bold text-[#1F6F6B] w-6 shrink-0 text-right">
                        {idx + 1}.
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 p-8 bg-[#F5EFE6] border border-[#C9973F]/30 rounded-sm text-center space-y-4">
          <h3 className="font-serif text-2xl text-[#1A1A1A]">Ready to Put Your Order of Service into Print?</h3>
          <p className="text-sm text-[#1A1A1A]/75 max-w-lg mx-auto">
            You can paste your custom order of service directly into our multi-step order builder.
          </p>
          <button
            onClick={() => navigate('/place-an-order')}
            className="btn-header-order text-xs py-3 px-8"
          >
            Start Order with This Format
          </button>
        </div>

      </div>
    </div>
  );
};
