"use client"
import { IFitlog } from "@/types/FitlogDataType";
import { FaRegCalendarPlus } from "react-icons/fa";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { Workoutcontext } from "@/context/WorkOutsContext";

const SavePlan = ({ workout }: { workout: IFitlog }) => {
   const {save,setSave}=useContext(Workoutcontext)
   const isAdded = save.some(save=> save.id ===workout.id)

    const handleSavePlan = ()=>{
         if(isAdded){
                    toast.error("data already added")
                    return
                }
        toast.success("Add to Save Plan")
        setSave([...save,workout])
        
    }
  return (
    <div>
       <button className="btn btn-outline" onClick={handleSavePlan}><FaRegCalendarPlus /> Add to today&apos;s plan</button>
    </div>
  );
};

export default SavePlan;
