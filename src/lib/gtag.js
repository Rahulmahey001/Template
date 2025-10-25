// lib/gtag.js
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

const canUseGtag = () => {
  if (!GA_TRACKING_ID) return false;
  if (typeof window === "undefined") return false;
  if (typeof window.gtag !== "function") return false;
  return true;
};

// Log page views safely on client
export const pageview = (url) => {
  if (!canUseGtag()) return;
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// Log specific events (optional)
export const event = ({ action, category, label, value }) => {
  if (!canUseGtag()) return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
