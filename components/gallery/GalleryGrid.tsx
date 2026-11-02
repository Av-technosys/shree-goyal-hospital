"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Baby, BedDouble, Building2, ChevronLeft, ChevronRight, LayoutGrid, Pill, Scissors, Stethoscope, UsersRound, X } from "lucide-react";
import { Dialog } from "radix-ui";
import { useRef, useState } from "react";

const categories = [
  { name: "All", icon: LayoutGrid },
  { name: "Hospital Infrastructure", icon: Building2 },
  { name: "Operation Theatre", icon: Scissors },
  { name: "Maternity Care", icon: Baby },
  { name: "ENT Care", icon: Stethoscope },
  { name: "Patient Rooms", icon: BedDouble },
  { name: "Our Team", icon: UsersRound },
] as const;
type Category = (typeof categories)[number]["name"];

const photos = [
  { title: "Reception & Lobby", file: "Reception & Lobby.png", mobileFile: "reception-mobile.jpg", categories: ["Hospital Infrastructure"], icon: Building2, width: 608, height: 395, featured: true },
  { title: "Operation Theatre", file: "Operation Theatre.png", mobileFile: "operation-mobile.jpg", categories: ["Operation Theatre"], icon: Scissors, width: 608, height: 395, featured: true },
  { title: "Maternity Room", file: "Maternity Room.png", mobileFile: "maternityroom-mobile.jpg", categories: ["Maternity Care", "Patient Rooms"], icon: BedDouble, width: 398, height: 281, featured: false },
  { title: "ENT Consultation", file: "ENT Consultation.png", mobileFile: "ent-mobile.jpg", categories: ["ENT Care"], icon: Stethoscope, width: 398, height: 281, featured: false },
  { title: "Maternity Care", file: "Maternity Care.png", mobileFile: "maternitycare-mobile.jpg", categories: ["Maternity Care"], icon: Baby, width: 398, height: 281, featured: false },
  { title: "Patient Room", file: "Deluxe Patient Room.png", mobileFile: "patientroom-mobile.jpg", categories: ["Patient Rooms"], icon: BedDouble, width: 398, height: 281, featured: false },
  { title: "In-House Pharmacy", file: "In-House Pharmacy.png", mobileFile: "pharmacy-mobile.jpg", categories: ["Hospital Infrastructure"], icon: Pill, width: 398, height: 281, featured: false },
  { title: "Our Team", file: "Doctors Team.png", mobileFile: "ourteam-mobile.jpg", categories: ["Our Team"], icon: UsersRound, width: 398, height: 281, featured: false },
];

export default function GalleryGrid() {
  const [category, setCategory] = useState<Category>("All");
  const [selected, setSelected] = useState<string | null>(null);
  const returnFocus = useRef<HTMLButtonElement>(null);
  const reducedMotion = useReducedMotion();
  const filtered = photos.filter(photo => category === "All" || photo.categories.includes(category));
  const selectedIndex = filtered.findIndex(photo => photo.file === selected);
  const selectedPhoto = filtered[selectedIndex];

  function changePhoto(direction: number) {
    const index = (selectedIndex + direction + filtered.length) % filtered.length;
    setSelected(filtered[index].file);
  }

  return <section aria-label="Hospital photo gallery" className="pb-12 pt-12 lg:pt-20">
    <div className="mx-auto max-w-[1240px] border-0 px-5 xl:px-0">
      <div data-lenis-prevent-horizontal className="-mx-1 flex gap-2 overflow-x-auto overscroll-x-contain border-0 p-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" role="group" aria-label="Filter gallery by category">
        {categories.map(({ name, icon: Icon }) => <button
          key={name}
          type="button"
          aria-pressed={category === name}
          aria-controls="gallery-photos"
          onClick={() => setCategory(name)}
          className={`inline-flex min-h-9 flex-[1_0_auto] items-center justify-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${category === name ? "border-primary bg-primary text-white" : "border-primary/35 bg-secondary text-primary hover:border-primary hover:bg-blue-100"}`}
        ><Icon size={15} aria-hidden="true" />{name}</button>)}
      </div>
    </div>

    <div className="mx-auto max-w-[1240px] px-5 pt-8 xl:px-0">
      <p className="sr-only" role="status">Showing {filtered.length} photos in {category}.</p>
      <div data-motion-reveal id="gallery-photos" className={`grid grid-cols-2 gap-3 sm:gap-5 ${category === "All" ? "lg:grid-cols-6" : "lg:grid-cols-3"}`}>
        <AnimatePresence initial={false} mode="popLayout">
          {filtered.map(photo => <motion.button
            key={photo.file}
            type="button"
            layout="position"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            whileHover={reducedMotion ? undefined : { y: -4 }}
            transition={{ duration: reducedMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
            aria-label={`View ${photo.title}`}
            aria-haspopup="dialog"
            onClick={event => { returnFocus.current = event.currentTarget; setSelected(photo.file); }}
            className={`group relative self-start overflow-hidden rounded-2xl sm:rounded-xl bg-secondary text-left shadow-[0_3px_8px_#0b3d911a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${category === "All" ? photo.featured ? "lg:col-span-3" : "lg:col-span-2" : ""}`}
          >
            {/* Mobile optimized photo */}
            <Image
              src={`/Gallery/${photo.mobileFile}`}
              alt={photo.title}
              width={512}
              height={279}
              className="block sm:hidden h-auto w-full object-cover"
            />
            {/* Desktop / Tablet photo */}
            <Image
              src={`/Gallery/${photo.file}`}
              alt={photo.title}
              width={photo.width}
              height={photo.height}
              sizes={category === "All" && photo.featured ? "(max-width: 639px) 50vw, (max-width: 1023px) 50vw, 50vw" : "(max-width: 639px) 50vw, (max-width: 1023px) 50vw, 33vw"}
              className="hidden sm:block h-auto w-full object-cover"
            />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/45 via-transparent to-transparent" />
            <span className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 inline-flex max-w-[calc(100%_-_16px)] sm:max-w-[calc(100%_-_32px)] items-center gap-1.5 sm:gap-2 rounded-full bg-white/95 px-2.5 py-1.5 sm:px-3 sm:py-2 text-[10px] sm:text-xs font-bold text-slate-900 shadow-sm backdrop-blur-sm truncate">
              <photo.icon size={13} aria-hidden="true" className="shrink-0 text-[#0074e8] sm:size-[15px]" />
              <span className="truncate">{photo.title}</span>
            </span>
          </motion.button>)}
        </AnimatePresence>
      </div>
    </div>

    <Dialog.Root open={selected !== null} onOpenChange={open => { if (!open) setSelected(null); }}>
      <Dialog.Portal>
        <Dialog.Overlay data-lenis-prevent className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm" />
        <Dialog.Content
          data-lenis-prevent
          onCloseAutoFocus={event => { event.preventDefault(); returnFocus.current?.focus({ preventScroll: true }); }}
          onKeyDown={event => {
            if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
            event.preventDefault();
            changePhoto(event.key === "ArrowLeft" ? -1 : 1);
          }}
          className="fixed left-1/2 top-1/2 z-50 max-h-[calc(100dvh_-_32px)] w-[calc(100%_-_32px)] max-w-[1000px] -translate-x-1/2 -translate-y-1/2 overflow-y-auto overscroll-contain rounded-2xl bg-white p-5 text-foreground shadow-2xl focus:outline-none sm:p-7"
        >
          <Dialog.Title className="mb-5 pr-10 text-xl font-bold text-primary">{selectedPhoto?.title}</Dialog.Title>
          <Dialog.Description className="sr-only">Hospital gallery photo. Use the left and right arrow keys to browse. Press Escape to close.</Dialog.Description>
          <Dialog.Close aria-label="Close photo viewer" className="absolute right-3 top-3 flex size-10 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-secondary hover:text-primary"><X size={22} /></Dialog.Close>
          {selectedPhoto && <Image src={`/Gallery/${selectedPhoto.file}`} alt={selectedPhoto.title} width={selectedPhoto.width} height={selectedPhoto.height} sizes="(max-width: 767px) 90vw, 850px" className="mx-auto max-h-[65dvh] w-auto max-w-full rounded-xl object-contain" />}
          {filtered.length > 1 && <div className="mt-5 flex items-center justify-between">
            <button type="button" onClick={() => changePhoto(-1)} aria-label="Previous photo" className="flex size-11 items-center justify-center rounded-full border border-blue-100 text-primary transition-colors hover:bg-secondary"><ChevronLeft size={20} /></button>
            <p className="text-sm text-[#526176]" aria-live="polite">{selectedIndex + 1} / {filtered.length}</p>
            <button type="button" onClick={() => changePhoto(1)} aria-label="Next photo" className="flex size-11 items-center justify-center rounded-full border border-blue-100 text-primary transition-colors hover:bg-secondary"><ChevronRight size={20} /></button>
          </div>}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  </section>;
}
