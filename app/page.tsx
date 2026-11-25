
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
  { label: "Projects", href: "/projects" },
  { label: "Our Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

function ScrambleValue({ target }: { target: string }) {
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+";
  const [value, setValue] = useState(target);

  useEffect(() => {
    const width = target.length;
    let frame = 0;
    const duration = 3200;
    const interval = 45;
    const totalFrames = duration / interval;

    const timer = window.setInterval(() => {
      frame += 1;

      if (frame >= totalFrames) {
        setValue(target);
        window.clearInterval(timer);
        return;
      }

      const progress = frame / totalFrames;
      const revealCount = Math.max(1, Math.floor(progress * width));

      const next = Array.from({ length: width }, (_, index) => {
        if (index < revealCount) {
          return target[index] ?? " ";
        }

        return charset[Math.floor(Math.random() * charset.length)];
      }).join("");

      setValue(next);
    }, interval);

    return () => window.clearInterval(timer);
  }, [target]);

  return (
    <span
      className="inline-block text-left font-mono tracking-[0.08em] text-white tabular-nums"
      style={{ minWidth: `${Math.max(target.length, 4)}ch` }}
    >
      {value}
    </span>
  );
}

export default function Home() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <main className="overflow-hidden bg-[#fffdf9] text-[#2d241f]">
      <Header overlay />

      {/* HERO SECTION */}
      <section className="relative flex min-h-[100vh] items-center bg-[#2d241f]">

        <div className="absolute inset-0 h-full w-full overflow-hidden">
          <Image
            src="/images/hero.png"
            alt="Modern commercial architectural development"
            fill
            priority
            sizes="100vw"
            className="h-full w-full scale-[1.03] object-cover object-[center_18%] sm:scale-100 sm:object-center"
          />
        </div>

        <div className="absolute right-0 top-0 hidden h-full w-[18%] border-l border-white/10 bg-white/[0.03] lg:block" />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-12 pt-20 sm:px-6 sm:pb-16 sm:pt-40 lg:px-12">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-4xl"
          >
            <div className="mb-6 flex items-center gap-4 sm:mb-8">
              <span className="h-[2px] w-12 bg-[#d9773a]" />
              <span className="text-[10px] font-bold tracking-[0.18em] text-[#f2c57a] sm:text-xs sm:tracking-[0.25em]">
                QUANTITY SURVEYORS & COST CONSULTANTS
              </span>
            </div>

            <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[82px]">
              Smart Cost
              <br />
              <span className="text-[#f3b567]">Management.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-white/80 sm:mt-8 sm:text-lg sm:leading-8 md:text-2xl">
              Expertise. Integrity. Value.
            </p>
          </motion.div>

          <div className="mt-14 grid max-w-3xl grid-cols-1 gap-8 border-t border-white/20 pt-8 sm:mt-24 sm:grid-cols-3">
            {[
              { value: "2007", label: "Established" },
              { value: "86+", label: "Combined years of leadership experience" },
              { value: "01", label: "Level 1 B-BBEE contributor*" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-extrabold text-white">
                  <ScrambleValue target={stat.value} />
                  {stat.value === "2007" && (
                    <span className="ml-1 text-[#f3b567]">.</span>
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

        <div className="absolute bottom-0 right-0 hidden h-2 w-1/3 bg-[#d9773a] lg:block" />
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
