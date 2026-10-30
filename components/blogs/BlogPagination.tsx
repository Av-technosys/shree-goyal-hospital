"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";

export default function BlogPagination({ page, pageCount, total, onChange }: { page: number; pageCount: number; total: number; onChange: (page: number) => void }) {
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1).filter(value => value === 1 || value === pageCount || Math.abs(value - page) <= 1);
  return <nav aria-label="Article pagination" className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-slate-100 pt-7 sm:flex-row">
    <p className="text-xs text-slate-500"><span className="font-semibold text-primary">{total}</span> articles <span aria-hidden="true" className="mx-2">/</span> Page {page} of {pageCount}</p>
    <div className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white p-1.5 shadow-sm">
      <button type="button" aria-label="Previous page" disabled={page === 1} onClick={() => onChange(page - 1)} className="flex size-10 items-center justify-center rounded-full text-primary transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-primary disabled:cursor-default disabled:opacity-25"><ArrowLeft size={17} /></button>
      <span aria-current="page" className="flex size-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white sm:hidden">{page}</span>
      {pages.map((value, index) => <span key={value} className="hidden items-center gap-1.5 sm:flex">{index > 0 && value - pages[index - 1] > 1 && <span className="px-1 text-slate-400">…</span>}<button type="button" aria-label={`Page ${value}`} aria-current={page === value ? "page" : undefined} onClick={() => onChange(value)} className={`flex size-10 items-center justify-center rounded-full text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${page === value ? "bg-primary text-white shadow-sm" : "text-slate-500 hover:bg-secondary hover:text-primary"}`}>{value}</button></span>)}
      <button type="button" aria-label="Next page" disabled={page === pageCount} onClick={() => onChange(page + 1)} className="flex size-10 items-center justify-center rounded-full text-primary transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-primary disabled:cursor-default disabled:opacity-25"><ArrowRight size={17} /></button>
    </div>
  </nav>;
}
