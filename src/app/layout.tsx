import type { Metadata } from "next";
import "./globals.css";

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
      <head>
        <link rel="icon" href="/Logo.png" type="image/png" />
      </head>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
