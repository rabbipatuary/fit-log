"use client"
import { IFitlog } from "@/types/FitlogDataType";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { Workoutcontext } from "@/context/WorkOutsContext";
import { CiBookmark } from "react-icons/ci";


const SavePlan = ({ workout }: { workout: IFitlog }) => {
   const {save,setSave}=useContext(Workoutcontext)
   const isAdded = save.some(save=> save.id ===workout.id)

    const handleSavePlan = ()=>{
         if(isAdded){
                    toast.error("Already in your Saved plan !")
                    return
                }
        toast.success("Add to Save Plan.")
        setSave([...save,workout])
        
    }
  return (
    <div>
       <button className="btn btn-outline" onClick={handleSavePlan}><CiBookmark /> Save for later</button>
    </div>
  );
};

export default SavePlan;
