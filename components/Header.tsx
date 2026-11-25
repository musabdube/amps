"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BriefcaseBusiness,
  Building2,
  FolderOpen,
  Home,
  Mail,
  Menu,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";

const navigation = [
  { label: "Home", href: "/", icon: Home },
  { label: "Projects", href: "/projects", icon: FolderOpen },
  { label: "Our Team", href: "/team", icon: Users },
  { label: "Contact", href: "/contact", icon: Mail },
];

type HeaderProps = {
  className?: string;
  overlay?: boolean;
};

export default function Header({ className = "", overlay = false }: HeaderProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={[
        "group/header",
        overlay
          ? "absolute inset-x-0 top-0 z-50 bg-transparent"
          : "sticky left-0 right-0 top-0 z-50 bg-[#ececec]",
        className,
      ].join(" ")}
    >
      <div
        className={[
          "mx-auto flex h-[82px] max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12",
          overlay ? "bg-transparent" : "bg-[#ececec]",
        ].join(" ")}
      >
        <Link href="/" className="flex flex-1 items-center justify-start">
          <div className="flex flex-col items-start justify-center">
            <div
              className={[
                "flex h-[54px] w-[170px] items-center justify-center overflow-hidden p-0 sm:h-[64px] sm:w-[200px] lg:h-[74px] lg:w-[270px]",
                overlay ? "bg-transparent" : "bg-[#ececec]",
              ].join(" ")}
            >
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
          </div>
        </Link>

        <nav className="hidden items-center justify-center gap-4 lg:flex">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={[
                  "group relative inline-flex h-14 w-14 items-center justify-center overflow-visible rounded-full border-2 transition-all duration-300",
                  overlay
                    ? isActive
                      ? "border-white bg-white/20 text-white"
                      : "border-white/40 text-white hover:border-[#F28C28] hover:bg-white/10 hover:text-[#F28C28]"
                    : isActive
                      ? "border-[#111827] bg-[#111827]/10 text-[#111827]"
                      : "border-[#111827]/30 text-[#111827] hover:border-[#F28C28] hover:bg-[#111827]/5 hover:text-[#F28C28]",
                ].join(" ")}
              >
                <span className="relative flex items-center justify-center">
                  <Icon size={24} className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5" />
                  <span
                    className={[
                      "pointer-events-none absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.18em] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
                      overlay ? "text-white" : "text-[#111827]",
                    ].join(" ")}
                  >
                    {item.label}
                  </span>
                </span>
              </Link>
            );
          })}
        </nav>

      </div>

    </header>
  );
}
