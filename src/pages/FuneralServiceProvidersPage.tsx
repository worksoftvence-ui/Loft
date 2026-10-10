import React, { useState } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Printer,
  Clock,
  Layers,
  Smartphone,
  Truck,
  HeartHandshake,
  Send,
  Lock,
  ArrowRight,
} from 'lucide-react';

interface FuneralServiceProvidersPageProps {
  navigate: (route: string) => void;
  onOpenProviderLogin: () => void;
}

export const FuneralServiceProvidersPage: React.FC<FuneralServiceProvidersPageProps> = ({
  navigate,
  onOpenProviderLogin,
}) => {
  const [bizName, setBizName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bizName || !email) return;
    setSubmitted(true);
  };

  const partnerBenefits = [
    {
      title: 'Professional Custom Design',
      desc: 'Dedicated memorial graphic designers who understand mortuary dignity, typographic hierarchy, and cultural nuances.',
      icon: HeartHandshake,
    },
    {
      title: 'Consistent Print Quality',
      desc: 'Heavyweight archival cardstock, calibrated color reproduction, and crisp machine-creased folding on every order.',
      icon: Printer,
    },
    {
      title: 'Reliable Production & Scheduling',
      desc: 'Transparent daily 6:00 PM ET cutoff with guaranteed delivery schedules so your staff never worries about service deadlines.',
      icon: Clock,
    },
    {
      title: 'Multiple Memorial Products',
      desc: 'One seamless source for matching programs, prayer cards, bookmarks, tribute boards, and guest registration books.',
      icon: Layers,
    },
    {
      title: 'Digital Memorial Options',
      desc: 'Offer modern families QR-accessible digital flipbooks and multimedia Legacy Tribute webpages with guestbooks.',
      icon: Smartphone,
    },
    {
      title: 'Direct Funeral Home Delivery',
      desc: 'Scheduled local delivery directly to your chapel, church, or mortuary reception desk across the New York area.',
      icon: Truck,
    },
    {
      title: 'One Memorial Production Partner',
      desc: 'Consolidate multiple vendor relationships into a single, responsive team that treats your funeral home as family.',
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="py-12 bg-white space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#1F6F6B]/15 text-[#1F6F6B] flex items-center justify-center mx-auto">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#1F6F6B]">
            Professional Partnership Program
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#1A1A1A]">
            Memorial Printing Support for Funeral Professionals
          </h1>
          <p className="text-base sm:text-lg text-[#1A1A1A]/75 leading-relaxed">
            Reliable memorial design and production support for funeral homes, directors, and celebrants across Brooklyn and the greater New York metropolitan area.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => navigate('/place-an-order')}
              className="btn-header-order text-xs py-3 px-6"
            >
              Submit an Order as Provider
            </button>
            <button
              onClick={onOpenProviderLogin}
              className="btn-secondary text-xs py-2.5 px-6"
            >
              <Lock className="w-4 h-4" />
              Provider Portal Sign In
            </button>
          </div>
        </div>

        {/* Why Partner With Lilies? Seven Benefits */}
        <div className="pt-8 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1F6F6B]">
              The Partner Advantage
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A]">
              Why Partner With Lilies of the Field?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerBenefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FAF8F5] border border-slate-200 rounded p-6 space-y-3 hover:border-[#1F6F6B]/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded bg-[#1F6F6B]/10 text-[#1F6F6B] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#1A1A1A]">
                    {b.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#1A1A1A]/75 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* How Provider Ordering Works (5 Steps) */}
        <div className="pt-8 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1F6F6B]">
              Streamlined Operations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A]">
              How Provider Ordering Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: '1', title: 'Submit Service Details', desc: 'Director locks in dates, loved one info, and product packages.' },
              { step: '2', title: 'Content Submission', desc: 'Upload materials directly or send our family link for photos & obituary.' },
              { step: '3', title: 'Priority Design', desc: 'Designers prepare high-res digital proof for funeral home or family sign-off.' },
              { step: '4', title: 'Direct Sign-Off', desc: 'Approve digital proof online to start high-speed press runs immediately.' },
              { step: '5', title: 'Chapel Delivery', desc: 'Delivered directly to your funeral home reception desk before viewing hours.' },
            ].map((st) => (
              <div key={st.step} className="bg-white border border-slate-200 rounded p-5 text-center space-y-2">
                <span className="w-8 h-8 rounded-full bg-[#1F6F6B] text-white font-bold text-sm flex items-center justify-center mx-auto">
                  {st.step}
                </span>
                <h4 className="font-bold text-sm text-[#1A1A1A]">{st.title}</h4>
                <p className="text-xs text-slate-600">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Request Provider Access Form & Provider Resources */}
        <div className="pt-8 border-t border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Form */}
          <div className="lg:col-span-7 bg-[#FAF8F5] border border-slate-200 rounded-sm p-8 space-y-6">
            <div className="border-b border-slate-200 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C9973F]">
                New Partner Registration
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] mt-1">
                Request Provider Access
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Providers are approved by our team. Complete this form to receive your dedicated account credentials and access the Wholesale Product & Price Guide.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 text-emerald-900 rounded space-y-2 text-center">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-base">Request Submitted Successfully</h4>
                <p className="text-xs">
                  Thank you, <strong>{contactName}</strong>. Our director liaison will review your business credentials for <strong>{bizName}</strong> and contact you at <strong>{email}</strong> within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Funeral Home / Business Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={bizName}
                      onChange={(e) => setBizName(e.target.value)}
                      placeholder="e.g. Heritage Funeral Services"
                      className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Contact Name / Director *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="e.g. James R. Bennett"
                      className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="director@funeralhome.com"
                      className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(718) 555-0199"
                      className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      City / Borough
                    </label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. Brooklyn, NY"
                      className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Special Inquiries or Average Weekly Services
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your chapel facilities, preferred courier timing, or specific requirements..."
                    className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary text-xs py-3 px-6 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  Submit Provider Application
                </button>
              </form>
            )}
          </div>

          {/* Provider Resources Callout */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#F5EFE6] border border-[#C9973F]/30 rounded-sm p-6 space-y-4">
              <h3 className="font-serif text-xl font-bold text-[#1A1A1A]">
                Provider Resources & Documents
              </h3>
              <p className="text-xs text-[#1A1A1A]/80 leading-relaxed">
                Registered providers gain immediate access to our internal documentation, submission specs, and wholesale billing structures:
              </p>

              <ul className="space-y-2 text-xs text-[#1A1A1A]/85">
                <li className="flex items-center gap-2 p-2 bg-white rounded border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#1F6F6B] shrink-0" />
                  <span>Product & Wholesale Price Guide (Protected)</span>
                </li>
                <li className="flex items-center gap-2 p-2 bg-white rounded border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#1F6F6B] shrink-0" />
                  <span>Program Options & Stock Finish Specifications</span>
                </li>
                <li className="flex items-center gap-2 p-2 bg-white rounded border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#1F6F6B] shrink-0" />
                  <span>Turnaround Information & 6 PM Cutoff Rules</span>
                </li>
                <li className="flex items-center gap-2 p-2 bg-white rounded border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#1F6F6B] shrink-0" />
                  <span>Order Submission Requirements & Proof Sign-Off</span>
                </li>
              </ul>

              <button
                onClick={onOpenProviderLogin}
                className="btn-primary w-full text-xs py-2.5 justify-center mt-2 cursor-pointer"
              >
                Log In to Download Resources
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
