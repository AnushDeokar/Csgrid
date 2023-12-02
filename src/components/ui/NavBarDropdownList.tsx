"use client";
import React from "react";
import {
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuItem,
  // NavigationMenuLink,
  ListItem,
  NavigationMenuList,
  NavigationMenu,
} from "./NavigationMenu";
import { CropIcon } from "@radix-ui/react-icons";
import { NavbarFirstItems, NavbarMainItems } from "@/config/navbar";

function NavBarDropDownList(): React.ReactElement {
  return (
    <div className="relative hidden lg:flex navbar-main-div tracking-wide">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-semibold">
              News
            </NavigationMenuTrigger>
            <NavigationMenuContent className="grid grid-cols-2 w-[600px]">
              <ul className="p-4">
                <li className="bg-secondary h-full rounded-md flex flex-col justify-center px-4">
                  <a className="Callout flex flex-col gap-1" href="/">
                    <CropIcon width={40} height={40} />
                    <div>Today&apos;s Trending News</div>
                    <p className="text-muted-foreground text-sm">
                      Explore the new and the best blogs from our community
                    </p>
                  </a>
                </li>
              </ul>
              <ul className="w-full">
                {NavbarFirstItems.map((item, key) => (
                  <ListItem
                    key={key}
                    title={item.header}
                    href={item.href}
                    className="navbar-main-div"
                  >
                    {item.brief}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-semibold">
              Explore More
            </NavigationMenuTrigger>
            <NavigationMenuContent className="w-auto">
              <ul className="grid grid-cols-2 gap-4  w-[600px]">
                {NavbarMainItems.map((item, key) => (
                  <ListItem href={item.href} title={item.header} key={key}>
                    {item.brief}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default NavBarDropDownList;
