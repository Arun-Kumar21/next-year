"use client";
import React, { useEffect, useState } from "react";

import styles from "./style.module.scss";
import Link from "next/link";
import { Github, ToggleLeft } from "lucide-react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Nav from "./nav/nav-menu";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) {
      setIsActive(!isActive);
    }
  }, [pathname]);

  return (
    <>
      <nav className="w-full h-24 flex items-center justify-between p-4">
        <div>
          <h1 className="text-sm underline">Créatrice</h1>
        </div>

        <div>
          <button>
            <Link href={"https://github.com/Arun-Kumar21"} target="_black">
              <div className="flex items-center gap-x-1 text-xs">
                <Github className="w-4 h-4" />
                <span className="underline">about</span>
              </div>
            </Link>
          </button>
        </div>

        <div>
          <button className={styles.button}>
            <div
              onClick={() => {
                setIsActive(!isActive);
              }}
              className={styles.button}
            >
              <div
                className={`${styles.burger} ${
                  isActive ? styles.burgerActive : ""
                }`}
              ></div>
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
};

export default Navbar;
