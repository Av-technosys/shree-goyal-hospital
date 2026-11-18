import type { Metadata } from "next";
import Notifications from "@/components/ui/Notifications";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shree Goyal Hospital | Maternity & ENT Care in Ajmer",
  icons: { icon: "/Common/Logo.png" },
  description: "Searching for maternity and ENT care in Ajmer? Consult experienced gynecologists and ENT doctors with advanced medical support. Book your appointment today.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen bg-white text-foreground">
        {children}
        <Notifications />
      </body>
    </html>
  );
}
