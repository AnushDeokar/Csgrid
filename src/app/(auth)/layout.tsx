import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}
function AuthLayout({ children }: AuthLayoutProps): React.ReactNode {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 w-screen h-screen">
      <div className="hidden lg:flex bg-primary h-full w-ful px-[5%] flex-col justify-center">
        <h1 className="font-bold text-secondary text-4xl m-auto">
          Blog website built in Nextjs
        </h1>
      </div>
      <div className="hidden lg:block bg-green h-full w-ful">{children}</div>
    </div>
  );
}

export default AuthLayout;
