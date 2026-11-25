"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const navigation = [
  { label: "Projects", href: "/projects" },
  { label: "Our Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "Facebook", href: "/contact", icon: FaFacebookF },
  { label: "Instagram", href: "/contact", icon: FaInstagram },
  { label: "LinkedIn", href: "/contact", icon: FaLinkedinIn },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#f3f1ee] text-[#102237]">
      <div className="absolute left-0 top-0 h-full w-5 bg-[#e77a2f] md:w-7" />
      <div className="mx-auto max-w-[1500px] px-6 pb-7 pt-8 md:pt-10 lg:px-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex items-center">
            <div className="relative h-20 w-28 shrink-0 sm:h-24 sm:w-32 md:h-28 md:w-40">
              <Image
                src="/images/logo.png"
                alt="AMPS logo"
                fill
                sizes="(max-width: 768px) 30vw, (max-width: 1200px) 20vw, 18vw"
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#102237] text-white transition-colors duration-200 hover:bg-[#1a2f47]"
              >
                <Icon size={18} />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-6 border-t border-[#c9c2bb] pt-8 md:grid-cols-[1fr_1.1fr_0.8fr] md:items-start">
          <div className="space-y-2 text-[1.05rem] leading-relaxed text-[#102237]">
            <a href="tel:+27215513141" className="block transition-opacity hover:opacity-80">
              +27 21 551 3141/2
            </a>
            <a href="mailto:info@ampsqs.co.za" className="block transition-opacity hover:opacity-80">
              info@ampsqs.co.za
            </a>
          </div>

          <div className="text-[1.05rem] leading-relaxed text-[#102237]">
            <p>Unit G09, The Courtyard</p>
            <p>1 West Park, Century City</p>
            <p>Cape Town, 7441</p>
          </div>

          <nav className="flex items-center justify-start gap-7 text-[1.05rem] text-[#102237] md:justify-end">
            {navigation.map((item) => (
              <Link key={item.label} href={item.href} className="transition-opacity hover:opacity-70">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
