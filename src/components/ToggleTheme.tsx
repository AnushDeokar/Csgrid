"use client";
import React, { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

interface ThemeSwitcherInterface {
  isreverse: boolean;
}
export const ThemeSwitcher = ({
  isreverse,
}: ThemeSwitcherInterface): React.ReactElement | null => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex">
      <button
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        {theme === "light" ? (
          <MoonIcon
            className={isreverse ? `h-5 w-5 text-secondary` : `h-5 w-5`}
          />
        ) : (
          <SunIcon
            className={isreverse ? `h-5 w-5 text-secondary` : `h-5 w-5`}
          />
        )}
      </button>
    </div>
  );
};
