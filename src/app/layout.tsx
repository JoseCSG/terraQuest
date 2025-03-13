import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "TerraQuest",
  description: "¡Empieza a aprender divirtiendote!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/Logo.png" type="image/png" />
      </Head>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
