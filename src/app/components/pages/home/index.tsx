import React, { useRef } from "react";

import { Raleway } from "next/font/google";
import styles from "./styles.module.scss";
import { motion ,  useScroll, useTransform } from "framer-motion";
import Page1 from "../stylus";

const raleway = Raleway({
  subsets:["latin"]
})

const Home = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset : ["start start" , "end end"]
  });

  const scale = useTransform(scrollYProgress , [0,1] , [1 , 13])

  return (
    <main className="w-screen">
      <div ref={ref} className="relative mt-[10vh] z-10 h-[4000px] w-[360px] m-auto overflow-y-clip bg-white">
        <motion.div className={"hero-background flex gap-x-4 p-2  origin-[38%_54%]" } style={{scale}}>
        <div className={styles.windowMask}>
            <div className="flex flex-col gap-y-4 h-[560px]">
              <h1 className={raleway.className} style={{fontSize:75 , fontWeight:600 , lineHeight:0.9}}>
                Let's peer through the looking glass into the year ahead
              </h1>
              <p className="w-3/4">Lorem ipsum dolor sit amet ?</p>
            </div>
            
            <div>
              <h1 className="text-[150px]">2<span className="">0</span>24</h1>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="h-[375vh] pb-20">
        <div className={raleway.className}>
          <Page1 />
        </div>
      </div>

    </main>
  );
};

export default Home;
