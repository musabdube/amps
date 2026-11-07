"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Our Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky left-0 right-0 top-0 z-50 bg-[#ececec]">
      <div className="mx-auto flex h-[82px] max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
        <Link href="/" className="flex flex-1 items-center justify-start">
          <div className="flex h-[54px] w-[170px] items-center justify-center overflow-hidden bg-[#ececec] p-0 sm:h-[64px] sm:w-[200px] lg:h-[74px] lg:w-[270px]">
            <Image
              src="/images/logo.png"
              alt="AMPS logo"
              width={270}
              height={74}
              priority
              loading="eager"
              sizes="(max-width: 1024px) 170px, 270px"
              className="h-full w-full object-contain"
            />
          </div>
        </Link>

        <nav className="hidden items-center justify-center gap-6 lg:flex">
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={[
                  "text-[12px] font-bold uppercase tracking-[0.14em] transition-colors",
                  isActive ? "text-[#111827]" : "text-[#111827]/80 hover:text-[#F28C28]",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={() => setMenuOpen((value) => !value)}
          className="text-[#111827] lg:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-black/5 bg-[#ececec] px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-5">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-semibold uppercase tracking-[0.12em] text-[#111827]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
