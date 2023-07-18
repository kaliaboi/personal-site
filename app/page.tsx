"use client";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navigation from "@/components/navigation";
import Work from "@/components/work";

/**
 * TODO: Move work cards to new components
 * TODO: Make projects object
 * TODO: Make blog page
 * TODO: Add Sanity
 * TODO: Make about page
 *
 */

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="space-y-12 mt-48 container max-w-6xl">
        <Hero />
        <Work />
      </main>
      <Footer />
    </>
  );
}
