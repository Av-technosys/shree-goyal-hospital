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
  return <section id="facilities" className="pb-16 lg:pb-20">
    <div className="mx-auto max-w-[1240px] px-5 xl:px-0">
      <div className="grid items-center gap-10 md:grid-cols-[.85fr_1.35fr] lg:gap-14">
        <div data-motion-reveal>
          <SectionLabel>Our Facilities</SectionLabel>
          <h2 className="text-3xl font-extrabold leading-[1.15] tracking-[-1px] text-primary sm:text-4xl">Modern Infrastructure for <span className="text-accent">Better Care</span></h2>
          <p className="mt-6 text-base leading-7">Our hospital is equipped with advanced operation theatres, comfortable patient rooms, audiology and modern medical facilities for patient-centric care.</p>
          <ActionLink href="/services" className="mt-6">Book Services</ActionLink>
        </div>
        <Image data-motion-reveal src="/About/facilityMain.png" alt="The hospital’s modern operation theatre and medical team" width={752} height={286} sizes="(max-width: 767px) 90vw, 55vw" className="h-auto w-full rounded-xl shadow-[0_12px_32px_#0b3d9126]" />
      </div>

      <div data-motion-stagger className="mt-10 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">
        {facilities.map(facility => <a key={facility.name} data-motion-hover="card" href="/facilities" className="group block text-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
          <Image src={`/About/${facility.image}.png`} alt={facility.name} width={237} height={110} sizes="(max-width: 639px) 45vw, (max-width: 1023px) 30vw, 20vw" className="h-auto w-full rounded-xl shadow-[0_6px_18px_#0b3d911a] transition-shadow duration-300 group-hover:shadow-[0_10px_24px_#0b3d9126]" />
          <h3 className="mt-3 text-sm font-semibold group-hover:text-primary">{facility.name}</h3>
        </a>)}
      </div>
    </div>
  </section>;
}
