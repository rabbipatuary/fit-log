"use client";
import SavedCard from "@/component/SavedCard";
import TodayPlanCard from "@/component/TodayPlanCard";
import { Workoutcontext } from "@/context/WorkOutsContext";
import React, { useContext } from "react";

const MyPlanePage = () => {
   const {plan,save}=useContext(Workoutcontext)
  return (
    <div>
      <div>
        <h1>MY PLAN</h1>
        <p>Cap of five lifts for today. Finish them, then load more.</p>
      </div>
      {/* name of each tab group should be unique */}
<div className="tabs tabs-box my-9">
  <input type="radio" name="my_tabs_6" className="tab" aria-label="Today;s Plan" />
  <div className="tab-content bg-base-100 border-base-300 p-6"><TodayPlanCard plan={plan}></TodayPlanCard></div>

  <input type="radio" name="my_tabs_6" className="tab" aria-label="Saved" defaultChecked />
  <div className="tab-content bg-base-100 border-base-300 p-6"><SavedCard save={save}></SavedCard></div>

  
</div>
    </div>
  );
};

export default MyPlanePage;
