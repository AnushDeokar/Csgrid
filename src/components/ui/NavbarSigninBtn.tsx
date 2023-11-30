"use client";
import React from "react";
import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";
import { AvatarIcon, ExitIcon, Pencil2Icon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Button } from "./Button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/DropDownMenu";

interface NavbarSigninBtnProps {
  user?: any;
}

function NavbarSigninBtn({ user }: NavbarSigninBtnProps): React.ReactNode {
  return (
    <React.Fragment>
      {Object.keys(user).length !== 0 ? (
        <div className="cursor-pointer">
          {/* <AvatarIcon width={30} height={30} onClick={() => setOpen(!open)} /> */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/avatars/03.png" alt="@shadcn" />
                  <AvatarFallback>
                    {user.firstName
                      ? user.firstName.charAt(0).toLocaleUpperCase()
                      : ""}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {user.firstName} {user.lastName}
                  </p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {user.emailAddress}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <AvatarIcon className="mr-2 h-4 w-4" aria-hidden="true" />
                  Profile
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <Link href="/write">
                  <DropdownMenuItem>
                    <Pencil2Icon className="mr-2 h-4 w-4" aria-hidden="true" />
                    Write Blog
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <SignOutButton>
                <DropdownMenuItem>
                  <ExitIcon className="mr-2 h-4 w-4" aria-hidden="true" />
                  Log out
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </SignOutButton>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <Link href="/signin">
          <button className="bg-primary text-primary-foreground shadow hover:bg-primary/90 text-xs py-2 px-4 font-semibold rounded-md">
            Signin
          </button>
        </Link>
      )}
    </React.Fragment>
  );
}

export default NavbarSigninBtn;
