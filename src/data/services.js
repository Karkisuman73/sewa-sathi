import {
  Briefcase,
  GraduationCap,
  Heart,
  Building2,
  Home,
  Plane,
} from "lucide-react";

export const services = [
  {
    id: 1,
    category: "Business",
    icon: Briefcase,
    color: "blue",

    subServices: [
      {
        id: 101,
        title: "Consulting",
        description:
          "Get professional business consulting and advisory services.",
      },
      {
        id: 102,
        title: "Finance",
        description:
          "Find financial, accounting and business finance services.",
      },
      {
        id: 103,
        title: "Legal",
        description:
          "Find legal information and professional legal services.",
      },
    ],
  },

  {
    id: 2,
    category: "Education",
    icon: GraduationCap,
    color: "purple",

    subServices: [
      {
        id: 201,
        title: "Courses",
        description:
          "Explore courses and learning programs.",
      },
      {
        id: 202,
        title: "Tutoring",
        description:
          "Find tutors and personalized learning support.",
      },
      {
        id: 203,
        title: "Training",
        description:
          "Discover professional and skill-based training.",
      },
    ],
  },

  {
    id: 3,
    category: "Healthcare",
    icon: Heart,
    color: "rose",

    subServices: [
      {
        id: 301,
        title: "Medical",
        description:
          "Find medical services and healthcare facilities.",
      },
      {
        id: 302,
        title: "Dental",
        description:
          "Find dental clinics and dental care services.",
      },
      {
        id: 303,
        title: "Pharmacy",
        description:
          "Find pharmacies and pharmacy-related services.",
      },
    ],
  },

  {
    id: 4,
    category: "Government",
    icon: Building2,
    color: "amber",

    subServices: [
      {
        id: 401,
        title: "Documentation",
        description:
          "Get help with government documents and applications.",
      },
      {
        id: 402,
        title: "Tax Services",
        description:
          "Find tax-related information and services.",
      },
      {
        id: 403,
        title: "Registration",
        description:
          "Explore government registration services.",
      },
    ],
  },

  {
    id: 5,
    category: "Housing",
    icon: Home,
    color: "emerald",

    subServices: [
      {
        id: 501,
        title: "Property",
        description:
          "Find property-related services.",
      },
      {
        id: 502,
        title: "Rental",
        description:
          "Explore rental and housing services.",
      },
      {
        id: 503,
        title: "Construction",
        description:
          "Find construction and home development services.",
      },
    ],
  },

  {
    id: 6,
    category: "Travel",
    icon: Plane,
    color: "cyan",

    subServices: [
      {
        id: 601,
        title: "Hotels",
        description:
          "Find hotels and accommodation services.",
      },
      {
        id: 602,
        title: "Tours",
        description:
          "Explore tours and travel experiences.",
      },
      {
        id: 603,
        title: "Visa Assistance",
        description:
          "Find visa information and assistance services.",
      },
    ],
  },
];