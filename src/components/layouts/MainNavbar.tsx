import React from "react";
import NavBarDropDownList from "../ui/NavBarDropdownList";

function MainNavbar(): React.ReactNode {
  return (
    <div className="hidden md:flex items-center md:px-16 lg:px-24 sticky h-16 border-b justify-between w-screen top-0">
      <div className="font-sans flex items-center justify-between gap-20">
        <span className="font-bold">Skateshop </span>
        <NavBarDropDownList />
      </div>
      <div>
        <button className="bg-primary text-primary-foreground shadow hover:bg-primary/90 text-xs p-2 font-semibold rounded-md">
          Signup
        </button>
      </div>
    </div>
  );
}

export default MainNavbar;
