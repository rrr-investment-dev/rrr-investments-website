"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isDarkPage = pathname?.includes("rrr-strategic-growth-fund");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Close menu on route change / resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
        setDropdownOpen(false);
      }
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
      setDropdownOpen(false);
    }
  }, [menuOpen]);

  return (
    <>
      <div className={`vector-image${isDarkPage ? " dark-theme" : ""}`}>
        <Image
          src="/assets/Images/Vector Illustration header.svg"
          alt=""
          width={335}
          height={300}
          priority
        />
      </div>
      <div className={`header-container${isDarkPage ? " dark-theme" : ""}`}>
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

            <div
              className={`nav-item dropdown${dropdownOpen ? " active" : ""}`}
              onMouseEnter={() => {
                if (window.innerWidth >= 768) setDropdownOpen(true);
              }}
              onMouseLeave={() => {
                if (window.innerWidth >= 768) setDropdownOpen(false);
              }}
            >
              <span
                className="nav-link dropdown-toggle"
                id="offerings-link"
                onClick={(e) => {
                  if (window.innerWidth < 768) {
                    e.preventDefault();
                    setDropdownOpen((prev) => !prev);
                  }
                }}
                role="button"
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
              >
                Offerings
                <span className="dropdown-arrow"></span>
              </span>
              <div className={`dropdown-menu${dropdownOpen ? " show" : ""}`}>
                <Link
                  href="/offerings/rrr-strategic-growth-fund"
                  className="dropdown-item"
                  onClick={() => {
                    setDropdownOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  RRR Strategic Growth Fund
                </Link>
              </div>
            </div>

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
