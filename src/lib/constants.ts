import { 
  Briefcase, 
  Megaphone, 
  Network, 
  Globe,
  ChartBar,
  ShieldCheck,
  Coins,
  HelpCircle,
  TrendingUp,
  Code
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
  title: "Services",
  services: [
    {
      id: "investment",
      title: "Investment",
      description: "Advantage Venture invests in early stage blockchain startups that have a sustainable business model, are scalable, innovative and generate surplus value. We guide these initiatives to shape the future, and occasionally participate in OTC round investment opportunities.",
      icon: Coins
    },
    {
      id: "fundraising",
      title: "Fundraising Support",
      description: "We help crypto startups connect with investors, angel networks, OTC partners, and venture capital communities, bringing startups together with the right investors to accelerate growth.",
      icon: Briefcase
    },
    {
      id: "advisory",
      title: "Advisory",
      description: "With our many years of experience, we help you create the most accurate and powerful network, analyze opportunities and risks correctly, and make the future more predictable.",
      icon: HelpCircle
    },
    {
      id: "growth",
      title: "Growth",
      description: "We provide strategic planning, marketing, and operational support to accelerate your company's growth trajectory.",
      icon: TrendingUp
    },
    {
      id: "marketing",
      title: "KOL & Marketing",
      description: "Our experts help you manage your campaign with the most appropriate strategies by choosing the right KOLs you need. Access to crypto influencers, community campaigns, Twitter/X promotion, Telegram growth, and ambassador campaigns.",
      icon: Megaphone
    },
    {
      id: "development",
      title: "Development",
      description: "Secure, scalable, and innovative Web3 applications, including smart contracts, dApps, and blockchain solutions, built to match your business needs.",
      icon: Code
    },
    {
      id: "cex",
      title: "CEX Collaboration Support",
      description: "Guidance and strategic support for centralized exchange listings, including market preparation and partnership coordination.",
      icon: Globe
    },
    {
      id: "partnerships",
      title: "Strategic Partnerships",
      description: "We connect projects with ecosystem partners, launchpads, media partners, and growth networks.",
      icon: Network
    }
  ]
};

export const STATS = [
  { label: "Fundraising Support", icon: ChartBar },
  { label: "Exchange Access", icon: ShieldCheck },
  { label: "Growth Network", icon: Network },
  { label: "Seed Investment", icon: Coins },
];

export const PARTNERS = [
  { name: "Bedex", logo: "/partners/be;dex.png" },
  { name: "Bitcoin SV", logo: "/partners/bitcoinsv.png" },
  { name: "Bitradex", logo: "/partners/bitradex.png" },
  { name: "Conflux", logo: "/partners/conflux.png" },
  { name: "Eclipse", logo: "/partners/eclips.png" },
  { name: "Lab", logo: "/partners/lab.png" },
  { name: "Midnight", logo: "/partners/midnight.png" },
  { name: "Silver", logo: "/partners/silv.png" },
  { name: "Yooldo", logo: "/partners/yooldo.png" },
  { name: "zkPass", logo: "/partners/zkpass.png" }
];

export const PORTFOLIO = [
  { name: "Cubeos", logo: "/portfolio/cubeos.png" },
  { name: "Dustswap", logo: "/portfolio/dustswap.png" },
  { name: "Egochain", logo: "/portfolio/egochain.png" },
  { name: "Minati", logo: "/portfolio/minati.png" },
  { name: "Project Merlin", logo: "/portfolio/projectmerlin.png" }
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
  { name: "Partners", href: "#partners" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" }
];
