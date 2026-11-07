export type PortfolioCategory = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  services: string[];
};

export const projects: PortfolioCategory[] = [
  {
    slug: "office-developments",
    title: "Office Developments",
    shortDescription:
      "Commercial office environments and workplace developments.",
    description:
      "AMPS includes office developments in its portfolio. Our quantity surveying and cost consultancy services support clients with cost planning, estimates, valuations and the financial management of construction projects.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=85&w=1400",
    services: [
      "Cost Planning",
      "Estimates",
      "Valuations",
      "Contract Administration",
      "Cash Flow Structuring",
    ],
  },
  {
    slug: "clinic-developments",
    title: "Clinic Developments",
    shortDescription:
      "Healthcare and clinic development environments.",
    description:
      "Clinic developments form part of the sectors represented in the AMPS portfolio. We provide professional cost consultancy services to help clients assess, plan and manage the financial aspects of construction projects.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=85&w=1400",
    services: [
      "Cost Planning",
      "Estimates",
      "Viability Analysis",
      "Valuations",
      "Procurement",
    ],
  },
  {
    slug: "shopping-centres",
    title: "Shopping Centres",
    shortDescription:
      "Retail destinations and shopping centre developments.",
    description:
      "AMPS identifies shopping centres as part of its portfolio. Our cost consultancy expertise supports the commercial considerations involved in planning and managing development costs.",
    image:
      "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=85&w=1400",
    services: [
      "Cost Planning",
      "Estimates",
      "Value Engineering",
      "Cash Flow Structuring",
      "Contract Administration",
    ],
  },
  {
    slug: "public-sector",
    title: "Public Sector",
    shortDescription:
      "Projects serving public institutions and communities.",
    description:
      "The public sector is an important part of the AMPS portfolio. The company profile also highlights work involving government departments and community upliftment initiatives.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=85&w=1400",
    services: [
      "Cost Planning",
      "Estimates",
      "Valuations",
      "Contract Administration",
      "Procurement",
    ],
  },
  {
    slug: "schools",
    title: "Schools",
    shortDescription:
      "Educational facilities and learning environments.",
    description:
      "Schools are included in the AMPS portfolio. Our professional services provide cost advice and management support for projects where careful planning and financial control are important.",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=85&w=1400",
    services: [
      "Cost Planning",
      "Estimates",
      "Valuations",
      "Viability Analysis",
      "Contract Administration",
    ],
  },
  {
    slug: "hotels-and-restaurants",
    title: "Hotels & Restaurants",
    shortDescription:
      "Hospitality environments and accommodation developments.",
    description:
      "AMPS includes hotels and restaurants among its portfolio categories. We provide quantity surveying and cost consultancy services to support the financial planning and management of these developments.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=85&w=1400",
    services: [
      "Cost Planning",
      "Estimates",
      "Value Engineering",
      "Valuations",
      "Procurement",
    ],
  },
  {
    slug: "warehouse-developments",
    title: "Warehouse Developments",
    shortDescription:
      "Industrial, storage and warehouse facilities.",
    description:
      "Warehouse developments form part of the AMPS portfolio. Our services support clients with construction cost advice, estimates, valuations and financial management throughout project delivery.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=85&w=1400",
    services: [
      "Cost Planning",
      "Estimates",
      "Cash Flow Structuring",
      "Valuations",
      "Contract Administration",
    ],
  },
  {
    slug: "airports",
    title: "Airports",
    shortDescription:
      "Airport facilities and aviation-related infrastructure.",
    description:
      "Airport projects are represented in the AMPS portfolio. We bring quantity surveying and construction cost consultancy expertise to the financial planning and management of development projects.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=85&w=1400",
    services: [
      "Cost Planning",
      "Estimates",
      "Valuations",
      "Cash Flow Structuring",
      "Procurement",
    ],
  },
  {
    slug: "residential-developments",
    title: "Residential Developments",
    shortDescription:
      "Residential buildings and housing developments.",
    description:
      "Residential developments are a key portfolio category identified by AMPS. The company profile also highlights experience in residential high-rise buildings and housing developments.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=85&w=1400",
    services: [
      "Cost Planning",
      "Estimates",
      "Viability Analysis",
      "Valuations",
      "Value Engineering",
    ],
  },
  {
    slug: "retail-stores",
    title: "Retail Stores",
    shortDescription:
      "Retail spaces and store developments.",
    description:
      "Retail stores are included in the AMPS portfolio. The company profile also notes retail-sector experience, including experience at the Woolworths Real Estate Division.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=85&w=1400",
    services: [
      "Cost Planning",
      "Estimates",
      "Valuations",
      "Value Engineering",
      "Procurement",
    ],
  },
  {
    slug: "theatres",
    title: "Theatres",
    shortDescription:
      "Performance venues and theatre developments.",
    description:
      "Theatres are identified as a portfolio category by AMPS. Our cost consultancy services can support the assessment and management of construction costs for these types of developments.",
    image:
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=85&w=1400",
    services: [
      "Cost Planning",
      "Estimates",
      "Valuations",
      "Contract Administration",
      "Value Engineering",
    ],
  },
  {
    slug: "universities-and-technikons",
    title: "Universities & Technikons",
    shortDescription:
      "Higher education campuses and institutional facilities.",
    description:
      "Universities and technikons are represented in the AMPS portfolio. Our professional cost consultancy services support the planning and financial management of development projects in the education sector.",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?q=85&w=1400",
    services: [
      "Cost Planning",
      "Estimates",
      "Valuations",
      "Viability Analysis",
      "Contract Administration",
    ],
  },
  {
    slug: "sustainable-technologies",
    title: "Sustainable Technologies",
    shortDescription:
      "Developments involving sustainable technology and environmental considerations.",
    description:
      "Sustainable technologies are specifically included in the AMPS portfolio. The company profile also highlights experience in sustainable environmental practices and a commitment to researching innovative approaches and solutions.",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=85&w=1400",
    services: [
      "Cost Planning",
      "Lifecycle Costing",
      "Viability Analysis",
      "Estimates",
      "Value Engineering",
    ],
  },
  {
    slug: "other-projects",
    title: "Other Projects",
    shortDescription:
      "A range of additional project types and specialist requirements.",
    description:
      "The AMPS company profile also recognises other projects within its portfolio. Our services are tailored to the requirements of each client and project, with a focus on value, time and quality.",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=85&w=1400",
    services: [
      "Cost Planning",
      "Estimates",
      "Valuations",
      "Lifecycle Costing",
      "Procurement",
    ],
  },
];
