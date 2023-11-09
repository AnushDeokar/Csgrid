import Link from "next/link";
import React from "react";

function MainFooter(): React.ReactNode {
  return (
    <div className="border-t mt-[100px] pt-10">
      <div className="grid lg:grid-cols-5 md:grid-cols-4 gap-y-8  gap-x-2 px-[2%] lg:px-[5%] grid-cols-1 sm:grid-cols-2">
        <h1 className="font-semibold text-lg">GeekGrid</h1>
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
      <div className="w-full text-muted-foreground py-10 px-10 text-base">
        Developed by &nbsp;
        <Link href="https://github.com">
          <span className="font-semibold underline-offset-2 underline cursor-pointer">
            Anush Deokar
          </span>
        </Link>
      </div>
    </div>
  );
}

export default MainFooter;
