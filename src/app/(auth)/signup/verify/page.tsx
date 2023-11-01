"use client";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/Card";
import { useSignUp } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";

function SignUpVerification(): React.ReactNode {
  const [code, setCode] = useState<any>("");
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const handleSubmit: any = async () => {
    if (!isLoaded) return;

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: code,
      });
      if (completeSignUp.status !== "complete") {
        console.log(JSON.stringify(completeSignUp, null, 2));
      }
      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });

        router.push(`${window.location.origin}/`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-full flex items-center flex-col px-[20%] justify-center">
      <Card className="w-full px-4 py-4 flex flex-col gap-4">
        <CardHeader className="p-0">
          <CardTitle className="text-2xl">Verify your email</CardTitle>
          <CardDescription>Enter the code sent to your email</CardDescription>
        </CardHeader>
        <Input
          className="w-full"
          value={code}
          placeholder="198789"
          onChange={(e) => {
            setCode(e.target.value);
          }}
        />
        <Button className="w-full" type="submit" onClick={handleSubmit}>
          Create account
        </Button>
      </Card>
    </div>
  );
}

export default SignUpVerification;
