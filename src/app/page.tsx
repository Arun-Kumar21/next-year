"use client";

import Hero from "./components/hero/hero-section";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import Home from "./components/pages/home";
import ReorderList from "./components/pages/reorder-list";

export default function Main() {
  useEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll" , ()=>{
      lenis.virtualScroll.wheelMultiplier = 1;
    })

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Home />
      <ReorderList/>
    </main>
  );
}
