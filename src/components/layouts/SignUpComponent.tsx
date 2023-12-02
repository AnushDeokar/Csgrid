"use client";

import React, { useState } from "react";
import { Icons } from "../Icons";
import { Button } from "../ui/Button";
import { CardContent, CardFooter } from "@/components/ui/Card";
import { Label } from "../ui/Label";
import { Input } from "../ui/Input";
import Link from "next/link";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import OAuthSignIn from "./OauthSignin";

interface FormValues {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export function SignUpComponent(): React.ReactNode {
  const { isLoaded, signUp } = useSignUp();
  const router = useRouter();

  if (!isLoaded) {
    // Handle loading state
    return null;
  }

  const [formData, setFormData] = useState<FormValues>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [signupLoad, setSignupLoad] = useState<boolean>(false);

  const handleSubmit: any = async () => {
    try {
      setSignupLoad(true);
      await signUp.create({
        emailAddress: formData.email,
        password: formData.password,
        firstName: formData.firstname,
        lastName: formData.lastname,
      });

      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      toast.success("Please check your email!");

      // eslint-disable-next-line no-use-before-define
      router.push("/signup/verify");
    } catch (err: any) {
      setSignupLoad(false);
      console.log(err);
      toast.error(
        err.errors[0]?.message !== undefined
          ? err.errors[0]?.message
          : "Something went wrong"
      );
    }
  };
  return (
    <CardContent className="grid gap-4">
      <OAuthSignIn />
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-2">
        <div className="grid gap-2">
          <Label htmlFor="first name">First Name</Label>
          <Input
            id="firstname"
            type="text"
            placeholder="John"
            value={formData.firstname}
            onChange={(e: any) => {
              setFormData({ ...formData, firstname: e.target.value });
            }}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="last name">Last Name</Label>
          <Input
            id="lastname"
            type="text"
            placeholder="Smith"
            value={formData.lastname}
            onChange={(e: any) => {
              setFormData({ ...formData, lastname: e.target.value });
            }}
          />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="m@example.com"
          value={formData.email}
          onChange={(e: any) => {
            setFormData({ ...formData, email: e.target.value });
          }}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="*************"
          value={formData.password}
          onChange={(e: any) => {
            setFormData({ ...formData, password: e.target.value });
          }}
        />
      </div>
      <Button className="w-full" type="submit" onClick={handleSubmit}>
        {signupLoad ? (
          <Icons.spinner
            className="mr-2 h-4 w-4 animate-spin"
            aria-hidden="true"
          />
        ) : (
          "Create account"
        )}
      </Button>
      <CardFooter>
        <div className="text-sm text-muted-foreground">
          Already have an account{" "}
          <Link
            aria-label="Sign in"
            href="/signin"
            className="text-primary underline-offset-4 transition-colors hover:underline"
          >
            Sign in
          </Link>
        </div>
      </CardFooter>
    </CardContent>
  );
}
