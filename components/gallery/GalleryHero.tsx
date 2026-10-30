import Image from "next/image";
import ActionLink from "@/components/ui/ActionLink";
import SectionLabel from "@/components/ui/SectionLabel";

export default function GalleryHero() {
  return (
    <section className="relative isolate grid grid-cols-1 overflow-hidden bg-secondary md:block">
      {/* Hero backgrounds */}
      <div className="hidden md:block md:absolute md:inset-0 md:aspect-auto">
        <Image
          src="/Gallery/heroBG.png"
          alt="Shree Goyal Hospital exterior"
          fill
          sizes="100vw"
          priority
          className="object-cover object-right"
        />
      </div>
      <div className="col-start-1 row-start-1 md:hidden">
        <Image src="/Gallery/gallerybanner-mobile.png" alt="Shree Goyal Hospital building exterior" width={941} height={1670} sizes="(max-width: 767px) 100vw, 1px" priority className="h-auto w-full" />
      </div>
      <div className="relative col-start-1 row-start-1 mx-auto flex w-full min-w-0 max-w-[1240px] items-start px-4 pb-14 pt-10 sm:px-5 md:min-h-[clamp(450px,31.3vw,560px)] md:items-center md:py-14 xl:px-0">
        <div data-motion-stagger className="w-full max-w-[550px] md:pb-4 xl:max-w-[490px] 2xl:max-w-[550px]">
          <SectionLabel>Gallery</SectionLabel>
          <h1 className="text-[clamp(28px,8.65vw,34px)] font-extrabold leading-[1.12] tracking-[-1px] text-primary sm:text-[40px] md:text-[50px] md:tracking-[-1.5px]">
            Moments of Care
          </h1>
          <p className="mt-4 text-sm leading-6 text-foreground sm:mt-6 sm:text-base sm:leading-6">
            Explore our hospital through photos of modern facilities, expert doctors, advanced equipment, compassionate care, and memorable moments with patients.
          </p>
          <div className="mt-6 sm:mt-10">
            <ActionLink href="/facilities">View Our Facilities</ActionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
