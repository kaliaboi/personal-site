import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface pageProps {}

const Pour: FC<pageProps> = ({}) => {
  return (
    <>
      <header className="container max-w-6xl space-y-6 pb-16">
        <Link
          href="/"
          className={cn(buttonVariants({ variant: "link" }), "pl-0")}
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to portfolio
        </Link>
        <h1 className="text-[28px] md:text-[64px] font-[700] max-w-4xl leading-[110%] pb-12">
          Designing an app to help teens find their best career tracks
        </h1>
        <div className="tldr flex flex-col border border-zinc-800">
          <div className="w-full aspect-video relative  border-b border-zinc-800">
            <Image src={"/tt-cover.png"} fill alt="cover" className="p-2" />
          </div>
          <div className="w-full h-auto relative grid grid-cols-1 md:grid-cols-3 ">
            <div className="intro border-r p-6 border-zinc-800 space-y-4">
              <p className="text-[14px] opacity-60 pb-4">Intro</p>
              <p className="leading-6 text-[16px]">
                According to my research most people who don&apos;t journal,
                don&apos;t do it because of how daunting an empty page seems.
                Those who do, derive a lot of value from it. Therapists often
                recommend journalig as an activity.
              </p>
              <p className="leading-6 text-[16px]">
                Pour is an AI powered journal that helps you express your
                emotions easily with the help of guided journaling and prompts.
                It also has a toolset to connect your journal to your therapy
                sessions.
              </p>
            </div>
            <div className="details text-sm border-r border-zinc-800 flex flex-col">
              <div className="stat p-6 space-y-2 border-b border-zinc-800">
                <p className="text-[14px] opacity-60">Scope</p>
                <p className="text-[16px] font-medium">Capstone project</p>
              </div>
              <div className="stat p-6 space-y-2 border-b border-zinc-800">
                <p className="text-[14px] opacity-60">Period</p>
                <p className="text-[16px] font-medium">
                  January, 2023 – May, 2023
                </p>
              </div>
              <div className="stat p-6 space-y-2 border-b border-zinc-800">
                <p className="text-[14px] opacity-60">Team</p>
                <p className="text-[16px] font-medium">Solo project</p>
              </div>
              <div className="stat p-6 space-y-2 border-b border-zinc-800">
                <p className="text-[14px] opacity-60">My Role</p>
                <p className="text-[16px] font-medium">
                  UX Research, UI Design
                </p>
              </div>
              <div className="stat p-6 space-y-2">
                <p className="text-[14px] opacity-60">Key Deliverables</p>
                <p className="text-[16px] font-medium">
                  Research, Wireframes, Prototype
                </p>
              </div>
            </div>
            <div className="stats flex flex-col">
              <div className="stat p-6 border-b border-zinc-800">
                <p className="text-[48px] font-black">100%</p>
                <p className="text-[14px] opacity-60">
                  of interviewed therapists would recommend Pour to their
                  clients
                </p>
              </div>
              <div className="stat p-6 border-b border-zinc-800">
                <p className="text-[48px] font-black">150+</p>
                <p className="text-[14px] opacity-60">
                  Signups on the interest form
                </p>
              </div>
            </div>
          </div>
          <div className="w-full border-t border-zinc-800 p-6">
            <Link
              href={"google.com"}
              className={cn(
                buttonVariants({ variant: "link", size: "lg" }),
                "pl-0 text-[18px] font-bold w-fit flex items-center gap-2"
              )}
            >
              View Interactive Prototype
              <ArrowUpRight size={20} className="opacity-60" />
            </Link>
          </div>
        </div>
      </header>
      <article className="container max-w-6xl mt-12 flex gap-6 relative">
        <div className="toc w-72 relative hidden lg:block">
          <div className="sticky top-44 flex flex-col gap-2 font-bold text-sm">
            <a href="#background">Background</a>
            <a href="#background" className="pl-4 opacity-60">
              The Problem
            </a>
            <a href="#research">Opportunities</a>
            <a href="#background" className="pl-4 opacity-60">
              Visual Appeal
            </a>
            <a href="#background" className="pl-4 opacity-60">
              Interactiveness
            </a>
            <a href="#background" className="pl-4 opacity-60">
              Engaging content
            </a>
            <a href="#background" className="pl-4 opacity-60">
              Social relatability
            </a>
            <a href="#background" className="pl-4 opacity-60">
              Fun quizzes
            </a>
            <a href="#wireframes">Design Work</a>
            <a href="#background" className="pl-4 opacity-60">
              Planning
            </a>
            <a href="#background" className="pl-4 opacity-60">
              Desigining
            </a>
            <a href="#background" className="pl-4 opacity-60">
              Prototyping
            </a>
            <a href="#final">Outcomes</a>
          </div>
        </div>
        <div className="content grow prose prose-2xl prose-zinc dark:prose-invert space-y-32 lg:pl-36">
          <div id="background" className="scroll-mt-52">
            <h2 className="mt-0">Background</h2>
            <p className="text-[18px] opacity-75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              consectetur inventore, voluptas eos dolores magni repellat placeat
              nostrum ducimus error quidem eum maxime pariatur sapiente
              repellendus, iusto veritatis odit voluptate?
            </p>
            <h4>The Problem</h4>
            <p className="text-[18px] opacity-90 dark:opacity-75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              exercitationem consectetur deserunt et doloribus nulla inventore
              natus modi cumque possimus voluptatum ea corporis, sequi explicabo
              quisquam alias voluptates dolorem laudantium. .
            </p>
          </div>
          <div id="research" className="scroll-mt-52">
            <h2>Opportunities</h2>
            <p className="text-[18px] opacity-90 dark:opacity-75">
              Before launching Figma, I had to figure out what I will design.
              The goal of the research step was to figure out why (and why
              don&apos;t) people journal, how therapists use journaling as a
              tool and some of the existing tools in the market.
            </p>
            <h4>Visual Appeal</h4>
            <p className="text-[18px] opacity-90 dark:opacity-75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae facilis deleniti sequi ea doloribus nulla tenetur
              veniam omnis fugit eveniet. Ipsa beatae autem eligendi architecto
              temporibus ipsam harum animi officia.
            </p>
            <h4>Interactiveness</h4>
            <p className="text-[18px] opacity-90 dark:opacity-75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae facilis deleniti sequi ea doloribus nulla tenetur
              veniam omnis fugit eveniet. Ipsa beatae autem eligendi architecto
              temporibus ipsam harum animi officia.
            </p>
            <h4>Engaging content</h4>
            <p className="text-[18px] opacity-90 dark:opacity-75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae facilis deleniti sequi ea doloribus nulla tenetur
              veniam omnis fugit eveniet. Ipsa beatae autem eligendi architecto
              temporibus ipsam harum animi officia.
            </p>
            <h4>Social Relatability</h4>
            <p className="text-[18px] opacity-90 dark:opacity-75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae facilis deleniti sequi ea doloribus nulla tenetur
              veniam omnis fugit eveniet. Ipsa beatae autem eligendi architecto
              temporibus ipsam harum animi officia.
            </p>
            <h4>Fun Quizzes</h4>
            <p className="text-[18px] opacity-90 dark:opacity-75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae facilis deleniti sequi ea doloribus nulla tenetur
              veniam omnis fugit eveniet. Ipsa beatae autem eligendi architecto
              temporibus ipsam harum animi officia.
            </p>
          </div>
          <div id="research" className="scroll-mt-52">
            <h2>Design Work</h2>
            <p className="text-[18px] opacity-90 dark:opacity-75">
              Before launching Figma, I had to figure out what I will design.
              The goal of the research step was to figure out why (and why
              don&apos;t) people journal, how therapists use journaling as a
              tool and some of the existing tools in the market.
            </p>
            <h4>Planing</h4>
            <p className="text-[18px] opacity-90 dark:opacity-75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae facilis deleniti sequi ea doloribus nulla tenetur
              veniam omnis fugit eveniet. Ipsa beatae autem eligendi architecto
              temporibus ipsam harum animi officia.
            </p>
            <h4>UI Design</h4>
            <p className="text-[18px] opacity-90 dark:opacity-75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae facilis deleniti sequi ea doloribus nulla tenetur
              veniam omnis fugit eveniet. Ipsa beatae autem eligendi architecto
              temporibus ipsam harum animi officia.
            </p>
            <h4>Prototyping</h4>
            <p className="text-[18px] opacity-90 dark:opacity-75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae facilis deleniti sequi ea doloribus nulla tenetur
              veniam omnis fugit eveniet. Ipsa beatae autem eligendi architecto
              temporibus ipsam harum animi officia.
            </p>
          </div>
          <div>
            <h2>Outcomes</h2>
            <p className="text-[18px] opacity-90 dark:opacity-75">
              Since it&apos;s one of the first projects where I&apos;ve worked
              on all ends of the product design spectrum including research,
              I&apos;ve learnt a lot. Here are some nice numbers that still make
              me happy!
            </p>
            <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 border-l border-t border-zinc-300 dark:border-zinc-800 not-prose">
              <div className="border-b border-r border-zinc-300 dark:border-zinc-800 p-6">
                <p className="text-[48px] font-black">100%</p>
                <p className="text-[14px] opacity-100 dark:opacity-60">
                  of interviewed therapists would recommend Pour to their
                  clients
                </p>
              </div>
              <div className="border-b border-r border-zinc-300 dark:border-zinc-800 p-6">
                <p className="text-[48px] font-black">150+</p>
                <p className="text-[14px] opacity-100 dark:opacity-60">
                  Signups on the interest form
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
      <div className="container max-w-6xl space-y-6 my-48 prose dark:prose-invert prose-zinc">
        <h1 className="mb-12">More work</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="h-auto w-full border border-zinc-800 flex flex-col">
            <div className="aspect-video w-full relative border-b border-zinc-800">
              <Image src={"/sita-cover.png"} fill alt="test" className="mt-0" />
            </div>
            <div className="p-6 grow">
              <h2 className="mt-0">Designing a CRM</h2>
              <p className="text-[18px] opacity-75">
                Being passionate about journaling
              </p>
            </div>
            <div className="border-t border-zinc-800 p-6 h-20 flex items-center">
              <Link
                href="/"
                className={cn(
                  buttonVariants({ variant: "link", size: "lg" }),
                  "p-0 flex gap-4"
                )}
              >
                Read case study
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
          <div className="h-auto w-full border border-zinc-800 flex flex-col">
            <div className="aspect-video w-full relative border-b border-zinc-800">
              <Image src={"/tt-cover.png"} fill alt="test" className="mt-0" />
            </div>
            <div className="p-6 grow">
              <h2 className="mt-0">Helping teens find the best careers</h2>
              <p className="text-[18px] opacity-75">
                Being passionate about journaling
              </p>
            </div>
            <div className="border-t border-zinc-800 p-6 h-20 flex items-center">
              <Link
                href="/"
                className={cn(
                  buttonVariants({ variant: "link", size: "lg" }),
                  "p-0 flex gap-4"
                )}
              >
                Read case study
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pour;
