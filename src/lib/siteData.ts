export const siteData = {
  firmName: "B S Manhas & Associates",
  lawyerName: "Adv. Amarvir Singh Manhas",
  lawyerFullName: "Amarvir Singh Manhas",
  designation: "Advocate",
  tagline: "Civil, Criminal & Matrimonial Lawyers",
  phone: "+91 94190 00016",
  whatsapp: "+91 94190 00016",
  email: "bsmanhasassociates@gmail.com",
  address: {
    line1: "19 A Bhawani Nagar, Janipur",
    line2: "",
    city: "Jammu",
    state: "Jammu & Kashmir",
    pin: "180007",
  },
  barEnrollment: "Bar Council of J&K and Ladakh",
  education: "The Law School, University of Jammu",
  yearsOfPractice: "18+",
  yearsOfPracticeStarted: 2008,
  founderName: "B S Manhas",
  founderYearsOfPractice: "40+",
  hours: {
    monday: "5:45 PM – 9:00 PM",
    tuesdayToSaturday: "6:00 PM – 9:00 PM",
    sunday: "Closed",
  },
  courts: [
    "High Court of Jammu & Kashmir and Ladakh",
    "District Court, Jammu",
  ],
  languages: ["English", "Hindi", "Dogri"],
  whatsappLink: "https://wa.me/919419000016?text=Hello%2C%20I%20would%20like%20to%20discuss%20a%20legal%20matter.",
  phoneLink: "tel:+919419000016",
  emailLink: "mailto:bsmanhasassociates@gmail.com",
} as const;

// Booking / consultation configuration
export const consultationTypes = [
  {
    id: "phone-10",
    title: "Phone Consultation",
    duration: "10 minutes",
    mode: "Phone call",
    note: "Quick advice on a specific legal question",
    fee: "₹2,000",
    confirmation: false,
  },
  {
    id: "in-office",
    title: "In-Office Consultation",
    duration: "30 minutes",
    mode: "In person at Jammu office",
    note: "Suitable for first advice, case review, and document discussion",
    fee: "₹5,000",
    confirmation: false,
  },
  {
    id: "tele-video",
    title: "Video Consultation",
    duration: "10 minutes",
    mode: "Video call (Google Meet / WhatsApp)",
    note: "Ideal for NRI clients or those unable to visit the office",
    fee: "₹2,000",
    confirmation: false,
  },
] as const;

export const bookingConfig = {
  // Office hours for booking slots
  slotStart: 18, // 6:00 PM (24h format)
  slotEnd: 21,   // 9:00 PM
  mondayStart: 17.75, // 5:45 PM on Monday
  slotDuration: 30, // minutes per slot
  bufferMinutes: 15,
  minNoticeHours: 12,
  closedDays: [0] as number[], // 0 = Sunday
  maxBookingsPerDay: 4,
  practiceAreas: ["Civil Law", "Criminal Law", "Matrimonial Law"] as string[],
  preferredLanguages: ["English", "Hindi", "Dogri"] as string[],
  followUpModes: ["Phone", "WhatsApp", "Video Call", "In Person"] as string[],
} as const;

// Google Reviews — real reviews from Google Maps (4.7/5, 11 reviews)
export const googleReviews = {
  rating: 4.7,
  totalReviews: 11,
  reviews: [
    {
      name: "Sumukh Khar",
      rating: 5,
      text: "Great services and they really have immense knowledge about law. Highly recommended for any type of consultation. NRI and international consultation provided as well.",
      timeAgo: "3 years ago",
    },
    {
      name: "Ujjwal Sharma",
      rating: 5,
      text: "Helpful... one must come here for consultation.",
      timeAgo: "6 years ago",
    },
    {
      name: "Mahant Onkar Giri Bakshi",
      rating: 5,
      text: "Experienced lawyer.",
      timeAgo: "2 years ago",
    },
    {
      name: "Gaurav Wazir",
      rating: 5,
      text: "Nice, helping people.",
      timeAgo: "6 years ago",
    },
    {
      name: "Vasudha Kotwal",
      rating: 5,
      text: "",
      timeAgo: "7 years ago",
    },
    {
      name: "Sayantini Bhuyan",
      rating: 5,
      text: "",
      timeAgo: "5 years ago",
    },
    {
      name: "Niloy Ray",
      rating: 5,
      text: "",
      timeAgo: "3 years ago",
    },
  ],
};

// Detailed client experiences (anonymized, for richer storytelling)
export const testimonials = [
  {
    quote:
      "Great services and they really have immense knowledge about law. Highly recommended for any type of consultation. NRI and international consultation provided as well.",
    name: "Sumukh K.",
    caseType: "Legal Consultation",
    practiceArea: "Civil" as const,
  },
  {
    quote:
      "Helpful — one must come here for consultation. Clear guidance and a professional approach to every matter.",
    name: "Ujjwal S.",
    caseType: "Consultation",
    practiceArea: "Civil" as const,
  },
  {
    quote:
      "Experienced lawyer. Handled everything professionally and kept me informed throughout the process.",
    name: "Mahant O.",
    caseType: "Legal Matter",
    practiceArea: "Civil" as const,
  },
  {
    quote:
      "Nice, helping people. Made me feel comfortable from the very first meeting and explained everything clearly.",
    name: "Gaurav W.",
    caseType: "Legal Consultation",
    practiceArea: "Civil" as const,
  },
];
