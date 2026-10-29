import type { Metadata } from "next";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import PageAnimations from "@/components/ui/PageAnimations";

export const metadata: Metadata = {
  title: "Gallery | Shree Goyal Hospital",
  description: "Explore Shree Goyal Hospital in Ajmer through photos of our facilities, operation theatre, maternity and ENT care, patient rooms, and medical team.",
};

export default function GalleryPage() {
  return <PageAnimations>
    <GalleryHero />
    <GalleryGrid />
  </PageAnimations>;
}
