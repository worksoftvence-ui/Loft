import React, { useState } from 'react';
import { PRODUCTS, RUSH_OPTIONS } from '../data/mockData';
import { OrderFormData } from '../types';
import { getReadyBy, formatReadyBy, DEFAULT_CLOSURE_DATES } from '../utils/readyByCalculator';
import {
  Calendar,
  Clock,
  Sparkles,
  Upload,
  CheckCircle2,
  AlertCircle,
  FileText,
  Image as ImageIcon,
  Heart,
  Truck,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  User,
  Building2,
} from 'lucide-react';

interface PlaceAnOrderPageProps {
  initialProductId?: string;
  isLoggedInProvider?: boolean;
  providerName?: string;
  navigate: (route: string) => void;
  onSubmitOrder: (order: OrderFormData, calculatedReadyDate: string) => void;
}

export const PlaceAnOrderPage: React.FC<PlaceAnOrderPageProps> = ({
  initialProductId = 'prog-classic-4',
  isLoggedInProvider = false,
  providerName = '',
  navigate,
  onSubmitOrder,
}) => {
  const [currentStep, setCurrentStep] = useState(1);

  // Form State
  const [formData, setFormData] = useState<OrderFormData>({
    orderSource: isLoggedInProvider ? 'provider' : 'family',
    providerBusinessName: isLoggedInProvider ? providerName : '',
    providerContactName: '',
    providerPhone: '',
    providerEmail: '',
    providerDeliveryAddress: '',

    selectedProducts: [initialProductId],
    productQuantities: { [initialProductId]: 100 },
    serviceLevel: 'Classic 4-Page Bifold',
    formatOption: 'Standard 8.5" x 11" Folded',
    paperFinish: 'Velvet Matte Archival',
    additionalInserts: [],

    lovedOneName: '',
    birthDate: '',
    passingDate: '',
    serviceDate: '',
    serviceTime: '',
    serviceLocation: '',
    funeralServiceProvider: isLoggedInProvider ? providerName : '',

    obituaryText: '',
    orderOfServiceText: '',
    acknowledgmentsText: '',
    scripturePoemText: '',
    repastInfo: '',
    additionalNotes: '',

    coverPhotoName: '',
    additionalPhotosCount: 0,
    collagePhotosCount: 0,
    photoInstructions: '',

    designColors: '',
    designTheme: '',
    floralPreferences: '',
    faithElements: '',
    specialRequests: '',

    digitalMemorialType: 'none',
    memorialVisibility: 'Public',
    qrCodePlacement: 'Back Cover of Program',

    deliveryMethod: 'funeral-home',
    deliveryFee: 30,

    rushSelected: false,
    rushOptionId: 'rush-2-days',

    confirmAccurate: false,
    confirmTurnaround: false,
    confirmPolicies: false,
  });

  const [formError, setFormError] = useState('');

  // Calculate the longest product turnaround
  const selectedProductObjs = PRODUCTS.filter((p) => formData.selectedProducts.includes(p.id));
  const maxDays = selectedProductObjs.length > 0
    ? Math.max(...selectedProductObjs.map((p) => p.businessDays))
    : 4;

  const currentRush = RUSH_OPTIONS.find((r) => r.id === formData.rushOptionId) || RUSH_OPTIONS[1];
  const effectiveDays = formData.rushSelected && currentRush.businessDays > 0 ? currentRush.businessDays : maxDays;
  const readyDateObj = getReadyBy(new Date(), effectiveDays, DEFAULT_CLOSURE_DATES);
  const formattedReadyDate = formatReadyBy(readyDateObj);

  const handleProductToggle = (productId: string) => {
    const isSelected = formData.selectedProducts.includes(productId);
    const updated = isSelected
      ? formData.selectedProducts.filter((id) => id !== productId)
      : [...formData.selectedProducts, productId];

    setFormData({
      ...formData,
      selectedProducts: updated,
      productQuantities: {
        ...formData.productQuantities,
        [productId]: formData.productQuantities[productId] || 100,
      },
    });
  };

  const handleQuantityChange = (productId: string, qty: number) => {
    setFormData({
      ...formData,
      productQuantities: {
        ...formData.productQuantities,
        [productId]: Math.max(25, qty),
      },
    });
  };

  const handleNextStep = () => {
    setFormError('');
    if (currentStep === 1) {
      if (formData.orderSource === 'provider' && !formData.providerBusinessName) {
        setFormError('Please provide your funeral home / provider business name.');
        return;
      }
    } else if (currentStep === 2) {
      if (formData.selectedProducts.length === 0) {
        setFormError('Please select at least one memorial product to continue.');
        return;
      }
    } else if (currentStep === 4) {
      if (!formData.lovedOneName) {
        setFormError("Please enter your loved one's name.");
        return;
      }
    }
    setCurrentStep((prev) => Math.min(prev + 1, 10));
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  const handlePrevStep = () => {
    setFormError('');
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.confirmAccurate || !formData.confirmTurnaround || !formData.confirmPolicies) {
      setFormError('Please check all acknowledgment and policy agreements to submit your order.');
      return;
    }
    onSubmitOrder(formData, formattedReadyDate);
    navigate('/order-received');
  };

  return (
    <div className="py-10 bg-[#FAF8F5] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1F6F6B]">
            Guided Order Builder
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A]">
            Build Your Memorial Order
          </h1>
          <p className="text-sm text-[#1A1A1A]/75 max-w-xl mx-auto">
            Design a coordinated memorial suite. Follow our guided steps to select items, input ceremony details, and submit tribute materials.
          </p>
        </div>

        {/* TOP OF FORM: Prominent Ready By Box (Section 12, Page 15) */}
        <div className="bg-white border-2 border-[#1F6F6B] rounded-sm p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-full bg-[#1F6F6B]/10 text-[#1F6F6B]">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#1F6F6B] block">
                Estimated Ready By Date
              </span>
              <p className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A1A]">
                {formattedReadyDate}
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                Based on {effectiveDays} business days {formData.rushSelected ? '(Expedited Rush)' : '(Standard Turnaround)'} · 6:00 PM ET Cutoff
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start sm:items-end gap-1.5 border-t sm:border-t-0 sm:border-l border-slate-200 pt-3 sm:pt-0 sm:pl-4">
            <label className="inline-flex items-center gap-2 cursor-pointer text-xs font-bold text-[#1A1A1A]">
              <input
                type="checkbox"
                checked={formData.rushSelected}
                onChange={(e) => setFormData({ ...formData, rushSelected: e.target.checked })}
                className="w-4 h-4 text-[#1F6F6B] rounded border-slate-300 focus:ring-[#1F6F6B]"
              />
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#C9973F]" />
                Expedite with Rush
              </span>
            </label>
            {formData.rushSelected && (
              <span className="text-[11px] font-semibold text-[#1F6F6B]">
                +$75 rush fee (billed separately)
              </span>
            )}
          </div>
        </div>

        {/* Progress Bar (10 Steps) */}
        <div className="bg-white border border-slate-200 rounded p-4 shadow-xs">
          <div className="flex items-center justify-between text-xs font-bold text-slate-600 mb-2">
            <span>Step {currentStep} of 10</span>
            <span className="text-[#1F6F6B]">
              {[
                '1. Order Source',
                '2. Products Selection',
                '3. Formats & Quantities',
                '4. Service Information',
                '5. Content & Obituary',
                '6. Photographs',
                '7. Design Preferences',
                '8. Digital Memorial',
                '9. Delivery Arrangements',
                '10. Review & Sign-Off',
              ][currentStep - 1]}
            </span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
            <div
              className="bg-[#1F6F6B] h-2 transition-all duration-300"
              style={{ width: `${(currentStep / 10) * 100}%` }}
            />
          </div>
        </div>

        {formError && (
          <div className="p-4 bg-rose-50 border border-rose-300 text-rose-800 text-xs sm:text-sm rounded flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
            <span>{formError}</span>
          </div>
        )}

        {/* Form Steps Card */}
        <div className="bg-white border border-slate-200 rounded-sm p-6 sm:p-10 shadow-xs">
          
          {/* STEP 1: Who are you ordering for? */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-3">
                <h2 className="font-serif text-2xl font-bold text-[#1A1A1A]">
                  1. Who are you ordering for?
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Select whether you are placing this order as a family member/individual, or on behalf of a funeral home.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, orderSource: 'family' })}
                  className={`p-5 rounded border text-left transition-all cursor-pointer ${
                    formData.orderSource === 'family'
                      ? 'border-[#1F6F6B] bg-[#FAF8F5] ring-2 ring-[#1F6F6B]/30'
                      : 'border-slate-200 hover:border-slate-400'
                  }`}
                >
                  <User className="w-6 h-6 text-[#1F6F6B] mb-2" />
                  <h4 className="font-bold text-base text-[#1A1A1A]">Family / Individual</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    I am organizing memorial pieces for my loved one&apos;s service or homegoing.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, orderSource: 'provider' })}
                  className={`p-5 rounded border text-left transition-all cursor-pointer ${
                    formData.orderSource === 'provider'
                      ? 'border-[#1F6F6B] bg-[#FAF8F5] ring-2 ring-[#1F6F6B]/30'
                      : 'border-slate-200 hover:border-slate-400'
                  }`}
                >
                  <Building2 className="w-6 h-6 text-[#1F6F6B] mb-2" />
                  <h4 className="font-bold text-base text-[#1A1A1A]">Funeral Service Provider</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    I am a funeral director, mortuary manager, or celebrant coordinating for a family.
                  </p>
                </button>
              </div>

              {formData.orderSource === 'provider' && (
                <div className="bg-[#FAF8F5] p-5 rounded border border-slate-200 space-y-4 animate-in fade-in duration-200">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#1F6F6B]">
                    Provider Organization Details
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Funeral Home / Business Name *
                      </label>
                      <input
                        type="text"
                        value={formData.providerBusinessName}
                        onChange={(e) => setFormData({ ...formData, providerBusinessName: e.target.value })}
                        placeholder="e.g. Heritage Funeral Services"
                        className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Direct Contact / Arranger Name
                      </label>
                      <input
                        type="text"
                        value={formData.providerContactName}
                        onChange={(e) => setFormData({ ...formData, providerContactName: e.target.value })}
                        placeholder="e.g. Director Bennett"
                        className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Provider Phone
                      </label>
                      <input
                        type="tel"
                        value={formData.providerPhone}
                        onChange={(e) => setFormData({ ...formData, providerPhone: e.target.value })}
                        placeholder="(718) 555-0199"
                        className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Provider Email
                      </label>
                      <input
                        type="email"
                        value={formData.providerEmail}
                        onChange={(e) => setFormData({ ...formData, providerEmail: e.target.value })}
                        placeholder="director@funeralhome.com"
                        className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* STEP 2: Select your products */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-3">
                <h2 className="font-serif text-2xl font-bold text-[#1A1A1A]">
                  2. Select your memorial products
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Select all pieces you wish to coordinate in this order (multiple items can be combined).
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PRODUCTS.map((prod) => {
                  const isChecked = formData.selectedProducts.includes(prod.id);
                  return (
                    <label
                      key={prod.id}
                      className={`p-4 rounded border flex items-start gap-3 cursor-pointer transition-all ${
                        isChecked
                          ? 'border-[#1F6F6B] bg-[#FAF8F5] ring-1 ring-[#1F6F6B]'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => handleProductToggle(prod.id)}
                        className="w-5 h-5 mt-0.5 text-[#1F6F6B] rounded border-slate-300 focus:ring-[#1F6F6B]"
                      />
                      <div className="space-y-1">
                        <span className="font-bold text-sm text-[#1A1A1A] block">
                          {prod.title}
                        </span>
                        <p className="text-xs text-slate-600 line-clamp-2">
                          {prod.description}
                        </p>
                        <span className="text-[11px] font-semibold text-[#1F6F6B] block">
                          {prod.businessDays > 0 ? `${prod.businessDays} business days turnaround` : 'Digital setup'}
                        </span>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: Options, quantities & finishes */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-3">
                <h2 className="font-serif text-2xl font-bold text-[#1A1A1A]">
                  3. Quantities, formats & finishes
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Specify counts and paper preferences for each selected piece.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1F6F6B]">
                  Product Quantities
                </h4>
                {formData.selectedProducts.map((pId) => {
                  const p = PRODUCTS.find((x) => x.id === pId);
                  if (!p) return null;
                  return (
                    <div key={pId} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 bg-[#FAF8F5] rounded border border-slate-200">
                      <div>
                        <span className="font-bold text-sm text-[#1A1A1A]">{p.title}</span>
                        <span className="text-xs text-slate-500 block">{p.startingPrice}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <label className="text-xs font-semibold text-slate-600">Quantity:</label>
                        <input
                          type="number"
                          min="25"
                          step="25"
                          value={formData.productQuantities[pId] || 100}
                          onChange={(e) => handleQuantityChange(pId, parseInt(e.target.value) || 25)}
                          className="w-24 text-sm px-2.5 py-1.5 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Program Format / Folding Style
                  </label>
                  <select
                    value={formData.serviceLevel}
                    onChange={(e) => setFormData({ ...formData, serviceLevel: e.target.value })}
                    className="w-full text-sm px-3 py-2.5 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                  >
                    <option value="Classic 4-Page Bifold">Classic 4-Page Bifold (Standard 8.5x11 folded)</option>
                    <option value="Classic Trifold (6-Panel)">Classic & Premium Trifold (6-Panel)</option>
                    <option value="Premium 8-Page Booklet">Premium 8-Page Large Booklet (Saddle-Stitched)</option>
                    <option value="Large Format Program">Large Format Presentation Program</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Paper & Finish Quality
                  </label>
                  <select
                    value={formData.paperFinish}
                    onChange={(e) => setFormData({ ...formData, paperFinish: e.target.value })}
                    className="w-full text-sm px-3 py-2.5 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                  >
                    <option value="Velvet Matte Archival">Velvet Matte Archival (Soft touch, glare-free, timeless)</option>
                    <option value="Lustre Coated Cardstock">Lustre Coated Cardstock (Subtle pearl sheen)</option>
                    <option value="Premium High Gloss">Premium High Gloss (Vivid, saturated color photos)</option>
                    <option value="Classic Natural Linen">Classic Natural Linen (Textured antique finish)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Service Information */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-3">
                <h2 className="font-serif text-2xl font-bold text-[#1A1A1A]">
                  4. Service & Loved One Details
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  These details will be featured accurately across program covers, prayer cards, and service headings.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-3">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Loved One&apos;s Full Name (as it should appear) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lovedOneName}
                    onChange={(e) => setFormData({ ...formData, lovedOneName: e.target.value })}
                    placeholder="e.g. Deaconess Eleanor Grace Dawson"
                    className="w-full text-sm px-3 py-2.5 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    value={formData.birthDate}
                    onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                    className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Date of Passing
                  </label>
                  <input
                    type="date"
                    value={formData.passingDate}
                    onChange={(e) => setFormData({ ...formData, passingDate: e.target.value })}
                    className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Scheduled Service Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.serviceDate}
                    onChange={(e) => setFormData({ ...formData, serviceDate: e.target.value })}
                    className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Service Time
                  </label>
                  <input
                    type="text"
                    value={formData.serviceTime}
                    onChange={(e) => setFormData({ ...formData, serviceTime: e.target.value })}
                    placeholder="e.g. 10:00 AM Viewing · 11:00 AM Service"
                    className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Funeral Service Provider / Chapel
                  </label>
                  <input
                    type="text"
                    value={formData.funeralServiceProvider}
                    onChange={(e) => setFormData({ ...formData, funeralServiceProvider: e.target.value })}
                    placeholder="e.g. Heritage Funeral Chapels, Brooklyn"
                    className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Service Location & Full Address
                </label>
                <input
                  type="text"
                  value={formData.serviceLocation}
                  onChange={(e) => setFormData({ ...formData, serviceLocation: e.target.value })}
                  placeholder="e.g. Grace Tabernacle Chapel, 452 Nostrand Ave, Brooklyn, NY"
                  className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                />
              </div>
            </div>
          )}

          {/* STEP 5: Submit Content */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h2 className="font-serif text-2xl font-bold text-[#1A1A1A]">
                    5. Submit Content & Readings
                  </h2>
                  <button
                    type="button"
                    onClick={() => navigate('/resources/obituary-assistance')}
                    className="text-xs font-bold text-[#1F6F6B] hover:underline"
                  >
                    Need Help? Open Obituary Worksheet →
                  </button>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Families submit completed text for placement. You may paste text now, or email Word/PDF files to orders@liliesofthefield.design.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Obituary / Life Story Text
                  </label>
                  <textarea
                    rows={5}
                    value={formData.obituaryText}
                    onChange={(e) => setFormData({ ...formData, obituaryText: e.target.value })}
                    placeholder="Paste completed obituary text here (or indicate 'Will email Word file')..."
                    className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Order of Service
                  </label>
                  <textarea
                    rows={4}
                    value={formData.orderOfServiceText}
                    onChange={(e) => setFormData({ ...formData, orderOfServiceText: e.target.value })}
                    placeholder="e.g. Processional, Scripture, Prayer, Musical Selection, Remarks, Eulogy, Recessional..."
                    className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Acknowledgments & Thanks
                    </label>
                    <textarea
                      rows={3}
                      value={formData.acknowledgmentsText}
                      onChange={(e) => setFormData({ ...formData, acknowledgmentsText: e.target.value })}
                      placeholder="Words of gratitude from the family..."
                      className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Scriptures, Poems or Pallbearers
                    </label>
                    <textarea
                      rows={3}
                      value={formData.scripturePoemText}
                      onChange={(e) => setFormData({ ...formData, scripturePoemText: e.target.value })}
                      placeholder="Chosen verses, favorite poems, list of pallbearers..."
                      className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden resize-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Repast / Fellowship Reception Details
                  </label>
                  <input
                    type="text"
                    value={formData.repastInfo}
                    onChange={(e) => setFormData({ ...formData, repastInfo: e.target.value })}
                    placeholder="e.g. Church Fellowship Hall immediately following cemetery interment"
                    className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 6: Photographs (3 Dedicated Separate Upload Fields, Section 12, Page 15) */}
          {currentStep === 6 && (
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-3">
                <h2 className="font-serif text-2xl font-bold text-[#1A1A1A]">
                  6. Photographs
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  We provide three separate upload slots so the front cover is never confused with inner pages or collages.
                </p>
              </div>

              {/* Upload Advice Banner */}
              <div className="p-4 bg-[#FAF8F5] border border-slate-200 rounded text-xs text-[#1A1A1A]/80 flex items-start gap-2.5">
                <ImageIcon className="w-5 h-5 text-[#1F6F6B] shrink-0 mt-0.5" />
                <div>
                  <strong>Quality Recommendation:</strong> Submit original, high-resolution digital camera photos or clear scans. Please avoid social media screenshots, text message downloads, or camera snapshots of glossy frames where possible.
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* 1. Cover / Main Photograph (Single) */}
                <div className="p-5 border-2 border-dashed border-[#1F6F6B] rounded bg-white text-center space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1F6F6B] block">
                    Slot 1: Cover Portrait
                  </span>
                  <Upload className="w-8 h-8 text-[#1F6F6B] mx-auto" />
                  <p className="text-xs text-slate-600">
                    {formData.coverPhotoName || 'Primary portrait for front cover & prayer cards'}
                  </p>
                  <input
                    type="file"
                    id="cover-photo-upload"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setFormData({ ...formData, coverPhotoName: e.target.files[0].name });
                      }
                    }}
                  />
                  <label
                    htmlFor="cover-photo-upload"
                    className="btn-primary text-xs py-1.5 px-4 cursor-pointer inline-block"
                  >
                    {formData.coverPhotoName ? 'Change Cover Photo' : 'Select Cover Photo'}
                  </label>
                </div>

                {/* 2. Additional Photographs */}
                <div className="p-5 border-2 border-dashed border-slate-300 rounded bg-white text-center space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                    Slot 2: Additional Photos
                  </span>
                  <Upload className="w-8 h-8 text-slate-400 mx-auto" />
                  <p className="text-xs text-slate-600">
                    Photos for inside biography & service pages (3–10 photos)
                  </p>
                  <input
                    type="file"
                    id="additional-photos-upload"
                    multiple
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files) {
                        setFormData({ ...formData, additionalPhotosCount: e.target.files.length });
                      }
                    }}
                  />
                  <label
                    htmlFor="additional-photos-upload"
                    className="btn-secondary text-xs py-1.5 px-4 cursor-pointer inline-block"
                  >
                    {formData.additionalPhotosCount > 0
                      ? `${formData.additionalPhotosCount} Photos Attached`
                      : 'Upload Additional Photos'}
                  </label>
                </div>

                {/* 3. Collage Photographs */}
                <div className="p-5 border-2 border-dashed border-slate-300 rounded bg-white text-center space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                    Slot 3: Collage Photos
                  </span>
                  <Upload className="w-8 h-8 text-slate-400 mx-auto" />
                  <p className="text-xs text-slate-600">
                    Family photo collages (15–20 for standard, up to 40 for 8-page)
                  </p>
                  <input
                    type="file"
                    id="collage-photos-upload"
                    multiple
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files) {
                        setFormData({ ...formData, collagePhotosCount: e.target.files.length });
                      }
                    }}
                  />
                  <label
                    htmlFor="collage-photos-upload"
                    className="btn-secondary text-xs py-1.5 px-4 cursor-pointer inline-block"
                  >
                    {formData.collagePhotosCount > 0
                      ? `${formData.collagePhotosCount} Collage Photos Attached`
                      : 'Upload Collage Photos'}
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Special Photo Placement Instructions or Captions
                </label>
                <textarea
                  rows={3}
                  value={formData.photoInstructions}
                  onChange={(e) => setFormData({ ...formData, photoInstructions: e.target.value })}
                  placeholder="e.g. Please crop out the background on the cover photo; photo #4 is with grandchildren; organize chronologically..."
                  className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden resize-none"
                />
              </div>
            </div>
          )}

          {/* STEP 7: Design Preferences */}
          {currentStep === 7 && (
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-3">
                <h2 className="font-serif text-2xl font-bold text-[#1A1A1A]">
                  7. Design & Theme Preferences
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Tell our designers about their favorite aesthetic, colors, and meaningful motifs.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Preferred Color Palette
                  </label>
                  <input
                    type="text"
                    value={formData.designColors}
                    onChange={(e) => setFormData({ ...formData, designColors: e.target.value })}
                    placeholder="e.g. Royal Navy & Gold, Soft Blush & Cream, Forest Green"
                    className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Floral / Botanical Elements
                  </label>
                  <input
                    type="text"
                    value={formData.floralPreferences}
                    onChange={(e) => setFormData({ ...formData, floralPreferences: e.target.value })}
                    placeholder="e.g. White Lilies, Red Roses, Sunflowers, Eucalyptus"
                    className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Faith, Cultural or Spiritual Emblems
                  </label>
                  <input
                    type="text"
                    value={formData.faithElements}
                    onChange={(e) => setFormData({ ...formData, faithElements: e.target.value })}
                    placeholder="e.g. Gold Cross, Praying Hands, Dove of Peace, None"
                    className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Theme / Personal Passions
                  </label>
                  <input
                    type="text"
                    value={formData.designTheme}
                    onChange={(e) => setFormData({ ...formData, designTheme: e.target.value })}
                    placeholder="e.g. Jazz music, Veteran military ribbon, Classic elegance"
                    className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Special Design Requests or Inspiration Notes
                </label>
                <textarea
                  rows={3}
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  placeholder="Any particular design styles, font styles, or layout inspirations you would like us to incorporate..."
                  className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden resize-none"
                />
              </div>
            </div>
          )}

          {/* STEP 8: Digital Memorial Options */}
          {currentStep === 8 && (
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-3">
                <h2 className="font-serif text-2xl font-bold text-[#1A1A1A]">
                  8. Digital Memorial & QR Options
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Add an interactive digital component accessible via mobile QR code.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, digitalMemorialType: 'none' })}
                  className={`p-5 rounded border text-left transition-all cursor-pointer ${
                    formData.digitalMemorialType === 'none'
                      ? 'border-[#1F6F6B] bg-[#FAF8F5] ring-2 ring-[#1F6F6B]/30'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <h4 className="font-bold text-sm text-[#1A1A1A]">No Digital Memorial</h4>
                  <p className="text-xs text-slate-500 mt-1">Printed pieces only.</p>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, digitalMemorialType: 'program' })}
                  className={`p-5 rounded border text-left transition-all cursor-pointer ${
                    formData.digitalMemorialType === 'program'
                      ? 'border-[#1F6F6B] bg-[#FAF8F5] ring-2 ring-[#1F6F6B]/30'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <span className="text-[11px] font-bold text-[#1F6F6B] uppercase block">+$50 one-time</span>
                  <h4 className="font-bold text-sm text-[#1A1A1A] mt-0.5">Digital Memorial Program</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Mobile-friendly digital flipbook with permanent QR code.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, digitalMemorialType: 'tribute' })}
                  className={`p-5 rounded border text-left transition-all cursor-pointer ${
                    formData.digitalMemorialType === 'tribute'
                      ? 'border-[#1F6F6B] bg-[#FAF8F5] ring-2 ring-[#1F6F6B]/30'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <span className="text-[11px] font-bold text-[#C9973F] uppercase block">+$125 one-time</span>
                  <h4 className="font-bold text-sm text-[#1A1A1A] mt-0.5">Legacy Tribute Webpage</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Enduring sanctuary with story, multi-photo gallery, condolences, and video.
                  </p>
                </button>
              </div>

              {formData.digitalMemorialType !== 'none' && (
                <div className="bg-[#FAF8F5] p-5 rounded border border-slate-200 space-y-4 animate-in fade-in duration-150">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Memorial Garden Directory Visibility
                      </label>
                      <select
                        value={formData.memorialVisibility}
                        onChange={(e) => setFormData({ ...formData, memorialVisibility: e.target.value as 'Public' | 'Private' })}
                        className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                      >
                        <option value="Public">Public (Listed in Memorial Garden directory for search)</option>
                        <option value="Private">Private / Unlisted (Hidden, unguessable link, noindex)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Printed QR Code Placement
                      </label>
                      <select
                        value={formData.qrCodePlacement}
                        onChange={(e) => setFormData({ ...formData, qrCodePlacement: e.target.value })}
                        className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                      >
                        <option value="Back Cover of Program">Back Cover of Memorial Program</option>
                        <option value="Inside Program Liturgy Page">Inside Program Page</option>
                        <option value="On Prayer Cards & Bookmarks">On Prayer Cards & Bookmarks</option>
                        <option value="Dedicated Small Wallet Cards">Separate Small QR Cards for Guests</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* STEP 9: Delivery Selection (Section 12, Page 15) */}
          {currentStep === 9 && (
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-3">
                <h2 className="font-serif text-2xl font-bold text-[#1A1A1A]">
                  9. Delivery & Receiving Arrangements
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Delivery fees begin at $30. Local arrangements coordinated directly with our Brooklyn studio.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  {
                    id: 'pickup',
                    title: 'Studio Pickup (Brooklyn, NY)',
                    desc: 'Pick up directly from our studio in Brooklyn by appointment.',
                    fee: 0,
                  },
                  {
                    id: 'funeral-home',
                    title: 'Direct Funeral Home / Chapel Delivery',
                    desc: 'Scheduled courier delivery directly to the funeral home front desk prior to viewing.',
                    fee: 30,
                  },
                  {
                    id: 'local',
                    title: 'Other Local Delivery (Church, Repast Venue, Residence)',
                    desc: 'Hand-delivered to your designated venue in the New York metropolitan area.',
                    fee: 35,
                  },
                  {
                    id: 'shipping',
                    title: 'Insured Priority Shipping (Out of Area)',
                    desc: 'Tracked expedited parcel shipping with signature confirmation.',
                    fee: 40,
                  },
                ].map((opt) => (
                  <label
                    key={opt.id}
                    className={`p-4 rounded border flex items-start justify-between gap-4 cursor-pointer transition-all ${
                      formData.deliveryMethod === opt.id
                        ? 'border-[#1F6F6B] bg-[#FAF8F5] ring-1 ring-[#1F6F6B]'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="radio"
                        name="deliveryMethod"
                        value={opt.id}
                        checked={formData.deliveryMethod === opt.id}
                        onChange={() => setFormData({ ...formData, deliveryMethod: opt.id as any, deliveryFee: opt.fee })}
                        className="w-4 h-4 mt-0.5 text-[#1F6F6B] border-slate-300 focus:ring-[#1F6F6B]"
                      />
                      <div>
                        <span className="font-bold text-sm text-[#1A1A1A] block">{opt.title}</span>
                        <p className="text-xs text-slate-600">{opt.desc}</p>
                      </div>
                    </div>
                    <span className="font-bold text-xs text-[#1F6F6B] shrink-0">
                      {opt.fee === 0 ? 'Free' : `$${opt.fee}`}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* STEP 10: Review & Sign-Off (Section 12, Page 15) */}
          {currentStep === 10 && (
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-3">
                <h2 className="font-serif text-2xl font-bold text-[#1A1A1A]">
                  10. Review Order & Final Sign-Off
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Please review your selections and confirm our studio proofing and turnaround policies.
                </p>
              </div>

              {/* Order Summary Box */}
              <div className="bg-[#FAF8F5] border border-slate-200 rounded p-6 space-y-4 text-xs sm:text-sm">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <span className="font-bold text-[#1F6F6B] uppercase tracking-wider">
                    Loved One
                  </span>
                  <span className="font-serif font-bold text-lg text-[#1A1A1A]">
                    {formData.lovedOneName || 'Name Pending'}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="font-semibold text-slate-500 block">Order Source:</span>
                    <span className="capitalize">{formData.orderSource} Order {formData.providerBusinessName && `(${formData.providerBusinessName})`}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-500 block">Service Date:</span>
                    <span>{formData.serviceDate || 'Pending confirmation'}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-500 block">Selected Items:</span>
                    <span>{formData.selectedProducts.length} Products Chosen</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-500 block">Delivery:</span>
                    <span className="capitalize">{formData.deliveryMethod} (${formData.deliveryFee})</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="font-bold text-sm text-[#1A1A1A] block">
                      Target Estimated Ready Date:
                    </span>
                    <span className="text-xs text-slate-500">Subject to approval & payment receipt</span>
                  </div>
                  <span className="font-serif font-bold text-xl text-[#1F6F6B]">
                    {formattedReadyDate}
                  </span>
                </div>
              </div>

              {/* Mandatory Policy Checkboxes (Section 12, Page 15) */}
              <div className="space-y-3 pt-2">
                <label className="flex items-start gap-2.5 text-xs text-[#1A1A1A]/85 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.confirmAccurate}
                    onChange={(e) => setFormData({ ...formData, confirmAccurate: e.target.checked })}
                    className="w-4 h-4 mt-0.5 text-[#1F6F6B] rounded border-slate-300 focus:ring-[#1F6F6B]"
                  />
                  <span>
                    I confirm that the service dates, names, spelling, and contact information provided are accurate to the best of my knowledge.
                  </span>
                </label>

                <label className="flex items-start gap-2.5 text-xs text-[#1A1A1A]/85 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.confirmTurnaround}
                    onChange={(e) => setFormData({ ...formData, confirmTurnaround: e.target.checked })}
                    className="w-4 h-4 mt-0.5 text-[#1F6F6B] rounded border-slate-300 focus:ring-[#1F6F6B]"
                  />
                  <span>
                    I acknowledge that the production clock begins only after payment is received and complete order materials are provided. {formData.rushSelected ? 'Rush production is subject to studio approval and incurs a separate fee.' : ''}
                  </span>
                </label>

                <label className="flex items-start gap-2.5 text-xs text-[#1A1A1A]/85 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.confirmPolicies}
                    onChange={(e) => setFormData({ ...formData, confirmPolicies: e.target.checked })}
                    className="w-4 h-4 mt-0.5 text-[#1F6F6B] rounded border-slate-300 focus:ring-[#1F6F6B]"
                  />
                  <span>
                    I have reviewed and agree to the Lilies of the Field{' '}
                    <button
                      type="button"
                      onClick={() => navigate('/order-and-proofing-policies')}
                      className="text-[#1F6F6B] underline font-bold"
                    >
                      Order & Proofing Policies
                    </button>.
                  </span>
                </label>
              </div>
            </div>
          )}

          {/* Form Action Buttons */}
          <div className="pt-8 mt-8 border-t border-slate-200 flex items-center justify-between gap-4">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handlePrevStep}
                className="btn-secondary text-xs py-2.5 px-5 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" /> Previous Step
              </button>
            ) : <div />}

            {currentStep < 10 ? (
              <button
                type="button"
                onClick={handleNextStep}
                className="btn-primary text-xs py-3 px-8 cursor-pointer"
              >
                Continue to Step {currentStep + 1} <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="btn-header-order text-sm py-3.5 px-8 shadow-md cursor-pointer"
              >
                Submit Order to Lilies of the Field
              </button>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
