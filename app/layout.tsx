import { Metadata } from "next";
import "../src/styles/globals.scss";

export const metadata: Metadata = {
  title: "MERN",
  description: "Project_description",
  // viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
