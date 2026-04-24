import React, { useState } from "react";

/**
 * Contact Form Card Component
 * Displays a contact form in a glassmorphism card
 */
const ContactFormCard: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Hook up EmailJS & API call
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '', inquiryType: 'general' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="rounded-3xl max-md:rounded-2xl max-sm:rounded-xl bg-white/[0.12] backdrop-blur-xl border border-white/25 shadow-[0_8px_32px_rgba(0,0,0,0.15)] p-4 lg:p-5 max-md:p-4 max-sm:p-3 hover:shadow-[0_16px_48px_rgba(0,0,0,0.2)] transition-all duration-300 h-full">
      <div className="mb-5 max-md:mb-4 max-sm:mb-3">
        <h2 className="text-lg max-md:text-base max-sm:text-sm font-semibold text-black mb-1">
          Send Me a Message
        </h2>
        <p className="text-xs max-md:text-[10px] text-[rgba(0,0,0,0.65)]">
          Drop your email and a bit about what you're working on — I'll reply soon.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-3 space-y-3 max-sm:space-y-2.5">
        {/* Name and Email Row */}
        <div className="flex flex-col gap-3 md:flex-row max-sm:gap-2.5">
          <div className="flex-1">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full rounded-2xl max-sm:rounded-xl bg-white/5 border border-white/15 px-3 py-2.5 max-sm:px-3 max-sm:py-2 text-sm max-sm:text-xs text-black placeholder:text-[rgba(0,0,0,0.5)] focus:outline-none focus:border-black/30 focus:ring-2 focus:ring-black/20 transition-all duration-200"
            />
          </div>
          <div className="flex-1">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full rounded-2xl max-sm:rounded-xl bg-white/5 border border-white/15 px-3 py-2.5 max-sm:px-3 max-sm:py-2 text-sm max-sm:text-xs text-black placeholder:text-[rgba(0,0,0,0.5)] focus:outline-none focus:border-black/30 focus:ring-2 focus:ring-black/20 transition-all duration-200"
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full rounded-2xl max-sm:rounded-xl bg-white/5 border border-white/15 px-3 py-2.5 max-sm:px-3 max-sm:py-2 text-sm max-sm:text-xs text-black placeholder:text-[rgba(0,0,0,0.5)] focus:outline-none focus:border-black/30 focus:ring-2 focus:ring-black/20 transition-all duration-200"
          />
        </div>

        {/* Inquiry Type */}
        <div>
          <select
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleChange}
            className="w-full rounded-2xl max-sm:rounded-xl bg-white/5 border border-white/15 px-3 py-2.5 max-sm:px-3 max-sm:py-2 text-sm max-sm:text-xs text-black focus:outline-none focus:border-black/30 focus:ring-2 focus:ring-black/20 transition-all duration-200 appearance-none cursor-pointer"
          >
            <option value="general">General Inquiry</option>
            <option value="collaboration">Collaboration</option>
            <option value="job">Job Opportunity</option>
            <option value="project">Project Discussion</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows={4}
            className="w-full rounded-2xl max-sm:rounded-xl bg-white/5 border border-white/15 px-3 py-2.5 max-sm:px-3 max-sm:py-2 text-sm max-sm:text-xs text-black placeholder:text-[rgba(0,0,0,0.5)] focus:outline-none focus:border-black/30 focus:ring-2 focus:ring-black/20 transition-all duration-200 resize-none min-h-[100px] max-sm:min-h-[80px]"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-2 w-full rounded-full bg-black text-white py-2.5 max-sm:py-2 text-sm max-sm:text-xs font-medium shadow-lg hover:shadow-xl hover:bg-black/90 transition-all duration-200"
        >
          Send Message
        </button>

        {/* Success Message */}
        {showSuccess && (
          <div className="text-xs max-sm:text-[10px] text-green-600 mt-2 text-center">
            Message sent! I'll get back to you soon. {/* TODO: Replace with EmailJS & DB integration */}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactFormCard;

