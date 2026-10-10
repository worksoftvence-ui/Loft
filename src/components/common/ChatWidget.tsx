import React, { useState } from 'react';
import { MessageSquare, X, Send, Clock, CheckCircle2 } from 'lucide-react';

interface ChatWidgetProps {
  onNavigate: (route: string) => void;
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [topic, setTopic] = useState('Ordering Help');
  const [submitted, setSubmitted] = useState(false);

  const topics = [
    'Ordering Help',
    'Product Questions',
    'Existing Order Status',
    'Digital Memorials',
    'Virtual Consultation',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !email.trim()) return;
    setSubmitted(true);
  };

  const handleTopicClick = (t: string) => {
    setTopic(t);
    if (t === 'Virtual Consultation') {
      onNavigate('/schedule-a-consultation');
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#1F6F6B] hover:bg-[#1A1A1A] text-white p-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 group cursor-pointer"
          aria-label="Open support chat"
        >
          <MessageSquare className="w-5 h-5 text-[#C9973F] group-hover:scale-110 transition-transform" />
          <span className="text-xs font-bold uppercase tracking-wider pr-1 hidden sm:inline">
            Message Studio
          </span>
        </button>
      )}

      {/* Chat Popover Window */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-2xl border border-slate-200 w-84 sm:w-96 overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-200">
          {/* Header */}
          <div className="bg-[#1F6F6B] text-white p-4 flex items-center justify-between">
            <div>
              <h4 className="font-serif font-bold text-base leading-tight">Lilies of the Field</h4>
              <p className="text-[11px] text-[#F5EFE6]/80 flex items-center gap-1 mt-0.5">
                <Clock className="w-3 h-3 text-[#C9973F]" />
                Monday–Friday Production Studio
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded hover:bg-white/10"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50 border-b border-slate-200 text-xs text-slate-600 leading-relaxed">
            <p className="font-medium text-[#1A1A1A]">
              We&apos;re away right now. Leave a message and we&apos;ll reply during business hours, Monday through Friday.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-[#1F6F6B] mx-auto" />
              <h5 className="font-bold text-[#1A1A1A] text-sm">Message Received</h5>
              <p className="text-xs text-slate-600">
                Thank you for contacting Lilies of the Field. We have received your inquiry regarding <strong>{topic}</strong> and will follow up at <strong>{email}</strong> during regular business hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setMessage('');
                  setIsOpen(false);
                }}
                className="btn-secondary text-xs py-1.5 px-4 mt-2"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-4 space-y-3">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  How can we help? (Quick Topics)
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {topics.map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => handleTopicClick(t)}
                      className={`text-[11px] px-2.5 py-1 rounded-sm border transition-colors cursor-pointer ${
                        topic === t
                          ? 'bg-[#1F6F6B] text-white border-[#1F6F6B]'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                />
              </div>

              <div>
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden"
                />
              </div>

              <div>
                <textarea
                  required
                  rows={3}
                  placeholder="Tell us about your memorial needs, questions, or loved one's upcoming service..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-white border border-slate-300 rounded focus:border-[#1F6F6B] focus:outline-hidden resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1F6F6B] hover:bg-[#1A1A1A] text-white py-2 text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                Leave Message
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};
