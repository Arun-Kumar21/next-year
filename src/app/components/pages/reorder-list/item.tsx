import * as React from "react";
import { useMotionValue, Reorder } from "framer-motion";

interface Props {
  item: string;
}

export const Item = ({ item }: Props) => {
  const y = useMotionValue(0);

  return (
    <Reorder.Item value={item} id={item} className="px-8 py-2 bg-slate-300/20 shadow-md m-2 text-xl">
      <span>{item}</span>
    </Reorder.Item>
  );
};