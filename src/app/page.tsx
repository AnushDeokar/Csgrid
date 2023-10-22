"use client";
import React from "react";
// import NavigationMenuDemo from "@/components/ui/NavigationMenu";
import MainNavbar from "@/components/layouts/MainNavbar";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export default function Home(): React.ReactNode {
  return (
    <main className="">
      <MainNavbar />
      <NavigationMenu.Root></NavigationMenu.Root>
      <ChevronDownIcon
        className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
      Hello Moto!!
    </main>
  );
}
