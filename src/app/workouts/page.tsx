
import FitlogCard from '@/component/FitlogCard';
import { IFitlog } from '@/types/FitlogDataType';
import Link from 'next/link';
import React from 'react';
const getFitlogData = async () => {
    try {
        const res = await fetch('https://api.abcz.workers.dev/api/fitlog', { cache: 'no-store' })

        if (!res.ok) {
            console.log('API error, status:', res.status)
            return []
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.log('failed to fetch', error)
        return []
    }
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