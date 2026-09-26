import { IFitlog } from '@/types/FitlogDataType';
import { TbBrandTinderFilled } from "react-icons/tb";
import { CiStar } from "react-icons/ci";
import { MdOutlineTimer } from "react-icons/md";
import Image from 'next/image';
import React from 'react';

interface FitlogPropsType{
    workout:IFitlog
}

const WorkOutsCard = ({workout}:FitlogPropsType) => {
    return (
        <div className="card bg-[#15171c] w-full border border-[#292c33] rounded-[22px] overflow-hidden">
            <figure>
                <Image
                    src={workout.image}
                    alt={workout.name}
                    width={600}
                    height={300}
                    className="w-full  object-cover"
                />
            </figure>
            <div className="card-body p-4 sm:p-5">
                <div className='flex flex-wrap items-center gap-2'>
                    {workout.muscleGroups.map((muscleGroup,index)=>{
                        return (
                            <div key={index}>
                                <div className="badge text-black bg-[#c2f800] border-none font-bold text-[10px] sm:text-[12px] px-2 py-2.5 rounded-full">
                                    {muscleGroup}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <h1 className='text-[17px] sm:text-[20px] font-bold text-white mt-3'>
                    {workout.name}
                </h1>
                <p className='text-[#acacac] text-[11px] sm:text-[13px] -mt-2'>
                    {workout.equipment}
                </p>
                <hr className='border-[#292c33] mt-2 mb-2' />
                <div className='flex flex-wrap items-center gap-3 text-[#acacac] text-[10px] sm:text-[12px]'>
                    <div className='flex items-center gap-1'>
                        <MdOutlineTimer className="text-[15px]" />
                        {workout.duration} min
                    </div>
                    <div className='flex items-center gap-1'>
                        <TbBrandTinderFilled className="text-[15px]" />
                        {workout.caloriesBurned} kcal
                    </div>
                    <div className='flex items-center gap-1'>
                        <CiStar className="text-[17px]" />
                        {workout.rating}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkOutsCard;