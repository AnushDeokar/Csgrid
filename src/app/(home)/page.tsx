import React from "react";

export default function Home(): React.ReactNode {
  return (
    <main className="px-[5%] lg:px-[12%] text-center lg:pt-40 pt-20 md:pt-30">
      <div className="m-auto bg-muted h-auto hover:bg-secondary/90 w-fit text-sm px-4 py-2 cursor-pointer rounded-md font-semibold mb-4">
        Give a star on github
      </div>
      <h1
        className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-7xl lg:leading-[1.1]"
        style={{ fontWeight: "650" }}
      >
        A blogging website built with everything new in Next.js 13
      </h1>
      <p className="text-muted-foreground text-md sm:text-lg md:text-xl my-4 mt-6 lg:px-40 xl:px-80">
        Buy and sell skateboarding gears from independent brands and stores
        around the world with ease
      </p>
      <button className="bg-primary text-primary-foreground shadow hover:bg-primary/90 text-xs py-2 px-4 font-semibold rounded-md">
        Read Blog
      </button>
      <button className="border shadow hover:hover:bg-secondary/90 text-xs py-2 px-4 font-semibold rounded-md ml-4">
        Write Blog
      </button>
    </main>
  );
}
