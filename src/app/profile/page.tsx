import { Button } from "@/components/ui/Button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import React from "react";

function ProfilePage() {
  return (
    <div className="lg:px-[10%] px-[5%] grid md:grid-cols-[.3fr_.7fr] grid-cols-1 w-full">
      <div className="w-full h-80 py-8  hidden md:block md:border-r-2">
        <img
          className="h-20 w-20 rounded-full"
          src={`https://api.multiavatar.com/${`45`}.svg`}
        />
        <p className="font-lg font-semibold mt-4 mb-2">Anush Deokar</p>
        <p className="text-muted-foreground text-sm mb-4">
          Tech Enthusiast | Software Blogger
        </p>
        <p className="text-sm text-muted-foreground font-italic">
          Write Down your Description ....
        </p>
        <Button className="mt-4" variant="secondary">
          Edit Info
        </Button>
      </div>
      <div className="w-full px-[5%] pt-8 flex flex-col">
        <h1 className="font-bold text-3xl mb-4">My Blogs</h1>
        <div className="flex flex-col sm:grid grid-cols-[0.3fr_0.7fr] py-4 gap-4 cursor-pointer">
          <img src="cs2.png" className="rounded-md w-full" />
          <div className="flex flex-col justify-center gap-2">
            <h1 className="text-2xl font-bold">
              {" "}
              Bun vs Nodejs Which is faster?
            </h1>
            <p className="text-muted-foreground">4th November, 2023</p>
          </div>
        </div>
        <div className="flex flex-col sm:grid grid-cols-[0.3fr_0.7fr] py-4 gap-4 cursor-pointer">
          <img src="cs2.png" className="rounded-md w-full" />
          <div className="flex flex-col justify-center gap-2">
            <h1 className="text-2xl font-bold">
              {" "}
              Bun vs Nodejs Which is faster?
            </h1>
            <p className="text-muted-foreground">4th November, 2023</p>
          </div>
        </div>
        <div className="flex flex-col sm:grid grid-cols-[0.3fr_0.7fr] py-4 gap-4 cursor-pointer">
          <img src="cs2.png" className="rounded-md w-full" />
          <div className="flex flex-col justify-center gap-2">
            <h1 className="text-2xl font-bold">
              {" "}
              Bun vs Nodejs Which is faster?
            </h1>
            <p className="text-muted-foreground">4th November, 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
