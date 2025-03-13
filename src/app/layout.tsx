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
        <link rel="icon" href="/Logo.png" type="image/png" sizes="48x48" />
      </Head>
      <body
        className={`antialiased bg-gradient-to-b sm:h-dvh from-blue-950 to-65% to-blue-400`}
      >
        {children}
      </body>
    </html>
  );
}
