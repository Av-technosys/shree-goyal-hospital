import Image from "next/image";

const items = [
  { title: "Find a Doctor", text: "Experienced and caring specialists", image: "findAdoctor", href: "#doctors", width: 16, height: 20 },
  { title: "Modern Facilities", text: "Advanced and hygienic infrastructure", image: "modernfacility", href: "#facilities", width: 20, height: 20 },
  { title: "Easy Appointment", text: "Simple and convenient booking process", image: "easyappointment", href: "#appointment", width: 20, height: 18 },
  { title: "Comprehensive Care", text: "Maternity and ENT services under one roof", image: "comprehensivecare", href: "#services", width: 24, height: 24 },
];

export default function CareHighlights({ servicesHref = "#services" }: { servicesHref?: string }) {
  return <div data-motion-stagger className="relative z-10 mx-auto -mt-11 grid max-w-[1240px] gap-5 px-5 sm:grid-cols-2 lg:grid-cols-4 xl:px-0">
    {items.map(item => <a data-motion-hover="card" key={item.title} href={item.href === "#services" ? servicesHref : item.href} className="flex min-h-[94px] items-start gap-4 rounded-xl border border-slate-100 bg-white p-4 shadow-[0_3px_3px_#0003] transition-shadow hover:shadow-md">
      <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#3981fa1a]">
        <Image src={`/Home/${item.image}.png`} alt="" width={item.width} height={item.height} />
      </span>
      <span>
        <span className="block text-base font-bold text-primary">
          {item.title}
        </span>
        <span className="mt-1 block text-[13px] leading-[1.35] text-[#526176]">
          {item.text}
        </span>
      </span>
    </a>)}
  </div>;
}
