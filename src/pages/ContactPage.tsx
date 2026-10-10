import React, { useState } from 'react';
import {
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Youtube,
  Send,
  CheckCircle2,
  Calendar,
  ShieldCheck,
  HelpCircle,
  Package,
} from 'lucide-react';

interface ContactPageProps {
  navigate: (route: string) => void;
  onOpenProviderLogin: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ navigate, onOpenProviderLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiryType, setInquiryType] = useState('New Order');
  const [lovedOneName, setLovedOneName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
  };

  return (
    <div className="py-12 bg-white space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header (Section 14, Page 14) */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1F6F6B]">
            Studio Support & Inquiries
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#1A1A1A]">
            We&apos;re Here to Help
          </h1>
          <p className="text-base sm:text-lg text-[#1A1A1A]/75 leading-relaxed">
            Whether you have questions regarding turnarounds, photo submission standards, or custom memorial stationery, our studio team is ready to assist you.
          </p>
        </div>

        {/* How Can We Help? 3 Cards (Section 14, Page 14) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="bg-[#FAF8F5] border border-slate-200 rounded p-6 space-y-3">
            <div className="w-10 h-10 rounded bg-[#1F6F6B]/10 text-[#1F6F6B] flex items-center justify-center">
              <HelpCircle className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#1A1A1A]">General Questions</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Explore product catalogs, material finishes, photo capacities, and turnaround rules before placing your order.
            </p>
            <button
              onClick={() => navigate('/faqs')}
              className="text-xs font-bold text-[#1F6F6B] hover:underline block pt-2"
            >
              Browse FAQs →
            </button>
          </div>

          <div className="bg-[#FAF8F5] border border-slate-200 rounded p-6 space-y-3">
            <div className="w-10 h-10 rounded bg-[#1F6F6B]/10 text-[#1F6F6B] flex items-center justify-center">
              <Package className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#1A1A1A]">Existing Orders</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Inquire about active proof statuses, submit additional photos, or arrange pickup and courier schedules.
            </p>
            <a
              href="mailto:orders@liliesofthefield.design"
              className="text-xs font-bold text-[#1F6F6B] hover:underline block pt-2"
            >
              Email Order Desk →
            </a>
          </div>

          <div className="bg-[#FAF8F5] border border-slate-200 rounded p-6 space-y-3">
            <div className="w-10 h-10 rounded bg-[#1F6F6B]/10 text-[#1F6F6B] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#1A1A1A]">Funeral Service Providers</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Funeral homes, mortuary arrangers, and chapel directors can submit wholesale orders or request account access.
            </p>
            <button
              onClick={onOpenProviderLogin}
              className="text-xs font-bold text-[#1F6F6B] hover:underline block pt-2"
            >
              Provider Portal Sign In →
            </button>
          </div>
        </div>

        {/* Virtual Consultation Callout Block */}
        <div className="bg-[#F5EFE6] border border-[#C9973F]/30 rounded-sm p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1F6F6B]">
              Personalized Planning
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A1A]">
              Need One-on-One Assistance?
            </h3>
            <p className="text-xs sm:text-sm text-[#1A1A1A]/80">
              Schedule a complimentary 30-minute virtual consultation with an experienced memorial layout designer.
            </p>
          </div>

          <button
            onClick={() => navigate('/schedule-a-consultation')}
            className="btn-primary text-xs py-3 px-6 whitespace-nowrap cursor-pointer shrink-0"
          >
            <Calendar className="w-4 h-4" />
            Schedule Consultation
          </button>
        </div>

        {/* Contact Form and Studio Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-6 border-t border-slate-200">
          
          {/* Send Us a Message Form (Section 14, Page 14) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-sm p-6 sm:p-8 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-3">
              <h2 className="font-serif text-2xl font-bold text-[#1A1A1A]">
                Send Us a Message
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Fill out the form below and our studio team will respond promptly during business hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-emerald-50 border border-emerald-200 text-emerald-900 rounded text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="font-bold text-lg">Thank You, {name}</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  We have received your message regarding <strong>{inquiryType}</strong>. Our team will review your notes and reply to <strong>{email}</strong> during regular business hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setMessage('');
                  }}
                  className="btn-secondary text-xs py-1.5 px-4 mt-2"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Patricia Bennett"
                      className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="patricia@example.com"
                      className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(718) 555-0188"
                      className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      I&apos;m Contacting You About *
                    </label>
                    <select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                    >
                      <option value="New Order">New Memorial Order</option>
                      <option value="Existing Order">Existing Order Inquiry</option>
                      <option value="Product Question">Product or Finishing Question</option>
                      <option value="Digital Memorial">Digital Memorial / QR Inquiry</option>
                      <option value="Funeral Service Provider Inquiry">Funeral Service Provider Inquiry</option>
                      <option value="Other">Other Inquiries</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Name of Loved One (if applicable)
                  </label>
                  <input
                    type="text"
                    value={lovedOneName}
                    onChange={(e) => setLovedOneName(e.target.value)}
                    placeholder="e.g. Deaconess Eleanor Grace Dawson"
                    className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about upcoming service dates, program questions, or how we can assist..."
                    className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary text-xs py-3 px-8 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  Submit Message
                </button>
              </form>
            )}
          </div>

          {/* Business Hours & Studio Information (Section 14, Page 14) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FAF8F5] border border-slate-200 rounded p-6 sm:p-8 space-y-5">
              <h3 className="font-serif text-xl font-bold text-[#1A1A1A]">
                Studio Hours & Operation
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-[#1A1A1A]/85">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#1F6F6B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-[#1A1A1A]">Business Hours</span>
                    <span>Monday–Friday</span>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Weekend production and consultations are unavailable. Orders and messages may be submitted online at any time and will be reviewed during regular business hours.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-slate-200">
                  <Phone className="w-5 h-5 text-[#1F6F6B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-[#1A1A1A]">Studio Phone</span>
                    <a href="tel:7189242004" className="hover:text-[#1F6F6B] font-semibold text-base">
                      (718) 924-2004
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-slate-200">
                  <Mail className="w-5 h-5 text-[#1F6F6B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-[#1A1A1A]">Orders & Submissions Email</span>
                    <a href="mailto:orders@liliesofthefield.design" className="hover:text-[#1F6F6B] font-semibold">
                      orders@liliesofthefield.design
                    </a>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 text-xs text-slate-600 space-y-1">
                  <span className="font-bold text-[#1A1A1A] block">Pickup & Delivery:</span>
                  <p>
                    Local pickup and delivery are available by arrangement. We do not operate a walk-in retail storefront.
                  </p>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-200 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1F6F6B] block">
                  Follow Our Work
                </span>
                <p className="text-xs text-slate-600">
                  Follow us for memorial design inspiration, new products, resources, and examples of our latest work:
                </p>
                <div className="flex flex-wrap gap-4 pt-1">
                  <a
                    href="https://instagram.com/liliesofthefield"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#1A1A1A] hover:text-[#1F6F6B] font-medium"
                  >
                    <Instagram className="w-4 h-4 text-[#D9777A]" /> Instagram
                  </a>
                  <a
                    href="https://facebook.com/liliesofthefieldny"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#1A1A1A] hover:text-[#1F6F6B] font-medium"
                  >
                    <Facebook className="w-4 h-4 text-[#1F6F6B]" /> Facebook
                  </a>
                  <a
                    href="https://youtube.com/@liliesofthefield"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#1A1A1A] hover:text-[#1F6F6B] font-medium"
                  >
                    <Youtube className="w-4 h-4 text-[#C9973F]" /> YouTube
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
