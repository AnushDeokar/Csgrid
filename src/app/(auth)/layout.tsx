import { ThemeSwitcher } from "@/components/ToggleTheme";
import { CropIcon } from "@radix-ui/react-icons";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}
function AuthLayout({ children }: AuthLayoutProps): React.ReactNode {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 h-screen">
      <div className="hidden lg:flex bg-primary h-full w-full relative">
        <div className="flex flex-col gap-4 mt-60 mx-auto">
          <CropIcon width={60} height={60} className="text-secondary" />
          <h1 className="font-bold text-secondary text-4xl text-center">
            Blog website built in Nextjs
          </h1>
        </div>
        <div className="absolute bottom-4 left-4 cursor-pointer">
          <ThemeSwitcher isreverse={true} />
        </div>
      </div>
      {children}
    </div>
  );
}

export default AuthLayout;
