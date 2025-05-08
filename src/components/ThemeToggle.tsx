"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDark(document.documentElement.classList.contains("dark"));
    }
  }, []);

  const toggleTheme = () => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark");
      setDark(document.documentElement.classList.contains("dark"));
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="ml-4 p-2 rounded bg-neutral-800 text-white hover:bg-indigo-600 transition"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
} 