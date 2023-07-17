import Link from "next/link";
import { FC } from "react";

const links = [
  {
    title: "Work",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Contact",
    href: "/about#contact",
  },
];

const Navigation: FC = ({}) => {
  return (
    <nav className="flex w-full justify-between items-center p-14 text-[18px]">
      <div className="leading-6 font-[400]">
        <p>Abhishek Kalia</p>
        <p className="opacity-50">Product Designer & Frontend Developer</p>
      </div>
      <ul className="flex gap-8">
        {links.map((link) => (
          <li>
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
