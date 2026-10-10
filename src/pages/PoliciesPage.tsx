import React, { useState, useEffect } from 'react';
import { ShieldCheck, FileCheck, Lock, Eye, AlertCircle } from 'lucide-react';

interface PoliciesPageProps {
  initialTab?: string;
  navigate: (route: string) => void;
}

export const PoliciesPage: React.FC<PoliciesPageProps> = ({ initialTab = 'proofing', navigate }) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  return (
    <div className="py-12 bg-white space-y-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="border-b border-slate-200 pb-6 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1F6F6B]">
            Studio Terms & Standards
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A]">
            Policies & Customer Standards
          </h1>
        </div>

        {/* Policy Tab Nav */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3">
          {[
            { id: 'proofing', label: 'Order & Proofing Policies', route: '/order-and-proofing-policies' },
            { id: 'privacy', label: 'Privacy Policy', route: '/privacy-policy' },
            { id: 'terms', label: 'Terms & Conditions', route: '/terms-and-conditions' },
            { id: 'accessibility', label: 'Accessibility Statement', route: '/accessibility' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                navigate(tab.route);
              }}
              className={`text-xs sm:text-sm font-bold px-4 py-2 rounded transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#1F6F6B] text-white shadow-xs'
                  : 'bg-[#FAF8F5] text-slate-700 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Order & Proofing Policies */}
        {activeTab === 'proofing' && (
          <div className="space-y-6 text-sm text-[#1A1A1A]/85 leading-relaxed">
            <h2 className="font-serif text-2xl font-bold text-[#1A1A1A]">
              Order, Proofing & Turnaround Policies
            </h2>

            <div className="p-4 bg-[#FAF8F5] border border-slate-200 rounded space-y-2 text-xs">
              <span className="font-bold text-[#1F6F6B] block">Production Clock Rules:</span>
              <p>
                The production turnaround clock begins <strong>only after full payment/deposit is confirmed and all required photographs and text materials are submitted</strong>. Submitting an initial form locks in your file submission, but press scheduling begins after sign-off.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-[#1A1A1A]">1. Digital Proof Approval (Mandatory)</h3>
              <p>
                Before any job proceeds to physical printing, Lilies of the Field issues a complete high-resolution digital proof (PDF) to the client or designated funeral director. <strong>Printing will never commence without written approval (email confirmation or electronic sign-off).</strong>
              </p>
              <p>
                Please inspect all names, dates, times, church addresses, pallbearer spellings, hymn lyrics, and image placements. Once a proof is formally approved, Lilies of the Field is not liable for typographical errors present on the approved document.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-[#1A1A1A]">2. Daily 6:00 PM Eastern Cutoff</h3>
              <p>
                Our production scheduling cutoff is 6:00 PM ET, Monday through Friday. Approvals received before 6:00 PM ET count that business day as Day 1. Approvals received after 6:00 PM ET or over weekends begin the count on the following business day.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-[#1A1A1A]">3. Rush Orders & Expedited Press Schedules</h3>
              <p>
                Expedited turnaround schedules are subject to studio press capacity and formal approval by Lilies of the Field. Rush fees are billed separately and are not combined into individual product prices.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-[#1A1A1A]">4. Delivery & Pickup Arrangements</h3>
              <p>
                Direct funeral home and chapel deliveries in Brooklyn, Queens, Manhattan, and surrounding areas are scheduled in coordination with service directors. Courier and shipping delays resulting from carrier disruptions, severe weather, or unconfirmed delivery addresses are beyond our direct control.
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: Privacy Policy */}
        {activeTab === 'privacy' && (
          <div className="space-y-6 text-sm text-[#1A1A1A]/85 leading-relaxed">
            <h2 className="font-serif text-2xl font-bold text-[#1A1A1A]">
              Privacy & Family Data Protection Policy
            </h2>
            <p>
              Lilies of the Field deeply respects the sacred confidentiality of family information. We do not sell, rent, or lease personal contact details, family correspondence, or obituary records to third parties.
            </p>
            <div className="space-y-3">
              <h3 className="font-bold text-[#1A1A1A]">Memorial Garden Public vs. Private Designation</h3>
              <p>
                By default, family contact phone numbers, emails, and financial details are never published on our site. When you select a Digital Memorial or Legacy Tribute Page, you may designate it as:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs">
                <li><strong>Public:</strong> Discoverable in the Memorial Garden gallery for attendees to view and commemorate.</li>
                <li><strong>Private (Unlisted):</strong> Completely hidden from the public gallery, assigned an unguessable private link, and configured with noindex search engine headers.</li>
              </ul>
            </div>
            <p className="text-xs text-slate-500">
              Photographs uploaded to our studio are archived exclusively for reorders and printing, and will never be shared without written consent.
            </p>
          </div>
        )}

        {/* Tab 3: Terms & Conditions */}
        {activeTab === 'terms' && (
          <div className="space-y-6 text-sm text-[#1A1A1A]/85 leading-relaxed">
            <h2 className="font-serif text-2xl font-bold text-[#1A1A1A]">
              Terms & Conditions of Service
            </h2>
            <p>
              By accessing our website or placing an order with Lilies of the Field Memorial Keepsakes, you agree to comply with our commercial terms:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Custom Manufacturing:</strong> Because all memorial keepsakes are custom printed and personalized, completed orders cannot be canceled or refunded once press production has begun.</li>
              <li><strong>Copyright & Content:</strong> Clients warrant that they possess all legal rights to reproduce submitted photographs, lyrics, and family portraits.</li>
              <li><strong>Digital Memorial Hosting:</strong> Legacy Tribute Pages include twelve (12) months of active online hosting. Ongoing annual hosting renewals are $25/year.</li>
            </ul>
          </div>
        )}

        {/* Tab 4: Accessibility Statement */}
        {activeTab === 'accessibility' && (
          <div className="space-y-6 text-sm text-[#1A1A1A]/85 leading-relaxed">
            <h2 className="font-serif text-2xl font-bold text-[#1A1A1A]">
              Accessibility Statement
            </h2>
            <p>
              Lilies of the Field is committed to digital accessibility for all users, including older family members and individuals with visual, hearing, cognitive, or motor impairments.
            </p>
            <p>
              Our website is designed following WCAG 2.1 AA standards:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs">
              <li>Generous body typography (18px baseline) for optimal reading comfort.</li>
              <li>High contrast ratio for all buttons, links, and text elements against backgrounds.</li>
              <li>Visible keyboard focus outlines and semantic HTML hierarchy.</li>
              <li>Descriptive alt text for all memorial imagery and icons.</li>
            </ul>
            <p className="pt-2 text-xs text-slate-600">
              If you encounter any difficulty accessing any portion of this website, please call us at (718) 924-2004 or email orders@liliesofthefield.design and our team will gladly provide assistance.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};
