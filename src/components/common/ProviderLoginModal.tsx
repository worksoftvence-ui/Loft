import React, { useState } from 'react';
import { X, ShieldCheck, Lock, Mail, ArrowRight } from 'lucide-react';

interface ProviderLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (providerName: string) => void;
  onNavigate: (route: string) => void;
}

export const ProviderLoginModal: React.FC<ProviderLoginModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
  onNavigate,
}) => {
  const [email, setEmail] = useState('director@brooklynheritagefunerals.com');
  const [password, setPassword] = useState('••••••••••••');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your provider email.');
      return;
    }
    // Authenticate and open dashboard
    onLoginSuccess('Heritage Funeral Home Services, Brooklyn');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-lg shadow-2xl border border-slate-200 max-w-md w-full overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#1F6F6B] p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded bg-white/10 text-[#C9973F]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg leading-tight">Provider Portal</h3>
              <p className="text-xs text-white/80">Lilies of the Field Partner Access</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded hover:bg-white/10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="bg-[#F5EFE6] border border-[#C9973F]/30 rounded p-3 text-xs text-[#1A1A1A]/80 leading-relaxed">
            <span className="font-bold text-[#1F6F6B] block mb-0.5">Approved Provider Access</span>
            Registered funeral homes and directors can log in to submit expedited orders, access wholesale pricing guides, and track proofs.
          </div>

          {error && (
            <div className="p-2.5 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1A1A1A]/80 mb-1">
                Provider Business Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-sm pl-9 pr-3 py-2.5 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                  placeholder="director@funeralhome.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1A1A1A]/80 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full text-sm pl-9 pr-3 py-2.5 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                  placeholder="••••••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full btn-primary py-3 text-xs tracking-wider uppercase font-bold justify-center cursor-pointer mt-2"
            >
              Log In to Provider Dashboard
            </button>
          </form>

          <div className="pt-3 border-t border-slate-100 flex flex-col items-center gap-2 text-xs text-slate-600">
            <p>Don&apos;t have an approved provider account yet?</p>
            <button
              onClick={() => {
                onClose();
                onNavigate('/funeral-service-providers');
              }}
              className="text-[#1F6F6B] font-bold hover:underline inline-flex items-center gap-1"
            >
              Request Provider Registration <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
