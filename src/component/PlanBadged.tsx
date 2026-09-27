'use client'
import { Workoutcontext } from '@/context/WorkOutsContext';
import React, { useContext } from 'react';

const PlanBadged = () => {
    const {plan}=useContext(Workoutcontext)
    return (
        <div className="flex items-center gap-2">
            <span className="text-gray-300 font-medium">Plan</span>
            <span className='flex h-6 w-6 text-[20px] items-center justify-center rounded-full bg-[#ccff00] text-sm font-semibold text-black'>{plan.length}</span>
        </div>
    );
};

export default PlanBadged;