import Image from "next/image";
import { Ear } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

const facilitiesList = [
  { title: "Advanced ENT Care", desc: "Ear, Nose & Throat treatments" },
  { title: "Advanced ENT Care", desc: "Ear, Nose & Throat treatments" },
  { title: "Advanced ENT Care", desc: "Ear, Nose & Throat treatments" },
  { title: "Advanced ENT Care", desc: "Ear, Nose & Throat treatments" },
  { title: "Advanced ENT Care", desc: "Ear, Nose & Throat treatments" },
  { title: "Advanced ENT Care", desc: "Ear, Nose & Throat treatments" },
  { title: "Advanced ENT Care", desc: "Ear, Nose & Throat treatments" },
  { title: "Advanced ENT Care", desc: "Ear, Nose & Throat treatments" },
];

export default function KeyFacilities() {
  return (
    <section aria-labelledby="key-facilities-heading" className="mx-auto max-w-[1240px] px-4 sm:px-5 py-12 sm:py-16 xl:px-0">
      <SectionLabel>Special Facilities</SectionLabel>

      <div data-motion-reveal className="mb-10 flex flex-wrap items-end justify-between gap-5">
        <div>
          <h2
            id="key-facilities-heading"
            className="font-extrabold text-primary text-[30px] leading-[1.15] tracking-[-1px] sm:text-4xl"
          >
            Key Facilities at<br />
            <span className="text-accent">Shree Goyal Hospital</span>
          </h2>
        </div>
        <p className="max-w-[380px] text-sm text-foreground/80 sm:text-right">
          Comprehensive facilities for Maternity, ENT and related healthcare services under one roof.
        </p>
      </div>

      <div data-motion-stagger data-lenis-prevent-horizontal className="-mx-4 flex min-w-0 snap-x snap-proximity gap-5 overflow-x-auto overscroll-x-contain scroll-px-4 px-4 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:py-0 sm:scroll-px-0 lg:grid-cols-4">
        {facilitiesList.map((facility, index) => (
          <article
            key={index}
            data-motion-hover="card"
            className="group flex min-w-0 break-words flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_4px_20px_#00000008] transition-shadow hover:shadow-md basis-[calc(65%-10px)] shrink-0 snap-start sm:basis-auto sm:shrink"
          >
            <div className="relative h-[170px] w-full overflow-hidden">
              <Image
                src="/facilities/keyfacility.jpg"
                alt={facility.title}
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute bottom-3 right-3 flex size-12 items-center justify-center rounded-full border-2 border-white bg-[#eef5fc] text-primary shadow-md">
                <Ear size={20} />
              </span>
            </div>

            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-base font-extrabold text-[#123866]">{facility.title}</h3>
              <p className="mt-1 text-xs text-foreground/80">{facility.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

