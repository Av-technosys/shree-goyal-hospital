import Image from "next/image";
import Link from "next/link";

export default function Brand({ footer = false }: { footer?: boolean; }) {
  return <Link href="/" aria-label="Shree Goyal Hospital home" className="inline-flex shrink-0 items-center gap-2 sm:gap-3">
    <Image src="/Common/Logo.png" alt="" width={74} height={50} className={`h-auto -translate-x-[5.4%] ${footer ? "w-[68px] sm:w-[86px]" : "w-12 sm:w-[66px]"}`} priority={!footer} />
    <span>
      <span className={`block font-extrabold tracking-[-0.8px] text-primary ${footer ? "text-base sm:text-2xl" : "text-sm sm:text-xl"}`}>Shree Goyal Hospital</span>
      <span className={`${footer ? "text-[10px] sm:text-sm" : "text-[9px] sm:text-xs"} block uppercase tracking-[0.3px] text-destructive`}>Maternity &amp; ENT Care</span>
    </span>
  </Link>;
}
