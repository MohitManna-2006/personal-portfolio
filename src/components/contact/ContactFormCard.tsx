import React, { useState } from "react";

const ContactFormCard: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "general",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
    setFormData({ name: "", email: "", subject: "", message: "", inquiryType: "general" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="h-full rounded-3xl border border-slate-100/10 bg-slate-900/70 p-5 shadow-[0_14px_45px_rgba(2,6,23,0.45)] backdrop-blur-xl">
      <div className="mb-5">
        <h3 className="mb-1 text-lg font-semibold text-slate-100">Send Me a Message</h3>
        <p className="text-sm text-slate-300">Drop your details and what you&apos;re building — I&apos;ll reply soon.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex flex-col gap-3 md:flex-row">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full rounded-xl border border-slate-200/15 bg-slate-950/60 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-300/55 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full rounded-xl border border-slate-200/15 bg-slate-950/60 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-300/55 focus:outline-none"
          />
        </div>

        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="w-full rounded-xl border border-slate-200/15 bg-slate-950/60 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-300/55 focus:outline-none"
        />

        <select
          name="inquiryType"
          value={formData.inquiryType}
          onChange={handleChange}
          className="w-full cursor-pointer appearance-none rounded-xl border border-slate-200/15 bg-slate-950/60 px-3 py-2.5 text-sm text-slate-100 focus:border-cyan-300/55 focus:outline-none"
        >
          <option value="general">General Inquiry</option>
          <option value="collaboration">Collaboration</option>
          <option value="job">Job Opportunity</option>
          <option value="project">Project Discussion</option>
        </select>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          rows={4}
          className="min-h-[110px] w-full resize-none rounded-xl border border-slate-200/15 bg-slate-950/60 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-300/55 focus:outline-none"
        />

        <button
          type="submit"
          className="mt-2 w-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-300 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_10px_30px_rgba(34,211,238,0.35)] transition hover:-translate-y-0.5"
        >
          Send Message
        </button>

        {showSuccess && <div className="mt-2 text-center text-xs text-emerald-300">Message sent! I&apos;ll get back to you soon.</div>}
      </form>
    </div>
  );
};

export default ContactFormCard;
