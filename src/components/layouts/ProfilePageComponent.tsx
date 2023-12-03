"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/textarea";
import axios from "axios";

interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  brief: string | null;
  about: string;
}

function ProfilePageComponent({
  user,
  isCurrentUser,
}: {
  user: IUser;
  isCurrentUser: boolean;
}) {
  const [brief, setBrief] = useState<string | null>(user.brief);
  const [about, setAbout] = useState<string>(user.about);

  const handleSaveInfo = async () => {
    await axios.put("/api/user", {
      id: user.id,
      brief,
      about,
    });
  };

  return (
    <div className="w-full h-80 py-8  hidden md:block">
      <img
        className="h-20 w-20 rounded-full"
        src={`https://api.multiavatar.com/${
          user.firstName.length + user.lastName.length
        }.svg`}
      />
      <p className="font-lg font-semibold mt-4 mb-2">
        {user.firstName} {user.lastName}
      </p>
      <p className="text-muted-foreground text-sm mb-4">{user.brief}</p>
      <p className="text-sm text-muted-foreground font-italic">
        {user.about ? user.about : "Write Down your Description ...."}
      </p>
      {isCurrentUser && (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="mt-4" variant="secondary">
              Edit Info
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="sm:max-w-md">
            <AlertDialogHeader>
              <AlertDialogTitle>Edit Bio</AlertDialogTitle>
              <AlertDialogDescription>
                Edit your tagline and Description
              </AlertDialogDescription>
            </AlertDialogHeader>
            <div className="flex items-center space-x-2">
              <div className="grid flex-1 gap-2">
                <Label htmlFor="tag">Brief</Label>
                <Input
                  onChange={(e) => setBrief(e.target.value)}
                  value={brief as string}
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="grid flex-1 gap-2">
                <Label htmlFor="tag">Description</Label>
                <Textarea
                  onChange={(e) => setAbout(e.target.value)}
                  value={about}
                />
              </div>
            </div>
            <AlertDialogFooter>
              <div className="flex justify-between w-full">
                <AlertDialogCancel>Discard</AlertDialogCancel>
                {/* eslint-disable-next-line */}
                <AlertDialogAction onClick={handleSaveInfo}>
                  Save
                </AlertDialogAction>
              </div>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </div>
  );
}

export default ProfilePageComponent;
