import Image from "next/image";

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
    <section aria-labelledby="equipment-heading" className="mx-auto max-w-[1240px] px-5 py-12 lg:py-20 xl:px-0">
      <div data-motion-reveal className="max-w-[650px]">
        <span className="mb-4 inline-flex items-center rounded-full bg-[#eef5fc] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
          Major OT Equipment
        </span>
        <h2
          id="equipment-heading"
          className="text-3xl font-extrabold leading-[1.2] tracking-tight text-primary sm:text-4xl"
        >
          State-of-the-Art<br />
          Medical Equipment
        </h2>
        <p className="mt-3 max-w-[540px] text-sm leading-relaxed text-slate-600 sm:text-base sm:leading-6">
          Our operation theatre is equipped with modern and advanced equipment to ensure safe and precise surgeries.
        </p>
      </div>

      <div
        data-motion-stagger
        className="mt-8 flex overflow-x-auto gap-4 pb-4 pt-1 px-5 -mx-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory touch-auto sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible"
      >
        {equipmentList.map(item => (
          <article
            key={item.title}
            data-motion-hover="card"
            className="group flex w-[210px] min-[390px]:w-[225px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xs transition-shadow hover:shadow-md sm:w-auto"
          >
            <div className="relative h-[135px] min-[390px]:h-[145px] sm:h-[160px] w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 639px) 230px, (max-width: 1023px) 50vw, 25vw"
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

