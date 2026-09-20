import type { LucideIcon } from "lucide-react";

export interface Activity {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface TechNode {
  id: number;
  title: string;
  category: string;
  content: string;
  icon: LucideIcon;
  relatedIds: number[];
}

export interface CoreValue {
  title: string;
  description: string;
}

export interface TeamSocials {
  linkedin?: string;
  github?: string;
  twitter?: string;
  instagram?: string;
  behance?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  // Portrait URL or a path under /public (e.g. "/team/vansh-shah.jpg").
  // Leave it out and the card falls back to a monogram tile.
  image?: string;
  social?: TeamSocials;
  // Renders the dashed "open position" card that links to /contact.
  vacant?: boolean;
}

export type EventCategory = "Workshops" | "Seminars" | "Competitions" | "Community";

// A titled list shown in the event popup, e.g. "Winners" or "What we covered".
export interface EventHighlights {
  title: string;
  items: string[];
}

export interface ClubEvent {
  id: string;
  title: string;
  date: string;
  year: string;
  category: EventCategory;
  description: string;
  status: "upcoming" | "past";
  // Everything below is optional and only used by the event popup.
  // Longer write-up; falls back to `description` when omitted.
  details?: string;
  // Photo URLs for the popup gallery. When omitted, three "Event photo n of 3"
  // placeholders are shown instead.
  photos?: string[];
  highlights?: EventHighlights;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
}

export interface Metric {
  label: string;
  value: number;
  suffix?: string;
  delta: string;
  isLive?: boolean;
}

export interface MissionCard {
  number: string;
  title: string;
  description: string;
  tag: string;
}