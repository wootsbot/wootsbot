"use client";

import { useRouter } from "next/navigation";

export function Cd() {
  const router = useRouter();

  return (
    <div className="mt-8 mb-8">
      <span className="font-mono text-pretty text-white/70">{`> `}</span>
      <button
        className="font-mono text-pretty text-white/70 cursor-pointer hover:underline"
        type="button"
        onClick={() => router.back()}
      >
        cd ..
      </button>
    </div>
  );
}
