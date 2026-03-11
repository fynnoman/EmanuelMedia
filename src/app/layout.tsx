import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Demir SpeedConnect – Glasfaser & Tiefbau",
  description: "Demir SpeedConnect – Ihr Spezialist für Glasfaserverlegung, Spleißen, Tiefbauarbeiten und Hausanschlüsse.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
