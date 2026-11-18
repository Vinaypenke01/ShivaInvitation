import { createFileRoute } from "@tanstack/react-router";
import { WeddingInvitation } from '@/components/wedding-invitation';

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: 'Shiva Kumar & Lokeshwari Devi | Wedding Invitation · 26 November 2026' },
    { name: 'description', content: 'We solicit your gracious presence at the wedding of Chi. Shiva Kumar and Chi.La.Sow. Lokeshwari Devi on Thursday, 26th November 2026 at 9:16 AM IST at Parimala Convention Hall, Narayanaguda, Hyderabad.' },
    { property: 'og:title', content: 'Shiva Kumar & Lokeshwari Devi — Wedding Invitation' },
    { property: 'og:description', content: 'Sumuhurtham: Thursday, 26th November 2026 at 9:16 a.m. ("Dhanur Lagnam") · Parimala Convention Hall, Narayanaguda, Hyderabad.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: WeddingInvitation,
});
