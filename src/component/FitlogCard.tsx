import { IFitlog } from '@/types/FitlogDataType';
import { TbBrandTinderFilled } from "react-icons/tb";
import { CiStar } from "react-icons/ci";
import { MdOutlineTimer } from "react-icons/md";
import Image from 'next/image';
import React from 'react';

interface FitlogPropsType{
    fitlog:IFitlog
}

const FitlogCard = ({fitlog}:FitlogPropsType) => {
    return (
        <div className="card bg-[#15171c] w-full max-w-[590px] border border-[#292c33] rounded-[22px] overflow-hidden">
            <figure>
                <Image
                    src={fitlog.image}
                    alt={fitlog.name}
                    width={600}
                    height={300}
                    className="w-full h-[290px] object-cover"
                />
            </figure>
            <div className="card-body p-9">
                <div className='flex items-center gap-3'>
                    {fitlog.muscleGroups.map((muscleGroup,index)=>{
                        return (
                            <div key={index}>
                                <div className="badge text-black bg-[#c2f800] border-none font-bold text-[16px] px-4 py-4 rounded-full">
                                    {muscleGroup}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <h1 className='text-[28px] font-bold text-white mt-4'>
                    {fitlog.name}
                </h1>
                <p className='text-[#acacac] text-[17px] mt-[-8px]'>
                    {fitlog.equipment}
                </p>
                <hr className='border-[#292c33] mt-3 mb-3' />
                <div className='flex items-center gap-6 text-[#acacac] text-[17px]'>
                    <div className='flex items-center gap-2'>
                        <MdOutlineTimer className="text-[22px]" />
                        {fitlog.duration} min
                    </div>
                    <div className='flex items-center gap-2'>
                        <TbBrandTinderFilled className="text-[22px]" />
                        {fitlog.caloriesBurned} kcal
                    </div>
                    <div className='flex items-center gap-2'>
                        <CiStar className="text-[25px]" />
                        {fitlog.rating}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FitlogCard;