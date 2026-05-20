import { 
  Briefcase, 
  Handshake, 
  Megaphone, 
  Network, 
  Wallet,
  Globe,
  ChartBar,
  ShieldCheck
} from 'lucide-react';

export const HERO_CONTENT = {
  label: "Crypto Venture Network",
  heading: "Empowering Crypto Startups With Capital, Growth & Exchange Access",
  subheading: "Advantage Venture helps blockchain and Web3 startups with fundraising, CEX collaboration support, KOL marketing, strategic partnerships, and early-stage investments."
};

export const ABOUT_CONTENT = {
  title: "About Advantage Venture",
  paragraphs: [
    "Advantage Venture is a crypto-focused venture network supporting early-stage blockchain and Web3 projects.",
    "We help promising startups grow through strategic fundraising support, exchange collaboration guidance, marketing partnerships, community expansion, and seed investments.",
    "Our mission is to connect innovative founders with investors, communities, and growth opportunities."
  ]
};

export const SERVICES_CONTENT = {
  title: "What We Do",
  services: [
    {
      id: "fundraising",
      title: "Fundraising Support",
      description: "We help crypto startups connect with investors, angel networks, OTC partners, and venture capital communities.",
      icon: Briefcase
    },
    {
      id: "cex",
      title: "CEX Collaboration Support",
      description: "Guidance and strategic support for centralized exchange listings, including market preparation and partnership coordination.",
      icon: Globe
    },
    {
      id: "marketing",
      title: "KOL & Marketing",
      description: "Access to crypto influencers, community marketing campaigns, Twitter/X promotions, Telegram growth, and ambassador campaigns.",
      icon: Megaphone
    },
    {
      id: "partnerships",
      title: "Strategic Partnerships",
      description: "We connect projects with ecosystem partners, launchpads, media partners, and growth networks.",
      icon: Network
    },
    {
      id: "otc",
      title: "OTC Investment",
      description: "Advantage Venture occasionally participates in OTC round investment opportunities.",
      icon: Wallet
    }
  ]
};

export const STATS = [
  { label: "Fundraising Support", icon: ChartBar },
  { label: "Exchange Access", icon: ShieldCheck },
  { label: "Growth Network", icon: Network },
  { label: "Seed Investment", icon: Wallet },
];

export const PARTNERS = [
  { name: "Project One", logo: "/partners/project-one.svg" },
  { name: "Project Two", logo: "/partners/project-two.svg" },
  { name: "Project Three", logo: "/partners/project-three.svg" },
  { name: "Project Four", logo: "/partners/project-four.svg" },
  { name: "Project Five", logo: "/partners/project-five.svg" },
  { name: "Project Six", logo: "/partners/project-six.svg" },
  { name: "Project Seven", logo: "/partners/project-seven.svg" },
  { name: "Project Eight", logo: "/partners/project-eight.svg" },
];

export const PARTNER_CTA_CONTENT = {
  title: "Partner With Us",
  text: "Whether you are raising capital, preparing for exchange expansion, building strategic partnerships, or scaling your Web3 community, Advantage Venture can help you reach the right network."
};

export const CONTACT_CONTENT = {
  title: "Contact",
  email: "contact@advantageventure.com",
  twitter: "@AdvantageVentur",
  telegram: "@dealorhossain7"
};

export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Partners & Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" }
];
