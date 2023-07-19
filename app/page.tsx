"use client";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navigation from "@/components/navigation";
import { buttonVariants } from "@/components/ui/button";
import Work from "@/components/work";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
      <main className="space-y-24 mt-48 container max-w-6xl">
        <Hero />
        <Work />
        <section>
          <p className="mb-4 font-bold text-[12px] uppercase">Side Projects</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12 ">
            <div>
              <div className="aspect-square w-full bg-zinc-800"></div>
              <Link
                href={"https://journi.site"}
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "pl-0 underline"
                )}
              >
                Journi
              </Link>
              <p className="opacity-50">
                A tiny AI powered journal I designed, built and shipped from
                scratch
              </p>
            </div>
            <div>
              <div className="aspect-square w-full bg-zinc-800"></div>
              <Link
                href={"https://journi.site"}
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "pl-0 underline"
                )}
              >
                Beo
              </Link>
              <p className="opacity-50">
                An app I am building with React Native that aims to restore the
                Irish language.
              </p>
            </div>
            <div>
              <div className="aspect-square w-full bg-zinc-800"></div>
              <Link
                href={"https://journi.site"}
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "pl-0 underline"
                )}
              >
                Pomodoro
              </Link>
              <p className="opacity-50">
                A Figma plugin to time-box your work and be more prooductive.
              </p>
            </div>
            <div>
              <div className="aspect-square w-full bg-zinc-800"></div>
              <Link
                href={"https://journi.site"}
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "pl-0 underline"
                )}
              >
                SnippetBin
              </Link>
              <p className="opacity-50">A simple code paste and share tool</p>
            </div>
            <div>
              <div className="aspect-square w-full bg-zinc-800"></div>
              <Link
                href={"https://journi.site"}
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "pl-0 underline"
                )}
              >
                Focus Mixer
              </Link>
              <p className="opacity-50">
                An intuitive white noise mixer for focus
              </p>
            </div>
            <div>
              <div className="aspect-square w-full bg-zinc-800"></div>
              <Link
                href={"https://journi.site"}
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "pl-0 underline"
                )}
              >
                Web&apos;s Grain
              </Link>
              <p className="opacity-50">
                A website remembering an iconic piece of writing
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
