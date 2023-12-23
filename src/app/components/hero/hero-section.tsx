import React, { useEffect, useState } from "react";

import { Quicksand } from 'next/font/google';
import { motion } from "framer-motion";

const quicksand = Quicksand({
  weight : ["400" , "500"],
  subsets : ['latin']
})

const Hero = () => {

  const [lineVisible, setLineVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const lineTimer = setTimeout(() => {
      setLineVisible(true);
    }, 500);

    const textTimer = setTimeout(() => {
      setTextVisible(true);
    }, 1500);

    return () => {
      clearTimeout(lineTimer);
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: lineVisible ? "100%" : 0 }}
        transition={{ duration: 1 }}
        style={{ height: 2, backgroundColor: "black", marginBottom: 16 }}
      />
      <div className="w-full h-[100vh] max-h-[600px]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: textVisible ? 1 : 0,
              y: textVisible ? 0 : 20,
            }}
            transition={{ duration: 1 }}
            className="p-2 w-screen text-[100px] tracking-tighter leading-none"
          >
            <div className={quicksand.className}>Happy New Year 2024</div>
          </motion.h1>
      </div>
    </>
  );
};

export default Hero;
