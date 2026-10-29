import type { ReactNode } from "react";

export default function SectionLabel({ children }: { children: ReactNode; }) {
  return <p className="mb-6 inline-flex rounded-full bg-[#3981fa1a] px-4 py-2 text-xs font-bold uppercase leading-none text-primary">
    {children}
  </p>;
}
