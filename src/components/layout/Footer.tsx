import React from 'react';
import { Flower2, Phone, Mail, Instagram, Facebook, Youtube, Clock, ShieldCheck, MapPin } from 'lucide-react';

interface FooterProps {
  navigate: (route: string) => void;
  onOpenProviderLogin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate, onOpenProviderLogin }) => {
  const handleNav = (route: string) => {
    navigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F5EFE6] text-[#1A1A1A] border-t border-[#C9973F]/25 pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand & Mission Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#C9973F]/20">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1F6F6B]/15 border border-[#1F6F6B]/40 flex items-center justify-center text-[#1F6F6B]">
                <Flower2 className="w-6 h-6" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-[#1A1A1A] block">
                  Lilies of the Field
                </span>
                <span className="text-xs uppercase tracking-widest text-[#1F6F6B] font-semibold">
                  Memorial Keepsakes
                </span>
              </div>
            </div>

            <p className="text-sm text-[#1A1A1A]/80 leading-relaxed max-w-md">
              Every Life Deserves to be Celebrated. Premium memorial programs, prayer cards, photo keepsakes and tribute pieces thoughtfully created to honor every life and every story.
            </p>

            <div className="space-y-2 text-sm text-[#1A1A1A]/80 pt-2">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#1F6F6B] shrink-0" />
                <a href="tel:7189242004" className="hover:text-[#1F6F6B] font-medium transition-colors">
                  (718) 924-2004
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#1F6F6B] shrink-0" />
                <a href="mailto:orders@liliesofthefield.design" className="hover:text-[#1F6F6B] font-medium transition-colors">
                  orders@liliesofthefield.design
                </a>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#1A1A1A]/70">
                <Clock className="w-4 h-4 text-[#C9973F] shrink-0" />
                <span>Monday–Friday · Production Studio in Brooklyn, NY</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-[#1A1A1A]/60 italic pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#1F6F6B] shrink-0 mt-0.5" />
                <span>By appointment only — no walk-in retail storefront. Local courier & chapel delivery arranged.</span>
              </div>
            </div>
          </div>

          {/* Quick Links Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
            
            {/* Column 1: Our Collection */}
            <div className="space-y-3">
              <h4 className="font-bold text-xs uppercase tracking-wider text-[#1F6F6B]">
                Our Collection
              </h4>
              <ul className="space-y-2 text-[#1A1A1A]/80">
                <li>
                  <button onClick={() => handleNav('/memorial-programs')} className="hover:text-[#1F6F6B] transition-colors text-left">
                    Memorial Programs
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('/prayer-cards-keepsakes')} className="hover:text-[#1F6F6B] transition-colors text-left">
                    Prayer Cards & Keepsakes
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('/digital-memorials')} className="hover:text-[#1F6F6B] transition-colors text-left">
                    Digital Memorials
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('/posters-large-format')} className="hover:text-[#1F6F6B] transition-colors text-left">
                    Posters & Large Format
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('/collection')} className="font-semibold text-[#1F6F6B] hover:underline text-left">
                    Full Collection
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 2: Helpful Links */}
            <div className="space-y-3">
              <h4 className="font-bold text-xs uppercase tracking-wider text-[#1F6F6B]">
                Helpful Links
              </h4>
              <ul className="space-y-2 text-[#1A1A1A]/80">
                <li>
                  <button onClick={() => handleNav('/about')} className="hover:text-[#1F6F6B] transition-colors text-left">
                    About Lilies of the Field
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('/memorial-garden')} className="hover:text-[#1F6F6B] transition-colors text-left">
                    Memorial Garden
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('/resources')} className="hover:text-[#1F6F6B] transition-colors text-left">
                    Resources Hub
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('/faqs')} className="hover:text-[#1F6F6B] transition-colors text-left">
                    FAQs
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('/order-and-proofing-policies')} className="hover:text-[#1F6F6B] transition-colors text-left">
                    Policies & Proofing
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('/contact')} className="hover:text-[#1F6F6B] transition-colors text-left">
                    Contact Studio
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Professional & Assistance */}
            <div className="space-y-3">
              <h4 className="font-bold text-xs uppercase tracking-wider text-[#1F6F6B]">
                Professionals
              </h4>
              <ul className="space-y-2 text-[#1A1A1A]/80">
                <li>
                  <button onClick={() => handleNav('/funeral-service-providers')} className="hover:text-[#1F6F6B] transition-colors text-left font-medium">
                    Funeral Service Providers
                  </button>
                </li>
                <li>
                  <button onClick={onOpenProviderLogin} className="hover:text-[#1F6F6B] transition-colors text-left flex items-center gap-1 text-[#1F6F6B]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C9973F]" />
                    Provider Login
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('/place-an-order')} className="hover:text-[#1F6F6B] transition-colors text-left">
                    Submit an Order
                  </button>
                </li>
                <li className="pt-2 border-t border-[#C9973F]/20">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-[#1A1A1A]/60 block mb-1">
                    Assistance
                  </span>
                  <button onClick={() => handleNav('/schedule-a-consultation')} className="hover:text-[#1F6F6B] transition-colors text-left font-medium text-[#1F6F6B]">
                    Virtual Consultation
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Connect */}
            <div className="space-y-3">
              <h4 className="font-bold text-xs uppercase tracking-wider text-[#1F6F6B]">
                Connect
              </h4>
              <div className="space-y-2">
                <a
                  href="https://instagram.com/liliesofthefield"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#1A1A1A]/80 hover:text-[#1F6F6B] transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#D9777A]" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://facebook.com/liliesofthefieldny"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#1A1A1A]/80 hover:text-[#1F6F6B] transition-colors"
                >
                  <Facebook className="w-4 h-4 text-[#1F6F6B]" />
                  <span>Facebook</span>
                </a>
                <a
                  href="https://youtube.com/@liliesofthefield"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#1A1A1A]/80 hover:text-[#1F6F6B] transition-colors"
                >
                  <Youtube className="w-4 h-4 text-[#C9973F]" />
                  <span>YouTube</span>
                </a>
              </div>
              <p className="text-xs text-[#1A1A1A]/60 leading-normal pt-2">
                Follow us for memorial design inspiration, new products, and examples of our latest tribute keepsakes.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#1A1A1A]/70">
          <div>
            © 2026 Lilies of the Field Memorial Keepsakes. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <button onClick={() => handleNav('/privacy-policy')} className="hover:text-[#1F6F6B] transition-colors">
              Privacy Policy
            </button>
            <span>·</span>
            <button onClick={() => handleNav('/terms-and-conditions')} className="hover:text-[#1F6F6B] transition-colors">
              Terms & Conditions
            </button>
            <span>·</span>
            <button onClick={() => handleNav('/order-and-proofing-policies')} className="hover:text-[#1F6F6B] transition-colors">
              Order & Proofing Policies
            </button>
            <span>·</span>
            <button onClick={() => handleNav('/accessibility')} className="hover:text-[#1F6F6B] transition-colors">
              Accessibility
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
