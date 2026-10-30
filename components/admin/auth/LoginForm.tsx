"use client";

import Image from "next/image";
import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Eye, EyeOff, LoaderCircle, LockKeyhole, Mail } from "lucide-react";
import { loginAction } from "@/helpers/admin/auth-actions";

export default function LoginForm() {
  const [state, action, pending] = useActionState(loginAction, { error: "" });
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const restore = (event: PageTransitionEvent) => {
      if (event.persisted) window.location.replace("/admin");
    };
    window.addEventListener("pageshow", restore);
    return () => window.removeEventListener("pageshow", restore);
  }, []);
  return <main className="flex min-h-dvh items-center justify-center bg-[#f6f8fc] px-5 py-10">
    <div className="w-full max-w-[460px]">
      <Link href="/" className="mb-8 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 transition-colors hover:text-primary"><ArrowLeft size={15} />Back to website</Link>
      <section aria-labelledby="login-heading" className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_16px_60px_#0b3d9108] sm:p-10">
        <div className="mb-9 flex items-center gap-3"><Image src="/Common/Logo.png" alt="Shree Goyal Hospital" width={64} height={48} className="h-auto w-14" /><div><p className="text-sm font-extrabold tracking-tight text-primary">Shree Goyal Hospital</p><p className="mt-1 text-xs text-slate-400">Administration</p></div></div>
        <h1 id="login-heading" className="text-3xl font-extrabold tracking-[-1px] text-primary">Welcome back.</h1>
        <p className="mt-3 text-sm leading-6 text-slate-500">Sign in to your hospital workspace.</p>
        <form noValidate action={action} className="mt-8 space-y-5">
          <fieldset disabled={pending} className="space-y-5">
            <legend className="sr-only">Admin sign-in</legend>
            <div><label htmlFor="admin-email" className="mb-2 block text-xs font-semibold text-foreground">Email address</label><div className="relative"><Mail size={17} aria-hidden="true" className="pointer-events-none absolute left-3.5 top-3.5 text-slate-400" /><input id="admin-email" name="email" type="email" autoComplete="username" required maxLength={254} defaultValue={state.email ?? ""} aria-invalid={Boolean(state.fieldErrors?.email)} aria-describedby={state.fieldErrors?.email ? "admin-email-error" : state.error ? "login-error" : undefined} className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-3 text-sm outline-none aria-invalid:border-red-400 focus:border-primary focus:ring-2 focus:ring-primary/10" placeholder="Enter your email" /></div>{state.fieldErrors?.email && <p id="admin-email-error" className="mt-2 text-xs text-red-600">{state.fieldErrors.email}</p>}</div>
            <div><label htmlFor="admin-password" className="mb-2 block text-xs font-semibold text-foreground">Password</label><div className="relative"><LockKeyhole size={17} aria-hidden="true" className="pointer-events-none absolute left-3.5 top-3.5 text-slate-400" /><input id="admin-password" name="password" type={visible ? "text" : "password"} autoComplete="current-password" required maxLength={256} aria-invalid={Boolean(state.fieldErrors?.password)} aria-describedby={state.fieldErrors?.password ? "admin-password-error" : state.error ? "login-error" : undefined} className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-12 text-sm outline-none aria-invalid:border-red-400 focus:border-primary focus:ring-2 focus:ring-primary/10" placeholder="Enter your password" /><button type="button" aria-label={visible ? "Hide password" : "Show password"} aria-pressed={visible} onClick={() => setVisible(value => !value)} className="absolute right-1 top-1 flex size-10 items-center justify-center rounded-lg text-slate-400 hover:text-primary focus-visible:outline-2 focus-visible:outline-primary">{visible ? <EyeOff size={17} /> : <Eye size={17} />}</button></div>{state.fieldErrors?.password && <p id="admin-password-error" className="mt-2 text-xs text-red-600">{state.fieldErrors.password}</p>}</div>
            {state.error && <p id="login-error" role="alert" className="rounded-lg bg-red-50 px-3 py-2.5 text-xs leading-5 text-red-700">{state.error}</p>}
            <button type="submit" className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary text-sm font-semibold text-white transition-colors hover:bg-primary/90 disabled:cursor-wait disabled:opacity-70">{pending ? <><LoaderCircle size={17} className="animate-spin motion-reduce:animate-none" />Signing in…</> : <>Sign in<ArrowRight size={17} /></>}</button>
          </fieldset>
        </form>
      </section>
      <p className="mt-6 text-center text-xs text-slate-400">Authorised hospital staff only</p>
    </div>
  </main>;
}
