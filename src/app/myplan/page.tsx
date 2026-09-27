"use client";

import SavedCard from "@/component/SavedCard";
import TodayPlanCard from "@/component/TodayPlanCard";
import { Workoutcontext } from "@/context/WorkOutsContext";
import React, { useContext, useState } from "react";

const MyPlanePage = () => {
  const { plan, save } = useContext(Workoutcontext);
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  const activeData = activeTab === "today" ? plan : save;

  const totalExercises = activeData.length;
  const totalMinutes = activeData.reduce((sum, item) => sum + item.duration, 0);
  const totalCalories = activeData.reduce(
    (sum, item) => sum + item.caloriesBurned,
    0,
  );

  return (
    <div className="container mx-auto p-4">
      <div className="my-6">
        <h1 className=" font-bold text-[40px]">MY PLAN</h1>
        <p className="text-[#8a92a0]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      
      <div className="w-full rounded-3xl border border-gray-800 bg-[#14171d] my-6 p-6 flex justify-between">
        <div>
          <p className="text-gray-400 text-sm">Exercises</p>
          <h2 className="text-3xl font-bold text-lime-400">{totalExercises}</h2>
        </div>

        <div>
          <p className="text-gray-400 text-sm">Minutes</p>
          <h2 className="text-3xl font-bold text-white">{totalMinutes}</h2>
        </div>

        <div>
          <p className="text-gray-400 text-sm">Calories</p>
          <h2 className="text-3xl font-bold text-white">{totalCalories}</h2>
        </div>
      </div>

      
      <div className="tabs tabs-box my-9">
        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label="Today;s Plan"
          defaultChecked
          onChange={() => setActiveTab("today")}
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <TodayPlanCard plan={plan}></TodayPlanCard>
        </div>

        <input
          type="radio"
          name="my_tabs_6"
          className="tab "
          aria-label="Saved"
          onChange={() => setActiveTab("saved")}
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <SavedCard save={save}></SavedCard>
        </div>
      </div>
    </div>
  );
};

export default MyPlanePage;