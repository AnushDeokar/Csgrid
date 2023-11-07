import React from "react";

export default function Home(): React.ReactNode {
  return (
    <main className="px-[5%] lg:px-[12%] text-center lg:pt-40 pt-20 md:pt-30 ">
      <div className="mb-24">
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
      </div>

      <section>
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
            Categories
          </h2>
          <div className="max-w-[46rem] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Find the best skateboarding gears from stores around the world
          </div>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 lg:px=[8%] gap-4 my-10">
          <div className="border w-full h-40 flex flex-col justify-center hover:bg-secondary/90 cursor-pointer rounded-md">
            Category-1
          </div>
          <div className="border w-full h-40 flex flex-col justify-center hover:bg-secondary/90 cursor-pointer rounded-md">
            Category-1
          </div>
          <div className="border w-full h-40 flex flex-col justify-center hover:bg-secondary/90 cursor-pointer rounded-md">
            Category-1
          </div>
          <div className="border w-full h-40 flex flex-col justify-center hover:bg-secondary/90 cursor-pointer rounded-md">
            Category-1
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
            Featured Blogs
          </h2>
          <div className="max-w-[46rem] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Find the best skateboarding gears from stores around the world
          </div>
        </div>
      </section>
    </main>
  );
}
