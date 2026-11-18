export const weddingDetails = {
  groom: "Shiva Kumar",
  groomFull: "Chi. Shiva Kumar",
  groomRole: "Son",
  groomParents: "Son of Sri Medishetty Govindu & Smt. Bhavani",
  groomParentsTe: "(శ్రీ మేడిశెట్టి గోవిందు మరియు శ్రీమతి భవాని దంపతుల కుమారుడు)",
  bride: "Lokeshwari Devi",
  brideFull: "Chi.La.Sow. Lokeshwari Devi",
  brideParents: "(Eldest D/o. Smt. Anuguthala Padma & Late Sri Venkatesh)",
  hosts: {
    parents: {
      father: "Sri Medishetty Govindu",
      mother: "Smt. Bhavani",
      roleEn: "Parents (Yours Truly)",
      roleTe: "తల్లిదండ్రులు (భవదీయులు)",
    },
    sisterAndBrotherInLaw: {
      brotherInLaw: "Sri Guthula Raviteja",
      sister: "Smt. Vijaya Devi",
      roleEn: "Sister & Brother-in-law (Awaiting Your Presence)",
      roleTe: "అక్కయ్య & బావగారు (ఆగమనాభిలాషులు)",
    },
  },
  compliments: "With best compliments from : Near & Dear",
  timezone: "Asia/Kolkata",
  wedding: {
    date: "Thursday, 26 November 2026",
    shortDate: "26 November 2026",
    time: "9:16 AM IST",
    lagnam: "Dhanur Lagnam",
    startsAt: "2026-11-26T09:16:00+05:30",
  },
  mapsUrl: "https://maps.app.goo.gl/jfxgvhpnqdfpWmCQ8?g_st=iw",
  venueName: "Parimala Convention Hall",
  venueAddress: "Barkatpura Road, Chitrapuri Colony, Narayanaguda, Hyderabad.",
} as const;

export function getCountdown(now: number) {
  const seconds = Math.max(0, Math.floor((Date.parse(weddingDetails.wedding.startsAt) - now) / 1000));
  return {
    days: Math.floor(seconds / 86400),
    hours: Math.floor((seconds % 86400) / 3600),
    minutes: Math.floor((seconds % 3600) / 60),
    seconds: seconds % 60,
    complete: now >= Date.parse(weddingDetails.wedding.startsAt),
  };
}
