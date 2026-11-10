
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Building2,
  Calculator,
  FileCheck2,
  Wallet,
  TrendingUp,
  Ruler,
  Lightbulb,
  ShieldCheck,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Cost Planning",
    description:
      "Strategic cost planning and financial control to help clients make informed decisions throughout their projects.",
    icon: Calculator,
  },
  {
    number: "02",
    title: "Valuations",
    description:
      "Professional valuation services supporting accurate financial assessments and effective project management.",
    icon: Building2,
  },
  {
    number: "03",
    title: "Contract Administration",
    description:
      "Professional administration and financial oversight throughout the construction contract process.",
    icon: FileCheck2,
  },
  {
    number: "04",
    title: "Cash Flow Structuring",
    description:
      "Structured cash flow planning to support financial efficiency and informed project decisions.",
    icon: Wallet,
  },
  {
    number: "05",
    title: "Viability Analysis",
    description:
      "Assessing project viability to help clients understand financial implications and potential risks.",
    icon: TrendingUp,
  },
  {
    number: "06",
    title: "Cost Estimates",
    description:
      "Cost estimates that provide a foundation for project budgeting and financial planning.",
    icon: Ruler,
  },
  {
    number: "07",
    title: "Lifecycle Costing",
    description:
      "Considering costs across the lifecycle of a building to support long-term value.",
    icon: Building2,
  },
  {
    number: "08",
    title: "Value Engineering",
    description:
      "Identifying innovative opportunities to optimise project value while considering cost, time and quality.",
    icon: Lightbulb,
  },
];

const sectors = [
  {
    title: "Commercial",
    subtitle: "Office developments & retail",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=85",
  },
  {
    title: "Residential",
    subtitle: "Housing & high-rise developments",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=85",
  },
  {
    title: "Education",
    subtitle: "Educational facilities",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?w=900&q=85",
  },
  {
    title: "Industrial & Infrastructure",
    subtitle: "Industrial, resource & infrastructure projects",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646e8e9e8?w=900&q=85",
  },
  {
    title: "Sports & Hospitality",
    subtitle: "Sports stadiums & hospitality buildings",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=900&q=85",
  },
  {
    title: "Healthcare & Transport",
    subtitle: "Health facilities & transport projects",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=900&q=85",
  },
];

const team = [
  {
    name: "Heren Mannie",
    qualification: "B.Sc (QS) PrQS PMAQS",
    experience: "29+ years experience",
    university: "Nelson Mandela Metropolitan University",
    description:
      "Experienced across educational, residential high-rise, housing, industrial and commercial construction. Passionate about community development and sustainable environmental practices.",
    initials: "HM",
  },
  {
    name: "Arthur Petersen",
    qualification: "B.Sc (QS) PrQS PMAQS",
    experience: "33+ years experience",
    university: "University of Cape Town",
    description:
      "Extensive experience in commercial, retail, sports, hospitality, education, transport, healthcare and residential developments, with a focus on innovative solutions and project delivery.",
    initials: "AP",
  },
  {
    name: "Zaahir van der Schyff",
    qualification: "B.Sc (QS) PrQS PMAQS",
    experience: "24+ years experience",
    university: "University of Cape Town",
    description:
      "Experienced in retail, industrial, resource and infrastructure sectors, delivering proactive project management and cost consultancy solutions focused on reducing client risk.",
    initials: "ZV",
  },
];

const principles = [
  {
    number: "01",
    title: "Our Approach",
    description:
      "Service excellence, a strong work ethic and integrity guide the way we work. We focus on understanding our clients' needs and delivering value.",
    icon: Target,
  },
  {
    number: "02",
    title: "Our Ethics",
    description:
      "We value confidentiality, loyalty, truthfulness and respect in every professional relationship.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Our Thinking",
    description:
      "We embrace innovation, knowledge sharing and practical solutions to meet the evolving needs of our clients.",
    icon: Lightbulb,
  },
];

const affiliations = [
  {
    name: "PRASA",
    subtitle: "Passenger Rail Agency of South Africa",
    image: "/images/affiliates/Prasa.svg.webp",
  },
  {
    name: "CapeNature",
    subtitle: "Environmental stewardship",
    image: "/images/affiliates/capenature.png",
  },
  {
    name: "Pick n Pay",
    subtitle: "Retail and property network",
    image: "/images/affiliates/picknpay.png",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Our Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export default function Home() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <main className="overflow-hidden bg-white text-[#20272D]">
      <Header />

      {/* HERO SECTION */}
      <section className="relative flex min-h-[720px] items-center bg-[#18344A] lg:min-h-[850px]">

        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2200&q=90"
            alt="Modern commercial architectural development"
            fill
            priority
            unoptimized
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#102638]/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#102638] via-[#102638]/85 to-transparent" />
        </div>

        <div className="absolute right-0 top-0 h-full w-[18%] border-l border-white/10 bg-white/[0.02] hidden lg:block" />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-16 pt-40 lg:px-12">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-4xl"
          >
            <div className="mb-8 flex items-center gap-4">
              <span className="h-[2px] w-12 bg-[#F28C28]" />
              <span className="text-xs font-bold tracking-[0.25em] text-[#F9C74F]">
                QUANTITY SURVEYORS & COST CONSULTANTS
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-[82px]">
              Building Value
              <br />
              Through{" "}
              <span className="text-[#F28C28]">Expertise.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-white/75 md:text-lg">
              Independent quantity surveying and construction cost consultancy.
              Delivering professional insight, innovative solutions and value
              across every stage of your project.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/services"
                className="group flex items-center justify-center gap-5 bg-[#F28C28] px-8 py-5 text-xs font-bold tracking-widest text-white transition hover:bg-white hover:text-[#18344A]"
              >
                EXPLORE OUR SERVICES
                <ArrowRight size={17} className="transition group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="flex items-center justify-center gap-4 border border-white/50 px-8 py-5 text-xs font-bold tracking-widest text-white transition hover:border-[#F28C28] hover:text-[#F28C28]"
              >
                CONTACT OUR TEAM
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.div>

          <div className="mt-24 grid max-w-3xl grid-cols-1 gap-8 border-t border-white/20 pt-8 sm:grid-cols-3">
            {[
              { value: "2007", label: "Established" },
              { value: "86+", label: "Combined years of leadership experience" },
              { value: "01", label: "Level 1 B-BBEE contributor*" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-extrabold text-white">
                  {stat.value}
                  {stat.value === "2007" && (
                    <span className="ml-1 text-[#F28C28]">.</span>
                  )}
                </div>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-widest text-white/55">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[10px] text-white/45">
            *B-BBEE status to be confirmed against current company documentation.
          </p>
        </div>

        <div className="absolute bottom-0 right-0 hidden h-2 w-1/3 bg-[#F28C28] lg:block" />
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1280px] items-center gap-16 lg:grid-cols-2">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative"
          >
            <div className="relative h-[440px] overflow-hidden md:h-[560px]">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=85"
                alt="Architectural construction plans and design"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-7 -right-3 bg-[#F28C28] p-8 text-white md:-right-7 md:p-10">
              <div className="text-4xl font-extrabold">AMPS</div>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em]">
                Professional Excellence
              </p>
            </div>
            <div className="absolute -left-3 -top-3 h-20 w-20 border-l-4 border-t-4 border-[#F28C28]" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#F28C28]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#F28C28]">
                WHO WE ARE
              </span>
            </div>

            <h2 className="text-4xl font-extrabold leading-tight text-[#18344A] md:text-5xl">
              Independent Expertise.
              <br />
              <span className="text-[#F28C28]">Professional Excellence.</span>
            </h2>

            <p className="mt-7 text-base leading-8 text-gray-600">
              AMPS is an independent professional Quantity Surveying and
              Construction Cost Consultancy Practice based in Cape Town,
              South Africa.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600">
              We provide specialised commercial cost advice and management
              services, combining industry knowledge, individual attention
              and professional expertise to meet the unique requirements of
              every client.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Professional quantity surveying expertise",
                "Client-focused cost consultancy",
                "Innovative and value-driven solutions",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="shrink-0 text-[#F28C28]" size={19} />
                  <span className="text-sm font-medium text-[#18344A]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-4 border-b-2 border-[#F28C28] pb-3 text-xs font-bold tracking-widest text-[#18344A] transition hover:gap-6"
            >
              MORE ABOUT AMPS
              <ArrowUpRight size={17} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* AFFILIATIONS */}
      <section className="bg-[#F3F1EE] px-6 py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-10 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 bg-[#F28C28]" />
            <span className="text-center text-xs font-extrabold tracking-[0.3em] text-[#F28C28] uppercase">
              Affiliations
            </span>
            <span className="h-[2px] w-10 bg-[#F28C28]" />
          </div>

          <div className="overflow-hidden rounded-[32px] border border-[#18344A]/10 bg-white/70 p-4 shadow-[0_18px_55px_rgba(24,52,74,0.08)] backdrop-blur-sm md:p-6">
            <div className="affiliation-track flex items-center gap-5 md:gap-7">
              {[...affiliations, ...affiliations].map((affiliation, index) => (
                <div
                  key={`${affiliation.name}-${index}`}
                  className="flex min-h-[120px] min-w-[180px] items-center justify-center p-2 md:min-w-[220px]"
                >
                  <Image
                    src={affiliation.image}
                    alt={affiliation.name}
                    width={200}
                    height={80}
                    unoptimized
                    className="max-h-[72px] w-auto object-contain opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#F8F8F6] px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1280px]">

          <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#F28C28]" />
                <span className="text-xs font-bold tracking-[0.2em] text-[#F28C28]">
                  WHAT WE DO
                </span>
              </div>
              <h2 className="max-w-2xl text-4xl font-extrabold leading-tight text-[#18344A] md:text-5xl">
                Our Professional
                <br />
                <span className="text-[#F28C28]">Services.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-gray-500">
              Comprehensive cost consultancy solutions designed to support
              projects through informed financial management, professional
              expertise and strategic thinking.
            </p>
          </div>

          <div className="grid gap-px bg-gray-200 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="group flex min-h-[290px] flex-col bg-white p-7 transition duration-300 hover:bg-[#18344A] md:p-8"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#F28C28]">
                      {service.number}
                    </span>
                    <Icon
                      size={27}
                      strokeWidth={1.5}
                      className="text-[#F28C28] transition group-hover:scale-110"
                    />
                  </div>

                  <h3 className="text-lg font-bold text-[#18344A] transition group-hover:text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-gray-500 transition group-hover:text-white/65">
                    {service.description}
                  </p>

                  <Link
                    href="/services"
                    className="mt-6 flex items-center gap-2 text-[10px] font-bold tracking-widest text-[#F28C28]"
                  >
                    LEARN MORE
                    <ArrowRight size={14} />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-4 bg-[#18344A] px-8 py-5 text-xs font-bold tracking-widest text-white transition hover:bg-[#F28C28]"
            >
              VIEW ALL SERVICES
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="relative overflow-hidden bg-[#18344A] px-6 py-24 lg:px-12 lg:py-32">
        <div className="absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full border border-white/10" />
        <div className="absolute -right-20 -top-20 h-[320px] w-[320px] rounded-full border border-white/10" />

        <div className="relative z-10 mx-auto max-w-[1280px]">
          <div className="max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#F28C28]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#F9C74F]">
                WHAT DEFINES US
              </span>
            </div>

            <h2 className="text-4xl font-extrabold leading-tight text-white md:text-5xl">
              The Principles Behind
              <br />
              <span className="text-[#F28C28]">Our Work.</span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-8 text-white/60">
              At AMPS, our professional philosophy is built around the
              principles that guide our relationships, decisions and
              commitment to delivering value.
            </p>
          </div>

          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {principles.map((principle) => {
              const Icon = principle.icon;
              return (
                <div
                  key={principle.number}
                  className="border-t border-white/20 pt-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#F28C28]">
                      {principle.number}
                    </span>
                    <Icon size={32} className="text-[#F28C28]" strokeWidth={1.4} />
                  </div>
                  <h3 className="mt-8 text-2xl font-bold text-white">
                    {principle.title}
                  </h3>
                  <p className="mt-5 text-sm leading-8 text-white/60">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1280px]">

          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#F28C28]" />
                <span className="text-xs font-bold tracking-[0.2em] text-[#F28C28]">
                  OUR EXPERIENCE
                </span>
              </div>
              <h2 className="text-4xl font-extrabold leading-tight text-[#18344A] md:text-5xl">
                Expertise Across
                <br />
                <span className="text-[#F28C28]">Diverse Sectors.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-gray-500">
              Our leadership team brings experience across a broad range of
              building and infrastructure environments.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="group relative h-[320px] overflow-hidden bg-[#18344A]"
              >
                <Image
                  src={sector.image}
                  alt={`${sector.title} sector`}
                  fill
                  unoptimized
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102638] via-[#102638]/30 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="mb-3 h-[2px] w-10 bg-[#F28C28] transition-all group-hover:w-16" />
                  <h3 className="text-xl font-bold text-white">
                    {sector.title}
                  </h3>
                  <p className="mt-2 text-xs text-white/65">
                    {sector.subtitle}
                  </p>
                </div>

                <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center border border-white/40 text-white opacity-0 transition group-hover:opacity-100">
                  <ArrowUpRight size={18} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-[#F8F8F6] px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1280px]">

          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#F28C28]" />
                <span className="text-xs font-bold tracking-[0.2em] text-[#F28C28]">
                  THE PEOPLE BEHIND AMPS
                </span>
              </div>

              <h2 className="text-4xl font-extrabold leading-tight text-[#18344A] md:text-5xl">
                Experience That
                <br />
                <span className="text-[#F28C28]">Makes a Difference.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-gray-500">
              Our leadership team combines decades of professional experience
              with a shared commitment to delivering value and building
              lasting client relationships.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white"
              >
                <div className="relative flex h-[250px] items-center justify-center overflow-hidden bg-[#18344A]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#284e66] to-[#102638]" />
                  <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/30 text-4xl font-bold text-white/80">
                    {member.initials}
                  </div>
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#F28C28] transition-all duration-500 group-hover:w-full" />
                </div>

                <div className="p-8">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#F28C28]">
                    {member.experience}
                  </p>
                  <h3 className="mt-3 text-2xl font-extrabold text-[#18344A]">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-xs font-semibold text-gray-500">
                    {member.qualification}
                  </p>
                  <p className="mt-3 text-xs text-gray-400">
                    {member.university}
                  </p>
                  <p className="mt-6 text-sm leading-7 text-gray-500">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/team"
              className="inline-flex items-center gap-3 border-b-2 border-[#F28C28] pb-3 text-xs font-bold tracking-widest text-[#18344A] transition hover:gap-5"
            >
              MEET OUR TEAM
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="relative overflow-hidden bg-[#F28C28] px-6 py-24 lg:px-12 lg:py-28">
        <div className="absolute -right-20 -top-28 h-96 w-96 rounded-full border border-white/20" />
        <div className="absolute -right-10 -top-20 h-72 w-72 rounded-full border border-white/20" />

        <div className="relative z-10 mx-auto flex max-w-[1280px] flex-col justify-between gap-10 lg:flex-row lg:items-center">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-[0.25em] text-white/80">
              LET'S WORK TOGETHER
            </span>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white md:text-6xl">
              Have a Project
              <br />
              in Mind?
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-8 text-white/85">
              Let's discuss how AMPS can support your next development
              through professional quantity surveying and cost consultancy.
            </p>
          </div>

          <Link
            href="/contact"
            className="group flex shrink-0 items-center justify-between gap-12 bg-[#18344A] px-8 py-6 text-xs font-bold tracking-widest text-white transition hover:bg-white hover:text-[#18344A]"
          >
            GET IN TOUCH
            <ArrowUpRight size={20} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
