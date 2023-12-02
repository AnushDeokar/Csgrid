import React from "react";
import { getCategoryBySlug } from "@/app/actions/category";
import BlogCard from "@/components/ui/BlogCard";
import { formatDate } from "@/utils/date";
import type { Post } from "@prisma/client";
import { notFound } from "next/navigation";

type BlogPickType = Pick<Post, "title" | "image" | "slug" | "createdAt">;
async function CategoryMainPage() {
  const categories = await getCategoryBySlug([]);

  if (!categories) {
    return notFound();
  }
  return (
    <div className="min-h-[240px] px-[5%] mt-8">
      <h1 className="lg:text-3xl text-2xl font-bold">Latest Published Blogs</h1>
      <p className="text-muted-foreground mt-1">
        Expore the latest and the best blogs.
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-8 my-10 w-full text-left">
        {categories.map((blog: BlogPickType, ind: number) => {
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
    </div>
  );
}

export default CategoryMainPage;
