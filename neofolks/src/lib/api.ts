// TODO: replace with real data — this file simulates a backend with an
// artificial delay so TanStack Query's loading/error states are exercised.
// Swap each function body for a real `fetch()` call when an API exists.
import { activities } from "@/data/activities";
import { coreValues } from "@/data/activities";
import { teamMembers } from "@/data/team";
import { events } from "@/data/events";
import { testimonials } from "@/data/testimonials";
import type { ContactFormValues } from "@/lib/schemas";

function delay<T>(value: T, ms = 500): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

export async function fetchActivities() {
  return delay(activities);
}

export async function fetchCoreValues() {
  return delay(coreValues);
}

export async function fetchTeam() {
  return delay(teamMembers);
}

export async function fetchEvents() {
  return delay(events);
}

export async function fetchTestimonials() {
  return delay(testimonials);
}

export async function submitContactForm(values: ContactFormValues) {
  // Simulated network call. Replace with a real POST to your backend/API.
  await delay(null, 900);
  return { success: true as const, receivedAt: new Date().toISOString(), values };
}
