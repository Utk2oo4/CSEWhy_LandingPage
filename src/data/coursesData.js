// ── UPSC Course Data ──────────────────────────────────────────
export const coursesData = [
  {
    id: "pyq-mastery-2027",
    title: "PYQ Mastery 2027",
    intro: "Decode UPSC through the lens of Previous Year Questions.",
    accentColor: "#7C3AED",
    accentBg: "#F0EBFF",
    iconBg: "#EDE5FF",
    illustration: "pyqs",
    originalPrice: "₹10,000",
    discountedPrice: "₹2,222",
    points: [
      { text: "Video lectures decoding logic & patterns behind every PYQ", icon: "clipboard-list" },
      { text: "Comprehensive PDF notes with source mapping", icon: "file-text" },
      { text: "Recurring themes for Prelims & Mains", icon: "target" },
    ],
  },
  {
    id: "current-affairs-mag",
    title: "Current Affairs Magazines",
    intro: "Stay updated. Stay ahead.",
    accentColor: "#2563EB",
    accentBg: "#EFF6FF",
    iconBg: "#DBEAFE",
    illustration: "magazine",
    originalPrice: "₹1,200",
    discountedPrice: "₹679",
    points: [
      { text: "Monthly compilations for Prelims & Mains", icon: "calendar" },
      { text: "Analysis of important news and editorials", icon: "edit" },
      { text: "Infographics and ready-to-revise content", icon: "image" },
    ],
  },
  
  {
    id: "master-ai-for-upsc",
    title: "Master AI for UPSC",
    intro: "Learn, apply and stay ahead with AI across every stage of prep.",
    accentColor: "#F45116",
    accentBg: "#FFF0E9",
    iconBg: "#FFE4D6",
    illustration: "ai-robot",
    originalPrice: "₹10,000",
    discountedPrice: "₹2,100",
    points: [
      { text: "AI for Current Affairs, Prelims, Mains & Interview", icon: "cpu" },
      { text: "Build a faster, smarter preparation system", icon: "clock" },
      { text: "Stay rooted in authentic sources & independent thinking", icon: "map" },
    ],
  },
  
  {
    id: "upsc-foundation-package",
    title: "UPSC Foundation Package",
    intro: "Build your foundation with every core topic in one place.",
    accentColor: "#0284C7",
    accentBg: "#F0F9FF",
    iconBg: "#E0F2FE",
    illustration: "writing",
    originalPrice: "₹2,500",
    discountedPrice: "₹1,000",
    points: [
      { text: "GS 1–4 topic-wise notes for Prelims & Mains", icon: "layers" },
      { text: "Prelims & Mains integrated into one resource", icon: "book-open" },
      { text: "Strong base before advanced prep & answer writing", icon: "target" },
    ],
  },
];

// ── Upskilling Course Data ────────────────────────────────────
export const upskillingData = [
  {
    id: "ai-creator-fellowship",
    title: "AI Creator Fellowship",
    intro: "Build practical AI & digital skills — without disrupting your exam journey.",
    accentColor: "#7C3AED",
    accentBg: "#F0EBFF",
    iconBg: "#EDE5FF",
    illustration: "ai-robot",
    originalPrice: "₹12,000",
    discountedPrice: "₹5,100",
    points: [
      { text: "AI for research, creativity, productivity & digital workflows", icon: "cpu" },
      { text: "Live guidance, structured lessons & practical assignments", icon: "map" },
      { text: "Build a Plan B, side income & future-ready career skills", icon: "briefcase" },
    ],
  },
  {
    id: "public-policy-fellowship",
    title: "Public Policy Fellowship",
    intro: "Turn your UPSC knowledge into a professional policy career.",
    accentColor: "#0284C7",
    accentBg: "#F0F9FF",
    iconBg: "#E0F2FE",
    illustration: "writing",
    originalPrice: "₹11,000",
    discountedPrice: "₹5,055",
    points: [
      { text: "Policy research, economics, law, governance & communication", icon: "file-text" },
      { text: "Real-world policy tasks and applied learning", icon: "layers" },
      { text: "Build personal brand and proof of work", icon: "star" },
    ],
  },
  {
    id: "personality-development",
    title: "Personality Development Program",
    intro: "Communicate with confidence. Present yourself effectively.",
    accentColor: "#10B981",
    accentBg: "#ECFDF5",
    iconBg: "#D1FAE5",
    illustration: "books",
    originalPrice: "₹8,000",
    discountedPrice: "₹2,525",
    points: [
      { text: "35-day practical program — feedback & real-world exposure", icon: "target" },
      { text: "Handle interviews, discussions & unexpected questions", icon: "users" },
      { text: "Build confidence, clarity and effective self-expression", icon: "bar-chart" },
    ],
  },
  {
    id: "ai-masterclass-upskilling",
    title: "AI Masterclass — Earn with AI",
    intro: "Learn how AI creates ₹15,000–₹25,000/month opportunities.",
    accentColor: "#E11D48",
    accentBg: "#FFF1F2",
    iconBg: "#FFE4E6",
    illustration: "creator",
    originalPrice: "₹500",
    discountedPrice: "₹199",
    badge: "Live • 3 Oct 2026 • 6 PM",
    points: [
      { text: "Content creation, freelancing & AI-powered services", icon: "briefcase" },
      { text: "Ready-to-use AI Prompt Library & practical E-Book", icon: "file-text" },
      { text: "Actionable roadmap to start earning with AI skills", icon: "map" },
    ],
  },
];

// ── View Configuration ────────────────────────────────────────
export const COURSE_VIEW_CONFIG = {
  upsc: {
    heading: "Courses Designed for a Smarter UPSC Preparation",
    highlightPhrase: "UPSC Preparation",
  },
  upskilling: {
    heading: "Skills That Help You Move Forward",
    highlightPhrase: "Move Forward",
  },
};

export const COURSE_GROUPS = {
  upsc: coursesData,
  upskilling: upskillingData,
};
