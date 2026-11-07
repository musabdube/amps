import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Lightbulb,
  ShieldCheck,
  Target,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About | AMPS",
  description:
    "Learn about AMPS, our values, and the construction cost consultancy expertise we bring to projects across South Africa.",
};

const values = [
  {
    number: "01",
    title: "Our Approach",
    icon: Target,
    description:
      "We pride ourselves on service excellence, a strong work ethic and integrity. Key to our success is understanding each client's core needs and delivering the best value solution in relation to time, quality and cost.",
  },
  {
    number: "02",
    title: "Our Ethics",
    icon: ShieldCheck,
    description:
      "Uncompromising integrity is at the heart of our work ethic. Our team is guided by loyalty, truthfulness and respect in every professional relationship.",
  },
  {
    number: "03",
    title: "Our Thinking",
    icon: Lightbulb,
    description:
      "We are future-focused and dynamic in our thinking, sharing knowledge and ideas while researching innovative approaches and practical solutions.",
  },
];

const clientTypes = [
  "Public sector",
  "Private sector",
  "Large corporations",
  "Small corporations",
  "Community upliftment projects",
];

const services = [
  "Cost planning",
  "Valuations",
  "Settlement of accounts",
  "Contract administration",
  "Cash flow structuring",
  "Viability analysis",
  "Estimates",
  "Lifecycle costing",
  "Replacement valuations",
  "Value engineering",
  "Procurement",
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white text-[#20272D]">
      <Header />

      <section className="relative flex min-h-[560px] items-center bg-[#18344A]">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2000&q=90"
          alt="Modern architectural development"
          fill
          priority
          unoptimized
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#102638]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#102638] via-[#102638]/75 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 pb-12 pt-40 lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-7 flex items-center gap-4">
              <span className="h-[2px] w-12 bg-[#F28C28]" />
              <span className="text-xs font-bold tracking-[0.25em] text-[#F9C74F]">
                GET TO KNOW US
              </span>
            </div>

            <h1 className="text-5xl font-extrabold leading-tight text-white md:text-7xl">
              About
              <span className="text-[#F28C28]"> AMPS.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-white/75">
              Independent professional quantity surveying and construction cost consultancy,
              grounded in expertise, integrity and a commitment to delivering value.
            </p>

            <div className="mt-10 flex items-center gap-3 text-xs font-semibold tracking-[0.24em] text-white/60">
              <Link href="/" className="transition hover:text-white">
                HOME
              </Link>
              <span>/</span>
              <span className="text-[#F28C28]">ABOUT US</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 h-2 w-1/3 bg-[#F28C28]" />
      </section>

      <section className="px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1280px] items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <div className="relative h-[420px] overflow-hidden md:h-[570px]">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=85"
                alt="Architectural planning and construction"
                fill
                unoptimized
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-7 -right-3 bg-[#F28C28] p-8 text-white md:-right-7 md:p-10">
              <div className="text-5xl font-extrabold">2007</div>
              <p className="mt-2 text-[10px] font-bold tracking-[0.2em]">YEAR ESTABLISHED</p>
            </div>
          </div>

          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#F28C28]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#F28C28]">
                WHO WE ARE
              </span>
            </div>

            <h2 className="text-4xl font-extrabold leading-tight text-[#18344A] md:text-5xl">
              Independent expertise.
              <br />
              <span className="text-[#F28C28]">Professional excellence.</span>
            </h2>

            <p className="mt-7 text-base leading-8 text-gray-600">
              Founded in 2007, AMPS is an independent professional quantity surveying and
              construction cost consultancy practice based in Cape Town.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600">
              We provide specialist commercial cost advice and management services through our
              detailed industry knowledge, individual attention to each project and professional
              expertise.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600">
              Our focus is on understanding the requirements of every client and providing
              professional solutions that deliver the best possible value throughout the project.
            </p>

            <div className="mt-9 flex items-center gap-3">
              <Building2 className="text-[#F28C28]" size={24} />
              <span className="text-sm font-semibold text-[#18344A]">
                Based in Cape Town, South Africa
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#18344A] px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#F28C28]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#F9C74F]">
                OUR PHILOSOPHY
              </span>
            </div>

            <h2 className="text-4xl font-extrabold leading-tight text-white md:text-5xl">
              The principles that
              <br />
              <span className="text-[#F28C28]">define our work.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-white/60">
              Our values shape how we work, how we engage with clients and how we respond to the
              demands of every project.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.number} className="border-t border-white/20 pt-9">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#F28C28]">{value.number}</span>
                    <Icon size={34} className="text-[#F28C28]" strokeWidth={1.4} />
                  </div>

                  <h3 className="mt-9 text-2xl font-bold text-white">{value.title}</h3>

                  <p className="mt-5 text-sm leading-8 text-white/60">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#F28C28]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#F28C28]">
                OUR CLIENTS
              </span>
            </div>

            <h2 className="text-4xl font-extrabold leading-tight text-[#18344A] md:text-5xl">
              Relationships built
              <br />
              on <span className="text-[#F28C28]">trust.</span>
            </h2>

            <p className="mt-7 text-sm leading-8 text-gray-600">
              Our long-standing client base includes organisations from both the public and private
              sectors, large and small corporations, as well as community upliftment projects.
            </p>

            <p className="mt-5 text-sm leading-8 text-gray-600">
              Each project is carefully managed by one of our partners from conception to completion,
              helping to ensure a seamless process throughout.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px bg-gray-200 sm:grid-cols-2">
            {clientTypes.map((client, index) => (
              <div key={client} className="flex min-h-[130px] flex-col justify-between bg-[#F8F8F6] p-7">
                <span className="text-xs font-bold text-[#F28C28]">0{index + 1}</span>
                <h3 className="text-lg font-bold text-[#18344A]">{client}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F8F6] px-6 py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#F28C28]" />
                <span className="text-xs font-bold tracking-[0.2em] text-[#F28C28]">
                  WHAT WE OFFER
                </span>
              </div>

              <h2 className="text-4xl font-extrabold leading-tight text-[#18344A] md:text-5xl">
                Comprehensive
                <br />
                <span className="text-[#F28C28]">cost consultancy.</span>
              </h2>

              <p className="mt-7 max-w-lg text-sm leading-8 text-gray-600">
                With our specialist skill set, we are able to offer a wide range of professional
                services to clients, supporting informed financial and project decisions.
              </p>

              <Link
                href="/services"
                className="mt-9 inline-flex items-center gap-4 border-b-2 border-[#F28C28] pb-3 text-xs font-bold tracking-[0.24em] text-[#18344A] transition-all hover:gap-6"
              >
                EXPLORE OUR SERVICES
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
              {services.map((service) => (
                <div key={service} className="flex items-center gap-3 border-b border-gray-200 pb-4">
                  <CheckCircle2 size={17} className="shrink-0 text-[#F28C28]" />
                  <span className="text-sm font-medium text-[#18344A]">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F28C28] px-6 py-24 lg:px-12">
        <div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-10 md:flex-row md:items-center">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-white/75">WORK WITH AMPS</span>
            <h2 className="mt-5 text-4xl font-extrabold text-white md:text-5xl">
              Let&apos;s build value together.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-8 text-white/85">
              Discover how our professional expertise can support your next project.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-between gap-12 bg-[#18344A] px-8 py-6 text-xs font-bold tracking-[0.24em] text-white transition hover:bg-white hover:text-[#18344A]"
          >
            CONTACT AMPS
            <ArrowUpRight size={19} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
