/**
 * Static UI navigation config — frontend only.
 * No business logic or server data.
 */

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/about-us", label: "About Us" },
  { href: "/why-us", label: "Why Us" },
  { href: "/contact-us", label: "Contact Us" },
] as const;

export const footerLinks = {
  company: [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/programs", label: "Programs" },
    { href: "/contact-us", label: "Contact Us" },
  ],
  legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-and-conditions", label: "Terms & Conditions" },
    { href: "/contact-us", label: "Contact Us" },
  ],
} as const;
