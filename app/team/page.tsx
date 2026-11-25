"use client";

import Image from "next/image";
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const team = [
  {
    name: "Heren Mannie",
    title: "Senior Partner",
    qualification: "B.Sc (QS) PrQS PMAQS",
    location: "Cape Town",
    category: "Leadership",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
    initials: "HM",
  },
  {
    name: "Arthur Petersen",
    title: "Senior Partner",
    qualification: "B.Sc (QS) PrQS PMAQS",
    location: "Cape Town",
    category: "Leadership",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
    initials: "AP",
  },
  {
    name: "Zaahir van der Schyff",
    title: "Senior Partner",
    qualification: "B.Sc (QS) PrQS PMAQS",
    location: "Cape Town",
    category: "Leadership",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
    initials: "ZS",
  },
  {
    name: "Sarah Johnson",
    title: "Senior Quantity Surveyor",
    location: "Johannesburg",
    category: "Staff",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
    initials: "SJ",
  },
  {
    name: "Michael Chen",
    title: "Cost Consultant",
    location: "Durban",
    category: "Staff",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
    initials: "MC",
  },
  {
    name: "Emily Watson",
    title: "Project Manager",
    location: "Cape Town",
    category: "Staff",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80",
    initials: "EW",
  },
];

export default function TeamPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Leadership", "Staff"];
  const filteredTeam =
    selectedCategory === "All" ? team : team.filter((member) => member.category === selectedCategory);

  const categoryCount = {
    All: team.length,
    Leadership: team.filter((m) => m.category === "Leadership").length,
    Staff: team.filter((m) => m.category === "Staff").length,
  };

  return (
    <main className="bg-[#f7f1ea] text-[#1d2a33]">
      <Header overlay />

      {/* Brown Section */}
      <section className="relative bg-[#8b7355] py-6 lg:py-8">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#f2c57a]">
              Our team
            </span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative px-6 pb-8 pt-24 lg:px-12 lg:pb-10 lg:pt-28">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-12 bg-[#d9773a]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#6f8aa3] uppercase">
              Our people
            </span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold leading-tight tracking-[-0.05em] text-[#1d2a33] sm:text-5xl lg:text-6xl">
              Meet our <span className="text-[#d9773a]">team.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#4d5c68] sm:text-lg">
              We bring together experienced professionals with a shared focus on smart delivery,
              trusted relationships, and measurable value across every project.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 pt-8 lg:px-12 lg:pb-24">
        <div className="mx-auto max-w-[1240px]">
          {/* Filter Tabs */}
          <div className="mb-12 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                    selectedCategory === category
                      ? "bg-[#1d2a33] text-white"
                      : "border border-[#dfeaf4] bg-white text-[#1d2a33] hover:border-[#d9773a]"
                  }`}
                >
                  {category} {categoryCount[category as keyof typeof categoryCount]}
                </button>
              ))}
            </div>
            <span className="text-sm text-[#6f8aa3]">
              Showing all {filteredTeam.length} people
            </span>
          </div>

          {/* Team Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {filteredTeam.map((member) => (
              <article
                key={member.name}
                className="flex flex-col items-center text-center"
              >
                {/* Avatar */}
                <div className="relative mb-4 h-28 w-28 flex-shrink-0 overflow-hidden rounded-full bg-[#e8ddd2]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </div>

                {/* Info */}
                <div>
                  <h3 className="text-sm font-bold tracking-[-0.02em] text-[#1d2a33]">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-xs text-[#5f6871]">{member.title}</p>
                  {member.qualification && (
                    <p className="mt-0.5 text-xs text-[#6f8aa3]">{member.qualification}</p>
                  )}
                  <a
                    href="#"
                    aria-label={`${member.name} LinkedIn`}
                    className="mt-3 inline-flex items-center justify-center rounded-full border border-[#dfeaf4] bg-white px-3 py-2 text-xs text-[#1d2a33] transition hover:border-[#d9773a] hover:text-[#d9773a]"
                  >
                    <FaLinkedin size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {filteredTeam.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[#6f8aa3]">No team members found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
