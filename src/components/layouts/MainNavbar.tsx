import React from "react";
import NavBarDropDownList from "../ui/NavBarDropdownList";
import SearchBar from "../ui/SearchBar";
import Link from "next/link";

function MainNavbar(): React.ReactNode {
  return (
    <div className="hidden md:flex items-center md:px-16 lg:px-24 sticky h-16 border-b justify-between w-screen top-0">
      <div className="font-sans flex items-center justify-between gap-10">
        <span className="font-bold">Skateshop </span>
        <NavBarDropDownList />
      </div>
      <div className="flex items-center gap-4">
        <SearchBar />
        <Link href="/signin">
          <button className="bg-primary text-primary-foreground shadow hover:bg-primary/90 text-xs py-2 px-4 font-semibold rounded-md">
            Signin
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MainNavbar;
