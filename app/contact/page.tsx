"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  ExternalLink,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(form.subject || "Website enquiry");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:info@ampsqs.co.za?subject=${subject}&body=${body}`;
  };

  const contactDetails = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      detail: "Unit G09, The Courtyard, 1 West Park, Century City, Cape Town, 7441",
      action: "Get Directions",
      href: "https://maps.app.goo.gl/qAKKjRv6EJd3KbRt6",
    },
    {
      icon: Phone,
      title: "Call Our Office",
      detail: "+27 21 551 3141/2",
      action: "Call AMPS",
      href: "tel:+27215513141",
    },
    {
      icon: Mail,
      title: "Email Us",
      detail: "info@ampsqs.co.za",
      action: "Send an Email",
      href: "mailto:info@ampsqs.co.za",
    },
  ];

  return (
    <main className="overflow-hidden bg-[#F8F8F6] text-[#20272D]">
      <Header />

      <section className="relative flex min-h-[540px] items-center bg-[#102638] pt-10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=85&w=2000')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#102638] via-[#102638]/90 to-[#102638]/40" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 mx-auto w-full max-w-[1280px] px-6 py-24 lg:px-12"
        >
          <div className="mb-7 flex items-center gap-3">
            <span className="h-[2px] w-12 bg-[#F28C28]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F28C28]">
              Get in Touch
            </span>
          </div>

          <h1 className="max-w-3xl text-5xl font-bold leading-tight text-white md:text-7xl">
            Let&apos;s start a
            <span className="block text-[#F28C28]">conversation.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
            Whether you are planning a new development or looking for professional quantity
            surveying and cost consultancy services, our team would be pleased to hear from you.
          </p>
        </motion.div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-20 lg:px-12">
        <div className="grid gap-6 md:grid-cols-3">
          {contactDetails.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center bg-[#F28C28]/10 text-[#F28C28]">
                  <Icon size={27} />
                </div>
                <h2 className="mt-7 text-xl font-bold text-[#18344A]">{item.title}</h2>
                <p className="mt-3 min-h-14 text-sm leading-7 text-slate-600">{item.detail}</p>
                <a
                  href={item.href}
                  target={item.href.startsWith("https://") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#F28C28] hover:text-[#18344A]"
                >
                  {item.action} <ArrowRight size={16} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-[1280px] gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F28C28]">
              Send an Enquiry
            </span>
            <h2 className="mt-5 text-3xl font-bold text-[#18344A] md:text-4xl">
              Tell us about your project.
            </h2>
            <p className="mt-5 max-w-xl leading-8 text-slate-600">
              Complete the form below and your email application will open with your enquiry
              addressed to the AMPS team.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-semibold text-[#18344A]">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full border border-slate-200 bg-[#F8F8F6] px-4 py-4 text-sm text-[#18344A] outline-none transition placeholder:text-slate-400 focus:border-[#F28C28]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#18344A]">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full border border-slate-200 bg-[#F8F8F6] px-4 py-4 text-sm text-[#18344A] outline-none transition placeholder:text-slate-400 focus:border-[#F28C28]"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-[#18344A]">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+27 ..."
                    className="w-full border border-slate-200 bg-[#F8F8F6] px-4 py-4 text-sm text-[#18344A] outline-none transition placeholder:text-slate-400 focus:border-[#F28C28]"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-[#18344A]">
                    Enquiry Type *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full border border-slate-200 bg-[#F8F8F6] px-4 py-4 text-sm text-[#18344A] outline-none transition focus:border-[#F28C28]"
                  >
                    <option value="">Select an enquiry type</option>
                    <option value="Cost Planning">Cost Planning</option>
                    <option value="Quantity Surveying">Quantity Surveying</option>
                    <option value="Valuations">Valuations</option>
                    <option value="Contract Administration">Contract Administration</option>
                    <option value="Viability Analysis">Viability Analysis</option>
                    <option value="Other Services">Other Services</option>
                    <option value="General Enquiry">General Enquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-[#18344A]">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us a little about your project or enquiry..."
                  className="w-full resize-none border border-slate-200 bg-[#F8F8F6] px-4 py-4 text-sm text-[#18344A] outline-none transition placeholder:text-slate-400 focus:border-[#F28C28]"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-3 bg-[#F28C28] px-8 py-5 font-semibold text-white transition hover:bg-[#dc7416] sm:w-auto"
              >
                Prepare Enquiry <Send size={17} />
              </button>

              <p className="text-xs leading-6 text-slate-400">
                Submitting this form opens your default email application. Your details are not sent
                to or stored on this website.
              </p>
            </form>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col bg-[#102638] p-8 text-white md:p-10"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F28C28]">
              AMPS Office
            </span>
            <h2 className="mt-5 text-3xl font-bold">Visit our office.</h2>
            <p className="mt-5 leading-8 text-white/65">
              Find us at The Courtyard in Century City, Cape Town. We welcome enquiries from both
              the public and private sectors.
            </p>

            <div className="mt-10 space-y-8">
              <div className="flex gap-4">
                <MapPin className="mt-1 shrink-0 text-[#F28C28]" size={23} />
                <div>
                  <h3 className="font-semibold">Office Address</h3>
                  <p className="mt-2 text-sm leading-7 text-white/65">
                    Unit G09, The Courtyard,
                    <br />
                    1 West Park, Century City,
                    <br />
                    Cape Town, 7441
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="mt-1 shrink-0 text-[#F28C28]" size={23} />
                <div>
                  <h3 className="font-semibold">Telephone</h3>
                  <a href="tel:+27215513141" className="mt-2 block text-sm text-white/65 hover:text-[#F28C28]">
                    +27 21 551 3141/2
                  </a>
                  <p className="mt-1 text-xs text-white/40">Fax: +27 21 551 5911</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="mt-1 shrink-0 text-[#F28C28]" size={23} />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:info@ampsqs.co.za" className="mt-2 block text-sm text-white/65 hover:text-[#F28C28]">
                    info@ampsqs.co.za
                  </a>
                </div>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/qAKKjRv6EJd3KbRt6"
              target="_blank"
              rel="noreferrer"
              className="mt-auto flex items-center justify-center gap-3 border border-white/25 px-6 py-4 text-sm font-semibold transition hover:border-[#F28C28] hover:bg-[#F28C28]"
            >
              Open in Google Maps <ExternalLink size={16} />
            </a>
          </motion.aside>
        </div>
      </section>

      <section className="bg-[#F1F0EC] py-20">
        <div className="mx-auto max-w-[1280px] px-6 text-center lg:px-12">
          <MessageSquare className="mx-auto text-[#F28C28]" size={35} />
          <h2 className="mt-6 text-3xl font-bold text-[#18344A] md:text-4xl">
            We look forward to hearing from you.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
            Speak to AMPS about your next project and discover how professional cost consultancy can
            help you achieve the best value.
          </p>
          <a
            href="mailto:info@ampsqs.co.za"
            className="mt-8 inline-flex items-center gap-3 bg-[#18344A] px-8 py-5 font-semibold text-white transition hover:bg-[#F28C28]"
          >
            Email AMPS <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
