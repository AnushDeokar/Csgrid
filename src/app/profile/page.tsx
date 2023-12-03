import ProfilePageComponent from "@/components/layouts/ProfilePageComponent";
import { currentUser } from "@clerk/nextjs";
import { notFound } from "next/navigation";
import React from "react";
import { getBlogsByUser } from "../actions/post";
import { formatDate } from "@/utils/date";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

async function ProfilePage() {
  const user = await currentUser();
  if (!user) {
    notFound();
  }

  const myBlogs = await getBlogsByUser(user.id);

  if (!myBlogs) {
    notFound();
  }
  return (
    <div className="lg:px-[10%] px-[5%] grid md:grid-cols-[.3fr_.7fr] grid-cols-1 w-full">
      <ProfilePageComponent user={myBlogs[0].user} />
      <div className="w-full px-[5%] pt-8 flex flex-col md:border-l-2">
        {!myBlogs || myBlogs.length === 0 ? (
          <div className="my-20 flex flex-col gap-4 items-center">
            <h1 className="text-xl font-semibold">
              You have not written any Blog
            </h1>
            <Link href="/write">
              <Button variant="outline">Write Blog</Button>
            </Link>
          </div>
        ) : (
          <>
            {" "}
            <h1 className="font-bold text-3xl mb-4">My Blogs</h1>
            {myBlogs.map((blog, ind) => (
              <div
                className="flex flex-col sm:grid grid-cols-[0.3fr_0.7fr] py-4 gap-4 cursor-pointer"
                key={ind}
              >
                <img src={blog.image} className="rounded-md w-full" />
                <div className="flex flex-col justify-center gap-2">
                  <h1 className="text-2xl font-bold">{blog.title}</h1>
                  <p className="text-muted-foreground">
                    {formatDate(blog.createdAt)}
                  </p>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
