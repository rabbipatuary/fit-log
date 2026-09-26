
import FitlogCard from '@/component/FitlogCard';
import { IFitlog } from '@/types/FitlogDataType';
import React from 'react';
const getFitlogData=async()=>{
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
    if(!res.ok){
        throw new Error('failed to fetch')
    }
    const data = res.json();
    return data;
}
const FitlogData = async() => {
    const fitlogs = await getFitlogData();
    
    return (
        <div className='grid grid-cols-3  gap-4 container max-auto p-4'>
            {fitlogs.map((fitlog:IFitlog)=>{
                return(
                    <div key={fitlog.id}>
                       <FitlogCard fitlog={fitlog}></FitlogCard>
                    </div>
                )
            })}
        </div>
    );
};

export default FitlogData;