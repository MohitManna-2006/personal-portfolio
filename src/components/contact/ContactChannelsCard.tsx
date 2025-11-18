import React from "react";

/**
 * Contact Channels Card Component
 * Displays various contact methods in a glassmorphism card
 */
const ContactChannelsCard: React.FC = () => {
  const contactChannels = [
    {
      label: 'Purdue Email',
      value: 'manna2@purdue.edu',
      href: 'mailto:manna2@purdue.edu',
      icon: '📧'
    },
    {
      label: 'Personal Email',
      value: 'mannamohit542@gmail.com',
      href: 'mailto:mannamohit542@gmail.com',
      icon: '✉️'
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/mohit542',
      href: 'https://www.linkedin.com/in/mohit542/',
      icon: '💼'
    },
    {
      label: 'GitHub',
      value: 'github.com/MohitManna-2006',
      href: 'https://github.com/MohitManna-2006',
      icon: '💻'
    },
    {
      label: 'X',
      value: '@MohitManna2006',
      href: 'https://x.com/MohitManna2006',
      icon: '🐦'
    },
    {
      label: 'Instagram',
      value: '@mohit.manna06',
      href: 'https://www.instagram.com/mohit.manna06/',
      icon: '📷'
    },
    {
      label: 'Phone',
      value: '610-710-1671',
      href: 'tel:+16107101671',
      icon: '📱'
    }
  ];

  return (
    <div className="rounded-3xl max-md:rounded-2xl max-sm:rounded-xl bg-white/[0.12] backdrop-blur-xl border border-white/25 shadow-[0_8px_32px_rgba(0,0,0,0.15)] p-4 lg:p-5 max-md:p-4 max-sm:p-3 hover:shadow-[0_16px_48px_rgba(0,0,0,0.2)] transition-all duration-300 h-full">
      <div className="mb-5 max-md:mb-4 max-sm:mb-3">
        <h2 className="text-lg max-md:text-base max-sm:text-sm font-semibold text-black mb-1">
          Connect With Me
        </h2>
        <p className="text-xs max-md:text-[10px] text-[rgba(0,0,0,0.65)]">
          Fastest way to reach me is email, but I'm active on most platforms below.
        </p>
      </div>

      <div className="space-y-2.5 max-sm:space-y-2">
        {contactChannels.map((channel, index) => (
          <a
            key={index}
            href={channel.href}
            target="_blank"
            onClick={(e) => {
              if (channel.href === '#') {
                e.preventDefault();
                // TODO: Add real links
              }
            }}
            className="flex items-center justify-between rounded-2xl max-sm:rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-150 shadow-sm hover:shadow-md border border-white/10 px-3 py-2.5 max-sm:px-3 max-sm:py-2 cursor-pointer hover:translate-y-[-1px] group"
          >
            <div className="flex items-center gap-3 max-sm:gap-2.5 flex-1 min-w-0">
              <div className="flex items-center justify-center w-10 h-10 max-sm:w-9 max-sm:h-9 rounded-full bg-white/10 flex-shrink-0">
                <span className="text-lg max-sm:text-base">{channel.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm max-sm:text-xs font-medium text-black truncate">
                  {channel.label}
                </div>
                <div className="text-xs max-sm:text-[10px] text-[rgba(0,0,0,0.65)] truncate">
                  {channel.value}
                </div>
              </div>
            </div>
            <div className="text-xs text-[rgba(0,0,0,0.5)] group-hover:text-[rgba(0,0,0,0.7)] transition-colors flex-shrink-0 ml-2">
              →
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactChannelsCard;

