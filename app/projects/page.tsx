import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects | AMPS",
  description:
    "Explore AMPS project experience across office, residential, education, healthcare, retail, public sector and infrastructure developments.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#f8f8f6] text-[#20272D]">
      <Header />

      <section className="relative flex min-h-[560px] items-center bg-[#102638] pt-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=85&w=2000')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#102638] via-[#102638]/90 to-[#102638]/50" />

        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 py-24 lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-[2px] w-12 bg-[#F28C28]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F28C28]">
                Portfolio
              </span>
            </div>

            <h1 className="text-5xl font-extrabold leading-tight text-white md:text-7xl">
              Project Experience
              <span className="block text-[#F28C28]">Across Sectors.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              AMPS delivers quantity surveying and construction cost consultancy across a diverse
              range of project types, from commercial developments and public sector work to
              residential, education, healthcare and hospitality environments.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#portfolio"
                className="inline-flex items-center gap-3 bg-[#F28C28] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#dc7416]"
              >
                Explore Portfolio <ArrowRight size={17} />
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

      <section id="portfolio" className="mx-auto max-w-[1280px] px-6 py-24 lg:px-12">
        <div className="mb-14 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F28C28]">
            Our Portfolio
          </span>
          <h2 className="mt-5 text-4xl font-extrabold leading-tight text-[#18344A] md:text-5xl">
            Construction expertise in every
            <span className="text-[#F28C28]"> project category.</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group overflow-hidden rounded-[28px] border border-[#e5e7eb] bg-white shadow-[0_18px_45px_rgba(24,52,74,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(24,52,74,0.12)]"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  unoptimized
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102638]/80 via-[#102638]/15 to-transparent" />
              </div>

              <div className="p-7">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F28C28]">
                    Sector
                  </span>
                  <ArrowUpRight size={18} className="text-[#18344A] transition group-hover:text-[#F28C28]" />
                </div>

                <h3 className="text-2xl font-extrabold text-[#18344A]">{project.title}</h3>
                <p className="mt-4 text-base leading-7 text-[#4b5563]">{project.shortDescription}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.services.slice(0, 3).map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-[#18344A]/10 bg-[#F8F8F6] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#18344A]/70"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-8 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#18344A] transition hover:text-[#F28C28]"
                >
                  View Project <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
