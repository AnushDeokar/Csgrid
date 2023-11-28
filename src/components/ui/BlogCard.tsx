"use client";
import React from "react";
import { useRouter } from "next/navigation";
interface BlogCardProps {
  title: string;
  url: string;
  brief: string;
  date: string;
  imageSrc: string;
}

function BlogCard({
  title,
  url,
  brief,
  date,
  imageSrc,
}: BlogCardProps): React.ReactNode {
  const router = useRouter();
  return (
    <div
      className="flex flex-col cursor-pointer gap-2"
      onClick={() => router.push(url)}
    >
      <img src={imageSrc} className="rounded-md w-full" />
      <h3 className="font-semibold text-2xl">{title}</h3>
      <p className="text-muted-foreground w-full">{brief} ...</p>
      <p className="text-left text-muted-foreground mt-4">{date}</p>
    </div>
  );
}

export default BlogCard;
