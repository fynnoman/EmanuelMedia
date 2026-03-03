import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emanuel Media – Druck & Textildruck Saarlouis",
  description: "Emanuel Media – Ihre Druckerei in Saarlouis-Roden. Textildruck, Visitenkarten, Flyer, Bücher, Logoentwicklung und mehr.",
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
