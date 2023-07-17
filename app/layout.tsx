import Navigation from "@/components/navigation";
import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const larsseit = localFont({
  src: [
    {
      path: "../fonts/Larsseit-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Larsseit-Medium.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Larsseit-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Abhishek Kalia",
  description: "Your friendly neighbourhood spaghetti code connesuier",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={larsseit.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
