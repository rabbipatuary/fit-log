"use client";

import { Workoutcontext } from "@/context/WorkOutsContext";
import React, { useContext, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";
import { FaCheck } from "react-icons/fa6";


const TodayPlanCardButtons = ({ id }: { id: number }) => {
  const { setPlan } = useContext(Workoutcontext);

  const [isDone, setIsDone] = useState(false);

  const handleTodayPlanCardDelete = () => {
    toast.success("Today's Plan Deleted");

    setPlan((prev) => prev.filter((item) => item.id !== id));
  };

  const handleMarkasDone = () => {
    toast.success("Marked as Done");

    setIsDone(true);
  };

  return (
    <div className="flex items-center gap-4">
      <div>
        <button
          className="flex items-center gap-2 rounded-full bg-lime-400 px-7 py-3 text-lg font-semibold text-black disabled:cursor-not-allowed"
          onClick={handleMarkasDone}
          disabled={isDone}
        >
          <FaCheck /> {isDone ? "Done" : "Mark as Done"}
        </button>
      </div>

      <div>
        <button
          onClick={handleTodayPlanCardDelete}
          className="cursor-pointer text-2xl text-gray-500"
        >
          <RxCross2 />
        </button>
      </div>
    </div>
  );
};

export default TodayPlanCardButtons;