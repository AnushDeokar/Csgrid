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

function NavBarDropDownList(): React.ReactElement {
  return (
    <div className="relative hidden lg:flex">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Lobby</NavigationMenuTrigger>
            <NavigationMenuContent className="grid grid-cols-2 w-[600px]">
              <ul className="p-4">
                <li className="bg-secondary h-full rounded-md flex flex-col justify-center px-4">
                  <a className="Callout" href="/">
                    <svg
                      aria-hidden
                      width="38"
                      height="38"
                      viewBox="0 0 25 25"
                      fill="white"
                    >
                      <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                      <path d="M12 0H4V8H12V0Z"></path>
                      <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                    </svg>
                    <div>Radix Primitives</div>
                    <p>Unstyled, accessible components for React.</p>
                  </a>
                </li>
              </ul>
              <ul className="w-full">
                <ListItem href="https://stitches.dev/" title="Stitches">
                  CSS-in-JS with best-in-class developer experience.
                </ListItem>
                <ListItem href="/colors" title="Colors">
                  Beautiful, thought-out palettes with auto dark mode.
                </ListItem>
                <ListItem href="https://icons.radix-ui.com/" title="Icons">
                  A crisp set of 15x15 icons, balanced and consistent.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Nextjs</NavigationMenuTrigger>
            <NavigationMenuContent className="w-auto">
              <ul className="grid grid-cols-2 gap-4  w-[600px]">
                <ListItem href="https://stitches.dev/" title="Stitches">
                  CSS-in-JS with best-in-class developer experience.
                </ListItem>
                <ListItem href="/colors" title="Colors">
                  Beautiful, thought-out palettes with auto dark mode.
                </ListItem>
                <ListItem href="https://icons.radix-ui.com/" title="Icons">
                  A crisp set of 15x15 icons, balanced and consistent.
                </ListItem>
                <ListItem href="https://stitches.dev/" title="Stitches">
                  CSS-in-JS with best-in-class developer experience.
                </ListItem>
                <ListItem href="/colors" title="Colors">
                  Beautiful, thought-out palettes with auto dark mode.
                </ListItem>
                <ListItem href="https://icons.radix-ui.com/" title="Icons">
                  A crisp set of 15x15 icons, balanced and consistent.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Computer Science</NavigationMenuTrigger>
            <NavigationMenuContent className="w-auto">
              <ul className="grid grid-cols-2 gap-4  w-[600px]">
                <ListItem href="https://stitches.dev/" title="Stitches">
                  CSS-in-JS with best-in-class developer experience.
                </ListItem>
                <ListItem href="/colors" title="Colors">
                  Beautiful, thought-out palettes with auto dark mode.
                </ListItem>
                <ListItem href="https://icons.radix-ui.com/" title="Icons">
                  A crisp set of 15x15 icons, balanced and consistent.
                </ListItem>
                <ListItem href="https://stitches.dev/" title="Stitches">
                  CSS-in-JS with best-in-class developer experience.
                </ListItem>
                <ListItem href="/colors" title="Colors">
                  Beautiful, thought-out palettes with auto dark mode.
                </ListItem>
                <ListItem href="https://icons.radix-ui.com/" title="Icons">
                  A crisp set of 15x15 icons, balanced and consistent.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default NavBarDropDownList;
