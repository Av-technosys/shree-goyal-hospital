import Image from "next/image";
import { ArrowRight, BriefcaseMedical, UserRound } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

const doctors = [
  { name: "Dr. Manish Goyal", department: "ENT", qualification: "M.B.B.S, M.D., ENT", experience: "10+", image: "ManishGoyal", tags: ["Ear", "Mouth & Neck Cancer Expert", "Nose", "Throat"] },
  { name: "Dr. Ritu Goyal", department: "OBS & GYN", qualification: "M.B.B.S, M.S.(OBS & Gyn), Gold Medalist", experience: "10+", image: "RituGoyal", tags: ["Obstetrics", "Normal & Cesarean Delivery", "Infertility and Laparoscopic Specialist"] },
  { name: "Dr. Sunil Goyal", department: "PEDIATRICS", qualification: "M.B.B.S, M.D.", experience: "8+", image: "SunilGoyal", tags: ["Child Health", "Growth Specialist", "Development Specialist"] },
  { name: "Dr. Shikha Goyal", department: "PEDIATRICS", qualification: "M.B.B.S, M.D.", experience: "5+", image: null, tags: [] },
];

export default function Doctors({ compactMobile = false }: { compactMobile?: boolean }) {
  return <section id="doctors" className="bg-secondary py-16 lg:py-20">
    <div className="mx-auto max-w-[1240px] px-4 sm:px-5 xl:px-0">
      <SectionLabel>Our Doctors</SectionLabel>

      <div data-motion-reveal className="mb-10 flex flex-wrap items-end justify-between gap-5">
        <h2 className="font-extrabold text-primary text-[30px] leading-[1.15] tracking-[-1px] sm:text-4xl">Meet Our <span className="text-accent">Specialists</span></h2>
        <a href="#doctors" className={`${compactMobile ? "hidden sm:flex" : "flex"} items-center gap-2 text-sm font-bold text-[#006b9d]`}>View All Doctors <ArrowRight size={16} /></a>
      </div>

      <div data-motion-stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {doctors.map(doctor => <article data-motion-hover="card" key={doctor.name} className={`relative isolate min-w-0 break-words overflow-hidden rounded-2xl bg-white p-6 shadow-[0_4px_22px_#00000026] ${compactMobile ? "mx-auto w-[calc(100%_-_48px)] max-w-[340px] sm:w-full sm:max-w-none" : ""}`}>
          <Image src="/Home/doctorcardBG.png" fill alt="" sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw" className="-z-10 object-cover" />
          <div className="mb-6 flex h-[163px] items-center justify-center">
            {doctor.image ? <span className="relative isolate block h-[163px] w-[153px]">
              <span aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 size-[153px] rounded-full bg-linear-to-t from-[#dceeff] via-[#edf6ff] via-55% to-white to-85%" />
              <Image src={`/Home/${doctor.image}.png`} alt={doctor.name} width={153} height={163} className="relative object-contain" />
            </span> : <span className="flex size-[153px] items-center justify-center rounded-full bg-[#bedfff]">
              <UserRound className="size-24 text-white" strokeWidth={4} />
            </span>}
          </div>

          <p className="text-[10px] font-bold text-destructive">
            {doctor.department}
          </p>
          <h3 className="mt-1 text-lg font-extrabold text-primary">
            {doctor.name}
          </h3>
          <p className="mt-2 text-xs font-semibold leading-5">
            {doctor.qualification}
          </p>
          <p className="mt-2 inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-1 text-xs font-bold text-primary"><BriefcaseMedical size={13} />{doctor.experience} Years Experience</p>

          <div className="mt-4 flex flex-wrap gap-1">
            {doctor.tags.map(tag => <span key={tag} className="rounded-full border border-blue-100 bg-blue-50 px-2 text-[10px] font-bold leading-5 text-[#123866]">
              {tag}
            </span>)}
          </div>
        </article>)}
      </div>
    </div>
  </section>;
}
