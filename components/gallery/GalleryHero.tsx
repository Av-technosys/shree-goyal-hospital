import Image from "next/image";
import ActionLink from "@/components/ui/ActionLink";
import SectionLabel from "@/components/ui/SectionLabel";

export default function GalleryHero() {
  return <section className="relative isolate overflow-hidden bg-[#f2f6ff]">
    <div className="relative aspect-[1440/451] xl:absolute xl:inset-0 xl:aspect-auto">
      <Image src="/Gallery/heroBG.png" alt="Shree Goyal Hospital exterior" fill sizes="100vw" preload className="object-cover object-right" />
    </div>

    <div className="relative mx-auto flex max-w-[1240px] items-center px-5 py-12 xl:min-h-[clamp(451px,31.3vw,580px)] xl:py-14 xl:px-0">
      <div data-motion-stagger className="w-full max-w-[550px] xl:max-w-[490px] 2xl:max-w-[550px]">
        <SectionLabel>Gallery</SectionLabel>
        <h1 className="text-[38px] font-extrabold leading-[1.12] tracking-[-1.7px] text-primary sm:text-[50px]">Moments of Care</h1>
        <p className="mt-6 text-base leading-6">Explore our hospital through photos of modern facilities, expert doctors, advanced equipment, compassionate care, and memorable moments with patients.</p>
        <ActionLink href="/facilities" className="mt-10">View Our Facilities</ActionLink>
      </div>
    </div>
  </section>;
}
