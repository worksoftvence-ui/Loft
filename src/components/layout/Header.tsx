import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, Phone, Mail, Clock, ShieldCheck, Flower2 } from 'lucide-react';

interface HeaderProps {
  currentRoute: string;
  navigate: (route: string) => void;
  onOpenProviderLogin: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, navigate, onOpenProviderLogin }) => {
  const [collectionOpen, setCollectionOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const collectionRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (collectionRef.current && !collectionRef.current.contains(event.target as Node)) {
        setCollectionOpen(false);
      }
      if (resourcesRef.current && !resourcesRef.current.contains(event.target as Node)) {
        setResourcesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNav = (route: string) => {
    navigate(route);
    setCollectionOpen(false);
    setResourcesOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200/80 shadow-xs">
      {/* Utility Top Bar (Section 9 page 9) */}
      <div className="bg-[#F5EFE6] border-b border-[#C9973F]/20 text-[13px] text-[#1A1A1A]/80 py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#1F6F6B]" />
              Monday–Friday
            </span>
            <a
              href="tel:7189242004"
              className="inline-flex items-center gap-1.5 hover:text-[#1F6F6B] font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#1F6F6B]" />
              (718) 924-2004
            </a>
            <a
              href="mailto:orders@liliesofthefield.design"
              className="hidden md:inline-flex items-center gap-1.5 hover:text-[#1F6F6B] font-medium transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#1F6F6B]" />
              orders@liliesofthefield.design
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenProviderLogin}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1F6F6B] hover:text-[#1A1A1A] transition-colors py-0.5 px-2 rounded hover:bg-white/60"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#C9973F]" />
              Funeral Service Provider Login
            </button>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Logo */}
          <button
            onClick={() => handleNav('/')}
            className="flex items-center gap-3 text-left group focus:outline-hidden"
          >
            <div className="w-10 h-10 rounded-full bg-[#1F6F6B]/10 border border-[#1F6F6B]/30 flex items-center justify-center text-[#1F6F6B] group-hover:bg-[#1F6F6B] group-hover:text-white transition-all duration-300">
              <Flower2 className="w-6 h-6 transition-transform group-hover:scale-105" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1A1A1A] leading-tight">
                Lilies of the Field
              </span>
              <span className="text-[11px] sm:text-xs tracking-wider uppercase text-[#1F6F6B] font-semibold">
                Memorial Keepsakes
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links (Section 4) */}
          <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-[#1A1A1A]">
            <button
              onClick={() => handleNav('/')}
              className={`hover:text-[#1F6F6B] transition-colors relative py-1 ${
                currentRoute === '/' ? 'text-[#1F6F6B] font-bold border-b-2 border-[#1F6F6B]' : ''
              }`}
            >
              Home
            </button>

            {/* Our Collection Dropdown */}
            <div className="relative" ref={collectionRef}>
              <button
                onClick={() => setCollectionOpen(!collectionOpen)}
                className={`inline-flex items-center gap-1 hover:text-[#1F6F6B] transition-colors py-1 ${
                  currentRoute.startsWith('/collection') ||
                  currentRoute.startsWith('/memorial-programs') ||
                  currentRoute.startsWith('/prayer-cards') ||
                  currentRoute.startsWith('/digital-memorials') ||
                  currentRoute.startsWith('/posters')
                    ? 'text-[#1F6F6B] font-bold border-b-2 border-[#1F6F6B]'
                    : ''
                }`}
              >
                Our Collection
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${collectionOpen ? 'rotate-180' : ''}`} />
              </button>

              {collectionOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <button
                    onClick={() => handleNav('/memorial-programs')}
                    className="w-full text-left px-4 py-2 text-sm text-[#1A1A1A] hover:bg-[#F5EFE6] hover:text-[#1F6F6B] transition-colors"
                  >
                    Memorial Programs
                  </button>
                  <button
                    onClick={() => handleNav('/prayer-cards-keepsakes')}
                    className="w-full text-left px-4 py-2 text-sm text-[#1A1A1A] hover:bg-[#F5EFE6] hover:text-[#1F6F6B] transition-colors"
                  >
                    Prayer Cards & Keepsakes
                  </button>
                  <button
                    onClick={() => handleNav('/digital-memorials')}
                    className="w-full text-left px-4 py-2 text-sm text-[#1A1A1A] hover:bg-[#F5EFE6] hover:text-[#1F6F6B] transition-colors"
                  >
                    Digital Memorials & Legacy Pages
                  </button>
                  <button
                    onClick={() => handleNav('/posters-large-format')}
                    className="w-full text-left px-4 py-2 text-sm text-[#1A1A1A] hover:bg-[#F5EFE6] hover:text-[#1F6F6B] transition-colors"
                  >
                    Posters & Large Format
                  </button>
                  <div className="my-1 border-t border-slate-100"></div>
                  <button
                    onClick={() => handleNav('/collection')}
                    className="w-full text-left px-4 py-2 text-sm font-bold text-[#1F6F6B] hover:bg-[#F5EFE6] transition-colors"
                  >
                    View Full Collection →
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNav('/memorial-garden')}
              className={`hover:text-[#1F6F6B] transition-colors py-1 ${
                currentRoute.startsWith('/memorial-garden') ? 'text-[#1F6F6B] font-bold border-b-2 border-[#1F6F6B]' : ''
              }`}
            >
              Memorial Garden
            </button>

            {/* Resources Dropdown */}
            <div className="relative" ref={resourcesRef}>
              <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className={`inline-flex items-center gap-1 hover:text-[#1F6F6B] transition-colors py-1 ${
                  currentRoute.startsWith('/resources') || currentRoute === '/faqs'
                    ? 'text-[#1F6F6B] font-bold border-b-2 border-[#1F6F6B]'
                    : ''
                }`}
              >
                Resources
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${resourcesOpen ? 'rotate-180' : ''}`} />
              </button>

              {resourcesOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-md shadow-lg border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <button
                    onClick={() => handleNav('/resources/creating-a-memorial-program')}
                    className="w-full text-left px-4 py-2 text-sm text-[#1A1A1A] hover:bg-[#F5EFE6] hover:text-[#1F6F6B] transition-colors"
                  >
                    Creating a Memorial Program
                  </button>
                  <button
                    onClick={() => handleNav('/resources/order-of-service')}
                    className="w-full text-left px-4 py-2 text-sm text-[#1A1A1A] hover:bg-[#F5EFE6] hover:text-[#1F6F6B] transition-colors"
                  >
                    Order of Service Guide
                  </button>
                  <button
                    onClick={() => handleNav('/resources/poems-prayers-scriptures')}
                    className="w-full text-left px-4 py-2 text-sm text-[#1A1A1A] hover:bg-[#F5EFE6] hover:text-[#1F6F6B] transition-colors"
                  >
                    Poems, Prayers & Scriptures
                  </button>
                  <button
                    onClick={() => handleNav('/resources/acknowledgments')}
                    className="w-full text-left px-4 py-2 text-sm text-[#1A1A1A] hover:bg-[#F5EFE6] hover:text-[#1F6F6B] transition-colors"
                  >
                    Acknowledgments Wording
                  </button>
                  <button
                    onClick={() => handleNav('/resources/obituary-assistance')}
                    className="w-full text-left px-4 py-2 text-sm text-[#1A1A1A] hover:bg-[#F5EFE6] hover:text-[#1F6F6B] transition-colors"
                  >
                    Obituary Writing Assistance
                  </button>
                  <button
                    onClick={() => handleNav('/faqs')}
                    className="w-full text-left px-4 py-2 text-sm text-[#1A1A1A] hover:bg-[#F5EFE6] hover:text-[#1F6F6B] transition-colors"
                  >
                    Frequently Asked Questions
                  </button>
                  <div className="my-1 border-t border-slate-100"></div>
                  <button
                    onClick={() => handleNav('/resources')}
                    className="w-full text-left px-4 py-2 text-sm font-bold text-[#1F6F6B] hover:bg-[#F5EFE6] transition-colors"
                  >
                    All Resources & Guides →
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNav('/funeral-service-providers')}
              className={`hover:text-[#1F6F6B] transition-colors py-1 ${
                currentRoute === '/funeral-service-providers' ? 'text-[#1F6F6B] font-bold border-b-2 border-[#1F6F6B]' : ''
              }`}
            >
              Funeral Service Providers
            </button>

            <button
              onClick={() => handleNav('/contact')}
              className={`hover:text-[#1F6F6B] transition-colors py-1 ${
                currentRoute === '/contact' ? 'text-[#1F6F6B] font-bold border-b-2 border-[#1F6F6B]' : ''
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Header Action: Place an Order Button (Section 10) */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNav('/place-an-order')}
              className="btn-header-order shadow-xs hover:shadow-md cursor-pointer"
            >
              Place an Order
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1A1A1A] hover:text-[#1F6F6B] lg:hidden focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl max-h-[85vh] overflow-y-auto">
          <div className="space-y-1">
            <button
              onClick={() => handleNav('/')}
              className="w-full text-left px-3 py-2 text-base font-medium rounded hover:bg-[#F5EFE6]"
            >
              Home
            </button>

            <div className="py-2">
              <div className="px-3 text-xs font-bold uppercase tracking-wider text-[#1F6F6B] mb-1">
                Our Collection
              </div>
              <button
                onClick={() => handleNav('/collection')}
                className="w-full text-left px-3 py-1.5 text-sm font-semibold text-[#1A1A1A] hover:bg-[#F5EFE6] rounded"
              >
                All Products Catalog
              </button>
              <button
                onClick={() => handleNav('/memorial-programs')}
                className="w-full text-left px-5 py-1.5 text-sm text-[#1A1A1A]/80 hover:bg-[#F5EFE6] rounded"
              >
                Memorial Programs
              </button>
              <button
                onClick={() => handleNav('/prayer-cards-keepsakes')}
                className="w-full text-left px-5 py-1.5 text-sm text-[#1A1A1A]/80 hover:bg-[#F5EFE6] rounded"
              >
                Prayer Cards & Keepsakes
              </button>
              <button
                onClick={() => handleNav('/digital-memorials')}
                className="w-full text-left px-5 py-1.5 text-sm text-[#1A1A1A]/80 hover:bg-[#F5EFE6] rounded"
              >
                Digital Memorials
              </button>
              <button
                onClick={() => handleNav('/posters-large-format')}
                className="w-full text-left px-5 py-1.5 text-sm text-[#1A1A1A]/80 hover:bg-[#F5EFE6] rounded"
              >
                Posters & Large Format
              </button>
            </div>

            <button
              onClick={() => handleNav('/memorial-garden')}
              className="w-full text-left px-3 py-2 text-base font-medium rounded hover:bg-[#F5EFE6]"
            >
              Memorial Garden
            </button>

            <div className="py-2">
              <div className="px-3 text-xs font-bold uppercase tracking-wider text-[#1F6F6B] mb-1">
                Resources & Guidance
              </div>
              <button
                onClick={() => handleNav('/resources')}
                className="w-full text-left px-3 py-1.5 text-sm font-semibold text-[#1A1A1A] hover:bg-[#F5EFE6] rounded"
              >
                Resources Hub
              </button>
              <button
                onClick={() => handleNav('/resources/creating-a-memorial-program')}
                className="w-full text-left px-5 py-1.5 text-sm text-[#1A1A1A]/80 hover:bg-[#F5EFE6] rounded"
              >
                Creating a Memorial Program
              </button>
              <button
                onClick={() => handleNav('/resources/order-of-service')}
                className="w-full text-left px-5 py-1.5 text-sm text-[#1A1A1A]/80 hover:bg-[#F5EFE6] rounded"
              >
                Order of Service
              </button>
              <button
                onClick={() => handleNav('/resources/poems-prayers-scriptures')}
                className="w-full text-left px-5 py-1.5 text-sm text-[#1A1A1A]/80 hover:bg-[#F5EFE6] rounded"
              >
                Poems, Prayers & Scriptures
              </button>
              <button
                onClick={() => handleNav('/resources/acknowledgments')}
                className="w-full text-left px-5 py-1.5 text-sm text-[#1A1A1A]/80 hover:bg-[#F5EFE6] rounded"
              >
                Acknowledgments
              </button>
              <button
                onClick={() => handleNav('/resources/obituary-assistance')}
                className="w-full text-left px-5 py-1.5 text-sm text-[#1A1A1A]/80 hover:bg-[#F5EFE6] rounded"
              >
                Obituary Writing Assistance
              </button>
              <button
                onClick={() => handleNav('/faqs')}
                className="w-full text-left px-5 py-1.5 text-sm text-[#1A1A1A]/80 hover:bg-[#F5EFE6] rounded"
              >
                FAQs
              </button>
            </div>

            <button
              onClick={() => handleNav('/funeral-service-providers')}
              className="w-full text-left px-3 py-2 text-base font-medium rounded hover:bg-[#F5EFE6]"
            >
              Funeral Service Providers
            </button>

            <button
              onClick={() => handleNav('/contact')}
              className="w-full text-left px-3 py-2 text-base font-medium rounded hover:bg-[#F5EFE6]"
            >
              Contact
            </button>
          </div>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => handleNav('/schedule-a-consultation')}
              className="w-full py-2.5 px-4 text-center text-sm font-bold text-[#1F6F6B] border border-[#1F6F6B] rounded"
            >
              Schedule a Virtual Consultation
            </button>
            <button
              onClick={onOpenProviderLogin}
              className="w-full py-2 text-center text-xs font-semibold text-slate-600 hover:text-[#1A1A1A]"
            >
              Provider Portal Sign In
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
