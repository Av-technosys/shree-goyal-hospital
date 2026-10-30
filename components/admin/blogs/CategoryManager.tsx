"use client";

import { useRef, useState, useTransition, type FormEvent } from "react";
import { Dialog } from "radix-ui";
import { LoaderCircle, Pencil, Plus, Tags, Trash2, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { deleteCategoryAction, saveCategoryAction } from "@/helpers/admin/blog-actions";
import { slugify, type BlogCategory } from "./blog-fields";

export default function CategoryManager({ categories }: { categories: BlogCategory[] }) {
  const router = useRouter();
  const [refreshing, startTransition] = useTransition();
  const [mutating, setMutating] = useState(false);
  const [failure, setFailure] = useState("");
  const mutation = useRef(false);
  const pending = refreshing || mutating;
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<BlogCategory | null>(null);
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [manualSlug, setManualSlug] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; slug?: string }>({});
  const [deleting, setDeleting] = useState<string | null>(null);

  const dirty = name !== (editing?.name ?? "") || slug !== (editing?.slug ?? "");

  function reset(category: BlogCategory | null = null) {
    setEditing(category); setName(category?.name ?? ""); setSlug(category?.slug ?? "");
    setManualSlug(Boolean(category)); setErrors({}); setDeleting(null); setFailure("");
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (mutation.current) return;
    setFailure("");
    const nextErrors: typeof errors = {};
    if (!name.trim()) nextErrors.name = "Enter a category name.";
    else if (categories.some(category => category.id !== editing?.id && category.name.toLowerCase() === name.trim().toLowerCase())) nextErrors.name = "This category name already exists.";
    if (!slug.trim()) nextErrors.slug = "Enter a slug.";
    else if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) nextErrors.slug = "Use lowercase letters, numbers and single hyphens.";
    else if (categories.some(category => category.id !== editing?.id && category.slug === slug)) nextErrors.slug = "This slug already exists.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      toast.error("Check the category details.", { description: Object.values(nextErrors)[0], id: "category-validation" });
      const categoryForm = event.currentTarget;
      requestAnimationFrame(() => categoryForm.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus());
      return;
    }
    const data = new FormData();
    if (editing) data.set("id", editing.id);
    data.set("name", name); data.set("slug", slug);
    mutation.current = true; setMutating(true);
    try {
      const result = await saveCategoryAction(data);
      if (!result.success) { setFailure(result.message); toast.error(result.message); return; }
      toast.success(editing ? "Category updated." : "Category created.");
      reset(); startTransition(() => router.refresh());
    } catch { setFailure("The connection was interrupted. Please try again."); toast.error("The category could not be saved. Please try again."); }
    finally { mutation.current = false; setMutating(false); }
  }

  async function removeCategory(id: string) {
    if (mutation.current) return;
    mutation.current = true; setMutating(true); setFailure("");
    try {
      const result = await deleteCategoryAction(id);
      if (!result.success) { setFailure(result.message); toast.error(result.message); return; }
      if (editing?.id === id) reset();
      setDeleting(null); toast.success("Category deleted.");
      startTransition(() => router.refresh());
    } catch { setFailure("The category could not be deleted. Please try again."); toast.error("The category could not be deleted. Please try again."); }
    finally { mutation.current = false; setMutating(false); }
  }

  return <Dialog.Root open={open} onOpenChange={value => {
    if (pending) return;
    if (!value && dirty && !window.confirm("Discard unsaved category changes?")) return;
    setOpen(value); if (!value) reset();
  }}>
    <Dialog.Trigger className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-primary hover:bg-secondary"><Tags size={17} aria-hidden="true" />Manage Categories</Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-sm" />
      <Dialog.Content className="fixed left-1/2 top-1/2 z-50 max-h-[calc(100dvh_-_32px)] w-[calc(100%_-_32px)] max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto overscroll-contain rounded-2xl bg-white p-6 shadow-xl focus:outline-none sm:p-8">
        <Dialog.Title className="pr-9 text-xl font-extrabold text-primary">Manage categories</Dialog.Title>
        <Dialog.Description className="mt-2 text-sm leading-6 text-slate-500">Add and organise your blog categories.</Dialog.Description>
        <Dialog.Close disabled={pending} aria-label="Close categories" className="absolute right-4 top-4 rounded-lg p-2 text-slate-500 hover:bg-secondary"><X size={20} /></Dialog.Close>
        <form noValidate onSubmit={submit} className="mt-6 rounded-xl border border-slate-200 bg-slate-50/70 p-4"><fieldset disabled={pending}>
          <h3 className="mb-4 text-sm font-bold text-primary">{editing ? "Edit category" : "Add category"}</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div><label htmlFor="category-name" className="mb-2 block text-sm font-semibold">Name <span aria-hidden="true">*</span></label><input id="category-name" required maxLength={100} value={name} onChange={event => { setName(event.target.value); if (!manualSlug) setSlug(slugify(event.target.value)); }} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "category-name-error" : undefined} className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10" />{errors.name && <p id="category-name-error" role="alert" className="mt-2 text-xs text-red-600">{errors.name}</p>}</div>
            <div><label htmlFor="category-slug" className="mb-2 block text-sm font-semibold">Slug <span aria-hidden="true">*</span></label><input id="category-slug" required maxLength={200} value={slug} onChange={event => { setManualSlug(true); setSlug(event.target.value); }} aria-invalid={Boolean(errors.slug)} aria-describedby={errors.slug ? "category-slug-error" : undefined} className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10" />{errors.slug && <p id="category-slug-error" role="alert" className="mt-2 text-xs text-red-600">{errors.slug}</p>}</div>
          </div>
          <div className="mt-4 flex flex-wrap gap-3"><button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary/90">{pending ? <LoaderCircle size={16} aria-hidden="true" className="animate-spin motion-reduce:animate-none" /> : <Plus size={16} aria-hidden="true" />}{editing ? "Save category" : "Add category"}</button>{editing && <button type="button" onClick={() => { if (!dirty || window.confirm("Discard unsaved category changes?")) reset(); }} className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold">Cancel edit</button>}</div>
        </fieldset></form>
        {failure && <p role="alert" className="mt-4 rounded-lg bg-red-50 p-3 text-sm leading-6 text-red-700">{failure}</p>}
        <ul className="mt-5 divide-y divide-slate-100">
          {categories.map(category => {
            const assigned = category.blogCount;
            return <li key={category.id} className="py-4">
              <div className="flex items-center justify-between gap-3"><div className="min-w-0"><p className="break-words text-sm font-bold text-primary">{category.name}</p><p className="mt-1 break-all text-xs text-slate-500">/{category.slug} · {assigned} {assigned === 1 ? "blog" : "blogs"}</p></div>
                <div className="flex shrink-0 gap-1"><button type="button" disabled={pending} aria-label={`Edit ${category.name}`} onClick={() => { if (!dirty || window.confirm("Discard unsaved category changes?")) reset(category); }} className="rounded-lg p-2 text-primary hover:bg-secondary"><Pencil size={17} /></button><button type="button" aria-label={`Delete ${category.name}`} disabled={pending || assigned > 0} aria-describedby={assigned ? `category-used-${category.id}` : undefined} onClick={() => setDeleting(category.id)} className="rounded-lg p-2 text-red-600 hover:bg-red-50 disabled:cursor-not-allowed disabled:text-slate-300"><Trash2 size={17} /></button></div>
              </div>
              {assigned > 0 && <p id={`category-used-${category.id}`} className="mt-2 text-xs leading-5 text-slate-500">Move its blogs to another category before deleting.</p>}
              {deleting === category.id && <div className="mt-3 rounded-lg bg-red-50 p-3"><p className="text-xs leading-5 text-red-700">Delete “{category.name}” permanently?</p><div className="mt-2 flex gap-4"><button type="button" disabled={pending} onClick={() => removeCategory(category.id)} className="text-xs font-bold text-red-700 underline">Confirm delete</button><button type="button" disabled={pending} onClick={() => setDeleting(null)} className="text-xs font-semibold">Cancel</button></div></div>}
            </li>;
          })}
        </ul>
        {!categories.length && <p className="py-6 text-center text-sm text-slate-500">No categories yet. Add your first category above.</p>}
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>;
}
