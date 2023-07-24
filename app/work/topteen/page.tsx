import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MagicWandIcon } from "@radix-ui/react-icons";
import {
  ArrowLeft,
  ArrowUpRight,
  Flower,
  Gamepad,
  Layers,
  MagnetIcon,
  ScanFace,
  Wand,
} from "lucide-react";
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
                Topteen is a career guidance app concept that helps teens find
                the right career tracks for them. It also helps them find the
                right colleges and courses to pursue their career.
              </p>
              <p className="leading-6 text-[16px]">
                I worked as a product designer alongside a team of engineers on
                this project. I was involved in the entire design process from
                research to prototyping.
              </p>
              <p className="leading-6 text-[16px]">
                The project is currently in development and will be launched
                later fully later this year. In beta, around 3000 students have
                signed up for the app or shown interest.
              </p>
            </div>
            <div className="details text-sm border-r border-zinc-800 flex flex-col">
              <div className="stat p-6 space-y-2 border-b border-zinc-800">
                <p className="text-[14px] opacity-60">Client</p>
                <p className="text-[16px] font-medium prose dark:prose-invert underline-offset-4 flex items-center gap-1">
                  <Link href="https://www.topteen.in/">TopTeen</Link>
                  <ArrowUpRight size={18} />
                </p>
              </div>
              <div className="stat p-6 space-y-2 border-b border-zinc-800">
                <p className="text-[14px] opacity-60">Period</p>
                <p className="text-[16px] font-medium">
                  July, 2022 – December, 2022
                </p>
              </div>
              <div className="stat p-6 space-y-2 border-b border-zinc-800">
                <p className="text-[14px] opacity-60">Team</p>
                <p className="text-[16px] font-medium">
                  2 engineers <br /> 1 product manager
                </p>
              </div>
              <div className="stat p-6 space-y-2 border-b border-zinc-800">
                <p className="text-[14px] opacity-60">My Role</p>
                <p className="text-[16px] font-medium">
                  Product Design, Prototyping
                </p>
              </div>
              <div className="stat p-6 space-y-2">
                <p className="text-[14px] opacity-60">Key Deliverables</p>
                <p className="text-[16px] font-medium">
                  Product screens, Interactive prototypes
                </p>
              </div>
            </div>
            <div className="stats flex flex-col">
              <div className="stat p-6 border-b border-zinc-800">
                <p className="text-[48px] font-black">3K+</p>
                <p className="text-[14px] opacity-60">
                  total signups on the app
                </p>
              </div>
              <div className="stat p-6 border-b border-zinc-800">
                <p className="text-[48px] font-black">100+</p>
                <p className="text-[14px] opacity-60">
                  people have successfully applied to colleges with the help of
                  the app
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
              TopTeen is a web-based mobile application designed to assist
              teenagers in discovering and exploring careers that align with
              their interests, skills, and aspirations. The primary goal of the
              app is to provide personalized career recommendations and
              resources to help teens make informed decisions about their
              future.
            </p>
            <h4>The Problem</h4>
            <p className="text-[18px] opacity-90 dark:opacity-75">
              The current education system and societal norms in India often
              prioritize traditional career paths, leading to limited exposure
              to unconventional or emerging career options. Many teens might be
              unaware of exciting and rewarding career choices outside the
              mainstream.
            </p>
            <p className="text-[18px] opacity-90 dark:opacity-75">
              Moreover, existing career exploration tools often lack
              age-appropriate content and user interfaces tailored specifically
              for teenagers. Teens require a platform that speaks their
              language, presents information in an engaging manner, and
              addresses their specific concerns and uncertainties.
            </p>
          </div>
          <div id="research" className="scroll-mt-52">
            <h2>Research Insights</h2>
            <p className="text-[18px] opacity-90 dark:opacity-75">
              To ensure a user-centered design we conducted extensive research
              to understand the target audience, teenagers (ages 13-19). User
              research included surveys, interviews, and user feedback from
              similar existing apps or platforms. Key insights include:
            </p>
            <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 border-l border-t border-zinc-300 dark:border-zinc-800 not-prose">
              <div className="border-b border-r border-zinc-300 dark:border-zinc-800 p-6">
                <p className="text-[48px] font-black">62%</p>
                <p className="text-[18px] opacity-90 dark:opacity-75">
                  of teens reported unconventional interests (not engineering,
                  medicine or law) and aspirations, most reported lack guidance
                  on career paths that suit them best.
                </p>
              </div>
              <div className="border-b border-r border-zinc-300 dark:border-zinc-800 p-6">
                <p className="text-[48px] font-black">🗺️</p>
                <p className="text-[18px] opacity-90 dark:opacity-75">
                  Many teens find it challenging to access reliable information
                  about various careers and the skills required to pursue them.
                </p>
              </div>
              <div className="col-span-2 border-b border-r border-zinc-300 dark:border-zinc-800 p-6">
                <p className="text-[48px] font-black">80%</p>
                <p className="text-[18px] opacity-90 dark:opacity-75">
                  of teens reported to be heavy users of highly engaging social
                  apps. The app must be engaging and intuitive to cater to the
                  preferences of digitally-savvy teens.
                </p>
              </div>
            </div>
            <div className="mt-12 aspect-square w-full relative">
              <Image
                src={"/tt/quotes.png"}
                fill
                alt={"HMW 1"}
                className="mt-0 p-2 border border-zinc-300 dark:border-zinc-800"
              />
            </div>
          </div>
          <div id="research" className="scroll-mt-52">
            <h2>Key Focus Areas</h2>
            <p className="text-[18px] opacity-90 dark:opacity-75">
              From the research insights, we identified the following key focus
              areas for the interface:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <div className="flex gap-2 items-center">
                <Flower size={32} />
                <p className="text-[18px] opacity-90 dark:opacity-75">
                  Playful visual appeal
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <Wand size={32} />
                <p className="text-[18px] opacity-90 dark:opacity-75">
                  Interactiveness
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <Layers size={32} />
                <p className="text-[18px] opacity-90 dark:opacity-75">
                  Engaging Content
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <ScanFace size={32} />
                <p className="text-[18px] opacity-90 dark:opacity-75">
                  Social Relatibility
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <Gamepad size={32} />
                <p className="text-[18px] opacity-90 dark:opacity-75">
                  Gamification
                </p>
              </div>
            </div>
          </div>
          <div id="research" className="scroll-mt-52">
            <h2>Solution First Design</h2>
            <p className="text-[18px] opacity-90 dark:opacity-75">
              Since this was short project, we decided to skip the wireframing
              stage and directly jump into designing the screens. We used the
              insights from the research to guide our design decisions.
            </p>
            <p className="text-sm p-4 border border-zinc-300 dark:border-zinc-800 mb-8">
              💡 This process was inspired by a ConFig 2021{" "}
              <Link href="https://www.youtube.com/watch?v=HApKjboMC80&list=PLXDU_eVOJTx68R0B8tettMfY6XeItWhV4&index=13">
                talk
              </Link>{" "}
              by Helena Jaramilla that we came across as a team.
            </p>
            <h4>The Process</h4>
            <p className="text-[18px] opacity-90 dark:opacity-75">
              The simplified we followed looked something like this:
            </p>
            <div className="aspect-video w-full relative">
              <Image
                src={"/tt/process.svg"}
                fill
                alt={"HMW 1"}
                className="mt-0 border border-zinc-300 dark:border-zinc-800"
              />
            </div>
            <p className="text-[18px] opacity-90 dark:opacity-75">
              Since I was not responsible for the branding and illustrations,
              jumping straight into prototyping was a good idea. It saved us
              time and we were able to get feedback from users faster.
            </p>
          </div>
          <div id="research" className="scroll-mt-52">
            <h2>The Final Prototype</h2>
            <p className="text-[18px] opacity-90 dark:opacity-75">
              For the sake of brevity, I&apos;ve only included the portotypes
              that passed user testing. Each flow also details what it aims to
              solve.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <div className="w-full aspect-[438/890]">
                  <video
                    src={"/tt/videos/onboarding.mp4"}
                    className="my-0 p-2 border dark:p-0 dark:border-none shadow-sm"
                    muted
                    autoPlay
                    loop
                  />
                </div>
                <h4 className="mt-2 dark:mt-8">Fun Onboarding</h4>
                <p className="text-[18px] opacity-90 dark:opacity-75">
                  To make the long onboarding process more fun, we made it
                  stepped and added fun features like swiping left or right to
                  select interests.
                </p>
              </div>
              <div>
                <div className="w-full aspect-[438/890]">
                  <video
                    src={"/tt/videos/careerdiscovery.mp4"}
                    className="my-0 p-2 border dark:p-0 dark:border-none shadow-sm"
                    muted
                    autoPlay
                    loop
                  />
                </div>
                <h4 className="mt-2 dark:mt-8">Career Discovery</h4>
                <p className="text-[18px] opacity-90 dark:opacity-75">
                  TopTeen uses an academic qualitative pyschometric quiz to
                  figure out the best career options for the user. The quiz is
                  designed to be fun and engaging.
                </p>
              </div>

              <div>
                <div className="w-full aspect-[438/890]">
                  <video
                    src={"/tt/videos/familiar.mp4"}
                    className="my-0 p-2 border dark:p-0 dark:border-none shadow-sm"
                    muted
                    autoPlay
                    loop
                  />
                </div>
                <h4 className="mt-2 dark:mt-8">Familiar Patterns</h4>
                <p className="text-[18px] opacity-90 dark:opacity-75">
                  Since our target audience was mainly teens who are heavy users
                  of social media, we decided to use familiar patterns like
                  stories and feeds to make the app more intuitive.
                </p>
              </div>
              <div>
                <div className="w-full aspect-[438/890]">
                  <video
                    src={"/tt/videos/gamification.mp4"}
                    className="my-0 p-2 border dark:p-0 dark:border-none shadow-sm"
                    muted
                    autoPlay
                    loop
                  />
                </div>
                <h4 className="mt-2 dark:mt-8">Gamification Features</h4>
                <p className="text-[18px] opacity-90 dark:opacity-75">
                  To retain users, we added gamification features like badges
                  and trophies to the app. Users can also compete with their
                  friends to earn more points.
                </p>
              </div>
              <div>
                <div className="w-full aspect-[438/890]">
                  <video
                    src={"/tt/videos/content.mp4"}
                    className="my-0 p-2 border dark:p-0 dark:border-none shadow-sm"
                    muted
                    autoPlay
                    loop
                  />
                </div>
                <h4 className="mt-2 dark:mt-8">Engaging Content</h4>
                <p className="text-[18px] opacity-90 dark:opacity-75">
                  The feed is full of engaging content like quizzes, polls and
                  articles. Users can also share their own content with the
                  community.
                </p>
              </div>
              <div>
                <div className="w-full aspect-[438/890]">
                  <video
                    src={"/tt/videos/additional.mp4"}
                    className="my-0 p-2 border dark:p-0 dark:border-none shadow-sm"
                    muted
                    autoPlay
                    loop
                  />
                </div>
                <h4 className="mt-2 dark:mt-8">Additional Tools</h4>
                <p className="text-[18px] opacity-90 dark:opacity-75">
                  To provide teens with continued value, TopTeen also has an
                  extensive set of additonal tools like a resume builder,
                  college finder and more.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2>Outcomes</h2>
            <p className="text-[18px] opacity-90 dark:opacity-75">
              The web app launched in public beta in July 2022. Here are some
              key outcomes:
            </p>
            <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 border-l border-t border-zinc-300 dark:border-zinc-800 not-prose">
              <div className="border-b border-r border-zinc-300 dark:border-zinc-800 p-6">
                <p className="text-[48px] font-black">3K+</p>
                <p className="text-[14px] opacity-100 dark:opacity-60">
                  total signups on the app
                </p>
              </div>
              <div className="border-b border-r border-zinc-300 dark:border-zinc-800 p-6">
                <p className="text-[48px] font-black">100+</p>
                <p className="text-[14px] opacity-100 dark:opacity-60">
                  people have successfully applied to colleges with the help of
                  the app
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
