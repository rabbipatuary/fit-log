"use client"
import { IFitlog } from "@/types/FitlogDataType";
import { FaRegCalendarPlus } from "react-icons/fa";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { Workoutcontext } from "@/context/WorkOutsContext";

const TodayPlan = ({ workout }: { workout: IFitlog }) => {
   const {plan,setPlan}=useContext(Workoutcontext)
   const isAdded = plan.some(plan=> plan.id ===workout.id
   )

    const HandleTodayPlan = ()=>{
        if(isAdded){
            toast.error("Already in your Plan !")
            return
        }
        toast.success("Add to Today's Plan.")
        setPlan([...plan,workout])
        
    }
  return (
    <div>
       <button className="btn text-black btn-warning " onClick={HandleTodayPlan} ><FaRegCalendarPlus /> Add to today&apos;s plan</button>
    </div>
  );
};

export default TodayPlan;
