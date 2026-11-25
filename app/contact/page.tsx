"use client";

import Image from "next/image";
import { useState } from "react";
import { Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
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
      `Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\nPhone: ${form.phone}\nSubject: ${form.subject}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:info@ampsqs.co.za?subject=${subject}&body=${body}`;
  };

  return (
    <main className="bg-[#f7f1ea] text-[#1d2a33]">
      <Header overlay />

      {/* Brown Section */}
      <section className="relative bg-[#8b7355] py-10 lg:py-12">
        <div className="mx-auto w-full px-0 sm:px-0 lg:px-0">
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative px-6 pb-8 pt-24 lg:px-12 lg:pb-10 lg:pt-28">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-12 bg-[#d9773a]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#6f8aa3] uppercase">
              Get in touch
            </span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold leading-tight tracking-[-0.05em] text-[#1d2a33] sm:text-5xl lg:text-6xl">
              Contact <span className="text-[#d9773a]">us.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#4d5c68] sm:text-lg">
              Have a question about your project? Our team is here to help. Complete the form below
              and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      <section className="relative min-h-screen overflow-hidden">
        <div className="grid h-screen max-h-screen grid-cols-1 lg:grid-cols-[40%_60%]">
          {/* Image Section - 40% width */}
          <div className="relative hidden overflow-hidden bg-[#e8ddd2] lg:block">
            <Image
              src="/images/Woman in Office.avif"
              alt="Contact AMPS team"
              fill
              priority
              sizes="40vw"
              className="object-cover object-center"
            />
          </div>

          {/* Light Form Section - 60% width */}
          <div className="flex flex-col overflow-y-auto bg-[#f7f1ea] p-8 lg:min-h-screen lg:p-16">
            <div className="max-w-2xl">
              {/* Header */}
              <div className="mb-12">
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#d9773a]">
                  Send an enquiry
                </span>
                <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-[#1d2a33]">
                  Tell us about your project.
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-[#5a6b7a]">
                  Complete the form below and your email application will open with your enquiry
                  addressed to the AMPS team.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="mb-2 block text-sm font-semibold text-[#1d2a33]">
                      Full Name *
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full rounded-lg border border-[#dfeaf4] bg-white px-4 py-3 text-sm text-[#1d2a33] outline-none transition placeholder:text-[#a0a9b1] focus:border-[#d9773a]"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="mb-2 block text-sm font-semibold text-[#1d2a33]">
                      Email Address *
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="email"
                      required
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-[#dfeaf4] bg-white px-4 py-3 text-sm text-[#1d2a33] outline-none transition placeholder:text-[#a0a9b1] focus:border-[#d9773a]"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#1d2a33]">
                      Phone Number
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="tel"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="+27 ..."
                      className="w-full rounded-lg border border-[#dfeaf4] bg-white px-4 py-3 text-sm text-[#1d2a33] outline-none transition placeholder:text-[#a0a9b1] focus:border-[#d9773a]"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-[#1d2a33]">
                      Enquiry Type *
                    </label>
                    <select
                      id="phone"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-[#dfeaf4] bg-white px-4 py-3 text-sm text-[#1d2a33] outline-none transition focus:border-[#d9773a]"
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
                  <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-[#1d2a33]">
                    Your Message *
                  </label>
                  <textarea
                    id="subject"
                    name="subject"
                    required
                    rows={6}
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Tell us a little about your project or enquiry..."
                    className="w-full resize-none rounded-lg border border-[#dfeaf4] bg-white px-4 py-3 text-sm text-[#1d2a33] outline-none transition placeholder:text-[#a0a9b1] focus:border-[#d9773a]"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-3 rounded-lg bg-[#d9773a] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#c86a2d]"
                >
                  Prepare Enquiry
                  <Send size={16} />
                </button>

                <p className="text-xs leading-5 text-[#a0a9b1]">
                  Submitting this form opens your default email application. Your details are not
                  sent to or stored on this website.
                </p>
              </form>
            </div>
          </div>
        </div>

        <section className="mt-16 bg-[#f8f8f6] px-6 pb-20 lg:px-12">
          <div className="mx-auto max-w-[1280px]">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-[2px] w-12 bg-[#d9773a]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F28C28]">
                Find Us
              </span>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-[#dfeaf4] bg-white shadow-[0_18px_45px_rgba(24,52,74,0.06)]">
              <iframe
                title="AMPS office location"
                src="https://www.google.com/maps?q=Unit%20G09,%20The%20Courtyard,%201%20West%20Park,%20Century%20City,%20Cape%20Town,%207441&output=embed"
                className="h-[360px] w-full border-0 lg:h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                suppressHydrationWarning
              />
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </main>
  );
}
