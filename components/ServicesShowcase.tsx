"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, Calculator, ChartNoAxesCombined, ClipboardCheck, Clock, FileText, Lightbulb, RefreshCw, ShoppingCart, Target, Wallet } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Cost Planning",
    description:
      "We provide structured cost planning throughout the project lifecycle, helping clients understand, monitor and manage construction costs from the earliest stages of development.",
    icon: Calculator,
    gradient: "linear-gradient(135deg, #F28C28 0%, #F8C27A 100%)",
  },
  {
    number: "02",
    title: "Valuations",
    description:
      "Our valuation services provide clear assessments of work completed and project costs, supporting informed financial decisions and effective project administration.",
    icon: ChartNoAxesCombined,
    gradient: "linear-gradient(135deg, #102638 0%, #1d4060 100%)",
  },
  {
    number: "03",
    title: "Settlement of Accounts",
    description:
      "We assist with the preparation, assessment and settlement of project accounts, helping ensure that financial obligations are accurately evaluated and concluded.",
    icon: FileText,
    gradient: "linear-gradient(135deg, #E7B46D 0%, #F28C28 100%)",
  },
  {
    number: "04",
    title: "Contract Administration",
    description:
      "We provide professional contract administration support, helping manage contractual processes, financial matters and project requirements throughout construction.",
    icon: ClipboardCheck,
    gradient: "linear-gradient(135deg, #18344A 0%, #29577D 100%)",
  },
  {
    number: "05",
    title: "Cash Flow Structuring",
    description:
      "We assist in structuring and forecasting project cash flows to support financial planning, expenditure management and informed decision-making.",
    icon: Wallet,
    gradient: "linear-gradient(135deg, #F4C77A 0%, #F28C28 100%)",
  },
  {
    number: "06",
    title: "Viability Analysis",
    description:
      "We assess the financial viability of proposed developments, helping clients evaluate project costs and make informed investment decisions.",
    icon: Building2,
    gradient: "linear-gradient(135deg, #102638 0%, #35607F 100%)",
  },
  {
    number: "07",
    title: "Estimates",
    description:
      "We prepare construction cost estimates to support budgeting, project planning and financial decisions at different stages of development.",
    icon: Target,
    gradient: "linear-gradient(135deg, #F8C27A 0%, #F4A64A 100%)",
  },
  {
    number: "08",
    title: "Lifecycle Costing",
    description:
      "We consider the costs associated with a building or asset throughout its lifecycle, supporting decisions that take long-term value and expenditure into account.",
    icon: Clock,
    gradient: "linear-gradient(135deg, #18344A 0%, #F28C28 100%)",
  },
  {
    number: "09",
    title: "Replacement Valuations",
    description:
      "We provide replacement valuations to help clients understand the costs associated with replacing buildings, facilities and other assets.",
    icon: RefreshCw,
    gradient: "linear-gradient(135deg, #F28C28 0%, #E4A04E 100%)",
  },
  {
    number: "10",
    title: "Value Engineering",
    description:
      "We explore practical opportunities to improve project value by considering cost, quality and functionality while remaining aligned with the client's objectives.",
    icon: Lightbulb,
    gradient: "linear-gradient(135deg, #102638 0%, #F28C28 100%)",
  },
  {
    number: "11",
    title: "Procurement",
    description:
      "We provide procurement support to help clients approach the acquisition of construction services and resources in a structured and cost-conscious manner.",
    icon: ShoppingCart,
    gradient: "linear-gradient(135deg, #F5B75A 0%, #102638 100%)",
  },
];

export default function ServicesShowcase() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {services.map((service, index) => {
        const Icon = service.icon;

        return (
          <motion.article
            key={service.number}
            initial={{ opacity: 0, y: 80, rotate: -6 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.06 }}
            className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-0 shadow-[0_20px_60px_rgba(16,38,56,0.08)]"
          >
            <div
              className="absolute inset-x-0 top-0 h-40 opacity-95"
              style={{
                background: service.gradient,
                clipPath:
                  "path('M 0 200 C 0 172, 34 158, 65 156 L 420 120 C 460 117, 490 138, 500 170 L 500 240 L 0 240 Z')",
              }}
            />

            <div className="relative p-7 sm:p-8">
              <div className="flex items-start justify-between">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg"
                  style={{ background: service.gradient }}
                >
                  <Icon size={26} strokeWidth={1.7} />
                </div>
                <span className="text-sm font-bold text-slate-300">{service.number}</span>
              </div>

              <div className="mt-16">
                <h3 className="text-2xl font-bold text-[#18344A] transition group-hover:text-[#102638]">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{service.description}</p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-5">
                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#F28C28]">
                  Service
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8F8F6] text-[#18344A] transition group-hover:bg-[#18344A] group-hover:text-white">
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
