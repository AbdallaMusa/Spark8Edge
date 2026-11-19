"use client";
import Link from "next/link";
export default function GlobalError({ reset }: { reset: () => void }) {
  return <html lang="en-KE"><body><main><h1>Something went wrong.</h1><p><button onClick={reset}>Try again</button></p><p><Link href="/">Back to Spark8Edge</Link></p></main></body></html>;
}
