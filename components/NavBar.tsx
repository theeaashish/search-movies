"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavBar() {
  const pathname = usePathname();
  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <nav className="flex justify-between items-center w-full sm:px-16 px-6 h-20 bg-black/40 backdrop-blur-md z-100 border-b border-zinc-500">
      <div>
        <Link href="/">
          <img className="w-14 h-14" src="/logo.png" alt="Logo" />
        </Link>
      </div>

      <ul className="flex gap-8 text-gray-300">
        {["Home", "Discover", "Movies"].map((item, index) => {
          const link = item === "Home" ? "/" : `/${item.toLowerCase()}`; // /discover, /movies

          return (
            <li key={index}>
              <Link
                href={link}
                className={`relative px-4 py-2 transition-all cursor-pointer max-sm:hidden ${
                  pathname === link
                    ? "text-white font-semibold"
                    : "hover:text-white"
                }`}
              >
                {item}

                {pathname === link && (
                  <span className="bg-red-500 absolute bottom-0 w-3 h-1 rounded-full left-1/2 transform -translate-x-1/2"></span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="flex gap-6 items-center">
        <input
          type="text"
          placeholder="Search Movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 py-2 rounded-md bg-gray-900 text-white border border-gray-700 outline-none focus:border-red-500 transition-all max-sm:hidden"
        />
        <button className="sm:px-4 sm:py-2 bg-[var(--primary-color)] rounded-md py-1.5 px-2 max-sm:text-xs  hover:bg-red-700 text-white font-medium transition-all">
          Sign In
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
