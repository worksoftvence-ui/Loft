import React from 'react';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';

interface CreatingMemorialProgramPageProps {
  navigate: (route: string) => void;
}

export const CreatingMemorialProgramPage: React.FC<CreatingMemorialProgramPageProps> = ({ navigate }) => {
  const steps = [
    {
      num: 1,
      title: 'Choosing a Program Format & Style',
      summary: 'Determine the structure that best fits your ceremony and content length.',
      detail: 'Choose between a Classic 4-Page Bifold (ideal for standard services), a 6-Panel Trifold (extra space for photos), or a Premium 8-Page Booklet for multi-chapter family retrospectives.',
    },
    {
      num: 2,
      title: 'The Front Cover Presentation',
      summary: 'Select your hero photograph, title caption, and dates.',
      detail: 'Traditional titles include "In Loving Memory of", "A Celebration of the Life and Legacy of", or "Homegoing Celebration". Pair with birth and passing dates, service location, and matching floral motifs.',
    },
    {
      num: 3,
      title: 'Composing the Obituary or Life Reflection',
      summary: 'Craft a narrative that captures personality, milestones, and family roots.',
      detail: 'Families submit a completed obituary. Include early life, education, career, military service, marriage, children, hobbies, church involvement, and surviving loved ones.',
    },
    {
      num: 4,
      title: 'The Order of Service (Liturgy & Program)',
      summary: 'Coordinate with your pastor, celebrant, or funeral director.',
      detail: 'Detail each movement of the service: musical preludes, processional, invocations, scripture passages, musical reflections, acknowledgments, remarks, the eulogy, and recessional.',
    },
    {
      num: 5,
      title: 'Photographs & Collage Curation',
      summary: 'Gather high-resolution family photographs.',
      detail: 'Submit 15–20 photos for a standard collage page, or 35–40 for an 8-page booklet. Send original files rather than phone screenshots to prevent blurriness in print.',
    },
    {
      num: 6,
      title: 'Words of Acknowledgment',
      summary: 'Express sincere thanks to everyone who supported the family.',
      detail: 'Thank friends, church members, hospital/hospice staff, caregivers, and those who sent cards, floral arrangements, food, prayers, and calls during bereavement.',
    },
    {
      num: 7,
      title: 'The Back Cover Layout',
      summary: 'Formal acknowledgments, pallbearers, and interment information.',
      detail: 'The back cover customarily displays the acknowledgment, closing poem or scripture, names of active and honorary pallbearers, cemetery name, and repast location.',
    },
    {
      num: 8,
      title: 'Coordinating Inserts',
      summary: 'Separate loose leaves for specialized notices.',
      detail: 'If you need extra room for repast maps, extended family rosters, or specialized tributes without altering booklet binding, coordinating loose inserts provide an ideal solution.',
    },
    {
      num: 9,
      title: 'Additional Pages for Expanded Tributes',
      summary: 'Bound multi-leaf expansions.',
      detail: 'When reflections require additional pages bound directly into the saddle-stitched spine, we expand the program in clean 4-page spreads.',
    },
    {
      num: 10,
      title: 'Coordinating Keepsakes',
      summary: 'Prayer cards, bookmarks, and guestbooks.',
      detail: 'Maintain aesthetic unity across the entire service by ordering matching laminated prayer cards, tasselled bookmarks, and easel welcome boards in the identical floral theme.',
    },
    {
      num: 11,
      title: 'Digital Memorial Options',
      summary: 'QR codes for instant mobile sharing.',
      detail: 'Add a Digital Memorial Program ($50) or comprehensive Legacy Tribute Page ($125) accessible instantly via custom QR code printed on the program.',
    },
  ];

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
            Step-by-Step Planning Guide
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#1A1A1A]">
            Creating a Memorial Program
          </h1>
          <p className="text-base sm:text-lg text-[#1A1A1A]/75 leading-relaxed">
            Follow our 11-step visual planning roadmap to prepare your content, photographs, and service details with confidence and peace of mind.
          </p>
        </div>

        {/* Steps List */}
        <div className="space-y-6 pt-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-[#FAF8F5] border border-slate-200 rounded-sm p-6 sm:p-7 flex flex-col sm:flex-row items-start gap-5 hover:border-[#1F6F6B]/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-[#1F6F6B] text-white font-serif font-bold text-xl flex items-center justify-center shrink-0">
                {step.num}
              </div>

              <div className="space-y-2 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="font-serif text-xl font-bold text-[#1A1A1A]">
                    {step.title}
                  </h3>
                  <span className="text-xs font-semibold text-[#C9973F]">
                    Step {step.num} of 11
                  </span>
                </div>
                <p className="text-sm font-semibold text-[#1F6F6B]">
                  {step.summary}
                </p>
                <p className="text-xs sm:text-sm text-[#1A1A1A]/75 leading-relaxed pt-1">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 p-8 bg-[#F5EFE6] border border-[#C9973F]/30 rounded-sm text-center space-y-4">
          <h3 className="font-serif text-2xl text-[#1A1A1A]">Ready to Begin Your Memorial Order?</h3>
          <p className="text-sm text-[#1A1A1A]/75 max-w-lg mx-auto">
            Use our guided online order builder to enter service details, upload photos, and select your program format.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => navigate('/place-an-order')}
              className="btn-header-order text-xs py-3 px-6"
            >
              Start Your Order Now
            </button>
            <button
              onClick={() => navigate('/schedule-a-consultation')}
              className="btn-secondary text-xs bg-white"
            >
              Schedule Consultation
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
