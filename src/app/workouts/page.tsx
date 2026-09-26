
import FitlogCard from '@/component/FitlogCard';
import { IFitlog } from '@/types/FitlogDataType';
import Link from 'next/link';
import React from 'react';
const getFitlogData=async()=>{
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
    if(!res.ok){
        throw new Error('failed to fetch')
    }
    const data = res.json();
    return data;
}
const WorksOutPage = async() => {
    const fitlogs = await getFitlogData();
    
    return (
       
        <div className='grid grid-cols-3  gap-4 container max-auto p-4'>
            {fitlogs.map((fitlog:IFitlog)=>{
                return(
                     <Link href={`workouts/${fitlog.id}`} key={fitlog.id}>
                    <div key={fitlog.id}>
                       <FitlogCard fitlog={fitlog}></FitlogCard>
                    </div>
                    </Link>
                )
            })}
        </div>
    );
};

export default WorksOutPage;