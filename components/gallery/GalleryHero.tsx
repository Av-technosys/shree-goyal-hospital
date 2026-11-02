import Image from "next/image";
import ActionLink from "@/components/ui/ActionLink";
import SectionLabel from "@/components/ui/SectionLabel";

export default function GalleryHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#eef5fc]">
      {/* Background Hero Banner for Desktop (Unchanged) */}
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

      {/* Background Hero Banner for Mobile (Matches attached mobile screenshot) */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/Gallery/gallerybanner-mobile.png"
          alt="Shree Goyal Hospital building exterior"
          fill
          sizes="100vw"
          priority
          className="object-cover object-top"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative mx-auto flex max-w-[1240px] items-start px-5 pt-8 pb-[330px] min-[390px]:pb-[370px] sm:pb-[420px] md:min-h-[clamp(451px,31.3vw,580px)] md:items-center md:py-14 xl:px-0">
        <div data-motion-stagger className="w-full max-w-[550px] md:pb-4 xl:max-w-[490px] 2xl:max-w-[550px]">
          <SectionLabel>Gallery</SectionLabel>
          <h1 className="mt-2 text-[34px] font-extrabold leading-[1.12] tracking-[-1.5px] text-primary sm:text-[50px]">
            Moments of Care
          </h1>
          <p className="mt-4 text-xs leading-relaxed text-foreground min-[380px]:text-sm sm:mt-6 sm:text-base sm:leading-6">
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
