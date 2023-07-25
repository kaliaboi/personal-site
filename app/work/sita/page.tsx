import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowUpRight, Minus } from "lucide-react";
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
          Rethinking the itinerary creation system for India&apos;s biggest
          travel company
        </h1>
        <div className="tldr flex flex-col border border-zinc-400 dark:border-zinc-800">
          <div className="w-full aspect-video relative  border-b border-zinc-400 dark:border-zinc-800 overflow-hidden bg-zinc-900">
            {/* <Image src={"/sita-cover.png"} fill alt="cover" className="p-2" /> */}
            <div className="aspect-[1280/854] w-[1280] relative top-0 p-10">
              <video
                src={"/sita/flow.mp4"}
                className="my-0 shadow-sm rounded-sm md:rounded-2xl"
                muted
                autoPlay
                loop
              />
            </div>
          </div>
          <div className="w-full h-auto relative grid grid-cols-1 md:grid-cols-3 ">
            <div className="intro border-r p-6 border-zinc-400 dark:border-zinc-800 space-y-4">
              <p className="text-[14px] opacity-60 pb-4">Intro</p>
              <p className="leading-6 text-[16px] prose dark:prose-invert">
                <Link href="https://www.sita.in/">Sita</Link> is India’s biggest
                travel company and the Indian subcontinents leading destintion
                management hub.
              </p>
              <p className="leading-6 text-[16px]">
                Because of the hault in international travel due to the
                pandemic, they were looking to unify their domestic travel
                operations and needed a design system to help them scale.
              </p>
              <p className="leading-6 text-[16px]">
                I worked on a design team of 4 to craft parts of the design
                system (specifically itinerary creation) to bring the new
                unified platform to life.
              </p>
            </div>
            <div className="details text-sm border-r border-zinc-400 dark:border-zinc-800 flex flex-col">
              <div className="stat p-6 space-y-2 border-b border-zinc-400 dark:border-zinc-800">
                <p className="text-[14px] opacity-60">Client</p>
                <p className="text-[16px] font-medium prose dark:prose-invert underline-offset-4 flex items-center gap-1">
                  <Link href="https://www.sita.in/">Sita</Link>
                  <ArrowUpRight size={18} />
                </p>
              </div>
              <div className="stat p-6 space-y-2 border-b border-zinc-400 dark:border-zinc-800">
                <p className="text-[14px] opacity-60">Period</p>
                <p className="text-[16px] font-medium">
                  December, 2021 – July, 2022
                </p>
              </div>
              <div className="stat p-6 space-y-2 border-b border-zinc-400 dark:border-zinc-800">
                <p className="text-[14px] opacity-60">Team</p>
                <p className="text-[16px] font-medium">
                  3 other product designers <br /> 2 full-stack engineers <br />{" "}
                  1 product manager <br /> 1 company liason (from Sita)
                </p>
              </div>
              <div className="stat p-6 space-y-2 border-b border-zinc-400 dark:border-zinc-800">
                <p className="text-[14px] opacity-60">My Role</p>
                <p className="text-[16px] font-medium">
                  Design system design, Documentation
                </p>
              </div>
              <div className="stat p-6 space-y-2">
                <p className="text-[14px] opacity-60">Key Deliverables</p>
                <p className="text-[16px] font-medium">
                  UI elements, Flows, Screens
                </p>
              </div>
            </div>
            <div className="stats flex flex-col">
              <div className="stat p-6 border-b border-zinc-400 dark:border-zinc-800">
                <p className="text-[48px] font-black">24%</p>
                <p className="text-[14px] opacity-60">
                  increase in itenerary creations per month
                </p>
              </div>
              <div className="stat p-6 border-b border-zinc-400 dark:border-zinc-800">
                <p className="text-[48px] font-black">500+</p>
                <p className="text-[14px] opacity-60">
                  itineraries created using the new system
                </p>
              </div>
              <div className="stat p-6 border-b border-zinc-400 dark:border-zinc-800">
                <p className="text-[48px] font-black">73%</p>
                <p className="text-[14px] opacity-60">
                  conversion rate of itineraries created
                </p>
              </div>
            </div>
          </div>
          <div className="w-full border-t border-zinc-400 dark:border-zinc-800 p-6">
            <Link
              href={"google.com"}
              className={cn(
                buttonVariants({ variant: "link", size: "lg" }),
                "pl-0 text-[16px] font-bold w-fit flex items-center gap-2"
              )}
            >
              View Interactive Prototype
              <ArrowUpRight size={20} className="opacity-60" />
            </Link>
          </div>
        </div>
      </header>
      <article className="container max-w-6xl mt-12 flex gap-6 relative">
        <div className="toc w-[36rem] relative hidden lg:block">
          <div className="sticky top-44 flex flex-col gap-4 font-medium text-sm">
            <div className="flex flex-col gap-1">
              <a href="#background">Background</a>
              <a
                href="#scale"
                className="pl-2 opacity-60 flex gap-1 items-center"
              >
                <Minus size={16} />
                Scale
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <a href="#research">Research</a>
              <a
                href="#status"
                className="pl-2 opacity-60 flex gap-1 items-center"
              >
                <Minus size={16} />
                Status Quo
              </a>
              <a
                href="#pain"
                className="pl-2 opacity-60 flex gap-1 items-center"
              >
                <Minus size={16} />
                Pain Points
              </a>
              <a
                href="#proposed"
                className="pl-2 opacity-60 flex gap-1 items-center"
              >
                <Minus size={16} />
                Proposed System
              </a>
            </div>

            <a href="#creation">Itinerary Creation</a>
            <div className="flex flex-col gap-1">
              <a href="#flow">The Flow</a>
              <a
                href="#cities"
                className="pl-2 opacity-60 flex gap-1 items-center"
              >
                <Minus size={16} />
                Adding Cities
              </a>
              <a
                href="#products"
                className="pl-2 opacity-60 flex gap-1 items-center"
              >
                <Minus size={16} />
                Adding Products
              </a>
              <a
                href="#modes"
                className="pl-2 opacity-60 flex gap-1 items-center"
              >
                <Minus size={16} />
                Viewing Modes
              </a>
              <a
                href="#edit"
                className="pl-2 opacity-60 flex gap-1 items-center"
              >
                <Minus size={16} />
                Edit and Export
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <a href="#atomic">Atomic Design</a>
              <a
                href="#atoms"
                className="pl-2 opacity-60 flex gap-1 items-center"
              >
                <Minus size={16} />
                Atoms
              </a>
              <a
                href="#molecules"
                className="pl-2 opacity-60 flex gap-1 items-center"
              >
                <Minus size={16} />
                Molecules
              </a>
              <a
                href="#organisms"
                className="pl-2 opacity-60 flex gap-1 items-center"
              >
                <Minus size={16} />
                Organisms
              </a>
              <a
                href="#templates"
                className="pl-2 opacity-60 flex gap-1 items-center"
              >
                <Minus size={16} />
                Templates
              </a>
            </div>
            <a href="#outcomes">Outcome</a>
          </div>
        </div>
        <div className="content grow prose prose-2xl prose-zinc dark:prose-invert space-y-32 lg:pl-36">
          <div id="background" className="scroll-mt-52">
            <h2 className="mt-0">Background</h2>
            <p className="text-[16px] opacity-75">
              <Link href="https://www.sita.in/">Sita</Link> is India’s leading
              and most awared Destination Management Company offers travel and
              related services to India, Nepal, Bhutan and Sri Lanka, each
              supported by dedicated local teams with over 400 experienced
              professionals across 23 offices.
            </p>
            <p className="text-[16px] opacity-75">
              The company offers a unique consultative approach, warm
              personalised service and hyper-customized itineraries to inbound
              travellers.
            </p>
            <h4 id="scale">Scale</h4>
            <p className="text-[16px] opacity-75">
              The company operates on a massive scale so designing a system that
              can scale was a big challenge.
            </p>
            <div className="w-full grid grid-cols-2 lg:grid-cols-4 border-l border-t border-zinc-400 dark:border-zinc-700">
              <div className="flex flex-col border-b border-r p-4 border-zinc-400 dark:border-zinc-700">
                <h1 className="text-[48px] font-bold my-0">79</h1>
                <p className="text-[14px] opacity-60 my-0">
                  International awards
                </p>
              </div>
              <div className="flex flex-col border-b border-r p-4 border-zinc-400 dark:border-zinc-700">
                <h1 className="text-[48px] font-bold my-0">20K+</h1>
                <p className="text-[14px] opacity-60 my-0">
                  Employees and partners
                </p>
              </div>
              <div className="flex flex-col border-b border-r p-4 border-zinc-400 dark:border-zinc-700">
                <h1 className="text-[48px] font-bold my-0">1.5K+</h1>
                <p className="text-[14px] opacity-60 my-0">
                  Global partner firms
                </p>
              </div>
              <div className="flex flex-col border-b border-r p-4 border-zinc-400 dark:border-zinc-700">
                <h1 className="text-[48px] font-bold my-0">150+</h1>
                <p className="text-[14px] opacity-60 my-0">
                  Client nationalities
                </p>
              </div>
            </div>
          </div>
          <div
            id="problem"
            className="scroll-mt-52 grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            <div>
              <h3 className="mt-0">The Problem</h3>
              <p className="text-[16px] opacity-90 dark:opacity-75">
                Inefficient collaboration between internal teams is leading to
                loss of productivity and lower employee satisfaction
              </p>
            </div>
            <div>
              <h3 className="mt-0">Why Now?</h3>
              <p className="text-[16px] opacity-90 dark:opacity-75">
                The pandemic has paused international travel and given Sita some
                time to reflect on its 61 year old scattered operation
              </p>
            </div>
          </div>

          <div id="research" className="scroll-mt-52">
            <h2 className="mt-0">Research</h2>
            <h4 id="status">Status Quo</h4>
            <p className="text-[16px] opacity-75">
              Our main form of research was to understand the current flow of
              operations and find out where the inefficiencies were. After
              interviewing the employees we understood the flow.
            </p>
            <div className="w-full aspect-video relative  border-b border-zinc-400 dark:border-zinc-800">
              <Image src={"/sita/sq.png"} fill alt="cover" className="my-0" />
            </div>
            <h4 id="pain">User Pain Points</h4>
            <p className="text-[16px] opacity-75">
              We held interviews and surveys with the employees to understand
              how they go about their day and where they struggle. Here are some
              of the pain points we found.
            </p>
            <ul className="text-[16px] opacity-75">
              <li>
                Multiple different tools used to operate various facets of the
                business causes inadvertent data loss and corruption
              </li>
              <li>
                Offline itinerary planning deprives planners of crucial
                information like ratings, costing and availability
              </li>
              <li>
                Undocumented planning makes it hard to track employee efficiency
              </li>
              <li>
                Overdependance on spreadsheets causes disorganized and
                inconsistent invoices ridden with untraceable costing mistakes
              </li>
            </ul>
            <h4 id="proposed">Proposed System</h4>
            <p className="text-[16px] opacity-75">
              It was clear that the current system was not working effieciently
              and we needed to unify operations into a single platform. This
              will help us scale and also help us track employee efficiency.
            </p>
            <div className="w-full aspect-video relative  border-b border-zinc-400 dark:border-zinc-800">
              <Image src={"/sita/c.png"} fill alt="cover" className="my-0" />
            </div>
            <p className="text-sm p-4 border border-zinc-400 dark:border-zinc-400 dark:border-zinc-800 mb-8">
              💡 I worked on the planning part of the unified platform.
            </p>
          </div>
          <div id="creation" className="scroll-mt-52">
            <h2>Itenarary Creation</h2>
            <p className="text-[16px] opacity-90 dark:opacity-85">
              This was the part of the platform that I was responsible for.
              After speaking with the planners we came up with a simpliefied
              flow.
            </p>
            <p className="text-sm p-4 border border-zinc-400 dark:border-zinc-400 dark:border-zinc-800 mb-8">
              💡 An itinerary in this context is a daily breakdown for a
              traveller's travel in India including hotels, flights, activities.
            </p>
            <div className="aspect-[1920/677] w-full relative">
              <Image
                src={"/sita/process-2.png"}
                fill
                alt={"HMW 1"}
                className="mt-0 border border-zinc-400 dark:border-zinc-400 dark:border-zinc-800"
              />
            </div>
          </div>
          <div id="flow" className="scroll-mt-52">
            <h2>The Flow</h2>
            <p className="text-[16px] opacity-90 dark:opacity-85">
              Lets look at the final screens for the hero flow and later we'll
              break down how the design system using the atomic design approach
              got us there.
            </p>

            <h4 className="mt-20" id="cities">
              Adding cities
            </h4>
            <p className="text-[16px] opacity-90 dark:opacity-85">
              Lets look at the final screens for the hero flow and later we'll
              break down how the design system using the atomic design approach
              got us there.
            </p>
            <div className="aspect-[1280/854] w-full relative ">
              <video
                src={"/sita/videos/cities.mp4"}
                className="my-0 shadow-sm rounded-2xl"
                muted
                autoPlay
                loop
              />
            </div>

            <h4 className="mt-20" id="products">
              Adding products
            </h4>
            <p className="text-[16px] opacity-90 dark:opacity-85">
              Lets look at the final screens for the hero flow and later we'll
              break down how the design system using the atomic design approach
              got us there.
            </p>
            <div className="aspect-[1280/854] w-full relative ">
              <video
                src={"/sita/videos/hotels.mp4"}
                className="my-0 shadow-sm rounded-2xl"
                muted
                autoPlay
                loop
              />
            </div>

            <h4 className="mt-20" id="modes">
              Viewing modes
            </h4>
            <p className="text-[16px] opacity-90 dark:opacity-85">
              Lets look at the final screens for the hero flow and later we'll
              break down how the design system using the atomic design approach
              got us there.
            </p>
            <div className="aspect-[1280/854] w-full relative ">
              <video
                src={"/sita/videos/modes.mp4"}
                className="my-0 shadow-sm rounded-2xl"
                muted
                autoPlay
                loop
              />
            </div>

            <h4 className="mt-20" id="edit">
              Edit and export
            </h4>
            <p className="text-[16px] opacity-90 dark:opacity-85">
              Lets look at the final screens for the hero flow and later we'll
              break down how the design system using the atomic design approach
              got us there.
            </p>
            <div className="aspect-[1280/854] w-full relative ">
              <video
                src={"/sita/videos/export.mp4"}
                className="my-0 shadow-sm rounded-2xl"
                muted
                autoPlay
                loop
              />
            </div>
          </div>
          <div id="atomic" className="scroll-mt-52">
            <h2>Atomic Design</h2>
            <p className="text-[16px] opacity-90 dark:opacity-85">
              We followed the atomic design methodology to create a design
              system that can scale.
            </p>

            <h4 className="mt-20" id="atoms">
              Atoms
            </h4>
            <p className="text-[16px] opacity-90 dark:opacity-85">
              Lets look at the final screens for the hero flow and later we'll
              break down how the design system using the atomic design approach
              got us there.
            </p>
            <div className="aspect-[4/3] w-full relative">
              <Image
                src={"/sita/atomic/1.png"}
                fill
                alt={"HMW 1"}
                className="mt-0 border border-zinc-400 dark:border-zinc-400 dark:border-zinc-800"
              />
            </div>

            <h4 className="mt-20" id="molecules">
              Molecules
            </h4>
            <p className="text-[16px] opacity-90 dark:opacity-85">
              Lets look at the final screens for the hero flow and later we'll
              break down how the design system using the atomic design approach
              got us there.
            </p>
            <div className="aspect-[4/3] w-full relative">
              <Image
                src={"/sita/atomic/2.png"}
                fill
                alt={"HMW 1"}
                className="mt-0 border border-zinc-400 dark:border-zinc-400 dark:border-zinc-800"
              />
            </div>

            <h4 className="mt-20" id="organisms">
              Organisms
            </h4>
            <p className="text-[16px] opacity-90 dark:opacity-85">
              Lets look at the final screens for the hero flow and later we'll
              break down how the design system using the atomic design approach
              got us there.
            </p>
            <div className="aspect-[1345/478] w-full relative">
              <Image
                src={"/sita/atomic/3.png"}
                fill
                alt={"HMW 1"}
                className="mt-0 border border-zinc-400 dark:border-zinc-400 dark:border-zinc-800"
              />
            </div>

            <h4 className="mt-20" id="templates">
              Templates
            </h4>
            <p className="text-[16px] opacity-90 dark:opacity-85">
              Lets look at the final screens for the hero flow and later we'll
              break down how the design system using the atomic design approach
              got us there.
            </p>
            <div className="aspect-[4/3] w-full relative">
              <Image
                src={"/sita/atomic/4.png"}
                fill
                alt={"HMW 1"}
                className="mt-0 border border-zinc-400 dark:border-zinc-400 dark:border-zinc-800"
              />
            </div>

            <div id="outcomes">
              <h2>Outcomes</h2>
              <p className="text-[16px] opacity-90 dark:opacity-85">
                Sita CRM is currently in production and is being used by 100+
                Sita employees on a daily basis. Here are some key stats since
                it went live in October 2022.
              </p>
              <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 border-l border-t border-zinc-400 dark:border-zinc-400 dark:border-zinc-800 not-prose">
                <div className="border-b border-r border-zinc-400 dark:border-zinc-400 dark:border-zinc-800 p-6">
                  <p className="text-[48px] font-black">24%</p>
                  <p className="text-[14px] opacity-100 dark:opacity-60">
                    increase in itenerary creations per month
                  </p>
                </div>
                <div className="border-b border-r border-zinc-400 dark:border-zinc-400 dark:border-zinc-800 p-6">
                  <p className="text-[48px] font-black">500+</p>
                  <p className="text-[14px] opacity-100 dark:opacity-60">
                    itineraries created using the new system
                  </p>
                </div>
                <div className="border-b border-r border-zinc-400 dark:border-zinc-400 dark:border-zinc-800 p-6 col-span-1 md:col-span-2">
                  <p className="text-[48px] font-black">73%</p>
                  <p className="text-[14px] opacity-100 dark:opacity-60">
                    conversion rate of itineraries created
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <div className="container max-w-6xl space-y-6 my-48 prose dark:prose-invert prose-zinc">
        <h1 className="mb-12">More work</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="h-auto w-full border border-zinc-400 dark:border-zinc-800 flex flex-col">
            <div className="aspect-video w-full relative border-b border-zinc-400 dark:border-zinc-800">
              <Image src={"/tt-cover.png"} fill alt="test" className="mt-0" />
            </div>
            <div className="p-6 grow">
              <h2 className="my-0">Helping teens find the best careers</h2>
            </div>
            <div className="border-t border-zinc-400 dark:border-zinc-800 p-6 h-20 flex items-center">
              <Link
                href="/work/topteen"
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
          <div className="h-auto w-full border border-zinc-400 dark:border-zinc-800 flex flex-col">
            <div className="aspect-video w-full relative border-b border-zinc-400 dark:border-zinc-800">
              <Image src={"/pour-2.png"} fill alt="test" className="mt-0" />
            </div>
            <div className="p-6 grow">
              <h2 className="my-0">Journaling for prople in therapy</h2>
            </div>
            <div className="border-t border-zinc-400 dark:border-zinc-800 p-6 h-20 flex items-center">
              <Link
                href="/work/pour"
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
