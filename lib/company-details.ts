export type ContactDetail = {
  label: string
  value: string
  href?: string
}

export type CompanySection = {
  title: string
  body: string[]
}

export type CompanyDetails = {
  name: string
  tagline: string
  foundedYear: number
  summary: string[]
  address: string[]
  contacts: ContactDetail[]
  email: string
  productCategories: string[]
  serviceHighlights: string[]
  industriesServed: string[]
  exportCountries: string[]
  profileSections: CompanySection[]
}

export const companyDetails: CompanyDetails = {
  name: "ALFA ENGINEERS",
  tagline: "Manufacturers of Mechanical Seals & Engineering Components",
  foundedYear: 2015,
  summary: [
    "ALFA ENGINEERS has expanded into a major manufacturer of mechanical seals, rotary unions, roto seal couplings, pump spares and all types of rubber products.",
    "The product portfolio is built for reliability with low-maintenance operation, long service life, and industry-driven designs.",
    "Products undergo quality checks before dispatch, helping the company serve a growing national and international customer base.",
  ],
  address: [
    "Gala No. 18, Suleman Irfan Compound",
    "Near Kranti Nagar, R. M. Road, Jogeshwari (West)",
    "Mumbai - 400 102, Maharashtra, India",
  ],
  contacts: [
    { label: "Sales", value: "+91 98670 97727", href: "tel:+919867097727" },
    { label: "Support", value: "+91 99305 43376", href: "tel:+919930543376" },
    { label: "Office", value: "+91 70435 21635", href: "tel:+917043521635" },
  ],
  email: "alfaengineers786@gmail.com",
  productCategories: [
    "Mechanical Seals",
    "Rotary Unions (Rotary Joints)",
    "Roto Seal Couplings",
    "Pump Spares",
    "Rubber Products",
  ],
  serviceHighlights: [
    "Customer-centric and transparent engagement",
    "In-house quality checks for defect-free range",
    "Accurate and timely delivery",
    "Flexible payment options",
    "Well-connected distribution network",
  ],
  industriesServed: [
    "Chemical",
    "Pharmaceutical",
    "Petrochemical",
    "Dairy",
    "Food and Beverage",
    "Sugar Plants",
    "Refineries",
    "Fertilizers",
    "Pulp and Paper",
    "Power Plants",
  ],
  exportCountries: [
    "UAE",
    "Saudi Arabia",
    "Qatar",
    "Nepal",
    "Ivory Coast",
    "Malawi",
    "Mozambique",
    "United Kingdom",
  ],
  profileSections: [
    {
      title: "Customer Satisfaction",
      body: [
        "The organization focuses on trust-driven relationships with customer-centric and transparent policies.",
        "Logistics and quality teams coordinate to maintain on-time deliveries and consistent product quality.",
      ],
    },
    {
      title: "Why Us",
      body: [
        "Modern infrastructure and a trained professional team support day-to-day manufacturing and distribution.",
        "Rigorous in-house quality assurance and dependable execution enable delivery within committed timelines.",
      ],
    },
  ],
}