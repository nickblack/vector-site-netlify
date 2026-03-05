import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VECTOR — Deep Tech Commercialisation Program | Nick Black",
  description:
    "The intensive 6-month commercialisation program that embeds experienced operators into your team. Go from promising pilots to proven PMF. We select 5 deep tech companies per year.",
  openGraph: {
    title: "VECTOR — Deep Tech Commercialisation Program",
    description:
      "Go from promising pilots to proven PMF in 6 months. We embed experienced operators who build your GTM engine with you.",
    url: "https://vector.nickblack.us",
    siteName: "VECTOR by Nick Black",
    type: "website",
  },
  icons: {
    icon: "/assets/Favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
