"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-red-900 h-full w-full">
      <p>Test</p>
      <Link href="/dashboard">dashboaard</Link>
    </div>
  );
}
