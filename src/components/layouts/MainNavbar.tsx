import React from "react";
import NavBarDropDownList from "../ui/NavBarDropdownList";
import SearchBar from "../ui/SearchBar";
import NavbarSigninBtn from "../ui/NavbarSigninBtn";
import { currentUser } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/server";

async function MainNavbar(): Promise<any> {
  const user: User | null = await currentUser();

  return (
    <div className="hidden md:flex items-center md:px-16 lg:px-24 sticky h-16 border-b justify-between w-screen top-0">
      <div className="font-sans flex items-center justify-between gap-10">
        <span className="font-bold">Skateshop </span>
        <NavBarDropDownList />
      </div>
      <div className="flex items-center gap-4">
        <SearchBar />
        <NavbarSigninBtn user={user} />
      </div>
    </div>
  );
}

export default MainNavbar;
