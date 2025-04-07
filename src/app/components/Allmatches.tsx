import React from "react";
import MatchCard from "./MatchCard";

function Allmatches() {
  return (
    <div className=" h-[calc(100vh-148px)]  overflow-auto  bg-gray-100 p-4 hide-scrollbar">
      <div className="flex justify-center gap-x-10 gap-y-5 flex-wrap items-center">
        {Array.from({ length: 16 }).map((_, i) => (
          <MatchCard key={i} />
        ))}
      </div>
    </div>
  );
}

export default Allmatches;
