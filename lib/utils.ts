import { clsx, type ClassValue } from "clsx";

/**
 * Merge class names with clsx
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Format phone number for tel: links
 */
export function formatPhoneForLink(phone: string): string {
  return phone.replace(/[^\d+]/g, "");
}

/**
 * Get full address as a single string
 */
export function getFullAddress(address: {
  street: string;
  city: string;
  state: string;
  zip: string;
}): string {
  return `${address.street}, ${address.city}, ${address.state} ${address.zip}`;
}

/**
 * Generate Google Maps directions URL
 */
export function getDirectionsUrl(address: {
  street: string;
  city: string;
  state: string;
  zip: string;
}): string {
  const fullAddress = getFullAddress(address);
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`;
}

/**
 * Check if shop is currently open
 */
export function isShopOpen(
  hours: readonly { day: string; hours: string; isOpen: boolean }[]
): boolean {
  const now = new Date();
  const dayIndex = now.getDay(); // 0 = Sunday, 1 = Monday, etc.

  // Reorder to match our hours array (Monday = 0)
  const adjustedIndex = dayIndex === 0 ? 6 : dayIndex - 1;
  const todayHours = hours[adjustedIndex];

  if (!todayHours.isOpen) return false;

  // Parse hours and check if current time is within range
  // This is a simplified check - enhance as needed
  const [open, close] = todayHours.hours.split(" - ");
  if (!open || !close) return false;

  const currentHour = now.getHours();
  const openHour = parseTimeToHour(open);
  const closeHour = parseTimeToHour(close);

  return currentHour >= openHour && currentHour < closeHour;
}

function parseTimeToHour(time: string): number {
  const match = time.match(/(\d+)(am|pm)/i);
  if (!match) return 0;

  let hour = parseInt(match[1], 10);
  const isPM = match[2].toLowerCase() === "pm";

  if (isPM && hour !== 12) hour += 12;
  if (!isPM && hour === 12) hour = 0;

  return hour;
}
