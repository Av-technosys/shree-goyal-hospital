import Image from "next/image";
import { BriefcaseMedical, UserRound } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

const doctors = [
  { name: "Dr. Manish Goyal", department: "ENT", qualification: "M.B.B.S, M.S., ENT", experience: "20+", image: "ManishGoyal", isVisiting: false, tags: ["Ear", "Mouth & Neck Cancer Expert", "Nose", "Throat"] },
  { name: "Dr. Ritu Goyal", department: "OBS & GYN", qualification: "M.B.B.S, M.S.(OBS & Gyn), Gold Medalist", experience: "20+", image: "RituGoyal", isVisiting: false, tags: ["Obstetrics", "Normal & Cesarean Delivery", "Infertility and Laparoscopic Specialist"] },
  { name: "Dr. Sunil Goyal", department: "PEDIATRICS", qualification: "M.B.B.S, M.D.", experience: "8+", image: "SunilGoyal", isVisiting: true, tags: ["Visiting Consultant", "Child Health", "Growth Specialist", "Development Specialist"] },
  { name: "Dr. Shikha Goyal", department: "PEDIATRICS", qualification: "M.B.B.S, M.D.", experience: "5+", image: null, isVisiting: true, tags: ["Visiting Consultant", "Child Health", "Newborn Care", "Pediatric Specialist"] },
];

export default function Doctors({ compactMobile = false }: { compactMobile?: boolean }) {
  return <section id="doctors" className="bg-secondary py-16 lg:py-20">
    <div className="mx-auto max-w-[1240px] px-4 sm:px-5 xl:px-0">
      <SectionLabel>Our Doctors</SectionLabel>

      <div data-motion-reveal className="mb-10">
        <h2 className="font-extrabold text-primary text-[30px] leading-[1.15] tracking-[-1px] sm:text-4xl">Meet Our <span className="text-accent">Specialists</span></h2>
      </div>

      <div data-motion-stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {doctors.map(doctor => <article data-motion-hover="card" key={doctor.name} className="relative isolate min-w-0 break-words overflow-hidden rounded-2xl bg-white p-6 shadow-[0_4px_22px_#00000026]">
          <Image src="/Home/doctorcardBG.png" fill alt="" sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw" className="-z-10 object-cover" />
          {doctor.isVisiting && <span className="absolute top-4 right-4 z-10 rounded-full border border-blue-200 bg-blue-50/95 px-2.5 py-1 text-[10px] font-bold text-primary shadow-xs">
            Visiting Consultant
          </span>}
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
            {doctor.tags.map(tag => <span key={tag} className={`rounded-full px-2 text-[10px] font-bold leading-5 ${tag === "Visiting Consultant" ? "border border-blue-200 bg-blue-100/70 text-primary" : "border border-blue-100 bg-blue-50 text-[#123866]"}`}>
              {tag}
            </span>)}
          </div>
        </article>)}
      </div>
    </div>
  </section>;
}
