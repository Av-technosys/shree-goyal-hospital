import Image from "next/image";

const items = [
  { title: "Find a Doctor", text: "Experienced and caring specialists", image: "findAdoctor", href: "#doctors", width: 16, height: 20 },
  { title: "Modern Facilities", text: "Advanced and hygienic infrastructure", image: "modernfacility", href: "#facilities", width: 20, height: 20 },
  { title: "Easy Appointment", text: "Simple and convenient booking process", image: "easyappointment", href: "#appointment", width: 20, height: 18 },
  { title: "Comprehensive Care", text: "Maternity and ENT services under one roof", image: "comprehensivecare", href: "#services", width: 24, height: 24 },
];

export default function CareHighlights({ servicesHref = "#services" }: { servicesHref?: string }) {
  return (
    <div
      data-motion-stagger
      className="relative z-10 mx-auto -mt-12 sm:-mt-16 lg:-mt-20 max-w-[1240px] px-4 sm:px-5 pb-6 sm:pb-10 xl:px-0"
    >
      <div data-lenis-prevent-horizontal className="flex min-w-0 overflow-x-auto overscroll-x-contain scroll-px-4 gap-4 py-4 px-4 -mx-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory touch-auto sm:mx-0 sm:scroll-px-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible sm:gap-5">
        {items.map(item => (
          <a
            data-motion-hover="card"
            key={item.title}
            href={item.href === "#services" ? servicesHref : item.href}
            className="flex min-w-0 basis-full break-words shrink-0 snap-start items-start gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_4px_14px_-4px_#0b3d911a] sm:shadow-[0_8px_30px_#0000000d] transition-shadow hover:shadow-md sm:w-auto sm:basis-auto sm:min-h-[94px] sm:rounded-xl"
          >
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#3981fa1a]">
              <Image src={`/Home/${item.image}.png`} alt="" width={item.width} height={item.height} />
            </span>
            <span className="min-w-0">
              <span className="block text-base font-bold text-primary">
                {item.title}
              </span>
              <span className="mt-1 block text-[13px] leading-[1.35] text-[#526176]">
                {item.text}
              </span>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
