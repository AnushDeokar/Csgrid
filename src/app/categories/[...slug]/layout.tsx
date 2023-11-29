import MainFooter from "@/components/layouts/MainFooter";
import MainNavbar from "@/components/layouts/MainNavbar";
import React from "react";

interface HomeLayoutProps {
  children: React.ReactNode;
}
function TopicsLayout({ children }: HomeLayoutProps): React.ReactNode {
  return (
    <main>
      <MainNavbar />
      {children}
      <MainFooter />
    </main>
  );
}

export default TopicsLayout;
