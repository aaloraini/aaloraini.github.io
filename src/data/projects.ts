export type Link = { label: string; href: string };

export type Project = {
  name: string;
  tagline: string;
  description: string;
  status?: string;
  tags: string[];
  links?: Link[];
  image?: { src: string; alt: string };
};

/* Featured — full cards. Order = strongest product-ownership story first. */
export const featured: Project[] = [
  {
    name: 'Logic Circuits Simulator',
    tagline: 'Digital logic design for iPhone, iPad & Mac',
    description:
      'A full digital-logic sandbox I conceived, built, and shipped — and carried across three major versions. Place gates on an infinite canvas, wire them up, and watch signals propagate live; generate truth tables and Karnaugh maps, package reusable chips, and sync circuits over iCloud. Circuits from the 2.x release migrate automatically on first launch.',
    status: 'App Store · v3',
    tags: ['Swift', 'SwiftUI', 'iOS · iPadOS · macOS', 'Solo product'],
    links: [{ label: 'App Store', href: 'https://apps.apple.com/app/id6748374538' }],
  },
  {
    name: 'Ayatuk — Quran Verse Reminder',
    tagline: 'A calm daily verse habit',
    description:
      'A deliberately minimal Quran reminder app: a structured daily-verse system with achievement badges and an athan chime — no accounts, no social feeds, no noise. Designed, built, and shipped end to end.',
    status: 'App Store',
    tags: ['Swift', 'SwiftUI', 'Product design', 'iOS'],
    links: [{ label: 'App Store', href: 'https://apps.apple.com/app/id6758534632' }],
    image: { src: '/images/ayah/ayatuk-1.png', alt: 'Ayatuk app screen showing a daily Quran verse' },
  },
  {
    name: 'ClearTick',
    tagline: 'A low-power translucent wristwatch',
    description:
      'A from-scratch hardware watch built around an MSP430FR4133 microcontroller, an RV-3028 real-time clock, and a passive segment LCD. Hardware is complete; firmware and enclosure keep evolving over time.',
    status: 'Hardware · Open source',
    tags: ['Embedded', 'MSP430', 'PCB / KiCad', 'Hardware'],
    links: [{ label: 'GitHub', href: 'https://github.com/aaloraini/ClearTick' }],
  },
  {
    name: 'Portable Vending Machine',
    tagline: 'From technical drawings to a working prototype',
    description:
      'A team-built portable vending machine for our Engineering Design & Drawing course, taken through the full design process — from technical drawings to a functional prototype.',
    status: 'Team build · Open source',
    tags: ['Engineering design', 'C++', 'Mechatronics', 'Teamwork'],
    links: [{ label: 'GitHub', href: 'https://github.com/aaloraini/portable-vending-machine' }],
  },
  {
    name: 'UCSI CGPA Calculator',
    tagline: 'A grade tool students actually use',
    description:
      'A web CGPA calculator built to the UCSI University student-handbook rules and published free for fellow students.',
    status: 'Live',
    tags: ['Web', 'JavaScript', 'Tool'],
    links: [
      { label: 'Open live', href: 'https://aaloraini.github.io/ucsi-cgpa-calculator/' },
      { label: 'GitHub', href: 'https://github.com/aaloraini/ucsi-cgpa-calculator' },
    ],
  },
];

/* Brief mentions — compact rows. */
export const more: Project[] = [
  {
    name: 'JuDo',
    tagline: 'Minimal to-do + widget for Mac & iOS, with iCloud sync',
    status: 'Mac App Store',
    description: '',
    tags: ['Swift', 'WidgetKit', 'CloudKit'],
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/app/id6758580110' },
      { label: 'GitHub', href: 'https://github.com/aaloraini/JuDo' },
    ],
  },
  {
    name: 'PixiCanva',
    tagline: 'Cross-platform pixel-art editor — layers, animation, export',
    status: 'Open source',
    description: '',
    tags: ['Swift', 'SwiftUI'],
    links: [{ label: 'GitHub', href: 'https://github.com/aaloraini/PixiCanva' }],
  },
  {
    name: 'FStream',
    tagline: 'Personal music streaming from Google Drive — iOS + macOS, offline + widget',
    status: 'Private',
    description: '',
    tags: ['Swift', 'AVFoundation'],
  },
  {
    name: 'kaset',
    tagline: 'Open-source contribution to a native macOS YouTube Music client',
    status: 'Contribution',
    description: '',
    tags: ['Swift', 'Open source'],
    links: [{ label: 'GitHub', href: 'https://github.com/aaloraini/kaset' }],
  },
];
