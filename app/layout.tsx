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

const gtp = localFont({
  src: [
    {
      path: "../fonts/gtp-thin.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/gtp-light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/gtp-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/gtp-medium.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/gtp-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/gtp-black.woff2",
      weight: "800",
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
