import { Reorder } from "framer-motion";
import React, { useState } from "react";
import { Item } from "./item";

const initialState = [
  "😎 Ownself",
  "👨‍👩‍👧‍👦 Family",
  "✌️ Friends",
  "👨‍🏭 Work",
  "💖 Health",
  "🤑 Money",
];

const ReorderList = () => {
  const [item, setItem] = useState(initialState);

  return (
    <main className="w-screen h-screen text-center flex flex-col gap-y-8 justify-center items-center">
      <header>
        <h1 className="text-3xl p-2">
          Let's see what your priorities are for this year.
        </h1>
        <p>-Drag to change priorities</p>
      </header>

      <section>
        <Reorder.Group axis="y" values={item} onReorder={setItem}>
          {item.map((item) => (
            <Item key={item} item={item} />
          ))}
        </Reorder.Group>
      </section>
    </main>
  );
};

export default ReorderList;
