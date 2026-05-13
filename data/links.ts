export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "/mohit-manna-resume.pdf" },
  { label: "Contact", href: "#contact" },
];

export type SocialLink = {
  label: string;
  href: string;
  external: boolean;
};

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/MohitManna-2006",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/mohit542",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:mannamohit542@gmail.com",
    external: false,
  },
];

export const resumeHref = "/mohit-manna-resume.pdf";
