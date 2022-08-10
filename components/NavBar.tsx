import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function NavBar() {
  // 주소 정보를 받아오는 훅
  const router = useRouter();

  return (
    <nav>
      <ul>
        <Link href="/">
          <li className={router.pathname === "/" ? "active" : ""}>Home</li>
        </Link>
        <Link href="about">
          <li className={router.pathname === "/about" ? "active" : ""}>
            About
          </li>
        </Link>
      </ul>
      <style jsx>{`
        .active {
          color: blue;
        }
      `}</style>
    </nav>
  );
}
