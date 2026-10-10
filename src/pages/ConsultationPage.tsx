import React, { useState } from 'react';
import { Calendar, Clock, Video, CheckCircle2, User, Mail, Phone, ArrowRight } from 'lucide-react';

interface ConsultationPageProps {
  navigate: (route: string) => void;
}

export const ConsultationPage: React.FC<ConsultationPageProps> = ({ navigate }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('11:00 AM');
  const [meetingPlatform, setMeetingPlatform] = useState('Google Meet');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [topic, setTopic] = useState('Selecting Memorial Program Formats');
  const [notes, setNotes] = useState('');
  const [booked, setBooked] = useState(false);

  const availableTimes = [
    '10:00 AM',
    '11:00 AM',
    '1:00 PM',
    '2:30 PM',
    '4:00 PM',
  ];

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !selectedDate) return;
    setBooked(true);
  };

  return (
    <div className="py-12 bg-white space-y-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1F6F6B]">
            Complimentary One-on-One Session
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#1A1A1A]">
            Schedule a Virtual Consultation
          </h1>
          <p className="text-base sm:text-lg text-[#1A1A1A]/75 max-w-2xl mx-auto leading-relaxed">
            For families who would like personal assistance selecting products or planning their memorial materials, our studio provides free 30-minute virtual consultations Monday through Friday.
          </p>
        </div>

        {/* Operating Hours & Policy Notice */}
        <div className="bg-[#FAF8F5] border border-slate-200 rounded p-4 text-xs text-[#1A1A1A]/80 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#C9973F] shrink-0" />
            <span>
              <strong>Availability:</strong> Monday–Friday only. Weekend consultations and weekend production are unavailable.
            </span>
          </div>
          <span className="font-bold text-[#1F6F6B] shrink-0">Duration: 30 Minutes · Free</span>
        </div>

        {booked ? (
          <div className="bg-white border-2 border-emerald-500 rounded p-8 sm:p-10 text-center space-y-4 shadow-sm">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">
              Consultation Scheduled Successfully
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Thank you, <strong>{fullName}</strong>. A calendar invite and {meetingPlatform} link have been sent to <strong>{email}</strong> for <strong>{selectedDate} at {selectedTime} ET</strong>.
            </p>
            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={() => navigate('/resources')}
                className="btn-primary text-xs py-2 px-6"
              >
                Explore Resources in the Meantime
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white border border-slate-200 rounded-sm p-6 sm:p-10 shadow-xs">
            <form onSubmit={handleBook} className="space-y-6">
              
              {/* Step A: Date & Time Picker */}
              <div className="space-y-4 border-b border-slate-100 pb-6">
                <h3 className="font-serif text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#1F6F6B]" />
                  Select Date & Preferred Time
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Consultation Date (Mon–Fri only) *
                    </label>
                    <input
                      type="date"
                      required
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full text-sm px-3 py-2.5 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Meeting Video Platform
                    </label>
                    <select
                      value={meetingPlatform}
                      onChange={(e) => setMeetingPlatform(e.target.value)}
                      className="w-full text-sm px-3 py-2.5 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                    >
                      <option value="Google Meet">Google Meet Video Call</option>
                      <option value="Zoom">Zoom Video Meeting</option>
                      <option value="Phone Call">Direct Telephone Call</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Available Time Slots (Eastern Time)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {availableTimes.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        className={`text-xs font-bold px-4 py-2 rounded-sm border transition-colors cursor-pointer ${
                          selectedTime === t
                            ? 'bg-[#1F6F6B] text-white border-[#1F6F6B]'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step B: Contact Information */}
              <div className="space-y-4">
                <h3 className="font-serif text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
                  <User className="w-5 h-5 text-[#1F6F6B]" />
                  Your Contact Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Katherine Davis"
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
                      placeholder="katherine@example.com"
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
                      placeholder="(718) 555-0144"
                      className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    What would you like to discuss?
                  </label>
                  <select
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                  >
                    <option value="Selecting Memorial Program Formats">Selecting Memorial Program Formats & Paper Types</option>
                    <option value="Coordinated Family Keepsake Suite">Planning a Coordinated Matching Keepsake Suite</option>
                    <option value="Digital Memorial & QR Setup">Digital Memorial & QR Code Setup</option>
                    <option value="Content & Photo Advice">Content, Writing & Photo Capacity Advice</option>
                    <option value="Expedited Rush Timeline Verification">Expedited Rush Timeline Verification</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Briefly explain what you need help with (optional)
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Tell us about loved one's upcoming service date, questions about photos, or any specific themes..."
                    className="w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden resize-none"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Meeting confirmation with {meetingPlatform} link will be sent immediately.
                </span>
                <button
                  type="submit"
                  className="btn-primary text-xs py-3 px-8 cursor-pointer"
                >
                  Confirm Free Consultation
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
