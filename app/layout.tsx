import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

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
        <nav className="flex w-full justify-between items-center p-14">
          <div className="leading-5 font-[400]">
            <p>Abhishek Kalia</p>
            <p className="opacity-50">Product Designer & Frontend Developer</p>
          </div>
          <ul className="flex gap-4">
            <li>Work</li>
            <li>About</li>
            <li>Journal</li>
            <li>Contact</li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
