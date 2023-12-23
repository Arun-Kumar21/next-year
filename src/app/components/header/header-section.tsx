import React from "react";

import { MoveDown, MoveRight } from "lucide-react";

const HeaderSection = () => {
  return (
    <div className="p-4 w-full h-32 flex items-center justify-between">
      <div>
        <MoveDown className="w-4 h-4 text-slate-600" />
      </div>

      <div className="text-xs opacity-60">
        <h1>
          Created by
          <br />
          <span>- Arun Kumar </span>
        </h1>
      </div>

      <div className="text-xs opacity-60">
        <h1>
          Creative direction
          <br />
          <span>
            <div className="flex items-center gap-x-1">
              <MoveRight className="w-4 h-4" />
              Design
            </div>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default HeaderSection;
