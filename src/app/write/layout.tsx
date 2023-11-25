import MainNavbar from "@/components/layouts/MainNavbar";
import React from "react";

interface HomeLayoutProps {
  children: React.ReactNode;
}
function HomeLayout({ children }: HomeLayoutProps): React.ReactNode {
  return (
    <main>
      <MainNavbar />
      {children}
    </main>
  );
}

export default HomeLayout;
