import React from "react";
import { getCategoryBySlug } from "@/app/actions/category";
import BlogCard from "@/components/ui/BlogCard";
import { formatDate } from "@/utils/date";
import type { Post } from "@prisma/client";
import type { Params } from "next/dist/shared/lib/router/utils/route-matcher";
// import { Skeleton } from "@/components/ui/Sketelton";
// import { Shell } from "@/components/ui/Shell";

type BlogPickType = Pick<Post, "title" | "image" | "slug" | "createdAt">;
async function CategoryPage({ params }: { params: Params }) {
  const { slug } = params;
  const categories = await getCategoryBySlug(slug);

  return (
    <div className="min-h-[240px] px-[5%] mt-8">
      <h1 className="lg:text-3xl text-2xl font-bold">{categories.name}</h1>
      <p className="text-muted-foreground mt-1">
        Expore the latest and the best blogs on {categories.name}
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-8 my-10 w-full text-left">
        {categories.posts.map((blog: BlogPickType, ind: number) => {
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

export default CategoryPage;
