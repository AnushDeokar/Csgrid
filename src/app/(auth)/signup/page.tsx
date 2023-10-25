// import { SignUpComponent } from "@/components/layouts/SignUpComponent";
import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { SignUpComponent } from "@/components/layouts/SignUpComponent";

function SignInPage(): React.ReactNode {
  return (
    <div className="h-full flex items-center flex-col px-[20%] justify-center">
      <Card className="w-full">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Create an account</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <SignUpComponent />
      </Card>
    </div>
  );
}

export default SignInPage;
