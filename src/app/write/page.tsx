import CreateBlog from "@/components/layouts/CreateBlog";
import { currentUser } from "@clerk/nextjs";
import React from "react";

async function WritePage() {
  const user = await currentUser();

  return (
    <div className="flex flex-col w-full px-[3%]">
      {user !== null && <CreateBlog userId={user.id} />}
    </div>
  );
}

export default WritePage;
