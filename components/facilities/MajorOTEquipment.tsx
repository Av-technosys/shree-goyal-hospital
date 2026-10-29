import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";

const equipmentList = [
  {
    title: "Micro Laryngeal Surgical Equipments",
    image: "/facilities/majoreq1.jpg",
  },
  {
    title: "Endoscopes & Bronchoscopes",
    image: "/facilities/majoreq2.jpg",
  },
  {
    title: "Advanced Monitoring Systems",
    image: "/facilities/majoreq3.jpg",
  },
  {
    title: "Ventilators & Anesthesia Machines",
    image: "/facilities/mojoreq4.jpg",
  },
];

export default function MajorOTEquipment() {
  return (
    <section aria-labelledby="equipment-heading" className="mx-auto max-w-[1240px] px-5 py-14 lg:py-20 xl:px-0">
      <div data-motion-reveal className="max-w-[650px]">
        <SectionLabel>Major OT Equipment</SectionLabel>
        <h2
          id="equipment-heading"
          className="text-3xl font-extrabold leading-[1.15] tracking-[-1px] text-primary sm:text-4xl"
        >
          State-of-the-Art<br />
          <span className="text-accent">Medical Equipment</span>
        </h2>
        <p className="mt-4 text-base leading-6 text-foreground">
          Our operation theatre is equipped with modern and advanced equipment to ensure safe and precise surgeries.
        </p>
      </div>

      <div data-motion-stagger className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {equipmentList.map(item => (
          <article
            key={item.title}
            data-motion-hover="card"
            className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_4px_20px_#00000008] transition-shadow hover:shadow-md"
          >
            <div className="relative h-[160px] w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 items-center p-4">
              <h3 className="text-sm font-extrabold leading-snug text-[#123866]">{item.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

