import React from 'react';
import { OrderFormData } from '../types';
import { CheckCircle2, Clock, Calendar, Mail, Phone, FileText, ArrowRight } from 'lucide-react';

interface OrderReceivedPageProps {
  orderData?: OrderFormData | null;
  readyDate?: string;
  navigate: (route: string) => void;
}

export const OrderReceivedPage: React.FC<OrderReceivedPageProps> = ({
  orderData,
  readyDate,
  navigate,
}) => {
  const orderNumber = `LOTF-2026-${Math.floor(1000 + Math.random() * 9000)}`;

  return (
    <div className="py-16 bg-[#FAF8F5] min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Success Card */}
        <div className="bg-white border border-slate-200 rounded-sm p-8 sm:p-12 text-center space-y-6 shadow-sm">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1F6F6B]">
              Order Successfully Submitted
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A]">
              Thank You. Your Memorial Order is Received.
            </h1>
            <p className="text-base text-[#1A1A1A]/75 max-w-xl mx-auto">
              We have received your memorial request for{' '}
              <strong>{orderData?.lovedOneName || 'your loved one'}</strong>. Our production team is reviewing your details and preparing your design files.
            </p>
          </div>

          {/* Ticket Information */}
          <div className="bg-[#FAF8F5] p-5 rounded border border-slate-200 text-xs sm:text-sm text-left grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <span className="text-slate-500 block">Confirmation Order Number:</span>
              <span className="font-mono font-bold text-base text-[#1F6F6B]">{orderNumber}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Estimated Target Ready Date:</span>
              <span className="font-serif font-bold text-base text-[#1A1A1A]">
                {readyDate || 'Within 4 business days'}
              </span>
            </div>
            <div>
              <span className="text-slate-500 block">Service Date:</span>
              <span className="font-semibold text-slate-800">
                {orderData?.serviceDate || 'Scheduled date on file'}
              </span>
            </div>
            <div>
              <span className="text-slate-500 block">Order Source:</span>
              <span className="capitalize font-semibold text-slate-800">
                {orderData?.orderSource || 'Family'} Submission
              </span>
            </div>
          </div>

          {/* Production Clock Notice (Playbook Requirement) */}
          <div className="bg-[#F5EFE6] border border-[#C9973F]/30 rounded p-5 text-xs text-[#1A1A1A]/85 text-left space-y-2">
            <div className="flex items-center gap-2 font-bold text-[#1F6F6B]">
              <Clock className="w-4 h-4 text-[#C9973F]" />
              <span>Production Clock & Next Steps:</span>
            </div>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
              <li>
                <strong>Materials & Payment:</strong> The production clock begins once your deposit/payment invoice is settled and all required photographs and text are verified.
              </li>
              <li>
                <strong>Digital Proof Review:</strong> Our graphic designers will prepare a full digital PDF proof for family review and approval before printing.
              </li>
              <li>
                <strong>Daily 6:00 PM ET Cutoff:</strong> Proof approvals received prior to 6:00 PM ET enter production the following morning.
              </li>
            </ul>
          </div>

          {/* Contact Studio Box */}
          <div className="pt-4 border-t border-slate-200 text-xs text-slate-600 space-y-2">
            <p>
              Have additional photographs to send or questions regarding your order?
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 font-medium text-[#1F6F6B]">
              <a href="tel:7189242004" className="hover:underline flex items-center gap-1.5">
                <Phone className="w-4 h-4" /> (718) 924-2004
              </a>
              <a href="mailto:orders@liliesofthefield.design" className="hover:underline flex items-center gap-1.5">
                <Mail className="w-4 h-4" /> orders@liliesofthefield.design
              </a>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate('/')}
              className="btn-primary text-xs py-2.5 px-6"
            >
              Return to Homepage
            </button>
            <button
              onClick={() => navigate('/memorial-garden')}
              className="btn-secondary text-xs py-2.5 px-6"
            >
              Visit Memorial Garden
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
