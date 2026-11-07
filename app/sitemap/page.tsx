import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Sitemap | AMPS",
  description:
    "View the AMPS website sitemap and browse the main pages and project portfolio categories.",
};

const mainPages = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Our Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export default function SitemapPage() {
  return (
    <main className="min-h-screen bg-[#f8f8f6] text-[#20272D]">
      <Header />

      <section className="relative flex min-h-[480px] items-center bg-[#102638] pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(242,140,40,0.18),transparent_42%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#102638] via-[#102638]/90 to-[#102638]/60" />

        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 py-24 lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-[2px] w-12 bg-[#F28C28]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F28C28]">
                Site Map
              </span>
            </div>

            <h1 className="text-5xl font-extrabold leading-tight text-white md:text-7xl">
              Explore the
              <span className="block text-[#F28C28]">AMPS website.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              Browse the main content areas and project categories available across the AMPS site.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-24 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-[28px] border border-[#e5e7eb] bg-white p-8 shadow-[0_20px_50px_rgba(24,52,74,0.04)]">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#F28C28]">
              Main Pages
            </p>
            <div className="mt-6 space-y-4">
              {mainPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="flex items-center justify-between rounded-2xl border border-[#18344A]/10 bg-[#F8F8F6] px-4 py-3 text-sm font-semibold text-[#18344A] transition hover:border-[#F28C28]/50 hover:text-[#F28C28]"
                >
                  <span>{page.label}</span>
                  <span className="text-base">→</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-[#e5e7eb] bg-white p-8 shadow-[0_20px_50px_rgba(24,52,74,0.04)]">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#F28C28]">
              Project Categories
            </p>
            <div className="mt-6 space-y-4">
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="flex items-center justify-between rounded-2xl border border-[#18344A]/10 bg-[#F8F8F6] px-4 py-3 text-sm font-semibold text-[#18344A] transition hover:border-[#F28C28]/50 hover:text-[#F28C28]"
                >
                  <span>{project.title}</span>
                  <span className="text-base">→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
