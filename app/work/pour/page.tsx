import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Activity,
  ArrowLeft,
  ArrowUpRight,
  DotIcon,
  ListChecks,
  MessageSquare,
  MessageSquareDashed,
  Package,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface pageProps {}

const apps = [
  {
    name: "How We Feel",
    remarks: "Categorization of emotions",
    icon: "/pour/apps/hwf.png",
    screen: "/pour/apps/screens/hwf.png",
  },
  {
    name: "Calm",
    remarks: "Meditation UI",
    icon: "/pour/apps/caml.png",
    screen: "/pour/apps/screens/calm.png",
  },
  {
    name: "Alan Mind",
    remarks: "Guided journaling modules",
    icon: "/pour/apps/alan.png",
    screen: "/pour/apps/screens/alan.png",
  },
  {
    name: "Co-Star",
    remarks: "Calendar element",
    icon: "/pour/apps/costar.png",
    screen: "/pour/apps/screens/costar.png",
  },
  {
    name: "Craft",
    remarks: "Notes UI",
    icon: "/pour/apps/craft.png",
    screen: "/pour/apps/screens/craft.png",
  },
  {
    name: "Clover",
    remarks: "Notes UI",
    icon: "/pour/apps/clover.png",
    screen: "/pour/apps/screens/clover.png",
  },
];

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
          Improving the effectiveness CBT with the help of Journaling
        </h1>
        <div className="tldr flex flex-col border border-zinc-300 dark:border-zinc-800">
          <div className="w-full aspect-video relative  border-b border-zinc-300 dark:border-zinc-800">
            <Image
              src={"/pour-page-cover.png"}
              fill
              alt="cover"
              className="p-2"
            />
          </div>
          <div className="w-full h-auto relative grid grid-cols-1 md:grid-cols-3 ">
            <div className="intro border-r p-6 border-zinc-300 dark:border-zinc-800 space-y-4">
              <p className="text-[14px] opacity-80 dark:opacity-60 pb-4">
                Intro
              </p>
              <p className="leading-6 text-[18px]">
                According to my research most people who don&apos;t journal,
                don&apos;t do it because of how daunting an empty page seems.
                Those who do, derive a lot of value from it. Therapists often
                recommend journalig as an activity.
              </p>
              <p className="leading-6 text-[18px]">
                Pour is an AI powered journal that helps you express your
                emotions easily with the help of guided journaling and prompts.
                It also has a toolset to connect your journal to your therapy
                sessions.
              </p>
            </div>
            <div className="details text-sm border-r border-zinc-300 dark:border-zinc-800 flex flex-col">
              <div className="stat p-6 space-y-2 border-b border-zinc-300 dark:border-zinc-800">
                <p className="text-[14px] opacity-80 dark:opacity-60">Scope</p>
                <p className="text-[18px] font-medium">Capstone project</p>
              </div>
              <div className="stat p-6 space-y-2 border-b border-zinc-300 dark:border-zinc-800">
                <p className="text-[14px] opacity-80 dark:opacity-60">Period</p>
                <p className="text-[18px] font-medium">
                  January, 2023 – May, 2023
                </p>
              </div>
              <div className="stat p-6 space-y-2 border-b border-zinc-300 dark:border-zinc-800">
                <p className="text-[14px] opacity-80 dark:opacity-60">Team</p>
                <p className="text-[18px] font-medium">Solo project</p>
              </div>
              <div className="stat p-6 space-y-2 border-b border-zinc-300 dark:border-zinc-800">
                <p className="text-[14px] opacity-80 dark:opacity-60">
                  My Role
                </p>
                <p className="text-[18px] font-medium">
                  UX Research, UI Design
                </p>
              </div>
              <div className="stat p-6 space-y-2">
                <p className="text-[14px] opacity-80 dark:opacity-60">
                  Key Deliverables
                </p>
                <p className="text-[18px] font-medium">
                  Research, Wireframes, Prototype
                </p>
              </div>
            </div>
            <div className="stats flex flex-col">
              <div className="stat p-6 border-b border-zinc-300 dark:border-zinc-800">
                <p className="text-[48px] font-black">100%</p>
                <p className="text-[14px] opacity-80 dark:opacity-60">
                  of interviewed therapists would recommend Pour to their
                  clients
                </p>
              </div>
              <div className="stat p-6 border-b border-zinc-300 dark:border-zinc-800">
                <p className="text-[48px] font-black">150+</p>
                <p className="text-[14px] opacity-80 dark:opacity-60">
                  Signups on the interest form
                </p>
              </div>
            </div>
          </div>
          <div className="w-full border-t border-zinc-300 dark:border-zinc-800 p-6">
            <Link
              href={"google.com"}
              className={cn(
                buttonVariants({ variant: "link", size: "lg" }),
                "pl-0 text-[18px] font-bold w-fit flex items-center gap-2"
              )}
            >
              View Interactive Prototype
              <ArrowUpRight size={20} className="opacity-80 dark:opacity-60" />
            </Link>
          </div>
        </div>
      </header>
      <article className="container max-w-6xl mt-12 flex gap-6 relative">
        <div className="toc w-72 relative hidden lg:block">
          <div className="sticky top-44 flex flex-col gap-2 font-bold text-sm">
            <a href="#background">Background</a>
            <a href="#background" className="pl-4 opacity-80 dark:opacity-60">
              Why Journaling
            </a>
            <a href="#research">Research</a>
            <a href="#background" className="pl-4 opacity-80 dark:opacity-60">
              Desk
            </a>
            <a href="#background" className="pl-4 opacity-80 dark:opacity-60">
              Competetive
            </a>
            <a href="#background" className="pl-4 opacity-80 dark:opacity-60">
              HMWs
            </a>
            <a href="#background" className="pl-4 opacity-80 dark:opacity-60">
              Desk
            </a>
            <a href="#wireframes">Wireframes</a>
            <a href="#final">Final App</a>
            <a href="#background" className="pl-4 opacity-80 dark:opacity-60">
              Prototype
            </a>
            <a href="#final">Outcomes</a>
            <a href="#final">Next Steps</a>
          </div>
        </div>
        <div className="content grow prose prose-2xl prose-zinc dark:prose-invert space-y-32 lg:pl-36">
          <div id="background" className="scroll-mt-52">
            <h2 className="mt-0">Background</h2>
            <p className="text-[18px] opacity-90 dark:opacity-75">
              This project was my capstone project submission for my grad degree
              in proeduct design at{" "}
              <Link
                href="https://www.newschool.edu/parsons/"
                className="underline-offset-4"
              >
                Parsons School of Design.
              </Link>{" "}
              This was a 5 month long project where I worked as a solo UX
              Researcher, UI Designer and eventually even full stack developer.
              This project earned me an <strong>honours degree</strong> and
              ended up being a <strong>featured project</strong>!
            </p>
            <h4>Why Journaling?</h4>
            <p className="text-[18px] opacity-90 dark:opacity-75">
              I was introduced to journaling as a medium of expression when I
              started therapy. Since then, it has helped me immensely and I
              wanted to make this tool as accessible and optimal as possible.
              This project is a deep dive into journaling as a practise and how
              it can be used to optimise CBT sessions (more on that later).
            </p>
          </div>
          <div id="research" className="scroll-mt-52">
            <h2>Research</h2>
            <p className="text-[18px] opacity-90 dark:opacity-75">
              Before launching Figma, I had to figure out what I will design.
              The goal of the research step was to figure out why (and why
              don&apos;t) people journal, how therapists use journaling as a
              tool and some of the existing tools in the market.
            </p>
            <h3>Interviews</h3>
            <p className="text-[18px] opacity-90 dark:opacity-75">
              I condeucted qualitative discussions with 7 people with varying
              levels of journaling experience and 2 therapists about why and how
              they journal and if they don’t what’s been the blockers if any
            </p>
            <h4 className="pb-4">Insights</h4>
            <p className="text-[18px] opacity-90 dark:opacity-75">
              The qualitative interviews led to some interesting takeaways and I
              could see the strong connecting between therapy and journaling.
            </p>
            <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 border-l border-t border-zinc-300 dark:border-zinc-800 not-prose">
              <div className="border-b border-r border-zinc-300 dark:border-zinc-800 p-6">
                <p className="text-[48px] font-black">🤷‍♂️</p>
                <p className="text-[18px] opacity-90 dark:opacity-75">
                  Most people who don&apos;t journal, don&apos;t know how to
                  start
                </p>
              </div>
              <div className="border-b border-r border-zinc-300 dark:border-zinc-800 p-6">
                <p className="text-[48px] font-black">🫣</p>
                <p className="text-[18px] opacity-90 dark:opacity-75">
                  People feel too vulnerable expressing their thoughts
                </p>
              </div>
              <div className="border-b border-r border-zinc-300 dark:border-zinc-800 p-6">
                <p className="text-[48px] font-black">🗒️</p>
                <p className="text-[18px] opacity-90 dark:opacity-75">
                  People in therapy were introduced to journaling by their
                  therapists
                </p>
              </div>
              <div className="border-b border-r border-zinc-300 dark:border-zinc-800 p-6">
                <p className="text-[48px] font-black">👩‍⚕️</p>
                <p className="text-[18px] opacity-90 dark:opacity-75">
                  Therapists often recommend journaling as tool in CBT
                </p>
              </div>
              <div className="border-b border-r border-zinc-300 dark:border-zinc-800 p-6">
                <p className="text-[48px] font-black">🚨</p>
                <p className="text-[18px] opacity-90 dark:opacity-75">
                  People often use journaling as a crisis management tool
                </p>
              </div>
              <div className="border-b border-r border-zinc-300 dark:border-zinc-800 p-6">
                <p className="text-[48px] font-black">📖</p>
                <p className="text-[18px] opacity-90 dark:opacity-75">
                  People who journal often reflect and read past journals
                </p>
              </div>
            </div>
            <h4>Competitive Landscape</h4>
            <p className="text-[18px] opacity-90 dark:opacity-75">
              I studied some apps that exists in the journaling, mental health
              and note-taking categories. My goal with this step was to
              understand what features exist on the market and where
              there&apos;s space to add.
            </p>
            <p className="text-sm p-4 border border-zinc-300 dark:border-zinc-800 mb-8">
              💡 Hover on the app icons to see my takeaways from each
            </p>
            <div className="flex flex-wrap gap-6">
              {apps.map((app) => (
                <TooltipProvider delayDuration={200} key={app.name}>
                  <Tooltip>
                    <TooltipTrigger className="flex flex-col items-center">
                      <div className="w-[75px] aspect-square relative hover:scale-110 transition">
                        <Image
                          src={app.icon}
                          fill
                          alt={app.name}
                          className="mt-0"
                        />
                      </div>
                      <p className="text-sm">{app.name}</p>
                    </TooltipTrigger>
                    <TooltipContent
                      side="bottom"
                      className="p-4 not-prose w-52"
                    >
                      <p className="mb-2">
                        <strong>{app.name}</strong>
                      </p>
                      <p className="leading-5 mb-2">{app.remarks}</p>
                      <div className="w-full h-96 relative">
                        <Image
                          src={app.screen}
                          fill
                          alt={app.name}
                          className="mt-0"
                        />
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
            <h4>HMWs {" -> App Features"}</h4>
            <p className="text-[18px] opacity-90 dark:opacity-75">
              Its time to synthesize research insights and map them to features
              we would want in the app. A session of card sorting later, we have
              the following features to focus on.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="aspect-square w-full relative">
                <Image
                  src={"/pour/hmws/hmw-1.svg"}
                  fill
                  alt={"HMW 1"}
                  className="mt-0 p-2 border border-zinc-300 dark:border-zinc-800"
                />
              </div>
              <div className="aspect-square w-full relative">
                <Image
                  src={"/pour/hmws/hmw-2.svg"}
                  fill
                  alt={"HMW 1"}
                  className="mt-0 p-2 border border-zinc-300 dark:border-zinc-800"
                />
              </div>
              <div className="aspect-square w-full relative">
                <Image
                  src={"/pour/hmws/hmw-3.svg"}
                  fill
                  alt={"HMW 1"}
                  className="mt-0 p-2 border border-zinc-300 dark:border-zinc-800"
                />
              </div>
            </div>
          </div>
          <div>
            <h2>Wireframes</h2>
            <p className="text-[18px] opacity-90 dark:opacity-75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              eaque quisquam maxime tenetur quia recusandae, porro quis sunt.
              Ratione, vel. Quas aliquid excepturi ex ipsam officia cum odit
              velit placeat!
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-12">
              <div>
                <div className="aspect-[9/16] w-full relative">
                  <Image
                    src={"/pour/wires/wf-1.svg"}
                    fill
                    alt={"HMW 1"}
                    className="mt-0"
                  />
                </div>
                <p className="text-sm pl-4 pr-8">
                  Simple re-assuring empty states to get people started
                </p>
              </div>
              <div>
                <div className="aspect-[9/16] w-full relative">
                  <Image
                    src={"/pour/wires/wf-2.svg"}
                    fill
                    alt={"HMW 1"}
                    className="mt-0"
                  />
                </div>
                <p className="text-sm pl-4 pr-8">
                  Selecting from a simple range of emotions to help with the
                  guided journaling feature
                </p>
              </div>
              <div>
                <div className="aspect-[9/16] w-full relative">
                  <Image
                    src={"/pour/wires/wf-3.svg"}
                    fill
                    alt={"HMW 1"}
                    className="mt-0"
                  />
                </div>
                <p className="text-sm pl-4 pr-8">
                  Guided journaling so people don&apos;t have to stare at an
                  empty page
                </p>
              </div>
              <div>
                <div className="aspect-[9/16] w-full relative">
                  <Image
                    src={"/pour/wires/wf-4.svg"}
                    fill
                    alt={"HMW 1"}
                    className="mt-0"
                  />
                </div>
                <p className="text-sm pl-4 pr-8">
                  Auto generated notes to discuss in a therapy session
                </p>
              </div>
              <div>
                <div className="aspect-[9/16] w-full relative">
                  <Image
                    src={"/pour/wires/wf-5.svg"}
                    fill
                    alt={"HMW 1"}
                    className="mt-0"
                  />
                </div>
                <p className="text-sm pl-4 pr-8">
                  Therapist app to manage their clients and review their shared
                  therapy notes
                </p>
              </div>
              <div>
                <div className="aspect-[9/16] w-full relative">
                  <Image
                    src={"/pour/wires/wf-6.svg"}
                    fill
                    alt={"HMW 1"}
                    className="mt-0"
                  />
                </div>
                <p className="text-sm pl-4 pr-8">
                  Therapists can view therapy notes generated by their clients
                  journal entries (if shared)
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2>The Final App</h2>
            <p className="text-[18px] opacity-90 dark:opacity-75">
              Presenting, Pour – an AI powered journaling app that helps people
              in therapy get over the fear of an empty page and optimise their
              sessions with the following features:
            </p>
            <ul className="text-[18px] opacity-90 dark:opacity-75">
              <li>Various modes of journaling – guided, prompts, free etc.</li>
              <li>AI powered guided journals</li>
              <li>
                Auto generated discussion points and summaries from entries
              </li>
              <li>Separate app for therapists to monitor clients</li>
            </ul>
            <h4>The final flow</h4>
            <p className="text-[18px] opacity-90 dark:opacity-75">
              The folowing flow shows the complete user flow with journeys for
              both users and therapists.
            </p>
            <p className="text-sm p-4 border border-zinc-300 dark:border-zinc-800 mb-8">
              💡 Go full screen to view this better
            </p>
            <iframe
              allowFullScreen
              className="border p-2 border-zinc-300 dark:border-zinc-800 w-full"
              height="450"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F6OqxuyHiSj137XEola8Yn8%2FPour-Journey%3Ftype%3Dwhiteboard%26node-id%3D0%253A1%26t%3DZ5bQkVUNcdv85LLF-1"
            ></iframe>
            <h4>Visual identity</h4>
            <p className="text-[18px] opacity-90 dark:opacity-75">
              Since Pour is essentially a note taking app, I wanted the visual
              language of the app to be as simple as possible.
            </p>
            <div className="aspect-[12/8] w-full relative">
              <Image
                src={"/pour/visual/pour-icon.png"}
                fill
                alt={"HMW 1"}
                className="mt-0 border p-2 border-zinc-300 dark:border-zinc-800"
              />
            </div>
            <div className="grid grid-cols-2 mt-4 gap-4">
              <div className="aspect-square w-full relative">
                <Image
                  src={"/pour/visual/colors.png"}
                  fill
                  alt={"HMW 1"}
                  className="mt-0 border p-2 border-zinc-300 dark:border-zinc-800"
                />
              </div>
              <div className="aspect-square w-full relative">
                <Image
                  src={"/pour/visual/fonts.svg"}
                  fill
                  alt={"HMW 1"}
                  className="mt-0 border p-2 border-zinc-300 dark:border-zinc-800"
                />
              </div>
            </div>
          </div>
          <div className="relative">
            <h2>Key Screens</h2>
            <div className="md:grid md:grid-cols-2 gap-24 mb-24 relative">
              <div className="max-w-xs md:max-w-md relative">
                <div className="md:sticky md:top-44">
                  <h4 className="mt-0 flex gap-2 items-center">
                    <Package />
                    Various modes
                  </h4>
                  <p className="text-[18px] opacity-90 dark:opacity-75">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis eaque quisquam maxime tenetur quia recusandae,
                    porro quis sunt. Ratione, vel. Quas aliquid excepturi ex
                    ipsam officia cum odit velit placeat!
                  </p>
                </div>
              </div>
              <div className="w-full aspect-[438/890] relative">
                <Image
                  src={"/pour/gifs/1.gif"}
                  fill
                  alt={"HMW 1"}
                  className="mt-0"
                />
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 gap-24 mb-24 relative">
              <div className="max-w-xs md:max-w-md relative">
                <div className="sticky top-44">
                  <h4 className="mt-0 flex gap-2 items-center">
                    <MessageSquare />
                    Guided journaling
                  </h4>
                  <p className="text-[18px] opacity-90 dark:opacity-75">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis eaque quisquam maxime tenetur quia recusandae,
                    porro quis sunt. Ratione, vel. Quas aliquid excepturi ex
                    ipsam officia cum odit velit placeat!
                  </p>
                </div>
              </div>
              <div className="w-full aspect-[438/890] relative">
                <Image
                  src={"/pour/gifs/1.gif"}
                  fill
                  alt={"HMW 1"}
                  className="mt-0"
                />
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 gap-24 mb-24 relative">
              <div className="max-w-xs md:max-w-md relative">
                <div className="sticky top-44">
                  <h4 className="mt-0 flex gap-2 items-center">
                    <ListChecks />
                    Discussion points
                  </h4>
                  <p className="text-[18px] opacity-90 dark:opacity-75">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis eaque quisquam maxime tenetur quia recusandae,
                    porro quis sunt. Ratione, vel. Quas aliquid excepturi ex
                    ipsam officia cum odit velit placeat!
                  </p>
                </div>
              </div>
              <div className="w-full aspect-[438/890] relative">
                <Image
                  src={"/pour/gifs/1.gif"}
                  fill
                  alt={"HMW 1"}
                  className="mt-0"
                />
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 gap-24 mb-24 relative">
              <div className="max-w-xs md:max-w-md relative">
                <div className="sticky top-44">
                  <h4 className="mt-0 flex gap-2 items-center">
                    <Activity />
                    Therapist app
                  </h4>
                  <p className="text-[18px] opacity-90 dark:opacity-75">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis eaque quisquam maxime tenetur quia recusandae,
                    porro quis sunt. Ratione, vel. Quas aliquid excepturi ex
                    ipsam officia cum odit velit placeat!
                  </p>
                </div>
              </div>
              <div className="w-full aspect-[438/890]">
                <video
                  src={"/test-video.mp4"}
                  className="mt-0"
                  muted
                  autoPlay
                  loop
                />
              </div>
            </div>
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
            <h4>Next steps</h4>
            <p className="text-[18px] opacity-90 dark:opacity-75">
              Being passionate about journaling and seeing the warm reception
              for this concept I have decided to take this project forward and
              make it a real working project!
            </p>
            <p className="text-sm p-4 border border-zinc-300 dark:border-zinc-800 mb-8">
              💡 I&apos;m currently building a revised version of this concept
              called{" "}
              <Link
                href={"https://journi.site"}
                className={cn(buttonVariants({ variant: "link" }), "px-0")}
              >
                Journi
              </Link>
              !
            </p>
          </div>
        </div>
      </article>
      <div className="container max-w-6xl space-y-6 my-48 prose dark:prose-invert prose-zinc">
        <h1 className="mb-12">More work</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="h-auto w-full border border-zinc-300 dark:border-zinc-800 flex flex-col">
            <div className="aspect-video w-full relative border-b border-zinc-300 dark:border-zinc-800">
              <Image src={"/sita-cover.png"} fill alt="test" className="mt-0" />
            </div>
            <div className="p-6 grow">
              <h2 className="mt-0">Designing a CRM</h2>
              <p className="text-[18px] opacity-90 dark:opacity-75">
                Being passionate about journaling
              </p>
            </div>
            <div className="border-t border-zinc-300 dark:border-zinc-800 p-6 h-20 flex items-center">
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
          <div className="h-auto w-full border border-zinc-300 dark:border-zinc-800 flex flex-col">
            <div className="aspect-video w-full relative border-b border-zinc-300 dark:border-zinc-800">
              <Image src={"/tt-cover.png"} fill alt="test" className="mt-0" />
            </div>
            <div className="p-6 grow">
              <h2 className="mt-0">Helping teens find the best careers</h2>
              <p className="text-[18px] opacity-90 dark:opacity-75">
                Being passionate about journaling
              </p>
            </div>
            <div className="border-t border-zinc-300 dark:border-zinc-800 p-6 h-20 flex items-center">
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
