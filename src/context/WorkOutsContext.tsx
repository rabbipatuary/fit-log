"use client"
import React, { createContext, ReactNode, useState } from 'react';
const workoutcontext = createContext({})

const WorkOutsContextProvider = ({children}:{children:ReactNode}) => {
    const [plan, setPlan]= useState([])
      const [save ,setSave]=useState([])
      const sharedData = {
        plan,setPlan,save,setSave
      }
    return <workoutcontext.Provider value={sharedData}>{children}</workoutcontext.Provider>
};

export default WorkOutsContextProvider;