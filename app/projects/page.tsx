"use client";

import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/lib/projects";
import { useState } from "react";

export default function ProjectsPage() {
  const [selectedSector, setSelectedSector] = useState("All");

  // Extract unique sectors from projects
  const sectors = ["All", ...Array.from(new Set(projects.map((p) => p.sector || "Commercial")))];
  
  // Filter projects by selected sector
  const filteredProjects =
    selectedSector === "All"
      ? projects
      : projects.filter((project) => (project.sector || "Commercial") === selectedSector);

  return (
    <main className="min-h-screen bg-[#f8f8f6] text-[#20272D]">
      <Header overlay />

      <section className="relative flex min-h-[100vh] items-center bg-[#2d241f]">
        <div className="absolute inset-0 h-full w-full overflow-hidden">
          <Image
            src="/images/hero.png"
            alt="Project portfolio and building development"
            fill
            priority
            sizes="100vw"
            className="h-full w-full scale-[1.03] object-cover object-[center_18%] sm:scale-100 sm:object-center"
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 pb-16 pt-40 lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-[2px] w-12 bg-[#d9773a]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#f2c57a]">
                Portfolio
              </span>
            </div>

            <h1 className="text-5xl font-extrabold leading-tight text-white md:text-7xl">
              Project Experience
              <span className="block text-[#f3b567]">Across Sectors.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              AMPS delivers quantity surveying and construction cost consultancy across a diverse
              range of project types, from commercial developments and public sector work to
              residential, education, healthcare and hospitality environments.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#portfolio"
                className="inline-flex items-center gap-3 bg-[#d9773a] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#fffdf9] hover:text-[#2d241f]"
              >
                Explore Portfolio <ArrowRight size={17} />
              </Link>
              <Link
                href="/contact"
                className="border border-white/40 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#f3b567] hover:text-[#f3b567]"
              >
                Discuss a Project
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 hidden h-28 w-1/3 bg-[#d9773a] md:block" />
      </section>

      <section id="portfolio" className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12">
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#d9773a]">
            Filter by Sector
          </span>
          <div className="mt-6 flex flex-wrap gap-3">
            {sectors.map((sector) => (
              <button
                key={sector}
                onClick={() => setSelectedSector(sector)}
                className={`inline-flex items-center rounded-full px-6 py-2.5 text-sm font-semibold transition ${
                  selectedSector === sector
                    ? "bg-[#102237] text-white"
                    : "border border-[#d9c9ba] bg-white text-[#102237] hover:border-[#d9773a] hover:text-[#d9773a]"
                }`}
              >
                {sector}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="relative h-96 w-full overflow-hidden bg-[#e8ddd2]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  unoptimized
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#d9773a]">
                    {project.sector || "Commercial"}
                  </span>
                  <h3 className="mt-2 text-2xl font-bold leading-tight">{project.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/90">{project.shortDescription}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
