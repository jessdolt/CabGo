"use client";
import React from "react";
import Link from "next/link";
import Wrapper from "../Wrapper";
import { usePathname } from "next/navigation";

const links = [
  {
    id: 1,
    label: "Home",
    url: "/",
  },
  {
    id: 2,
    label: "History",
    url: "/history",
  },
  {
    id: 3,
    label: "Help",
    url: "/help",
  },
];

const Footer = () => {
  const pathname = usePathname();
  if (pathname === "/sign-in" || pathname === "/sign-up") return null;

  return (
    <footer className="bg-primary p-10">
      <Wrapper>
        <div className="w-full flex gap-4 items-center ">
          <ul className="flex flex-col gap-4">
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <Link href={link.url}>{link.label}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <p className="text-center my-2">
          &copy; 2023 CabGo. All rights reserved.
        </p>
      </Wrapper>
    </footer>
  );
};

export default Footer;
