"use client";

import SavedCard from "@/component/SavedCard";
import TodayPlanCard from "@/component/TodayPlanCard";
import { Workoutcontext } from "@/context/WorkOutsContext";
import React, { useContext, useState } from "react";
import { IoChevronDown } from "react-icons/io5";

const MyPlanePage = () => {
  const { plan, save } = useContext(Workoutcontext);
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">(
    "duration",
  );

  const activeData = activeTab === "today" ? plan : save;

  const totalExercises = activeData.length;
  const totalMinutes = activeData.reduce((sum, item) => sum + item.duration, 0);
  const totalCalories = activeData.reduce(
    (sum, item) => sum + item.caloriesBurned,
    0,
  );

  const sortFn = (a: typeof plan[number], b: typeof plan[number]) => {
    if (sortBy === "duration") return a.duration - b.duration;
    if (sortBy === "calories") return a.caloriesBurned - b.caloriesBurned;
    return b.rating - a.rating;
  };

  const sortedPlan = [...plan].sort(sortFn);
  const sortedSave = [...save].sort(sortFn);

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
      
      <div className="">
        <div className="    right-0 top-[-103] h-full flex items-center justify-center gap-3 ">
          <span className="text-gray-400 text-sm">Sort By</span>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="flex items-center gap-2 rounded-full border border-gray-800 bg-[#14171d] px-4 py-2 text-sm text-white"
            >
              {sortBy === "duration" && "Duration"}
              {sortBy === "calories" && "Calories"}
              {sortBy === "rating" && "Rating"}
              <IoChevronDown className="text-gray-400" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu z-999 mt-2 w-40 rounded-2xl border border-gray-800 bg-[#14171d] p-2 shadow-lg"
            >
              <li>
                <a onClick={() => setSortBy("duration")}>Duration</a>
              </li>
              <li>
                <a onClick={() => setSortBy("calories")}>Calories</a>
              </li>
              <li>
                <a onClick={() => setSortBy("rating")}>Rating</a>
              </li>
            </ul>
          </div>
        </div>
      <div className="tabs tabs-box my-9 ">
        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label="Today;s Plan"
          defaultChecked
          onChange={() => setActiveTab("today")}
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <TodayPlanCard plan={sortedPlan}></TodayPlanCard>
        </div>

        <input
          type="radio"
          name="my_tabs_6"
          className="tab "
          aria-label="Saved"
          onChange={() => setActiveTab("saved")}
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <SavedCard save={sortedSave}></SavedCard>
        </div>
      </div>
</div>
      
    </div>
  );
};

export default MyPlanePage;