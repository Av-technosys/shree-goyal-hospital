import Image from "next/image";
import ActionLink from "@/components/ui/ActionLink";
import SectionLabel from "@/components/ui/SectionLabel";

const facilities = [
  { name: "Operation Theatre", image: "facility1" },
  { name: "Labour Room", image: "facility2" },
  { name: "Patient Rooms", image: "facility3" },
  { name: "Audiology Lab", image: "facility4" },
  { name: "Pharmacy", image: "facility5" },
];

export default function Facilities() {
  return <section id="facilities" className="pb-10 sm:pb-16 lg:pb-20">
    <div className="mx-auto max-w-[1240px] px-4 sm:px-5 xl:px-0">
      <div className="grid items-center gap-10 md:grid-cols-[.85fr_1.35fr] lg:gap-14">
        <div data-motion-reveal>
          <SectionLabel>Our Facilities</SectionLabel>
          <h2 className="font-extrabold text-primary text-[30px] leading-[1.15] tracking-[-1px] sm:text-4xl">Modern Infrastructure for <span className="text-accent">Better Care</span></h2>
          <p className="mt-5 text-sm leading-6 sm:mt-6 sm:text-base sm:leading-7">Our hospital is equipped with advanced operation theatres, comfortable patient rooms, audiology and modern medical facilities for patient-centric care.</p>
          <ActionLink href="/services" className="mt-6">Book Services</ActionLink>
        </div>
        <Image data-motion-reveal src="/About/facilityMain.png" alt="The hospital’s modern operation theatre and medical team" width={752} height={286} sizes="(max-width: 767px) 90vw, 55vw" className="hidden h-auto w-full rounded-xl shadow-[0_12px_32px_#0b3d9126] md:block" />
      </div>

      <div data-lenis-prevent-horizontal data-motion-stagger className="-mx-4 mt-6 flex snap-x snap-proximity gap-4 overflow-x-auto overscroll-x-contain scroll-px-4 px-4 py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:mt-10 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 sm:scroll-px-0 lg:grid-cols-5">
        {facilities.map(facility => <a key={facility.name} data-motion-hover="card" href="/facilities" className="group block min-w-0 basis-[145px] min-[390px]:basis-[160px] shrink-0 snap-start text-center sm:basis-auto focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
          <Image src={`/About/${facility.image}.png`} alt={facility.name} width={237} height={110} sizes="(max-width: 639px) 45vw, (max-width: 1023px) 30vw, 20vw" className="h-auto w-full rounded-xl shadow-[0_6px_18px_#0b3d911a] transition-shadow duration-300 group-hover:shadow-[0_10px_24px_#0b3d9126]" />
          <h3 className="mt-3 text-sm font-semibold group-hover:text-primary">{facility.name}</h3>
        </a>)}
      </div>
    </div>
  </section>;
}
