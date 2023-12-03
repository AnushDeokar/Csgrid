import ProfilePageComponent from "@/components/layouts/ProfilePageComponent";
import { notFound } from "next/navigation";
import type { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";
import { getBlogsBySlug, getUserBySlug } from "@/app/actions/post";
import { formatDate } from "@/utils/date";

async function ProfilePage({ params }: { params: Params }) {
  const { slug } = params;

  const myBlogs = await getBlogsBySlug(slug[0]);
  const user = await getUserBySlug(slug[0]);

  if (!myBlogs || !user) {
    notFound();
  }
  return (
    <div className="lg:px-[10%] px-[5%] grid md:grid-cols-[.3fr_.7fr] grid-cols-1 w-full">
      <ProfilePageComponent user={user} isCurrentUser={false} />
      <div className="w-full px-[5%] pt-8 flex flex-col md:border-l-2">
        {!myBlogs || myBlogs.length === 0 ? (
          <div className="my-20 flex flex-col gap-4 items-center">
            <h1 className="text-xl font-semibold">
              This User has Not written any Blogs
            </h1>
          </div>
        ) : (
          <>
            {" "}
            <h1 className="font-bold text-3xl mb-4">
              {myBlogs[0].user.firstName} {myBlogs[0].user.lastName} Blog&apos;s
            </h1>
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
