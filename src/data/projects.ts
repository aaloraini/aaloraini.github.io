export type Link = { label: string; href: string };

export type Project = {
  name: string;
  tagline: string;
  description: string;
  focus?: string;
  status?: string;
  category?: string;
  tags: string[];
  links?: Link[];
  icon?: { src: string; alt: string };
};

/* Featured: side-rolling cards. Apps first, then hardware. */
export const featured: Project[] = [
  {
    name: 'Logic Circuits Simulator',
    tagline: 'Digital logic design for iPhone, iPad & Mac',
    focus: 'Focus: product ownership, user research, and engineering',
    description:
      "It started as a conversation with my digital-electronics professor about what students should use to practice. The options all fell short: Tinkercad was too steep for juniors, Multisim sat behind a subscription, and the iPad apps most of us carried were outdated, pricey, or ad-filled. So I proposed building the tool we were missing. v1 covered the fundamentals; v2 improved performance and UX and added sharing and truth tables; for v3 I rebuilt the app from scratch to cover the whole curriculum, including clocks, flip-flops, and Karnaugh maps. It is live, used by students, and shaped by an agile loop of direct feedback from users and testers.",
    category: 'App',
    tags: ['Swift', 'SwiftUI', 'iOS · iPadOS · macOS'],
    links: [{ label: 'App Store', href: 'https://apps.apple.com/app/id6748374538' }],
    icon: { src: '/images/lcs/icon.png', alt: 'Logic Circuits Simulator app icon' },
  },
  {
    name: 'Ayatuk: Quran Verse Reminder',
    tagline: 'A calm daily verse habit',
    focus: 'Focus: product, user analytics, and retention',
    description:
      "I kept bouncing between Islamic apps that were dated, ad-heavy, and cluttered, so I built the one I actually wanted: something to keep me connected to the Quran on my busiest days, plus an athan reminder and qibla compass. Before writing a line of code, I set up Firebase Analytics so I could learn from real user behaviour. The MVP launched around one core habit, delivering the number of daily verses you choose, and I used the data to smooth onboarding and UX. Then came a Journey of themed daily verses, a streak system and badges for engagement, and a premium tier that funds development without blocking non-paying users, followed by athan and qibla. Watching engagement the whole way, I lifted week-4 retention from 1.3% to over 9%.",
    category: 'App',
    tags: ['Swift', 'SwiftUI', 'iOS'],
    links: [{ label: 'App Store', href: 'https://apps.apple.com/app/id6758534632' }],
    icon: { src: '/images/ayah/icon.png', alt: 'Ayatuk app icon' },
  },
  {
    name: 'JuDo',
    tagline: 'Minimal to-do with widgets and iCloud sync',
    focus: 'Focus: product and cross-platform engineering',
    description:
      "JuDo began as a tool for myself: I wanted one minimal to-do widget I could reach from anywhere, my Mac, iPhone, and iPad, with everything kept in sync. I built the macOS version first and refined it by living in it, taking notes on what actually helped my productivity. Once it felt right, I built the iOS and iPadOS apps and tied them together with iCloud so tasks stay current on every device. It is a small app that solves a real daily need, and I kept it simple, free, and open source on GitHub.",
    category: 'App',
    tags: ['Swift', 'WidgetKit', 'CloudKit'],
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/app/id6758580110' },
      { label: 'GitHub', href: 'https://github.com/aaloraini/JuDo' },
    ],
    icon: { src: '/images/judo/icon.png', alt: 'JuDo app icon' },
  },
  {
    name: 'ClearTick',
    tagline: 'A transparent-cased digital wristwatch',
    focus: 'Focus: hardware and embedded firmware',
    description:
      "I wanted a hands-on firmware project, so I designed a simple digital wristwatch around an MSP430FR4133 and sourced every component myself. The idea was a transparent-cased watch where the electronics are part of the look. The PCB I designed works as expected and the firmware is up and running; the enclosure is the part I am still finishing.",
    category: 'Hardware',
    tags: ['Embedded', 'MSP430', 'PCB / KiCad'],
    links: [{ label: 'GitHub', href: 'https://github.com/aaloraini/ClearTick' }],
  },
  {
    name: 'Portable Vending Machine',
    tagline: 'From technical drawings to a working prototype',
    focus: 'Focus: team leadership and engineering design',
    description:
      "This was my first-year project for the Drawing & Designing class, where I led a team of six. We set out to deliver the strongest design and a working proof of concept with the resources we had. My real aim was to show my teammates how to turn CAD models and paper sketches into a fully functional prototype, and how genuinely fun engineering is in real life. We had a great time building it and the result stood out: full marks in the class, and the prototype is still on display in the university's robotics and mechatronics lab.",
    category: 'Hardware',
    tags: ['Engineering design', 'C++', 'Mechatronics'],
    links: [{ label: 'GitHub', href: 'https://github.com/aaloraini/portable-vending-machine' }],
  },
];

/* Brief mentions: compact rows. */
export const more: Project[] = [
  {
    name: 'PixiCanva',
    tagline: 'Cross-platform pixel-art editor with layers, animation, and export',
    status: 'Open source',
    description: '',
    tags: ['Swift', 'SwiftUI'],
    links: [{ label: 'GitHub', href: 'https://github.com/aaloraini/PixiCanva' }],
  },
  {
    name: 'UCSI CGPA Calculator',
    tagline: 'A live web CGPA tool built to the UCSI handbook rules, used by students',
    status: 'Live',
    description: '',
    tags: ['Web', 'JavaScript'],
    links: [
      { label: 'Open live', href: 'https://aaloraini.github.io/ucsi-cgpa-calculator/' },
      { label: 'GitHub', href: 'https://github.com/aaloraini/ucsi-cgpa-calculator' },
    ],
  },
  {
    name: 'FStream',
    tagline: 'Personal music streaming from Google Drive, iOS + macOS, offline + widget',
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
