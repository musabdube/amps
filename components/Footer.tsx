"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight, MapPin } from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Our Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#102638] px-6 pb-8 pt-20 text-white lg:px-12">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-14 border-b border-white/10 pb-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-sm bg-[#102638] p-0">
                <Image
                  src="/images/logo.png"
                  alt="AMPS logo"
                  width={48}
                  height={48}
                  loading="eager"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <div className="text-2xl font-extrabold tracking-[0.18em]">AMPS</div>
                <div className="text-[8px] font-semibold tracking-[0.23em] text-white/50">
                  QUANTITY SURVEYORS
                </div>
              </div>
            </Link>

            <p className="mt-7 max-w-sm text-sm leading-8 text-white/50">
              Independent professional quantity surveying and construction cost consultancy.
              Delivering expertise, integrity and value.
            </p>

            <div className="mt-7 flex items-center gap-3 text-xs text-white/50">
              <MapPin size={16} className="text-[#F28C28]" />
              Cape Town, South Africa
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] text-[#F28C28]">
              QUICK LINKS
            </h3>
            <div className="mt-7 flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-2 text-sm text-white/60 transition hover:translate-x-1 hover:text-white"
                >
                  <ChevronRight size={14} className="text-[#F28C28]" />
                  {item.label}
                </Link>
              ))}

              <Link
                href="/sitemap"
                className="flex items-center gap-2 text-sm text-white/60 transition hover:translate-x-1 hover:text-white"
              >
                <ChevronRight size={14} className="text-[#F28C28]" />
                Sitemap
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] text-[#F28C28]">
              GET IN TOUCH
            </h3>
            <p className="mt-7 text-sm leading-7 text-white/50">
              Interested in working with AMPS? Get in touch with our team to discuss your project
              requirements.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-3 text-xs font-bold tracking-widest text-white transition hover:text-[#F28C28]"
            >
              CONTACT US
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 pt-8 text-[10px] text-white/40 md:flex-row md:items-center">
          <p suppressHydrationWarning>
            © {currentYear} AMPS. All rights reserved.
          </p>
          <p>QUANTITY SURVEYORS & COST CONSULTANTS</p>
        </div>
      </div>
    </footer>
  );
}
