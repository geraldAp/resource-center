"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Links = [
  {
    id: 0,
    name: "Home",
    src: "/",
  },
  {
    id: 1,
    name: "Explore",
    src: "/#",
  },
  {
    id: 2,
    name: "Blog",
    src: "/blog",
  },
  {
    id: 3,
    name: "Contact",
    src: "/contact",
  },
  {
    id: 4,
    name: "About",
    src: "about",
  },
];


type LinkType = (typeof Links)[0];

const Navbar = () => {
  const pathname = usePathname();

  const linkData: React.JSX.Element = (
    <ul id="Nav-link" className="flex gap-6 ">
      {Links.map((link: LinkType) => (
        <li key={link.id}>
          <Link
            className={`text-sm 2xl:text-base ease-in ${pathname === link.src ? 'bg-customGreen' : ''} ease-in font-semibold duration-500 rounded-3xl px-3 py-2`}
            href={link.src}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
  




  return (
    <>
      {pathname.startsWith("/studio" ) ? (
        <></>
      ) : (
        <nav className="w-full z-50 fixed top-0 left-0 py-6 px-10  bg-white">
          <div className="flex justify-between items-center w-full">
            {/* logo */}
            <h2 className="text-xl font-medium ">Physics | Tech </h2>

            <div className=" bg-customGray py-3 px-5 rounded-3xl">
              {linkData}
            </div>

            <div className="flex gap-4 ">
              <Link
                href={"/learn-a-skill"}
                className="bg-customGray rounded-[26px] border  hover:bg-transparent px-4 py-2"
              >
                Physics Hub
              </Link>
              <Link
                href={"/learn-a-skill"}
                className="bg-customGreen rounded-[26px] border border-customGreen hover:bg-transparent px-4 py-2"
              >
                Tech Spot
              </Link>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
