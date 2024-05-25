import React from "react";
import Link from "next/link";

export default function Home() {
  return (
      <div style={{
        paddingTop: 5000
      }}>
        <Link href="/test">test</Link><br />
        <Link href="/test2">test2</Link>
      </div>
  );
}
