
import WorkOutsCard from '@/component/WorkOutsCard';
import Banner from '@/homepage/Banner';

import { IFitlog } from '@/types/FitlogDataType';
import Link from 'next/link';
import React from 'react';
const getWorkOutsData = async () => {
    try {
        const res = await fetch('https://api.api-store.workers.dev/api/fitlog')

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
    const workouts = await getWorkOutsData();
    
    
    return (
        
       
       <div className='space-y-9'>
        <Banner></Banner>
        <div className='container mx-auto '>
        <h1 className="text-[30px] ">THE LIBRARY</h1>
         <p className="mb-6">Twelve lifts covering every major muscle group.</p>
        <div className='grid grid-cols-2 md:grid-cols-3 items-center gap-4   '>
            
            {workouts.map((workout:IFitlog)=>{
                return(
                     <Link className="hover:border hover:border-[#c2f800] hover:rounded-[10px]" href={`workouts/${workout.id}`} key={workout.id}>
                    <div key={workout.id}>
                       <WorkOutsCard workout={workout}></WorkOutsCard>
                    </div>
                    </Link>
                )
            })}
        </div>
        </div>
        </div>
    );
};

export default WorksOutPage;