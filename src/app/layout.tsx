import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TerraQuset",
  description: "¡Empieza a aprender divirtiendote!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.css" integrity="sha384-zh0CIslj+VczCZtlzBcjt5ppRcsAmDnRem7ESsYwWwg3m/OaJ2l4x7YBZl9Kxxib" crossorigin="anonymous" >

      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
