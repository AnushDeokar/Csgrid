import React from "react";
import { categories } from "@/config/categories";
import BlogCard from "@/components/ui/BlogCard";
import Link from "next/link";
import { getLatestBlogs } from "../actions/post";
import type { Post } from "@prisma/client";
import { formatDate } from "@/utils/date";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { me } from "@/config/layout";

export default async function Home() {
  const latestBlogs: Post[] = await getLatestBlogs();

  return (
    <main className=" text-center lg:pt-30 pt-20 md:pt-30 ">
      <div className="mb-24 px-[5%] lg:px-[12%]">
        <Link href={me.github}>
          <div className="m-auto bg-muted h-auto hover:bg-secondary/90 w-fit md:text-sm text-xs px-4 py-2 cursor-pointer rounded-md font-semibold mb-4 flex items-center gap-2">
            <GitHubLogoIcon width={15} height={15} />
            Give a star on github
          </div>
        </Link>
        <h1
          className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-7xl lg:leading-[1.1]"
          style={{ fontWeight: "650" }}
        >
          A blogging website built with everything new in Next.js 13
        </h1>
        <p className="text-muted-foreground text-md sm:text-lg md:text-xl my-4 mt-6 lg:px-40 xl:px-80">
          Read and Write CS blogs from around the world.
        </p>
        <button className="bg-primary text-primary-foreground shadow hover:bg-primary/90 text-xs py-2 px-4 font-semibold rounded-md">
          Read Blog
        </button>
        <Link href="/write">
          <button className="border shadow hover:hover:bg-secondary/90 text-xs py-2 px-4 font-semibold rounded-md ml-4">
            Write Blog
          </button>
        </Link>
      </div>

      <section className="px-[5%] lg:px-[12%]">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
            Categories
          </h2>
          <div className="max-w-[46rem] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Read Some of the best blogs in computer science
          </div>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 lg:px=[8%] gap-4 my-10">
          {categories.map((category, ind) => {
            return (
              <Link key={ind} href={category.href}>
                <div className="border w-full h-40 flex flex-col justify-center hover:bg-secondary/90 cursor-pointer rounded-md">
                  {category.name}
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="px-[5%] lg:px-[3%] my-10">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mt-[100px]">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
            Featured Blogs
          </h2>
          <div className="max-w-[46rem] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Find the best CS gears from stores around the world
          </div>
        </div>

        <div className="grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 lg:px-[2%] gap-8 my-10 w-full text-left">
          {latestBlogs.map((blog, ind) => {
            return (
              <BlogCard
                key={ind}
                title={blog.title}
                brief="Discover the diverse styles of skate board and unleash you"
                date={formatDate(blog.createdAt)}
                url={`/blog/${blog.slug}`}
                imageSrc={blog.image}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
