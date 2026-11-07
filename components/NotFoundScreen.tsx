import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Home, Info } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const helpfulLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function NotFoundScreen() {
  return (
    <main className="min-h-screen bg-[#f8f8f6] text-[#20272D]">
      <Header />

      <section className="bg-[#18344A] px-6 pb-20 pt-16 lg:px-12 lg:pt-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_25px_80px_rgba(10,24,38,0.30)] md:p-10 lg:p-12">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-[2px] w-12 bg-[#F28C28]" />
              <span className="text-[10px] font-bold tracking-[0.28em] text-[#F9C74F] uppercase">
                404 error
              </span>
            </div>

            <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-[100px] font-black leading-none text-[#F28C28] md:text-[150px]">
                  404
                </p>

                <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                  Page not found.
                </h1>

                <p className="mt-5 max-w-xl text-base leading-8 text-white/70">
                  The page you are looking for may have moved, been removed, or never existed.
                  Let&apos;s get you back to a useful part of the AMPS website.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-full bg-[#F28C28] px-5 py-3 text-xs font-bold tracking-[0.18em] text-white uppercase transition hover:bg-[#e27b1a]"
                  >
                    <Home size={16} />
                    Home
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-xs font-bold tracking-[0.18em] text-white uppercase transition hover:border-white/40 hover:bg-white/10"
                  >
                    Contact us
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-[#102638] p-6 md:p-8">
                <div className="mb-5 flex items-center gap-3 text-[#F9C74F]">
                  <Info size={18} />
                  <span className="text-xs font-bold tracking-[0.22em] uppercase">
                    Quick links
                  </span>
                </div>

                <div className="space-y-3">
                  {helpfulLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/80 transition hover:border-[#F28C28]/50 hover:text-white"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight size={16} className="text-[#F28C28]" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#f8f8f6] px-6 pb-16 pt-10 lg:px-12">
        <div className="mx-auto flex max-w-[1280px] items-center justify-center gap-3 text-sm text-[#18344A]/60">
          <ArrowLeft size={16} className="text-[#F28C28]" />
          <Link href="/" className="font-semibold uppercase tracking-[0.18em] text-[#18344A]">
            Back to homepage
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
