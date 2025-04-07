"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Search, User } from "lucide-react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current path

  return (
    <nav className="bg-gray-900 text-white py-4 shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6">
        <div className="text-2xl font-bold">
          <Link href="/">🏆 SportsZone</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
