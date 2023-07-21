"use client";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navigation from "@/components/navigation";
import { buttonVariants } from "@/components/ui/button";
import Work from "@/components/work";
import { cn } from "@/lib/utils";
import { Briefcase } from "lucide-react";
import Link from "next/link";

/**
 * TODO: Make about page
 *
 */

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="space-y-6 md:space-y-24 mt-24 md:mt-48 container max-w-6xl">
        <Hero />
        <Work />
        <section>
          <p className="mb-8 mt-24 font-bold text-[24px]">Side Projects</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-6 ">
            <div>
              <Link
                href={"https://journi.site"}
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "pl-0 underline text-[16px]"
                )}
              >
                Journi
              </Link>
              <p className="opacity-60 dark:opacity-50">
                A tiny AI powered journal I designed, built and shipped from
                scratch
              </p>
            </div>
            <div>
              <Link
                href={"https://journi.site"}
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "pl-0 underline text-[16px]"
                )}
              >
                This Site
              </Link>
              <p className="opacity-60 dark:opacity-50">
                A tiny AI powered journal I designed, built and shipped from
                scratch
              </p>
            </div>
            {/* <div>
              <Link
                href={"https://journi.site"}
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "pl-0 underline text-[16px]"
                )}
              >
                Beo
              </Link>
              <p className="opacity-50">
                An app I am building with React Native that aims to restore the
                Irish language.
              </p>
            </div> */}
            <div>
              <Link
                href={"https://journi.site"}
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "pl-0 underline text-[16px]"
                )}
              >
                Pomodoro
              </Link>
              <p className="opacity-60 dark:opacity-50">
                A Figma plugin to time-box your work in 25 min sprints and be
                more prooductive.
              </p>
            </div>
            {/* <div>
              <Link
                href={"https://journi.site"}
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "pl-0 underline text-[16px]"
                )}
              >
                SnippetBin
              </Link>
              <p className="opacity-50">A simple code paste and share tool</p>
            </div> */}
            <div>
              <Link
                href={"https://journi.site"}
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "pl-0 underline text-[16px]"
                )}
              >
                Tranquill
              </Link>
              <p className="opacity-60 dark:opacity-50">
                An intuitive white noise mixer for focus
              </p>
            </div>
            {/* <div>
              <Link
                href={"https://journi.site"}
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "pl-0 underline text-[16px]"
                )}
              >
                Web&apos;s Grain
              </Link>
              <p className="opacity-50">
                A website remembering an iconic piece of writing
              </p>
            </div> */}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
