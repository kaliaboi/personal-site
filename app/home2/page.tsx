import { FC } from "react";

const page: FC = ({}) => {
  return (
    <main className="container">
      <nav className="flex justify-between py-12">
        <div>
          <p>Abhishek.</p>
        </div>
        <ul className="flex gap-8 text-[14px]">
          <li>Work</li>
          <li className="opacity-60">About</li>
          <li className="opacity-60">Writing</li>
        </ul>
      </nav>
      <div>
        <h1 className="text-[48px] font-[600] leading-[48px] max-w-xl py-12 text-transparent bg-clip-text bg-gradient-to-br from-zinc-50 to-zinc-200">
          I break things apart and put them back together.
        </h1>
      </div>
    </main>
  );
};

export default page;
