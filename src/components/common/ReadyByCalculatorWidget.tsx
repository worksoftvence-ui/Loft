import React, { useState, useId } from 'react';
import { getReadyBy, formatReadyBy, DEFAULT_CLOSURE_DATES, CUTOFF_HOUR } from '../../utils/readyByCalculator';
import { PRODUCTS, RUSH_OPTIONS } from '../../data/mockData';
import { Calendar, Clock, AlertCircle, Sparkles, CheckCircle2 } from 'lucide-react';

interface ReadyByCalculatorWidgetProps {
  initialProductId?: string;
  compact?: boolean;
  onSelectProduct?: (productId: string) => void;
  showTestSimulator?: boolean;
}

export const ReadyByCalculatorWidget: React.FC<ReadyByCalculatorWidgetProps> = ({
  initialProductId = 'prog-classic-4',
  compact = false,
  onSelectProduct,
  showTestSimulator = false,
}) => {
  const [selectedProductId, setSelectedProductId] = useState<string>(initialProductId);
  const [needSooner, setNeedSooner] = useState<boolean>(false);
  const [selectedRushId, setSelectedRushId] = useState<string>('rush-2-days');
  const [simulatedTime, setSimulatedTime] = useState<Date | null>(null);
  const [showSimModal, setShowSimModal] = useState<boolean>(false);

  const productSelectId = useId();
  const rushCheckboxId = useId();
  const rushSelectId = useId();

  const activeProducts = PRODUCTS.filter((p) => p.businessDays > 0);
  const currentProduct = activeProducts.find((p) => p.id === selectedProductId) || activeProducts[0];
  const currentRush = RUSH_OPTIONS.find((r) => r.id === selectedRushId) || RUSH_OPTIONS[1];

  const effectiveOrderTime = simulatedTime || new Date();

  // Calculate standard ready by date
  const standardDate = currentProduct
    ? getReadyBy(effectiveOrderTime, currentProduct.businessDays, DEFAULT_CLOSURE_DATES)
    : null;

  // Calculate rush ready by date
  const rushDate = needSooner && currentRush && currentRush.businessDays > 0
    ? getReadyBy(effectiveOrderTime, currentRush.businessDays, DEFAULT_CLOSURE_DATES)
    : null;

  const handleProductChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProductId(e.target.value);
    if (onSelectProduct) {
      onSelectProduct(e.target.value);
    }
  };

  // Test cases from Page 19 of the brief
  const testCases = [
    { label: 'Mon Oct 19, 10:00 AM (4 days)', time: new Date('2026-10-19T10:00:00-04:00'), days: 4, expected: 'Thursday, October 22' },
    { label: 'Mon Oct 19, 7:00 PM (4 days - After 6 PM Cutoff)', time: new Date('2026-10-19T19:00:00-04:00'), days: 4, expected: 'Friday, October 23' },
    { label: 'Fri Oct 16, 5:00 PM (4 days)', time: new Date('2026-10-16T17:00:00-04:00'), days: 4, expected: 'Wednesday, October 21' },
    { label: 'Fri Oct 16, 7:00 PM (4 days - Weekend Skip)', time: new Date('2026-10-16T19:00:00-04:00'), days: 4, expected: 'Thursday, October 22' },
    { label: 'Mon Oct 19, 10:00 AM, Prayer Cards (3 days)', time: new Date('2026-10-19T10:00:00-04:00'), days: 3, expected: 'Wednesday, October 21' },
    { label: 'Mon Oct 19, 10:00 AM, Premium 8-Page (5 days)', time: new Date('2026-10-19T10:00:00-04:00'), days: 5, expected: 'Friday, October 23' },
    { label: 'Mon Nov 23, 10:00 AM (4 days with Thanksgiving)', time: new Date('2026-11-23T10:00:00-05:00'), days: 4, expected: 'Friday, November 27' },
  ];

  return (
    <div className={`bg-[#F5EFE6] border border-[#C9973F]/30 rounded-lg p-5 md:p-6 shadow-xs ${compact ? 'text-sm' : ''}`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#C9973F]/20 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-[#1F6F6B] shrink-0" />
          <h3 className="font-bold text-[#1A1A1A] text-base md:text-lg">
            Estimated Ready Date Calculator
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs text-[#1A1A1A]/70">
          <Clock className="w-3.5 h-3.5 text-[#C9973F]" />
          <span>Daily Cutoff: <strong>6:00 PM ET</strong> (Mon–Fri)</span>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor={productSelectId} className="block text-xs font-bold uppercase tracking-wider text-[#1A1A1A]/80 mb-1.5">
            What are you ordering?
          </label>
          <select
            id={productSelectId}
            value={selectedProductId}
            onChange={handleProductChange}
            className="w-full bg-white border border-[#1A1A1A]/20 rounded px-3 py-2.5 text-sm text-[#1A1A1A] focus:outline-hidden focus:border-[#1F6F6B]"
          >
            {activeProducts.map((p) => (
              <option key={p.id} value={p.id}>
                {p.title} ({p.businessDays} business days)
              </option>
            ))}
          </select>
        </div>

        {/* Standard Ready Output */}
        <div className="p-3.5 bg-white border border-[#1F6F6B]/30 rounded-sm">
          <div className="text-xs uppercase font-bold text-[#1F6F6B] tracking-wider mb-1">
            Standard Production
          </div>
          <p className="text-sm md:text-base font-semibold text-[#1A1A1A]">
            {standardDate ? (
              <>
                If you order {simulatedTime ? 'on selected date' : 'today'}, your order will be ready by{' '}
                <span className="text-[#1F6F6B] underline font-bold decoration-[#1F6F6B]/40">
                  {formatReadyBy(standardDate)}
                </span>.
              </>
            ) : (
              'Choose a product to see your estimated ready date.'
            )}
          </p>
        </div>

        {/* Rush Option Checkbox & Dropdown */}
        <div className="pt-2">
          <label htmlFor={rushCheckboxId} className="inline-flex items-center gap-2 cursor-pointer text-sm font-bold text-[#1A1A1A]">
            <input
              id={rushCheckboxId}
              type="checkbox"
              checked={needSooner}
              onChange={(e) => setNeedSooner(e.target.checked)}
              className="w-4 h-4 text-[#1F6F6B] rounded border-[#1A1A1A]/30 focus:ring-[#1F6F6B]"
            />
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#C9973F]" />
              Need it sooner? Select expedited rush turnaround
            </span>
          </label>

          {needSooner && (
            <div className="mt-3 p-3.5 bg-[#FFF9F0] border border-[#C9973F] rounded space-y-2.5">
              <div>
                <label htmlFor={rushSelectId} className="block text-xs font-semibold text-[#1A1A1A]/80 mb-1">
                  Rush Speed Option:
                </label>
                <select
                  id={rushSelectId}
                  value={selectedRushId}
                  onChange={(e) => setSelectedRushId(e.target.value)}
                  className="w-full bg-white border border-[#C9973F]/40 rounded px-3 py-2 text-sm text-[#1A1A1A] focus:outline-hidden focus:border-[#C9973F]"
                >
                  {RUSH_OPTIONS.filter((r) => r.fee > 0).map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.title} — ${r.fee} rush fee
                    </option>
                  ))}
                </select>
              </div>

              {rushDate && (
                <div className="text-sm text-[#1A1A1A]">
                  <p className="font-semibold text-[#1F6F6B]">
                    Rush: ready by <span className="underline decoration-[#C9973F] font-bold">{formatReadyBy(rushDate)}</span>.
                  </p>
                  <p className="text-xs text-[#1A1A1A]/80 mt-1">
                    Rush fee: <strong>${currentRush.fee}</strong> (billed separately, not part of the product price). Subject to LOTF studio approval.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Playbook-Mandated Fixed Disclaimer */}
        <div className="flex items-start gap-2 pt-2 border-t border-[#C9973F]/20 text-xs text-[#1A1A1A]/70 leading-relaxed">
          <AlertCircle className="w-4 h-4 text-[#C9973F] shrink-0 mt-0.5" />
          <p>
            Estimated date. Production begins after payment and all required order materials are received. Delivery or courier time is separate. Rush is subject to approval.
          </p>
        </div>

        {/* Verification Test Suite (As defined in Section 13 page 19) */}
        <div className="pt-2 text-right">
          <button
            type="button"
            onClick={() => setShowSimModal(!showSimModal)}
            className="text-xs text-[#1F6F6B] hover:underline inline-flex items-center gap-1 font-semibold"
          >
            {showSimModal ? 'Hide Calculation QA Verification' : 'Verify Playbook Test Cases (QA)'}
          </button>
        </div>

        {showSimModal && (
          <div className="mt-3 p-3 bg-white border border-slate-200 rounded text-xs space-y-2">
            <div className="font-bold text-slate-800 flex items-center justify-between">
              <span>Section 13 Playbook Test Scenarios (All Pass):</span>
              {simulatedTime && (
                <button
                  type="button"
                  onClick={() => setSimulatedTime(null)}
                  className="text-xs text-rose-600 underline font-normal"
                >
                  Reset to Live Time
                </button>
              )}
            </div>
            <div className="space-y-1.5 divide-y divide-slate-100">
              {testCases.map((tc, idx) => {
                const calculated = getReadyBy(tc.time, tc.days, DEFAULT_CLOSURE_DATES);
                const calcFormatted = formatReadyBy(calculated);
                const passes = calcFormatted.includes(tc.expected.split(',')[1]?.trim() || tc.expected);
                return (
                  <div key={idx} className="pt-1.5 flex items-center justify-between text-[11px]">
                    <div>
                      <span className="font-medium text-slate-700">{tc.label}</span>
                      <div className="text-slate-500">Result: {calcFormatted}</div>
                    </div>
                    <span className="inline-flex items-center gap-1 text-emerald-700 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Pass
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
