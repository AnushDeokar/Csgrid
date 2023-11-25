import Link from "next/link";
import React from "react";
import { ThemeSwitcher } from "../ToggleTheme";

function MainFooter(): React.ReactNode {
  return (
    <footer className="border-t mt-[100px] pt-10">
      <div className="grid lg:grid-cols-5 md:grid-cols-4 gap-y-8  gap-x-2 px-[2%] lg:px-[5%] grid-cols-1 sm:grid-cols-2">
        <h1 className="font-semibold text-lg">
          <svg
            width="45"
            height="45"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.5 8.00684e-07C3.77614 7.88614e-07 4 0.223859 4 0.500001L4 3.00006L11.5 3.00006C11.7761 3.00006 12 3.22392 12 3.50006L12 11.0001L14.5 11C14.7761 11 15 11.2238 15 11.5C15 11.7761 14.7762 12 14.5 12L12 12.0001L12 14.5C12 14.7761 11.7761 15 11.5 15C11.2239 15 11 14.7761 11 14.5L11 12.0001L3.5 12.0001C3.22386 12.0001 3 11.7762 3 11.5001L3 4.00005L0.499989 4C0.223847 4 -6.10541e-06 3.77613 -5.02576e-07 3.49999C5.13006e-06 3.22385 0.223867 3 0.50001 3L3 3.00005L3 0.500001C3 0.223859 3.22386 8.12755e-07 3.5 8.00684e-07ZM4 4.00006L4 11.0001L11 11.0001L11 4.00006L4 4.00006Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
          Csgrid
        </h1>
        <div className="flex flex-col text-muted-foreground gap-2 text-sm">
          <p className="font-semibold text-primary mb-4 text-base">
            Tech Stack
          </p>
          <p>NextJs</p>
          <p>Clerk</p>
          <p>Prism</p>
          <p>Tailwind</p>
          <p>Shadcn</p>
        </div>
        <div className="flex flex-col text-muted-foreground gap-2 text-sm">
          <p className="font-semibold text-primary mb-4 text-base">
            Tech Stack
          </p>
          <p>NextJs</p>
          <p>Clerk</p>
          <p>Prism</p>
          <p>Tailwind</p>
          <p>Shadcn</p>
        </div>
        <div className="flex flex-col text-muted-foreground gap-2 text-sm">
          <p className="font-semibold text-primary mb-4 text-base">
            Tech Stack
          </p>
          <p>NextJs</p>
          <p>Clerk</p>
          <p>Prism</p>
          <p>Tailwind</p>
          <p>Shadcn</p>
        </div>
        <div className="flex flex-col text-muted-foreground gap-2 text-sm">
          <p className="font-semibold text-primary mb-4 text-base">
            Tech Stack
          </p>
          <p>NextJs</p>
          <p>Clerk</p>
          <p>Prism</p>
          <p>Tailwind</p>
          <p>Shadcn</p>
        </div>
      </div>
      <div className="w-full text-muted-foreground py-10 px-10 text-base flex justify-between items-center">
        <div>
          Developed by &nbsp;
          <Link href="https://github.com">
            <span className="font-semibold underline-offset-2 underline cursor-pointer">
              Anush Deokar
            </span>
          </Link>
        </div>
        <div>
          <ThemeSwitcher />
        </div>
      </div>
    </footer>
  );
}

export default MainFooter;
