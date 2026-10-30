import type { Metadata } from "next";
import Notifications from "@/components/ui/Notifications";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shree Goyal Hospital | Maternity & ENT Care in Ajmer",
  icons: { icon: "/Common/Logo.png" },
  description: "Compassionate maternity, women's health, and ENT care at Shree Goyal Hospital, Ajmer. Meet our specialists and arrange your consultation.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className="antialiased">
    <body className="min-h-screen bg-white text-foreground">
      {children}
      <Notifications />
    </body>
  </html>;
}
