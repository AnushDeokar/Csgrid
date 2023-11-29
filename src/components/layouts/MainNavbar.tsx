import React from "react";
import NavBarDropDownList from "../ui/NavBarDropdownList";
import SearchBar from "../ui/SearchBar";
import NavbarSigninBtn from "../ui/NavbarSigninBtn";
import { currentUser } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/server";
import { CropIcon } from "@radix-ui/react-icons";
import Link from "next/link";

async function MainNavbar(): Promise<any> {
  const user: User | null = await currentUser();

  // type LimitedUser = Pick<User, 'firstName' | 'lastName' | 'imageUrl' | 'emailAddress'>;

  const passedUser: any = {
    firstName: user?.firstName as string,
    lastName: user?.lastName as string,
    imageUrl: user?.imageUrl as string,
    emailAddress: user?.emailAddresses[0].emailAddress,
  };

  return (
    <>
      <div
        className="flex items-center md:px-16 lg:px-24 sticky px-8 
      h-16 border-b justify-between top-0 bg-background"
      >
        <div className="font-sans flex items-center justify-between gap-10">
          <div className="flex items-center gap-2">
            <Link href="/">
              <CropIcon width={18} height={18} />
              <span className="font-bold hidden sm:flex">Csgrid</span>
            </Link>
          </div>
          <NavBarDropDownList />
        </div>
        <div className="flex items-center gap-4">
          <SearchBar />
          <NavbarSigninBtn user={passedUser} />
        </div>
      </div>
    </>
  );
}

export default MainNavbar;
