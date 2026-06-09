/**
 * Static UI navigation config — frontend only.
 * No business logic or server data.
 */

export const navLinks = [
  { href: "#", label: "Home" },
  { href: "#our-programs", label: "Programs" },
  { href: "#about", label: "About Us" },
  { href: "#why", label: "Why Us" },
  { href: "#cta", label: "Contact Us" },
] as const;

export const footerLinks = {
  company: [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About Us" },
    { href: "/#our-programs", label: "Programs" },
    { href: "/contact-us", label: "Contact Us" },
  ],
  legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-and-conditions", label: "Terms & Conditions" },
    { href: "/contact-us", label: "Contact Us" },
  ],
} as const;
