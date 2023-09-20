"use client";
import React from "react";
import { UserButton, useAuth } from "@clerk/nextjs";
import Wrapper from "../Wrapper";
import Link from "next/link";
import Image from "next/image";
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

const Navbar = () => {
  const pathname = usePathname();

  const { isSignedIn } = useAuth();

  if (pathname === "/sign-in" || pathname === "/sign-up") return null;

  return (
    <header className="bg-primary ">
      <Wrapper>
        <nav className="w-full flex gap-4 items-center">
          <Link className="h-[100px]" href="/">
            <Image
              src="/logo_3.png"
              alt=""
              className="h-full"
              width={150}
              height={150}
            />
          </Link>
          <ul className="flex gap-4">
            {links.map((link) => {
              return (
                <Link key={link.id} href={link.url}>
                  {link.label}
                </Link>
              );
            })}
          </ul>
          <div className="ml-auto">
            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" showName />
            ) : (
              <Link href="/sign-in" className="btn-primary">
                Login
              </Link>
            )}
          </div>
        </nav>
      </Wrapper>
    </header>
  );
};

export default Navbar;
