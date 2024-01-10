import React from "react";
import { Skeleton } from "@/components/ui/Skeleton";

async function CategoryMainPage() {
  return (
    <div className="min-h-[240px] px-[5%] mt-8">
      <h1 className="lg:text-3xl text-2xl font-bold">Latest Published Blogs</h1>
      <p className="text-muted-foreground mt-1">
        Expore the latest and the best blogs.
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-8 my-10 w-full text-left">
        {[1, 2, 3, 4, 5].map((i) => {
          return <Skeleton key={i} className="w-full h-40" />;
        })}
      </div>
    </div>
  );
}

export default CategoryMainPage;
