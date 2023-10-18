"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export const ThemeSwitcher = (): React.ReactElement | null => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex gap-8">
      <button
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        {theme === "light" ? "Dark" : "Light"}
      </button>
    </div>
  );
};
