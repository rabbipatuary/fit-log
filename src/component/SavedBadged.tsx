'use client'
import { Workoutcontext } from "@/context/WorkOutsContext";
import React, { useContext } from "react";

const SavedBadged = () => {
    const {save}=useContext(Workoutcontext)
  return (
    <div>
      <div className="flex items-center gap-2">
        <span className="text-gray-300 font-medium">Saved</span>
        <span className="flex h-6 w-6 items-center justify-center rounded-full text-[20px] font-semibold border border-gray-500 text-white">
          {save.length}
        </span>
      </div>
    </div>
  );
};

export default SavedBadged;
