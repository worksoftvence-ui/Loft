import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Copy, Check, PenTool, CheckCircle2 } from 'lucide-react';

interface ObituaryAssistancePageProps {
  navigate: (route: string) => void;
}

export const ObituaryAssistancePage: React.FC<ObituaryAssistancePageProps> = ({ navigate }) => {
  const [style, setStyle] = useState('warm');
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [birthPlace, setBirthPlace] = useState('');
  const [career, setCareer] = useState('');
  const [passions, setPassions] = useState('');
  const [faith, setFaith] = useState('');
  const [survivors, setSurvivors] = useState('');
  const [generatedDraft, setGeneratedDraft] = useState('');
  const [copied, setCopied] = useState(false);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName) return;

    let draft = '';
    const name = fullName.trim();
    const ageStr = age ? `, age ${age},` : '';
    const bornStr = birthPlace ? ` Born in ${birthPlace},` : '';

    if (style === 'faith') {
      draft = `${name}${ageStr} was called home to be with the Lord peacefully. ${bornStr} ${name} lived a faithful and consecrated life centered on devotion, grace, and serving others.\n\nThroughout their career in ${career || 'their chosen vocation'}, they reflected integrity and humbleness. Outside of work, their heart belonged to ${faith || 'their spiritual community'} and their love for ${passions || 'gathering family and loved ones'}.\n\nThey leave to cherish their blessed memory: ${survivors || 'a devoted host of children, grandchildren, extended family, and church members'}. While dearly missed, we take comfort knowing they have fought the good fight and entered eternal rest.`;
    } else if (style === 'celebration') {
      draft = `With joyful hearts and lasting gratitude, we celebrate the vibrant life of ${name}${ageStr}.${bornStr} ${name} brought infectious energy, laughter, and light into every room they entered.\n\nA dedicated professional in ${career || 'their field'}, their true superpower was their zest for life—especially ${passions || 'music, travel, cooking, and storytelling'}.\n\nTheir spirit continues through ${survivors || 'their beloved family, dear friends, and everyone touched by their kindness'}. We remember not that they departed, but that they lived so fully.`;
    } else if (style === 'short') {
      draft = `${name}${ageStr} passed away peacefully surrounded by family.${bornStr} ${name} dedicated years of service to ${career || 'their family and career'}, known for a generous spirit and love for ${passions || 'life'}.\n\nThey are survived by ${survivors || 'their loving family'}. A memorial celebration will be held to honor their life and legacy.`;
    } else if (style === 'traditional') {
      draft = `${name}${ageStr} passed away into eternal rest.${bornStr} ${name} was an esteemed member of the community who dedicated their professional life to ${career || 'distinguished service'}.\n\nAn active participant in ${faith || 'civic and spiritual life'}, they took great pride in ${passions || 'their home, heritage, and family'}.\n\nThey are survived by ${survivors || 'their loving family members'}. Their memory will forever be held in high honor and reverence.`;
    } else {
      // Warm & Personal (Default)
      draft = `${name}${ageStr} lived a life defined by warmth, generosity, and steadfast love for family and friends.${bornStr} ${name} spent many fulfilling years working in ${career || 'their profession'}, touching countless colleagues and clients along the way.\n\nThose who knew ${name} will forever remember their passion for ${passions || 'family dinners, uplifting conversations, and gardening'}. Their home was always open and their smile was an instant comfort.\n\nThey are lovingly survived by ${survivors || 'their children, grandchildren, and cherished loved ones'}. Their legacy of love, kindness, and laughter will echo in our hearts forever.`;
    }

    setGeneratedDraft(draft);
  };

  const handleCopy = () => {
    if (!generatedDraft) return;
    navigator.clipboard.writeText(generatedDraft);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
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
            Tell Their Story
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#1A1A1A]">
            Obituary Writing Assistance
          </h1>
          <p className="text-base sm:text-lg text-[#1A1A1A]/75 leading-relaxed">
            Every life contains an extraordinary story. If you are struggling with where to begin, our guided 9-point framework and interactive worksheet will help you structure reflections, dates, and personal passions into a touching obituary.
          </p>
        </div>

        {/* Mandatory Policy Warning from Playbook */}
        <div className="p-4 bg-[#F5EFE6] border border-[#C9973F]/30 rounded text-xs text-[#1A1A1A]/85 font-medium flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#C9973F] shrink-0" />
          <span>
            <strong>Editorial Guidance:</strong> The generated obituary draft should always be carefully reviewed, personalized, and approved by the family before final placement into printing.
          </span>
        </div>

        {/* The 9 Guided Areas */}
        <div className="space-y-6 pt-4">
          <h2 className="font-serif text-2xl font-bold text-[#1A1A1A]">
            The 9 Guided Areas of a Life Reflection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            {[
              { num: '1', title: 'Basic Information', desc: 'Full legal name, nicknames, birth date, place of birth, date of passing.' },
              { num: '2', title: 'Family & Relationships', desc: 'Parents, siblings, spouse, children, grandchildren, cherished mentors.' },
              { num: '3', title: 'Life Story & Roots', desc: 'Childhood neighborhood, upbringing, traditions, cultural heritage.' },
              { num: '4', title: 'Education & Career', desc: 'Schools, trade apprenticeships, military service, career accomplishments.' },
              { num: '5', title: 'Personality & Interests', desc: 'Hobbies, humor, culinary talents, music, sports, gardening, storytelling.' },
              { num: '6', title: 'Faith & Values', desc: 'Church home, spiritual practices, favorite biblical verses or philosophies.' },
              { num: '7', title: 'Accomplishments', desc: 'Awards, civic leadership, professional accolades, personal milestones.' },
              { num: '8', title: 'Community Impact', desc: 'Volunteer roles, charity support, neighborhood mentorship, generosity.' },
              { num: '9', title: 'Enduring Legacy', desc: 'Life motto, wisdom imparted to younger generations, how they will be remembered.' },
            ].map((area) => (
              <div key={area.num} className="p-4 bg-[#FAF8F5] border border-slate-200 rounded space-y-1">
                <span className="font-bold text-[#1F6F6B]">0{area.num}. {area.title}</span>
                <p className="text-[#1A1A1A]/70">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Obituary Worksheet Form */}
        <div className="pt-8 border-t border-slate-200">
          <div className="bg-white border-2 border-[#1F6F6B] rounded-sm p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <PenTool className="w-5 h-5 text-[#1F6F6B]" />
              <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">
                Interactive Obituary Information Worksheet
              </h3>
            </div>

            <form onSubmit={handleGenerate} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Loved One&apos;s Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Eleanor Grace Dawson"
                    className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Age
                  </label>
                  <input
                    type="text"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="e.g. 75"
                    className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Place of Birth / Upbringing
                  </label>
                  <input
                    type="text"
                    value={birthPlace}
                    onChange={(e) => setBirthPlace(e.target.value)}
                    placeholder="e.g. Brooklyn, NY"
                    className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Narrative Style
                </label>
                <select
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                  className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                >
                  <option value="warm">Warm & Personal (Balanced, conversational & heartfelt)</option>
                  <option value="faith">Faith-Centered (Scripture themes & spiritual homegoing)</option>
                  <option value="celebration">Celebration of Life (Joyful, energetic & spirited)</option>
                  <option value="traditional">Traditional (Formal dignity & reverence)</option>
                  <option value="short">Short & Simple (Concise announcement & overview)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Career / Vocation / Milestones
                  </label>
                  <input
                    type="text"
                    value={career}
                    onChange={(e) => setCareer(e.target.value)}
                    placeholder="e.g. 32 years teaching literature in NYC Public Schools"
                    className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Passions, Hobbies & Personality
                  </label>
                  <input
                    type="text"
                    value={passions}
                    onChange={(e) => setPassions(e.target.value)}
                    placeholder="e.g. Sunday gardening, peach cobblers, choir singing"
                    className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Church / Faith Community / Affiliations
                  </label>
                  <input
                    type="text"
                    value={faith}
                    onChange={(e) => setFaith(e.target.value)}
                    placeholder="e.g. Grace Tabernacle Church Choir for 40 years"
                    className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Surviving Loved Ones & Family Roster
                  </label>
                  <input
                    type="text"
                    value={survivors}
                    onChange={(e) => setSurvivors(e.target.value)}
                    placeholder="e.g. three children, seven grandchildren, host of nieces"
                    className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary text-xs py-2.5 px-6 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Format Obituary Draft
              </button>
            </form>

            {/* Generated Output */}
            {generatedDraft && (
              <div className="pt-6 border-t border-slate-200 space-y-4 animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1F6F6B]">
                    Formatted Obituary Draft
                  </span>

                  <button
                    onClick={handleCopy}
                    className="btn-secondary text-xs py-1 px-3 bg-white inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Copied to Clipboard</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Draft</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="p-4 bg-[#FAF8F5] border border-slate-200 rounded font-serif text-sm sm:text-base text-[#1A1A1A]/90 whitespace-pre-line leading-relaxed">
                  {generatedDraft}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <p className="text-xs text-slate-500">
                    You can copy this text and paste it into Step 5 of the Place an Order form.
                  </p>
                  <button
                    onClick={() => navigate('/place-an-order')}
                    className="btn-header-order text-xs py-2 px-5"
                  >
                    Use in Place an Order →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
