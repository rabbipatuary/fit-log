import WorkOutsCard from '@/component/WorkOutsCard';
import Banner from '@/homepage/Banner';
import { IFitlog } from '@/types/FitlogDataType';
import Link from 'next/link';
import React from 'react';

const getWorkOUtsData=async()=>{
    try{
        const res=await fetch('https://api.api-store.workers.dev/api/fitlog');
        const data=await res.json();
        return data;
    }catch{
        console.log('Failed to fetch')
        return [];
    }
}

const WorkOutsPage=async()=>{
    const workouts=await getWorkOUtsData();

    return(
        <div className='p-4 m-4 space-y-4 container mx-auto'>
            <Banner></Banner>
            <div className='my-9'>
                <h1 className='text-[40px] font-bold ' >THE LIBRARY</h1>
                <p>Twelve lifts covering every major muscle group.</p>
                </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 space-y-4'>
             
            {workouts.map((workout:IFitlog)=>{
                return(
                   
                    <div key={workout.id}>
                         <Link className=' block hover:border hover:rounded-[10px] hover:border-[#c2f800]' href={`/workouts/${workout.id}`}>  <WorkOutsCard workout={workout}></WorkOutsCard></Link>
                    </div>
                    
                )
            })}
        </div>
        
        </div>
        
    );
};

export default WorkOutsPage;