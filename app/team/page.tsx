import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  Handshake,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Team | AMPS",
  description:
    "Meet the AMPS team of quantity surveyors, cost consultants, and construction professionals delivering project value across South Africa.",
};

const team = [
  {
    number: "01",
    name: "Heren Mannie",
    qualification: "B.Sc (QS) PrQS PMAQS",
    university: "Nelson Mandela Metropolitan University",
    experience: "29+",
    experienceLabel: "Years of experience",
    initials: "HM",
    description:
      "Heren obtained his degree from the Nelson Mandela Metropolitan University in Port Elizabeth. With over twenty-nine years of experience in the building environment, his portfolio includes educational, residential high-rise buildings, housing developments, industrial and commercial construction.",
    additional:
      "His passion for uplifting the community and experience in sustainable environmental practices have seen AMPS collaborate on a number of community projects, working closely with NGOs, government departments and local communities. His strategic insight, strong personal values and professionalism are invaluable assets to the success of the company.",
    sectors: [
      "Education",
      "Residential",
      "Housing developments",
      "Industrial",
      "Commercial",
      "Community projects",
    ],
  },
  {
    number: "02",
    name: "Arthur Petersen",
    qualification: "B.Sc (QS) PrQS PMAQS",
    university: "University of Cape Town",
    experience: "33+",
    experienceLabel: "Years of experience",
    initials: "AP",
    description:
      "Arthur obtained his degree from the University of Cape Town. He has extensive management experience across commercial office projects, retail developments, sports and hospitality buildings, sports stadiums, education, transport, health facilities and residential developments.",
    additional:
      "He thrives on finding innovative solutions in order to get projects off the ground, managing and shaping budgets to the needs of the client and working proactively with professional teams to meet project goals and deadlines. He derives great reward from projects which uplift communities and individuals.",
    sectors: [
      "Commercial",
      "Retail",
      "Sports",
      "Hospitality",
      "Education",
      "Transport",
      "Healthcare",
      "Residential",
    ],
  },
  {
    number: "03",
    name: "Zaahir van der Schyff",
    qualification: "B.Sc (QS) PrQS PMAQS",
    university: "University of Cape Town",
    experience: "24+",
    experienceLabel: "Years of experience",
    initials: "ZV",
    description:
      "Zaahir obtained his degree from the University of Cape Town. He has a broad range of experience in the industry, including a retail stint at the Woolworths Real Estate Division.",
    additional:
      "He also has extensive experience in the industrial, resource and infrastructure sectors, providing project management and cost consultancy services. With over twenty-four years of experience, he strives to consistently deliver proactive cost management solutions, with a focus on reducing client risk and adding the best value to all aspects of each project.",
    sectors: [
      "Retail",
      "Industrial",
      "Resources",
      "Infrastructure",
      "Project management",
      "Cost consultancy",
    ],
  },
];

export default function TeamPage() {
  return (
    <main className="overflow-hidden bg-white text-[#20272D]">
      <Header />

      <section className="relative flex min-h-[560px] items-center bg-[#18344A]">
        <Image
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=2000&q=90"
          alt="Professional team working together"
          fill
          priority
          unoptimized
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#102638]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#102638] via-[#102638]/80 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 pb-12 pt-40 lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-7 flex items-center gap-4">
              <span className="h-[2px] w-12 bg-[#F28C28]" />
              <span className="text-xs font-bold tracking-[0.25em] text-[#F9C74F]">
                THE PEOPLE BEHIND AMPS
              </span>
            </div>

            <h1 className="text-5xl font-extrabold leading-tight text-white md:text-7xl">
              Our
              <span className="text-[#F28C28]"> Team.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-white/75">
              Experience, knowledge and professional commitment. Meet the leadership team behind
              AMPS and discover the expertise that drives our work.
            </p>

            <div className="mt-10 flex items-center gap-3 text-xs font-semibold tracking-[0.24em] text-white/60">
              <Link href="/" className="transition hover:text-white">
                HOME
              </Link>
              <span>/</span>
              <span className="text-[#F28C28]">OUR TEAM</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 h-2 w-1/3 bg-[#F28C28]" />
      </section>

      <section className="px-6 py-24 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#F28C28]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#F28C28]">
                PROFESSIONAL LEADERSHIP
              </span>
            </div>

            <h2 className="text-4xl font-extrabold leading-tight text-[#18344A] md:text-5xl">
              Experience.
              <br />
              Knowledge.
              <br />
              <span className="text-[#F28C28]">Commitment.</span>
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-gray-600">
              At AMPS, our leadership team brings together decades of experience in quantity
              surveying, construction cost consultancy and project management.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600">
              Our partners work closely with clients and professional teams, providing strategic
              insight, innovative solutions and proactive cost management throughout projects.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600">
              We foster a culture that promotes productivity, performance and the ongoing
              empowerment of human resources through continued professional development.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F8F6] px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-16">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#F28C28]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#F28C28]">
                MEET OUR PARTNERS
              </span>
            </div>

            <h2 className="text-4xl font-extrabold leading-tight text-[#18344A] md:text-5xl">
              The people behind
              <br />
              <span className="text-[#F28C28]">our expertise.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-gray-500">
              Our partners bring extensive industry experience and a shared commitment to delivering
              professional cost consultancy services.
            </p>
          </div>

          <div className="space-y-10">
            {team.map((member) => (
              <article
                key={member.number}
                className="grid overflow-hidden bg-white shadow-sm lg:grid-cols-[0.8fr_1.5fr]"
              >
                <div className="relative flex min-h-[340px] flex-col justify-between overflow-hidden bg-[#18344A] p-9 md:min-h-[400px]">
                  <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10" />
                  <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full border border-white/10" />

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-xs font-bold tracking-widest text-[#F28C28]">
                      PARTNER {member.number}
                    </span>
                    <BriefcaseBusiness size={21} className="text-white/50" />
                  </div>

                  <div className="relative z-10 flex flex-1 items-center justify-center">
                    <div className="flex h-36 w-36 items-center justify-center rounded-full border border-white/30 bg-white/5 text-5xl font-extrabold text-white md:h-44 md:w-44 md:text-6xl">
                      {member.initials}
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="text-5xl font-extrabold text-[#F28C28]">{member.experience}</div>
                    <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                      {member.experienceLabel}
                    </p>
                  </div>
                </div>

                <div className="p-8 md:p-12">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F28C28]">
                    SENIOR PARTNER
                  </span>

                  <h3 className="mt-4 text-3xl font-extrabold text-[#18344A] md:text-4xl">
                    {member.name}
                  </h3>

                  <p className="mt-3 text-sm font-semibold text-gray-500">{member.qualification}</p>

                  <div className="mt-7 flex flex-wrap gap-5 border-y border-gray-100 py-5">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="text-[#F28C28]" size={20} />
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">
                          Education
                        </p>
                        <p className="mt-1 text-xs font-semibold text-[#18344A]">
                          {member.university}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Award className="text-[#F28C28]" size={20} />
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">
                          Experience
                        </p>
                        <p className="mt-1 text-xs font-semibold text-[#18344A]">
                          {member.experience} years
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="mt-7 text-sm leading-8 text-gray-600">{member.description}</p>

                  <p className="mt-5 text-sm leading-8 text-gray-600">{member.additional}</p>

                  <div className="mt-8">
                    <h4 className="text-[10px] font-bold tracking-[0.2em] text-[#18344A]">
                      INDUSTRY EXPERIENCE
                    </h4>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {member.sectors.map((sector) => (
                        <span
                          key={sector}
                          className="border border-gray-200 bg-[#F8F8F6] px-3 py-2 text-[10px] font-semibold text-gray-600"
                        >
                          {sector}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#18344A] px-6 py-24 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] items-center gap-14 lg:grid-cols-2">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#F28C28]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#F9C74F]">
                OUR CULTURE
              </span>
            </div>

            <h2 className="text-4xl font-extrabold leading-tight text-white md:text-5xl">
              Empowering people.
              <br />
              <span className="text-[#F28C28]">Building relationships.</span>
            </h2>

            <p className="mt-7 text-sm leading-8 text-white/65">
              At AMPS, we foster a culture that promotes productivity, performance and the ongoing
              empowerment of human resources by encouraging continued professional development.
            </p>

            <p className="mt-5 text-sm leading-8 text-white/65">
              We value individuality, nourish personal interests and encourage the building of
              healthy relationships with both our clients and our team.
            </p>
          </div>

          <div className="grid gap-px bg-white/10 sm:grid-cols-2">
            <div className="bg-[#203F55] p-8">
              <GraduationCap size={32} className="text-[#F28C28]" />
              <h3 className="mt-7 text-xl font-bold text-white">Development</h3>
              <p className="mt-4 text-sm leading-7 text-white/55">
                Encouraging ongoing professional development and the growth of our people.
              </p>
            </div>

            <div className="bg-[#203F55] p-8">
              <Handshake size={32} className="text-[#F28C28]" />
              <h3 className="mt-7 text-xl font-bold text-white">Relationships</h3>
              <p className="mt-4 text-sm leading-7 text-white/55">
                Building healthy and lasting relationships with clients and colleagues.
              </p>
            </div>

            <div className="bg-[#203F55] p-8">
              <Award size={32} className="text-[#F28C28]" />
              <h3 className="mt-7 text-xl font-bold text-white">Performance</h3>
              <p className="mt-4 text-sm leading-7 text-white/55">
                Promoting productivity and high standards of professional service.
              </p>
            </div>

            <div className="bg-[#203F55] p-8">
              <Building2 size={32} className="text-[#F28C28]" />
              <h3 className="mt-7 text-xl font-bold text-white">Community</h3>
              <p className="mt-4 text-sm leading-7 text-white/55">
                Supporting projects that contribute to the upliftment of communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F28C28] px-6 py-24 lg:px-12">
        <div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-10 md:flex-row md:items-center">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-white/75">
              LET&apos;S WORK TOGETHER
            </span>
            <h2 className="mt-5 text-4xl font-extrabold text-white md:text-5xl">
              Meet your next project partner.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-8 text-white/85">
              Get in touch with AMPS to discuss your project and discover how our expertise can add
              value.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-between gap-12 bg-[#18344A] px-8 py-6 text-xs font-bold tracking-[0.24em] text-white transition hover:bg-white hover:text-[#18344A]"
          >
            CONTACT AMPS
            <ArrowUpRight size={19} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
