"use client";

import React, { useEffect, useState } from "react";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandItem,
  CommandEmpty,
  CommandGroup,
  CommandSeparator,
} from "./Command";
import { FileIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

function SearchBar(): React.ReactNode {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className="flex border px-2 h-9 items-center hover:bg-secondary/90 cursor-pointer gap-4 rounded-sm py-1"
      >
        <div>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="flex-1 text-sm font-semibold hidden md:flex">
          Search Blogs...
        </div>
        <div className="bg-secondary px-2 flex h-full items-center rounded-sm border hidden md:flex">
          <span className="text-xs m-auto">Ctrl+k</span>
        </div>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search Blogs ..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Links">
            <CommandItem
              key="/blog1"
              value="Blog 1"
              onSelect={() => {
                runCommand(() => {
                  router.push("/blog/1");
                });
              }}
            >
              <FileIcon className="mr-2 h-4 w-4" />
              Blog 1
            </CommandItem>
          </CommandGroup>
          {/* {docsConfig.sidebarNav.map((group) => (
            <CommandGroup key={group.title} heading={group.title}>
              {group.items.map((navItem) => (
                <CommandItem
                  key={navItem.href}
                  value={navItem.title}
                  onSelect={() => {
                    runCommand(() => router.push(navItem.href as string));
                  }}
                >
                  <div className="mr-2 flex h-4 w-4 items-center justify-center">
                    <CircleIcon className="h-3 w-3" />
                  </div>
                  {navItem.title}
                </CommandItem>
              ))}
            </CommandGroup>
          ))} */}
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </>
  );
}

export default SearchBar;
