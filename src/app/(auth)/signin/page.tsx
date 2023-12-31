import { SignInComponent } from "@/components/layouts/SignInComponent";
import React from "react";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/Card";

function SignInPage(): React.ReactNode {
  return (
    <div className="h-full flex items-center flex-col px-[20%] justify-center">
      <Card className="w-full">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Sign In to your account</CardTitle>
          <CardDescription>
            Enter your email below to Sign in your account
          </CardDescription>
        </CardHeader>
        <SignInComponent />
      </Card>
    </div>
  );
}

export default SignInPage;
