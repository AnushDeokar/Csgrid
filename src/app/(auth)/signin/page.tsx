import { SignInComponent } from "@/components/layouts/SignInComponent";
import React from "react";

function SignInPage(): React.ReactNode {
  return (
    <>
      <div className="h-full flex items-center flex-col px-[20%] justify-center">
        <SignInComponent />
      </div>
    </>
  );
}

export default SignInPage;
