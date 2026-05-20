"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Close menu on route change / resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [menuOpen]);

  return (
    <>
      <div className="vector-image">
        <Image
          src="/assets/Images/Vector Illustration header.svg"
          alt=""
          width={335}
          height={300}
          priority
        />
      </div>
      <div className="header-container">
        <header className="header">
          <div
            className={`hamburger-menu${menuOpen ? " active" : ""}`}
            id="hamburger-menu"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            role="button"
          >
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </div>

          <div className="logo">
            <Image
              src="/assets/Images/rrr_text_logo.svg"
              alt="RRR Investments Logo"
              width={100}
              height={73}
              priority
            />
          </div>

          <nav className={`nav${menuOpen ? " active" : ""}`} id="nav-menu">
            <Link href="/" className="nav-link" id="about-link" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link href="/#offerings" className="nav-link" id="offerings-link" onClick={() => setMenuOpen(false)}>
              Offerings
            </Link>
            <Link href="/approach" className="nav-link" id="approach-link" onClick={() => setMenuOpen(false)}>
              Approach
            </Link>
            <Link href="/teams" className="nav-link" id="team-link" onClick={() => setMenuOpen(false)}>
              Team
            </Link>
          </nav>
        </header>
      </div>
    </>
  );
}
