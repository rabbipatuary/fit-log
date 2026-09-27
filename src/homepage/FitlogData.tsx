
import FitlogCard from '@/component/WorkOutsCard';
import { IFitlog } from '@/types/FitlogDataType';
import Link from 'next/link';
import React from 'react';
const getFitlogData=async()=>{
    try{const res = await fetch('https://api.api-store.workers.dev/api/fitlog')
    
    const data = await res.json();
    return data;
}catch{
    console.log('failed to fetch')
    return []
}
    
}
const FitlogData = async() => {
    const fitlogs = await getFitlogData();
    
    return (
       
        <div className='grid grid-cols-3  gap-4 container max-auto '>
            {fitlogs.map((fitlog: IFitlog) => {
  return (
    <Link href={`workouts/${fitlog.id}`} key={fitlog.id}>
      <div>
        <FitlogCard workout={fitlog}></FitlogCard>
      </div>
    </Link>
  );
})}
        </div>
    );
};

export default FitlogData;