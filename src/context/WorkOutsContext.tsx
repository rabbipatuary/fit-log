"use client"

import { IFitlog } from "@/types/FitlogDataType";
import React, { createContext, useState } from "react";

interface WorkoutContextType{
    plan:IFitlog[];
    setPlan:React.Dispatch<React.SetStateAction<IFitlog[]>>;
    save:IFitlog[];
    setSave:React.Dispatch<React.SetStateAction<IFitlog[]>>;
}

export const Workoutcontext=createContext<WorkoutContextType>({
    plan:[],
    setPlan:()=>{},
    save:[],
    setSave:()=>{}
});

const WorkoutProvider=({children}:{children:React.ReactNode})=>{
    const [plan,setPlan]=useState<IFitlog[]>([]);
    const [save,setSave]=useState<IFitlog[]>([]);
    const shared = {plan, setPlan, save , setSave }

    return(
        <Workoutcontext.Provider value={shared}>
            {children}
        </Workoutcontext.Provider>
    );
};

export default WorkoutProvider;