/**
 * SINGLE SOURCE OF TRUTH FOR SITE COPY
 *
 * ---------------------------------------------------------------------------
 * READ THIS BEFORE LAUNCH
 * ---------------------------------------------------------------------------
 * Anything with `confirmed: false` is NOT client-verified. Those items render
 * as a visible "awaiting confirmation" placeholder instead of real content, so
 * unverified claims can never silently ship to a paying customer.
 *
 * To go live with a section: replace the placeholder data, then flip
 * `confirmed` to true. Nothing else needs to change.
 *
 * Deliberately NOT invented anywhere in this file:
 *   - ticket prices, deposit amounts, payment-plan terms
 *   - what the ticket does/doesn't include (accommodation, transport, meals, spa)
 *   - the itinerary
 *   - testimonials
 *   - the founder's personal story details
 *   - cancellation/refund policy terms
 *   - podcast episode titles and platform links
 * ---------------------------------------------------------------------------
 */

export const retreat = {
  name: "The Nola Girls Luxury Retreat",
  dates: "September 18–20, 2026",
  datesShort: "Sept 18–20, 2026",
  location: "Houston, Texas",
  spots: 15,
  spotsLabel: "Only 15 Spots Available",
};

export const nav = [
  { label: "Home", to: "/" },
  { label: "Our Story", to: "/our-story" },
  { label: "The Retreat", to: "/retreat" },
  { label: "Shop", to: "/shop" },
  { label: "Podcast", to: "/podcast" },
  { label: "Contact", to: "/contact" },
];

export const hero = {
  script: "From Surviving to Healing",
  heading: "A Sacred Space to Exhale, Reconnect, and Heal",
  body: "Born from Latashia Picquet's journey with sickle cell disease, Nola Girls Luxury Retreat invites women to experience restoration, sisterhood, self-care, and spiritual renewal.",
};

export const mission =
  "Nola Girls creates space for women carrying visible and silent battles to exhale, reconnect with themselves, and honor healing as a lifelong journey.";

export const pillars = [
  { title: "Restoration", body: "Make room for peace, joy, and the healing your whole self deserves." },
  { title: "Sisterhood", body: "Connect with women who understand what it means to carry silent battles." },
  { title: "Self-Care", body: "Choose yourself and experience care and luxury without guilt." },
  { title: "Spiritual Renewal", body: "Reconnect with yourself and honor healing as a lifelong journey." },
];

export const readyTo = [
  "Pause after spending so much time caring for others",
  "Lay down the weight of visible and silent battles",
  "Prioritize restoration and self-care without guilt",
  "Reconnect with themselves in supportive sisterhood",
  "Honor emotional, mental, physical, and spiritual healing",
];

/**
 * WHAT'S INCLUDED
 * `confirmed: false` — the client has NOT verified which of these are fully
 * covered by the ticket. Accommodation, transportation, meals and spa in
 * particular are commercial promises: listing them unverified creates a real
 * obligation to the buyer. Rendered as placeholders until confirmed.
 */
export const included = {
  confirmed: false,
  heading: "Your Retreat Experience Includes",
  items: [],
  // Must be answered explicitly — buyers will ask, and FAQ answers depend on it.
  needsExplicitAnswer: [
    "Is overnight accommodation included in the ticket price?",
    "Are meals included, and which ones?",
    "Are spa services included or priced separately?",
    "Is airport transportation or local transport included?",
  ],
};

export const whatToExpect = [
  "Space to finally exhale",
  "Restoration and self-care",
  "Supportive sisterhood",
  "Time to reconnect with yourself",
  "Spiritual renewal",
  "Luxury without guilt",
];

/**
 * ITINERARY — not published until the client confirms.
 * The day-by-day below is the *structure* discussed, not a confirmed schedule.
 */
export const itinerary = {
  confirmed: false,
  days: [],
};

/**
 * PRICING — no figures invented. Every amount below is null on purpose.
 * Hidden pricing costs trust, so this must be filled before launch, not left.
 */
export const pricing = {
  confirmed: false,
  packages: [],
  needsExplicitAnswer: [
    "Early-bird price and the date it ends",
    "Standard ticket price",
    "Deposit amount",
    "Payment-plan instalment amounts and dates",
    "Final payment deadline",
    "Cancellation and refund policy wording",
  ],
};

/**
 * TESTIMONIALS — empty by design. Do not populate with invented quotes.
 * Until real ones exist, the section renders the founder's mission instead,
 * which is honest social proof rather than manufactured proof.
 */
export const testimonials = {
  confirmed: false,
  items: [],
};

/**
 * PODCAST — platform URLs unknown. Links stay disabled until supplied so the
 * page never ships a button that goes nowhere.
 */
export const podcast = {
  confirmed: true,
  heading: "Continue the Conversation with Nola Girls Podcast",
  body: "Born from Latashia's journey from surviving to healing, the Nola Girls Podcast is an extension of her mission to turn pain into purpose and remind women that healing is powerful.",
  platforms: [
    { name: "YouTube", url: "https://www.youtube.com/@Nolagirls" },
  ],
  episodes: [],
};

/**
 * FAQ — questions are confirmed; ANSWERS are not, because most depend on
 * pricing/inclusions/policy the client hasn't supplied. Answering them from
 * guesswork would put false commercial terms in front of buyers.
 */
export const faq = {
  answersConfirmed: false,
  items: [
    { q: "Who is this retreat for?", a: null },
    { q: "What is included in the retreat ticket?", a: null },
    { q: "Is accommodation included?", a: null },
    { q: "Are flights or transportation included?", a: null },
    { q: "What airport should I use?", a: null },
    { q: "Can I attend alone?", a: null },
    { q: "Is the deposit refundable?", a: null },
    { q: "Are payment plans available?", a: null },
    { q: "What should I bring?", a: null },
    { q: "Will dietary requirements be accommodated?", a: null },
    { q: "Is the retreat faith-based or spiritual?", a: null },
    { q: "What happens after I purchase my ticket?", a: null },
    { q: "Can tickets be transferred?", a: null },
    { q: "What is the cancellation policy?", a: null },
  ],
};

export const finalCta = {
  heading: "You Deserve a Space to Exhale.",
  body: "Give yourself permission to rest, reconnect, and honor your healing without guilt.",
  button: `Reserve One of ${retreat.spots} Spots`,
};

export const contact = {
  confirmed: false,
  email: null,
  instagram: null,
  phone: null,
};

/**
 * SOCIAL LINKS
 *
 * `url: null` renders the icon as a visibly inert placeholder rather than a
 * live link. Fill in the real profile URLs to activate them — guessing a
 * handle risks sending visitors to someone else's account.
 *
 * Remove any platform the brand doesn't actually use.
 */
export const social = [
  {
    name: "Instagram",
    icon: "instagram",
    url: "https://www.instagram.com/Nolagirlspodcast",
  },
  {
    name: "TikTok",
    icon: "tiktok",
    url: "https://www.tiktok.com/@tashianolagirl",
  },
  {
    name: "YouTube",
    icon: "youtube",
    url: "https://www.youtube.com/@Nolagirls",
  },
];
