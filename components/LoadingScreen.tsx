import Image from "next/image";
import Link from "next/link";

export default function LoadingScreen() {
  return (
    <main className="min-h-screen bg-[#f8f8f6] text-[#18344A]">
      <div className="mx-auto flex max-w-[1280px] flex-col px-6 py-8 md:px-10">
        <div className="mb-10 flex items-center justify-between gap-4">
          <Link href="/" className="inline-flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-md bg-white ring-1 ring-[#18344A]/10">
              <Image
                src="/logo.svg"
                alt="AMPS logo"
                width={48}
                height={48}
                priority
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <div className="text-xl font-extrabold tracking-[0.16em]">AMPS</div>
              <div className="text-[8px] font-semibold tracking-[0.22em] text-[#18344A]/60">
                QUANTITY SURVEYORS
              </div>
            </div>
          </Link>

          <span className="rounded-full border border-[#18344A]/10 bg-white px-3 py-1 text-[10px] font-bold tracking-[0.22em] uppercase text-[#18344A]/70">
            Loading
          </span>
        </div>

        <div className="flex min-h-[70vh] items-center justify-center">
          <div className="w-full max-w-xl rounded-[28px] border border-[#18344A]/10 bg-white p-8 text-center shadow-[0_30px_80px_rgba(24,52,74,0.12)] sm:p-10">
            <div className="relative mx-auto flex h-28 w-28 items-center justify-center">
              <div className="absolute inset-0 rounded-full border-4 border-[#F28C28]/20 border-t-[#F28C28] animate-spin" />
              <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-[#18344A]/5 ring-1 ring-[#18344A]/10">
                <Image
                  src="/logo.svg"
                  alt="AMPS logo"
                  width={64}
                  height={64}
                  priority
                  className="h-full w-full object-contain p-2"
                />
              </div>
            </div>

            <p className="mt-7 text-[10px] font-bold tracking-[0.28em] text-[#F28C28] uppercase">
              Preparing your project
            </p>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[#18344A] sm:text-4xl">
              Loading AMPS
            </h1>

            <p className="mt-4 text-base leading-7 text-[#18344A]/70">
              We&apos;re gathering the latest project information and preparing the page you requested.
            </p>

            <div className="mt-8 flex items-center justify-center gap-2">
              {[0, 1, 2].map((dot) => (
                <span
                  key={dot}
                  className="h-2.5 w-2.5 rounded-full bg-[#F28C28] animate-pulse"
                  style={{ animationDelay: `${dot * 150}ms` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
