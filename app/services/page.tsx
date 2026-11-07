import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesShowcase from "@/components/ServicesShowcase";

export const metadata: Metadata = {
  title: "Services | AMPS",
  description:
    "Explore AMPS services including cost planning, valuations, contract administration, procurement and construction cost consultancy across South Africa.",
};

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-[#F8F8F6] text-[#20272D]">
      <Header />

      <section className="relative flex min-h-[560px] items-center bg-[#102638] pt-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=85&w=2000')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#102638] via-[#102638]/90 to-[#102638]/40" />

        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 py-24 lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-[2px] w-12 bg-[#F28C28]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F28C28]">
                What We Do
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
              Professional
              <span className="block text-[#F28C28]">Services.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              Comprehensive quantity surveying and construction cost consultancy services, helping
              clients manage cost, quality and value throughout the project lifecycle.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#our-services"
                className="inline-flex items-center gap-3 bg-[#F28C28] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#dc7416]"
              >
                Explore Our Services <ArrowRight size={17} />
              </Link>
              <Link
                href="/contact"
                className="border border-white/40 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-[#102638]"
              >
                Discuss a Project
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 hidden h-28 w-1/3 bg-[#F28C28] md:block" />
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-24 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F28C28]">
              Our Expertise
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-[#18344A] md:text-5xl">
              Cost expertise.
              <br />
              <span className="text-[#F28C28]">Project confidence.</span>
            </h2>
            <p className="mt-7 leading-8 text-slate-600">
              At AMPS, we provide specialised commercial cost advice and management services.
              Through our detailed knowledge of the industry, individual attention to each project
              and professional expertise, we help clients make informed decisions.
            </p>
            <p className="mt-5 leading-8 text-slate-600">
              Our approach is built around understanding each client's needs and identifying
              solutions that offer the best value in relation to time, quality and cost.
            </p>
          </div>

          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=85&w=1200"
              alt="Architectural building construction"
              width={1200}
              height={800}
              className="h-[420px] w-full object-cover"
            />
            <div className="absolute -bottom-6 -left-6 hidden bg-[#F28C28] p-8 text-white md:block">
              <p className="text-4xl font-bold">2007</p>
              <p className="mt-1 text-xs uppercase tracking-wider">Established</p>
            </div>
          </div>
        </div>
      </section>

      <section id="our-services" className="bg-white py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F28C28]">
              Our Capabilities
            </span>
            <h2 className="mt-5 text-3xl font-bold text-[#18344A] md:text-5xl">Our Services</h2>
            <p className="mt-6 leading-8 text-slate-600">
              A comprehensive range of cost consultancy and quantity surveying services to support
              your project from planning to completion.
            </p>
          </div>

          <ServicesShowcase />
        </div>
      </section>

      <section className="bg-[#F1F0EC] py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F28C28]">
                The AMPS Difference
              </span>
              <h2 className="mt-5 text-3xl font-bold leading-tight text-[#18344A] md:text-5xl">
                More than numbers.
                <br />
                <span className="text-[#F28C28]">A commitment to value.</span>
              </h2>
              <p className="mt-7 leading-8 text-slate-600">
                We believe successful projects begin with understanding the people and objectives
                behind them. Our team combines professional expertise with individual attention and a
                commitment to service excellence.
              </p>
              <Link
                href="/about"
                className="mt-9 inline-flex items-center gap-3 font-semibold text-[#18344A] transition hover:text-[#F28C28]"
              >
                Discover Our Approach <ArrowRight size={18} />
              </Link>
            </div>

            <div className="space-y-7">
              {[
                {
                  title: "Time",
                  text: "Supporting effective project planning and management.",
                },
                {
                  title: "Quality",
                  text: "Understanding project requirements and the standards expected.",
                },
                {
                  title: "Cost",
                  text: "Providing professional cost advice and management solutions.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-5 border-b border-slate-300 pb-7">
                  <CheckCircle2 className="mt-1 shrink-0 text-[#F28C28]" size={25} />
                  <div>
                    <h3 className="text-xl font-bold text-[#18344A]">{item.title}</h3>
                    <p className="mt-2 leading-7 text-slate-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#18344A] py-24">
        <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full border-[50px] border-white/5" />
        <div className="relative mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-10 px-6 md:flex-row md:items-center lg:px-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F28C28]">
              Let&apos;s Work Together
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-white md:text-5xl">
              Have a project in mind?
            </h2>
            <p className="mt-5 leading-8 text-white/65">
              Talk to our team about your project requirements and how AMPS can assist with
              professional cost consultancy.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-3 bg-[#F28C28] px-8 py-5 font-semibold text-white transition hover:bg-[#dc7416]"
          >
            Contact Our Team <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
