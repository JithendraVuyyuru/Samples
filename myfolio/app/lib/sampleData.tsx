import type { ReactNode } from "react";
import {
  ArrowUpRight,
  AudioLines,
  Briefcase,
  Dribbble,
  Github,
  Globe,
  Instagram,
  Layers,
  Linkedin,
  MapPinned,
  MessageCircle,
  Music2,
  Podcast,
  Sparkles,
  Star,
  Tally4,
  Twitter,
  Video,
} from "lucide-react";

export type WidgetSize = "small" | "wide" | "tall" | "large" | "full";
export type WidgetCategory =
  | "social"
  | "video"
  | "audio"
  | "link"
  | "text"
  | "map"
  | "image";

export interface WidgetItem {
  id: string;
  title: string;
  description: string;
  category: WidgetCategory;
  size: WidgetSize;
  icon: ReactNode;
  metadata?: string[];
  cta?: string;
}

export const marketingStats = [
  { label: "Active creators", value: "210k+" },
  { label: "Live widgets", value: "1.4M" },
  { label: "Avg. load time", value: "2.1s" },
  { label: "Profiles exported", value: "85k" },
];

export const widgetShowcase: WidgetItem[] = [
  {
    id: "twitter",
    title: "Twitter / X",
    description: "Live follower counts, bio, and latest posts.",
    category: "social",
    size: "wide",
    icon: <Twitter size={18} />,
    metadata: ["1.2M followers", "@myfolio"],
    cta: "View profile",
  },
  {
    id: "instagram",
    title: "Instagram Grid",
    description: "Showcase a curated grid with stories pinned.",
    category: "social",
    size: "tall",
    icon: <Instagram size={18} />,
    metadata: ["9 posts", "4 reels"],
    cta: "Open gallery",
  },
  {
    id: "github",
    title: "GitHub Pulse",
    description: "Repo stats, streaks, and pinned projects.",
    category: "social",
    size: "small",
    icon: <Github size={18} />,
    metadata: ["128 repos", "2.1k stars"],
  },
  {
    id: "youtube",
    title: "YouTube Channel",
    description: "Latest four videos with thumbnails and views.",
    category: "video",
    size: "large",
    icon: <Video size={18} />,
    metadata: ["4 recent uploads"],
  },
  {
    id: "podcast",
    title: "Podcast Episodes",
    description: "Cover art, duration, and quick play.",
    category: "audio",
    size: "wide",
    icon: <Podcast size={18} />,
    metadata: ["12 episodes"],
  },
  {
    id: "spotify",
    title: "Spotify Artist",
    description: "Monthly listeners, top songs, and follow button.",
    category: "audio",
    size: "small",
    icon: <Music2 size={18} />,
    metadata: ["420k listeners"],
  },
  {
    id: "case-study",
    title: "Case Study",
    description: "Highlight your best work with a custom hero.",
    category: "link",
    size: "large",
    icon: <Briefcase size={18} />,
    metadata: ["Auto OG preview"],
    cta: "Read case study",
  },
  {
    id: "testimonial",
    title: "Testimonials",
    description: "Rotating quotes from clients and teams.",
    category: "text",
    size: "wide",
    icon: <MessageCircle size={18} />,
    metadata: ["4 quotes"],
  },
  {
    id: "map",
    title: "Location Pins",
    description: "Drop your favorite places with live maps.",
    category: "map",
    size: "small",
    icon: <MapPinned size={18} />,
    metadata: ["Reykjavík"],
  },
];

export const exploreProfiles = [
  {
    id: "lynx",
    name: "Ava Lynx",
    role: "Product designer",
    stats: ["42 widgets", "Public"],
  },
  {
    id: "teo",
    name: "Teo Marin",
    role: "Motion director",
    stats: ["38 widgets", "Public"],
  },
  {
    id: "kira",
    name: "Kira Dael",
    role: "Indie hacker",
    stats: ["24 widgets", "Private"],
  },
  {
    id: "imani",
    name: "Imani Noor",
    role: "Creative studio",
    stats: ["55 widgets", "Public"],
  },
];

export const profileSections = [
  {
    id: "social",
    label: "Social & Identity",
    description: "Your handles, follower stats, and social cards.",
    icon: <Globe size={16} />,
  },
  {
    id: "content",
    label: "Content Feeds",
    description: "Video, podcasts, and live content streams.",
    icon: <Tally4 size={16} />,
  },
  {
    id: "work",
    label: "Work & Projects",
    description: "Case studies, portfolio, and embeds.",
    icon: <Briefcase size={16} />,
  },
  {
    id: "music",
    label: "Music & Audio",
    description: "Albums, tracks, and listening stats.",
    icon: <AudioLines size={16} />,
  },
  {
    id: "maps",
    label: "Maps & Places",
    description: "Pins, travel map, and location cards.",
    icon: <MapPinned size={16} />,
  },
  {
    id: "text",
    label: "Text Content",
    description: "Notes, rich text, and testimonials.",
    icon: <Layers size={16} />,
  },
];

export const profileWidgets: WidgetItem[] = [
  {
    id: "twitter-profile",
    title: "@myfolio",
    description: "Creative technologist • 12.4k followers",
    category: "social",
    size: "wide",
    icon: <Twitter size={18} />,
    metadata: ["Last post 2h ago", "Followed by 420"],
    cta: "Follow",
  },
  {
    id: "instagram-profile",
    title: "Instagram",
    description: "Grid preview • 9 posts",
    category: "social",
    size: "tall",
    icon: <Instagram size={18} />,
    metadata: ["Stories", "Highlights"],
    cta: "View",
  },
  {
    id: "tiktok-profile",
    title: "TikTok",
    description: "Short-form experiments • 118k likes",
    category: "social",
    size: "small",
    icon: <Sparkles size={18} />,
    metadata: ["3 new videos"],
  },
  {
    id: "github-profile",
    title: "GitHub",
    description: "Open-source stats",
    category: "social",
    size: "small",
    icon: <Github size={18} />,
    metadata: ["57 repos", "1.8k stars"],
  },
  {
    id: "dribbble",
    title: "Dribbble Shots",
    description: "Latest UI explorations",
    category: "social",
    size: "wide",
    icon: <Dribbble size={18} />,
    metadata: ["6 new shots"],
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    description: "Consulting • 7 years",
    category: "social",
    size: "small",
    icon: <Linkedin size={18} />,
    metadata: ["1.2k connections"],
  },
  {
    id: "youtube",
    title: "YouTube",
    description: "Latest 4 videos",
    category: "video",
    size: "large",
    icon: <Video size={18} />,
    metadata: ["12k subscribers"],
  },
  {
    id: "video-card",
    title: "Video Card",
    description: "Highlighted tutorial",
    category: "video",
    size: "small",
    icon: <Video size={18} />,
    metadata: ["8:12", "1.2k views"],
  },
  {
    id: "tiktok-grid",
    title: "TikTok Grid",
    description: "Latest 3 clips",
    category: "video",
    size: "wide",
    icon: <Sparkles size={18} />,
    metadata: ["Auto-playing previews"],
  },
  {
    id: "podcast",
    title: "Podcast Episodes",
    description: "Design Dispatch",
    category: "audio",
    size: "wide",
    icon: <Podcast size={18} />,
    metadata: ["32 min avg."],
  },
  {
    id: "album",
    title: "Album Spotlight",
    description: "Synthwave Sessions",
    category: "audio",
    size: "small",
    icon: <Music2 size={18} />,
    metadata: ["Play preview"],
  },
  {
    id: "song",
    title: "Song Card",
    description: "Neon Coastline",
    category: "audio",
    size: "small",
    icon: <AudioLines size={18} />,
    metadata: ["3:24"],
  },
  {
    id: "case-study",
    title: "Case Study",
    description: "Rebrand for Aurora Labs",
    category: "link",
    size: "large",
    icon: <Briefcase size={18} />,
    metadata: ["Read time 8 min"],
    cta: "Open",
  },
  {
    id: "figma",
    title: "Figma Embed",
    description: "Design system overview",
    category: "link",
    size: "wide",
    icon: <Layers size={18} />,
    metadata: ["Live preview"],
  },
  {
    id: "gallery",
    title: "Portfolio Gallery",
    description: "6 images",
    category: "image",
    size: "wide",
    icon: <Star size={18} />,
    metadata: ["Auto lightbox"],
  },
  {
    id: "location",
    title: "Location Pin",
    description: "Reykjavík • Remote",
    category: "map",
    size: "small",
    icon: <MapPinned size={18} />,
  },
  {
    id: "map-embed",
    title: "Maps Embed",
    description: "Google Maps view",
    category: "map",
    size: "wide",
    icon: <MapPinned size={18} />,
  },
  {
    id: "quote",
    title: "Quote",
    description: "\"Design is the voice of our intent.\"",
    category: "text",
    size: "wide",
    icon: <MessageCircle size={18} />,
  },
  {
    id: "section-heading",
    title: "Section Heading",
    description: "Newsletter • Updates • Notes",
    category: "text",
    size: "small",
    icon: <Layers size={18} />,
  },
  {
    id: "rich-text",
    title: "Rich Text",
    description: "Mini manifesto and newsletter opt-in.",
    category: "text",
    size: "large",
    icon: <Layers size={18} />,
  },
  {
    id: "link-preview",
    title: "Link Preview",
    description: "Auto-fetched OG data",
    category: "link",
    size: "small",
    icon: <ArrowUpRight size={18} />,
  },
  {
    id: "testimonial",
    title: "Testimonial",
    description: "\"Delivered ahead of schedule.\"",
    category: "text",
    size: "small",
    icon: <MessageCircle size={18} />,
  },
];
