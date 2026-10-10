import React, { useState } from 'react';
import {
  ShieldCheck,
  FileText,
  Clock,
  CheckCircle2,
  DollarSign,
  Download,
  PlusCircle,
  AlertCircle,
  Building2,
  LogOut,
  ExternalLink,
} from 'lucide-react';

interface ProviderDashboardPageProps {
  providerName: string;
  onLogout: () => void;
  navigate: (route: string) => void;
}

export const ProviderDashboardPage: React.FC<ProviderDashboardPageProps> = ({
  providerName,
  onLogout,
  navigate,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'pricing' | 'resources'>('overview');

  // Sample Mock Orders for Provider
  const sampleOrders = [
    {
      orderNumber: 'LOTF-2026-089',
      lovedOne: 'Pastor Samuel J. Vance',
      serviceDate: 'October 17, 2026',
      products: 'Classic 4-Page Bifold (250 qty), Prayer Cards (100 qty)',
      status: 'Proof Sent (Awaiting Approval)',
      readyBy: 'October 15, 2026',
      urgent: true,
    },
    {
      orderNumber: 'LOTF-2026-084',
      lovedOne: 'Mildred Clarke',
      serviceDate: 'October 14, 2026',
      products: 'Premium 8-Page Booklet (150 qty)',
      status: 'In Production (Printing)',
      readyBy: 'October 13, 2026',
      urgent: false,
    },
    {
      orderNumber: 'LOTF-2026-077',
      lovedOne: 'Arthur L. Washington',
      serviceDate: 'September 28, 2026',
      products: 'Classic Trifold (300 qty), Easel Welcome Sign (24x36)',
      status: 'Completed & Delivered',
      readyBy: 'September 26, 2026',
      urgent: false,
    },
  ];

  const wholesalePricing = [
    { item: 'Classic 4-Page Bifold (100 qty)', wholesale: '$175', suggestedRetail: '$275–$350' },
    { item: 'Classic 4-Page Bifold (200 qty)', wholesale: '$240', suggestedRetail: '$375–$450' },
    { item: 'Classic Trifold 6-Panel (100 qty)', wholesale: '$225', suggestedRetail: '$325–$425' },
    { item: 'Premium 8-Page Booklet (100 qty)', wholesale: '$340', suggestedRetail: '$495–$650' },
    { item: 'Laminated Prayer Cards (100 qty)', wholesale: '$85', suggestedRetail: '$140–$180' },
    { item: 'Memorial Keepsake Bookmarks (100 qty)', wholesale: '$95', suggestedRetail: '$160–$200' },
    { item: 'Easel Welcome Sign (24" x 36")', wholesale: '$75', suggestedRetail: '$125–$175' },
    { item: 'Digital Memorial Program (QR)', wholesale: '$35', suggestedRetail: '$50' },
    { item: 'Legacy Tribute Page (Annual Hosting)', wholesale: '$90', suggestedRetail: '$125' },
  ];

  return (
    <div className="py-10 bg-[#FAF8F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Partner Bar */}
        <div className="bg-white border border-slate-200 rounded-sm p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#1F6F6B]/15 text-[#1F6F6B] flex items-center justify-center">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#1F6F6B] bg-[#1F6F6B]/10 px-2 py-0.5 rounded">
                  Verified Partner Account
                </span>
                <span className="text-xs text-slate-500">Account # LOTF-DIR-402</span>
              </div>
              <h1 className="font-serif text-2xl font-bold text-[#1A1A1A] mt-0.5">
                {providerName || 'Heritage Funeral Home Services, Brooklyn'}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/place-an-order')}
              className="btn-header-order text-xs py-2.5 px-4 cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              Start New Provider Order
            </button>
            <button
              onClick={onLogout}
              className="p-2.5 text-slate-500 hover:text-rose-600 border border-slate-200 rounded hover:bg-slate-50 transition-colors"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dashboard Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-200">
          <button
            onClick={() => setActiveTab('overview')}
            className={`text-sm font-bold pb-3 px-4 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'overview'
                ? 'border-[#1F6F6B] text-[#1F6F6B]'
                : 'border-transparent text-slate-600 hover:text-[#1A1A1A]'
            }`}
          >
            Orders & Proofs Overview
          </button>
          <button
            onClick={() => setActiveTab('pricing')}
            className={`text-sm font-bold pb-3 px-4 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'pricing'
                ? 'border-[#1F6F6B] text-[#1F6F6B]'
                : 'border-transparent text-slate-600 hover:text-[#1A1A1A]'
            }`}
          >
            Product & Wholesale Price Guide
          </button>
          <button
            onClick={() => setActiveTab('resources')}
            className={`text-sm font-bold pb-3 px-4 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'resources'
                ? 'border-[#1F6F6B] text-[#1F6F6B]'
                : 'border-transparent text-slate-600 hover:text-[#1A1A1A]'
            }`}
          >
            Provider Specs & Submission Guides
          </button>
        </div>

        {/* Tab 1: Orders Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white border border-slate-200 rounded p-5 space-y-1">
                <span className="text-xs uppercase font-bold text-slate-500">Active Production</span>
                <p className="font-serif text-3xl font-bold text-[#1F6F6B]">2 Orders</p>
                <p className="text-xs text-slate-600">1 proof awaiting funeral home sign-off</p>
              </div>
              <div className="bg-white border border-slate-200 rounded p-5 space-y-1">
                <span className="text-xs uppercase font-bold text-slate-500">Next Scheduled Delivery</span>
                <p className="font-serif text-2xl font-bold text-[#C9973F]">Wed, Oct 14 · 10 AM</p>
                <p className="text-xs text-slate-600">Mildred Clarke service materials</p>
              </div>
              <div className="bg-white border border-slate-200 rounded p-5 space-y-1">
                <span className="text-xs uppercase font-bold text-slate-500">Account Billing Terms</span>
                <p className="font-serif text-2xl font-bold text-[#1A1A1A]">Net 15 Days</p>
                <p className="text-xs text-slate-600">Direct funeral home consolidated monthly invoice</p>
              </div>
            </div>

            {/* Orders Table */}
            <div className="bg-white border border-slate-200 rounded-sm overflow-hidden shadow-xs">
              <div className="p-4 border-b border-slate-200 bg-[#FAF8F5] flex items-center justify-between">
                <h3 className="font-serif font-bold text-base text-[#1A1A1A]">
                  Active & Recent Service Orders
                </h3>
                <span className="text-xs text-slate-500">Production Hub</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 uppercase text-[11px] font-bold">
                    <tr>
                      <th className="py-3 px-4">Order #</th>
                      <th className="py-3 px-4">Loved One</th>
                      <th className="py-3 px-4">Products</th>
                      <th className="py-3 px-4">Service Date</th>
                      <th className="py-3 px-4">Ready By</th>
                      <th className="py-3 px-4">Current Status</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {sampleOrders.map((ord) => (
                      <tr key={ord.orderNumber} className="hover:bg-slate-50/80">
                        <td className="py-3 px-4 font-mono font-bold text-slate-900">{ord.orderNumber}</td>
                        <td className="py-3 px-4 font-semibold text-[#1F6F6B]">{ord.lovedOne}</td>
                        <td className="py-3 px-4 text-slate-600 max-w-xs">{ord.products}</td>
                        <td className="py-3 px-4 text-slate-700">{ord.serviceDate}</td>
                        <td className="py-3 px-4 font-semibold text-[#1A1A1A]">{ord.readyBy}</td>
                        <td className="py-3 px-4">
                          <span
                            className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded ${
                              ord.urgent
                                ? 'bg-amber-100 text-amber-900 border border-amber-300'
                                : ord.status.includes('Completed')
                                ? 'bg-emerald-100 text-emerald-900'
                                : 'bg-blue-100 text-blue-900'
                            }`}
                          >
                            {ord.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <button
                            onClick={() => alert(`Reviewing PDF proof for ${ord.lovedOne}`)}
                            className="text-xs font-bold text-[#1F6F6B] hover:underline"
                          >
                            View Proof
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Wholesale Price Guide */}
        {activeTab === 'pricing' && (
          <div className="bg-white border border-slate-200 rounded-sm p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="border-b border-slate-200 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C9973F]">
                Confidential Trade Pricing
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#1A1A1A] mt-1">
                Funeral Service Provider Wholesale Price Guide
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Contract wholesale pricing for authorized funeral homes and mortuary partners. Excludes retail consumer tax.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#FAF8F5] border-b border-slate-200 uppercase text-[11px] font-bold text-slate-700">
                  <tr>
                    <th className="py-3 px-4">Memorial Product</th>
                    <th className="py-3 px-4">Provider Wholesale Cost</th>
                    <th className="py-3 px-4">Recommended Family Retail</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {wholesalePricing.map((pr, idx) => (
                    <tr key={idx} className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-medium text-[#1A1A1A]">{pr.item}</td>
                      <td className="py-3 px-4 font-bold text-[#1F6F6B]">{pr.wholesale}</td>
                      <td className="py-3 px-4 text-slate-600">{pr.suggestedRetail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-[#F5EFE6] rounded border border-[#C9973F]/20 text-xs text-[#1A1A1A]/80">
              <strong>Delivery Notes:</strong> Direct chapel delivery across Brooklyn, Queens, and Manhattan is $30 per service. Orders placed before the daily 6:00 PM ET cutoff begin Day 1 on the following business morning.
            </div>
          </div>
        )}

        {/* Tab 3: Resources & Guides */}
        {activeTab === 'resources' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded p-6 space-y-3">
              <h3 className="font-serif font-bold text-lg text-[#1A1A1A]">
                Print Submission Standards
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                To guarantee crisp, unblurred photographs in final press runs:
              </p>
              <ul className="text-xs text-slate-700 space-y-2 list-disc pl-4">
                <li>Submit original JPEG or PNG files, minimum 300 DPI at full print dimensions.</li>
                <li>Avoid taking camera photos of existing glossy paper prints where reflections occur.</li>
                <li>Obituaries may be submitted as Word docs or pasted text during checkout.</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded p-6 space-y-3">
              <h3 className="font-serif font-bold text-lg text-[#1A1A1A]">
                Direct Family Link Handoff
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                If the family wants to submit their own photos directly without involving the funeral director:
              </p>
              <div className="p-3 bg-slate-50 rounded border border-slate-200 text-xs">
                Provide the family with your account link. We will attach their uploads directly to your active order ticket and alert your desk upon submission.
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
