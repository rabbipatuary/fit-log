"use client"
import React from "react";
import { toast } from "react-toastify";

const Todayplan = () => {
    const HandleTodayPlan=()=>{
        toast.success("Added to Today's Plan")
    }
  return (
    
    <div>
      <button className="bg-lime-400 text-black px-6 py-3 rounded-lg font-medium" onClick={HandleTodayPlan}>
        Add to today&apos;s plan
      </button>
    </div>
  );
};

export default Todayplan;
