"use client";
import ToggleTheme from "@/components/toggle-theme";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full w-full">
      <p>Test</p>
      <Link href="/dashboard">dashboaard</Link>
      <ToggleTheme />
    </div>
  );
}
