import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/lib/projects";

export const instant = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | AMPS",
    };
  }

  return {
    title: `${project.title} | AMPS Projects`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f8f8f6] text-[#20272D]">
      <Header overlay />

      <section className="relative flex min-h-[100vh] items-center bg-[#2d241f]">
        <div className="absolute inset-0 h-full w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            unoptimized
            sizes="100vw"
            className="h-full w-full scale-[1.03] object-cover object-[center_18%] sm:scale-100 sm:object-center"
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 pb-16 pt-40 lg:px-12">
          <div className="mb-8 flex items-center gap-3 text-white/80">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#f2c57a] hover:text-white"
            >
              <ArrowLeft size={16} />
              Back to Projects
            </Link>
          </div>

          <div className="max-w-3xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-[2px] w-12 bg-[#d9773a]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#f2c57a]">
                Project Category
              </span>
            </div>

            <h1 className="text-5xl font-extrabold leading-tight text-white md:text-7xl">
              {project.title}
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              {project.shortDescription}
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 hidden h-28 w-1/3 bg-[#d9773a] md:block" />
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-24 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F28C28]">
              Overview
            </span>
            <h2 className="mt-5 text-4xl font-extrabold leading-tight text-[#18344A] md:text-5xl">
              Designed around
              <span className="text-[#F28C28]"> value and certainty.</span>
            </h2>
            <p className="mt-7 text-base leading-8 text-[#4b5563]">{project.description}</p>

            <div className="mt-8 space-y-4">
              {project.services.map((service) => (
                <div key={service} className="flex items-center gap-3">
                  <CheckCircle2 className="shrink-0 text-[#F28C28]" size={18} />
                  <span className="text-sm font-medium text-[#18344A]">{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-[#e5e7eb] bg-white shadow-[0_18px_45px_rgba(24,52,74,0.06)]">
            <div className="relative h-[420px]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-[1280px] rounded-[28px] border border-[#e5e7eb] bg-[#F8F8F6] p-8 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F28C28]">
                Need expert cost consultancy?
              </p>
              <h3 className="mt-3 text-3xl font-extrabold text-[#18344A]">
                Talk to AMPS about your project.
              </h3>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#18344A] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#F28C28]"
            >
              Contact Our Team <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
