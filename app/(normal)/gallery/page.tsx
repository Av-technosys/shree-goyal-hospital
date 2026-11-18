import type { Metadata } from "next";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import PageAnimations from "@/components/ui/PageAnimations";

export const metadata: Metadata = {
  title: "Shree Goyal Hospital Gallery | Modern Facilities & Events",
  description: "Shree Goyal Hospital Gallery showcases our modern facilities, events, and patient care moments. Explore photos of a clean, modern & caring environment in Ajmer.",
};

export default function GalleryPage() {
  return <PageAnimations>
    <GalleryHero />
    <GalleryGrid />
  </PageAnimations>;
}
