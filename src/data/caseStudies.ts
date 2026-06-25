import type { Link } from './projects';

export type Metric = { value: string; label: string };
export type Fact = { k: string; v: string };

export type Phase = {
  /* Lifecycle spine. Keep the vocabulary consistent across studies so it reads
     as one method applied repeatedly, not a set of one-off write-ups. Adapt the
     labels only where a project genuinely has no such phase. */
  label: string;
  body: string[];
};

export type CaseStudy = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  meta: Fact[];
  summary: string;
  metrics?: Metric[];
  phases: Phase[];
  links?: Link[];
  icon?: { src: string; alt: string };
  artifact?: {
    src: string;
    alt: string;
    caption: string;
    href?: string;
    hrefLabel?: string;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'ayatuk',
    name: 'Ayatuk: Quran Verse Reminder',
    tagline: 'A calm daily verse habit',
    category: 'App',
    meta: [
      { k: 'Role', v: 'Product owner, designer, and engineer' },
      { k: 'Timeline', v: 'Dec 2025 to present' },
      { k: 'Platform', v: 'iOS' },
    ],
    summary:
      'Ayatuk is a Quran companion I built to stay connected to the Quran on my busiest days. I treated it as a product from the first day: instrumented before launch, shipped a deliberately small MVP around a single habit, then let real engagement data decide what to build next. The launch week alone drew more than 2,000 downloads, and across the iterations that followed, week-4 retention climbed from 1.3% to over 9%.',
    metrics: [
      { value: '1.3% → 9%', label: 'week-4 retention, early cohorts to recent (Firebase)' },
      { value: '2,000+', label: 'downloads in the MVP launch week' },
      { value: '120,000+', label: 'in-app events tracked last quarter' },
    ],
    phases: [
      {
        label: 'Context',
        body: [
          'I kept bouncing between Islamic apps that felt dated, ad-heavy, and cluttered. None of them helped me do the one thing I actually wanted, which was to stay connected to the Quran on my busiest days.',
          'So I decided to build the app I wished existed: a calm daily-verse habit at its core, with an athan reminder and a qibla compass alongside it.',
        ],
      },
      {
        label: 'Ownership',
        body: [
          'I owned Ayatuk end to end: the product decisions, the design, the SwiftUI code, the analytics, the App Store release, and the iteration after launch.',
          'That meant every tradeoff was mine to make and to defend with data: what to cut from the MVP, when to introduce a paid tier, and how to grow engagement without cheapening the experience.',
        ],
      },
      {
        label: 'Discovery & decisions',
        body: [
          'Before writing a line of feature code, I set up Firebase Analytics so I could learn from real behaviour instead of guessing.',
          'The first decision was scope. Rather than ship a feature-heavy app, I launched around a single core habit: delivering the number of daily verses you choose. A small surface area let me see clearly where people dropped off and what kept them coming back.',
        ],
      },
      {
        label: 'Build & ship',
        body: [
          'I built the MVP in SwiftUI and shipped it to the App Store in February 2026. It drew more than 2,000 downloads in its launch week, which was the signal I needed: there was real demand for a calmer Quran app, and the product was worth pushing further.',
          'With the habit loop in real users hands, the analytics showed me where onboarding lost people and where the experience felt rough, and I tightened both. From there I added in a deliberate order, each step earning the next: a Journey of themed daily verses, a streak system and badges to reward consistency, then athan and qibla once the core habit was sticky.',
        ],
      },
      {
        label: 'Operate & iterate',
        body: [
          'This is where the product was really made. I watched engagement continuously and let the data set priorities. Onboarding changes, the Journey, and the streak and badge system each moved the numbers, and together they lifted week-4 retention from 1.3% to over 9%, comparing early cohorts to recent ones in Firebase. In the last quarter alone the app saw around 475 users and more than 120,000 tracked events, with a clear engagement spike after the most recent update.',
          'I funded it with a premium tier that unlocks a few extras (additional Journeys, verse tafseer, and a home-screen widget for the daily verse) rather than gating the core habit, which stays free. Its job is to support development, not to wall anyone out.',
        ],
      },
      {
        label: 'Learnings',
        body: [
          'Instrumenting before launch was the best decision I made. It turned opinions into evidence and made every later call easier to defend.',
          'Shipping a small MVP and earning each new feature with data kept the app focused and the retention curve moving. And building the business model so that paying is optional, never a wall, kept growth and trust pulling in the same direction.',
        ],
      },
    ],
    links: [{ label: 'App Store', href: 'https://apps.apple.com/app/id6758534632' }],
    icon: { src: '/images/ayah/icon.png', alt: 'Ayatuk app icon' },
  },

  {
    slug: 'logic-circuits-simulator',
    name: 'Logic Circuits Simulator',
    tagline: 'Digital logic design for iPhone, iPad & Mac',
    category: 'App',
    meta: [
      { k: 'Role', v: 'Product owner, designer, and engineer' },
      { k: 'Timeline', v: 'May 2025 to present' },
      { k: 'Platforms', v: 'iOS, iPadOS, macOS' },
    ],
    summary:
      'Logic Circuits Simulator is a digital-logic design tool for iPhone, iPad, and Mac that I built because the options my classmates and I had were too hard, too expensive, or too dated. It started from a conversation with my digital-electronics professor, grew through three versions shaped by direct, continuous feedback from him and from students, and is now the tool he uses officially to teach, practice, and collect assignments, across three semesters and counting.',
    metrics: [
      { value: '3 semesters', label: 'adopted as the official course tool, and counting' },
      { value: '4.2 ★', label: 'rating on the App Store' },
      { value: '3 platforms', label: 'iPhone, iPad, and Mac from one codebase' },
    ],
    phases: [
      {
        label: 'Context',
        body: [
          'Practicing digital logic at university meant choosing between bad options. Tinkercad was too steep for juniors, Multisim sat behind a subscription, and the iPad apps most of us carried were outdated, overpriced, or full of ads.',
          'In a conversation with my digital-electronics professor about what students should actually use, it became clear the right tool simply did not exist.',
        ],
      },
      {
        label: 'Ownership',
        body: [
          'I proposed building it, and then I owned it: the product direction, the interface design, the Swift and SwiftUI engineering across iPhone, iPad, and Mac, and the release.',
          'Just as important, I owned the feedback loop, working directly and continuously with my professor and with student testers so the app matched how the curriculum is actually taught.',
        ],
      },
      {
        label: 'Discovery & decisions',
        body: [
          'Validating the idea with a professor who teaches the subject kept the scope honest. I decided to start narrow and earn scope: v1 would nail the fundamentals well rather than cover everything poorly.',
          'Each release after that was driven by what students and testers told me they were missing, not by a feature list I imagined up front.',
        ],
      },
      {
        label: 'Build & ship',
        body: [
          'I moved quickly from the start. Development began in May 2025, the first test build and round of feedback came in June, and v1 shipped to the App Store in July. v1 covered the fundamentals; v2 improved performance and the interface and added sharing and truth tables; for v3, the version live today, I rebuilt the app from scratch to cover the full curriculum, including clocks, flip-flops, and Karnaugh maps.',
          'The same codebase ships to iPhone, iPad, and Mac, so a student can practice on whatever device they have with them.',
        ],
      },
      {
        label: 'Operate & iterate',
        body: [
          'The app is live on the App Store, holds a 4.2-star rating, and my professor has adopted it officially: for three continuous semesters and counting, students use it to practice, follow his explanations, and submit their assignments. With around 155 downloads it is a focused audience, but a committed one that uses the app exactly as it was meant to be used.',
          'I run it as an agile loop: real feedback from that audience feeds directly into the next version. That loop is what took it from a fundamentals tool to one that covers the full curriculum, and it keeps shaping where the app goes next.',
        ],
      },
      {
        label: 'Learnings',
        body: [
          'Starting from a real, observed problem, and validating it with someone who teaches the material, meant I never had to guess whether the app was worth building.',
          'Shipping narrow and letting user feedback pull the roadmap kept each version focused, and committing to a full rebuild for v3 paid off more than patching the old version ever would have.',
        ],
      },
    ],
    links: [{ label: 'App Store', href: 'https://apps.apple.com/app/id6748374538' }],
    icon: { src: '/images/lcs/icon.png', alt: 'Logic Circuits Simulator app icon' },
  },

  {
    slug: 'portable-vending-machine',
    name: 'Portable Vending Machine',
    tagline: 'From technical drawings to a working prototype',
    category: 'Hardware',
    meta: [
      { k: 'Role', v: 'Team lead; electronics & logic designer' },
      { k: 'Team', v: '6 members' },
      { k: 'Timeline', v: 'Year 1, Semester 2, 2025' },
    ],
    summary:
      'The Portable Vending Machine was my first-year Drawing & Designing project, where I led a team of six from technical drawings to a working prototype. I ran it from a single Figma board that kept our plan, roles, and grading checklist measurable, and I owned the electronics and logic design myself. We won the class demo competition, every team member earned an A+, and the prototype is still on display in the university’s robotics and mechatronics lab.',
    metrics: [
      { value: 'Team of 6', label: 'led to an A+ for every member' },
      { value: '1st place', label: 'winner of the class demo competition' },
      { value: 'On display', label: 'kept in the university robotics and mechatronics lab' },
    ],
    phases: [
      {
        label: 'Context',
        body: [
          'In my first year, the Drawing & Designing class asked us to take an idea from technical drawings all the way to a design and a working proof of concept. We chose a coin-operated portable vending machine.',
          'The constraints were real and specific: build it from recycled materials, keep it within an A3 footprint and under 2 kg, and still make it reliably vend. Delivering the strongest design and a working prototype on a first-year budget meant every choice had to count.',
        ],
      },
      {
        label: 'Ownership',
        body: [
          'I led a team of six. Beyond the deliverable, my real aim was to show my teammates how to turn CAD models and paper sketches into something that actually works, and how genuinely fun engineering is once it leaves the page.',
          'To keep six people aligned, I ran the entire project from a single Figma board: a week-by-week roadmap with a Done, In Progress, or Late status on every task, a defined role for each member, the deliverables for each phase, the structure of our design book, and the grading checklist itself. It kept progress visible and everything measurable, so the team always knew what done and what excellent looked like.',
        ],
      },
      {
        label: 'Design & decisions',
        body: [
          'We worked from technical drawings and CAD models, and the early decisions were the ones that mattered: vertical versus side-by-side item storage, a spring or a motor for the release, and which recycled materials (acrylic, cardboard, PET) could hold the build within the A3 and 2 kg limits.',
          'The goal was a design strong enough to defend and a prototype real enough to demonstrate.',
        ],
      },
      {
        label: 'Build',
        body: [
          'I owned the electronics and logic. I designed and tested the coin system end to end: the coin sensor, the threshold and coin-limit logic, the motor-and-spring release, and all the wiring. By the demo it reliably vended two different products for two different coin types.',
          'We turned the technical drawings into a functioning prototype, with the mechatronics doing the work the design promised. Getting from sketches to a machine that runs is where most of the learning happened, and where the team saw their drawings become real.',
        ],
      },
      {
        label: 'Outcome',
        body: [
          'The result stood out. We won the class demo competition, every member of the team earned an A+, and the prototype is still on display in the university’s robotics and mechatronics lab.',
          'More than the grade, the team finished it having genuinely enjoyed the engineering.',
        ],
      },
      {
        label: 'Learnings',
        body: [
          'Leading a team taught me that the deliverable and the people are the same job: the build only came together because everyone understood the goal and wanted to reach it.',
          'And taking something from a drawing to a working object is the clearest proof that a design was right.',
        ],
      },
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/aaloraini/portable-vending-machine' }],
    artifact: {
      src: '/images/vending/board.jpg',
      alt: 'The project board in Figma: a week-by-week roadmap with status tracking, a team roles table, phase deliverables, the design-book structure, and the grading checklist',
      caption:
        'I ran the whole project from one Figma board: a week-by-week roadmap with Done, In Progress, and Late status on every task, a clear role for each of the six members, the deliverables per phase, the design-book structure, and the grading checklist we marked ourselves against.',
      href: 'https://www.figma.com/board/oBaJl8WxMvXCrnj4Jr8lmK/Eng-D-D-Proj',
      hrefLabel: 'View the full board in Figma',
    },
  },
];
