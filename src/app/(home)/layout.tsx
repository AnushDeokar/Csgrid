import MainNavbar from "@/components/layouts/MainNavbar";
import React from "react";

interface HomeLayoutProps {
  children: React.ReactNode;
}
function HomeLayout({ children }: HomeLayoutProps): React.ReactNode {
  return (
    <main>
      <MainNavbar />
      <div className="w-screen overflow-hidden h-[10000px]">{children}</div>
    </main>
  );
}

export default HomeLayout;
