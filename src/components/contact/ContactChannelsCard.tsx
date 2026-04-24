import React from "react";

const ContactChannelsCard: React.FC = () => {
  const contactChannels = [
    { label: "Purdue Email", value: "manna2@purdue.edu", href: "mailto:manna2@purdue.edu", icon: "📧" },
    { label: "Personal Email", value: "mannamohit542@gmail.com", href: "mailto:mannamohit542@gmail.com", icon: "✉️" },
    { label: "LinkedIn", value: "linkedin.com/in/mohit542", href: "https://www.linkedin.com/in/mohit542/", icon: "💼" },
    { label: "GitHub", value: "github.com/MohitManna-2006", href: "https://github.com/MohitManna-2006", icon: "💻" },
    { label: "X", value: "@MohitManna2006", href: "https://x.com/MohitManna2006", icon: "🐦" },
    { label: "Instagram", value: "@mohit.manna06", href: "https://www.instagram.com/mohit.manna06/", icon: "📷" },
    { label: "Phone", value: "610-710-1671", href: "tel:+16107101671", icon: "📱" },
  ];

  return (
    <div className="h-full rounded-3xl border border-slate-100/10 bg-slate-900/70 p-5 shadow-[0_14px_45px_rgba(2,6,23,0.45)] backdrop-blur-xl">
      <div className="mb-5">
        <h3 className="mb-1 text-lg font-semibold text-slate-100">Connect With Me</h3>
        <p className="text-sm text-slate-300">Fastest way to reach me is email, but I&apos;m active across platforms below.</p>
      </div>

      <div className="space-y-2.5">
        {contactChannels.map((channel) => (
          <a
            key={channel.label}
            href={channel.href}
            target={channel.href.startsWith("http") ? "_blank" : undefined}
            rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group flex items-center justify-between rounded-2xl border border-slate-100/10 bg-slate-950/50 px-3 py-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-200/35 hover:bg-slate-950/70"
          >
            <div className="flex min-w-0 flex-1 items-center gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-800/80">{channel.icon}</div>
              <div className="min-w-0">
                <div className="truncate text-sm font-medium text-slate-100">{channel.label}</div>
                <div className="truncate text-xs text-slate-400">{channel.value}</div>
              </div>
            </div>
            <span className="ml-2 text-slate-400 transition-colors group-hover:text-cyan-200">→</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactChannelsCard;
