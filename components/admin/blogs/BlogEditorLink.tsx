"use client";

import { useId, useState, type FormEvent } from "react";
import type { Editor } from "@tiptap/react";
import { Dialog } from "radix-ui";
import { Link2, X } from "lucide-react";
import { toast } from "sonner";
import { normalizeBlogLink } from "@/lib/blog-content";

export default function BlogEditorLink({ editor, active, disabled }: { editor: Editor; active: boolean; disabled: boolean }) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const [href, setHref] = useState("");
  const [newTab, setNewTab] = useState(false);
  const [error, setError] = useState("");

  function showDialog() {
    const attributes = editor.getAttributes("link");
    setHref(typeof attributes.href === "string" ? attributes.href : "");
    setNewTab(attributes.target === "_blank");
    setError(""); setOpen(true);
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); event.stopPropagation();
    const url = normalizeBlogLink(href);
    if (!url) {
      setError("Enter a website URL, site path, email link or phone link.");
      toast.error("Enter a valid link.");
      return;
    }
    const attributes = { href: url, target: newTab ? "_blank" : null, rel: newTab ? "noopener noreferrer" : null };
    if (editor.state.selection.empty && !editor.isActive("link")) {
      editor.chain().focus().insertContent({ type: "text", text: url, marks: [{ type: "link", attrs: attributes }] }).run();
    } else editor.chain().focus().extendMarkRange("link").setLink(attributes).run();
    setOpen(false); toast.success("Link added.");
  }

  return <Dialog.Root open={open} onOpenChange={setOpen}>
    <button type="button" disabled={disabled} aria-label="Insert or edit link" title="Insert or edit link" aria-pressed={active} aria-haspopup="dialog" aria-expanded={open} aria-controls={`${id}-dialog`} onMouseDown={event => event.preventDefault()} onClick={showDialog} className={`flex size-9 shrink-0 items-center justify-center rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-primary disabled:cursor-default disabled:opacity-35 ${active ? "bg-primary text-white" : "text-slate-500 hover:bg-blue-100 hover:text-primary"}`}><Link2 size={17} aria-hidden="true" /></button>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-slate-950/35" />
      <Dialog.Content id={`${id}-dialog`} onCloseAutoFocus={event => { event.preventDefault(); editor.commands.focus(); }} className="fixed left-1/2 top-1/2 z-50 max-h-[calc(100dvh_-_32px)] w-[calc(100%_-_32px)] max-w-md -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl bg-white p-6 shadow-xl outline-none">
        <Dialog.Title className="pr-8 text-lg font-bold text-primary">{active ? "Edit link" : "Add link"}</Dialog.Title>
        <Dialog.Description className="mt-2 text-sm leading-6 text-slate-500">Link selected text to a website or another page.</Dialog.Description>
        <Dialog.Close aria-label="Close link editor" className="absolute right-3 top-3 rounded-lg p-2 text-slate-500 hover:bg-secondary"><X size={18} /></Dialog.Close>
        <form noValidate onSubmit={submit} className="mt-5 space-y-4">
          <div><label htmlFor={`${id}-url`} className="mb-2 block text-sm font-semibold">Link URL</label><input id={`${id}-url`} value={href} onChange={event => { setHref(event.target.value); setError(""); }} placeholder="https://example.com or /contact" autoComplete="off" aria-invalid={Boolean(error)} aria-describedby={error ? `${id}-error` : undefined} className="h-11 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10" />{error && <p id={`${id}-error`} role="alert" className="mt-2 text-xs leading-5 text-red-600">{error}</p>}</div>
          <label className="inline-flex items-center gap-2 text-sm"><input type="checkbox" checked={newTab} onChange={event => setNewTab(event.target.checked)} className="size-4 accent-primary" />Open in a new tab</label>
          <div className="flex flex-wrap justify-end gap-3 pt-2">
            {active && <button type="button" onClick={() => { editor.chain().focus().extendMarkRange("link").unsetLink().run(); setOpen(false); toast.success("Link removed."); }} className="mr-auto text-sm font-semibold text-red-600">Remove link</button>}
            <Dialog.Close className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold">Cancel</Dialog.Close><button type="submit" className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white">Apply link</button>
          </div>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>;
}
