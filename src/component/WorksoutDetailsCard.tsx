import { IFitlog } from '@/types/FitlogDataType';
import Image from 'next/image';
import React from 'react';

const WorksoutDetailsCard = ({workOut}:{workOut:IFitlog}) => {
    return (
       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                   <Image
    src={workOut.image}
    alt={workOut.name}
    width={740}
    height={550}
    className="w-full h-137.5 object-cover rounded-xl"
/>
                </div>

                <div>
                    <h1 className="text-3xl font-bold uppercase">
                        {workOut.name}
                    </h1>

                    <p className="text-gray-400 mt-3">
                        {workOut.description}
                    </p>

                    <div className="flex gap-2 mt-4">
                        {workOut.muscleGroups?.map((muscle:string)=>(
                            <span
                                key={muscle}
                                className="bg-lime-400 text-black px-4 py-1 rounded-full text-sm"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    <div className="mt-5 border border-gray-800 rounded-xl overflow-hidden">
                        <div className="flex justify-between p-4 border-b border-gray-800">
                            <span className="text-gray-400 text-sm">EQUIPMENT</span>
                            <span>{workOut.equipment}</span>
                        </div>

                        <div className="flex justify-between p-4 border-b border-gray-800">
                            <span className="text-gray-400 text-sm">DIFFICULTY</span>
                            <span>{workOut.difficulty}</span>
                        </div>

                        <div className="flex justify-between p-4 border-b border-gray-800">
                            <span className="text-gray-400 text-sm">SETS</span>
                            <span>{workOut.sets}</span>
                        </div>

                        <div className="flex justify-between p-4 border-b border-gray-800">
                            <span className="text-gray-400 text-sm">REPS</span>
                            <span>{workOut.reps}</span>
                        </div>

                        <div className="flex justify-between p-4 border-b border-gray-800">
                            <span className="text-gray-400 text-sm">DURATION</span>
                            <span>{workOut.duration} min</span>
                        </div>

                        <div className="flex justify-between p-4 border-b border-gray-800">
                            <span className="text-gray-400 text-sm">CALORIES</span>
                            <span>{workOut.caloriesBurned} kcal</span>
                        </div>

                        <div className="flex justify-between p-4">
                            <span className="text-gray-400 text-sm">RATING</span>
                            <span>{workOut.rating}</span>
                        </div>
                    </div>

                    <div className="mt-7">
                        <h2 className="font-bold text-lg mb-4">
                            INSTRUCTIONS
                        </h2>

                        <ol className="space-y-3 text-gray-400">
                            {workOut.instructions?.map((instruction:string,index:number)=>(
                                <li key={index}>
                                    {index+1}. {instruction}
                                </li>
                            ))}
                        </ol>
                    </div>

                    <div className="flex gap-3 mt-7">
                        <button className="bg-lime-400 text-black px-6 py-3 rounded-lg font-medium">
                            Add to today&apos;s plan
                        </button>

                        <button className="border border-gray-700 px-6 py-3 rounded-lg">
                            Save for later
                        </button>
                    </div>
                </div>
            </div>
    );
};

export default WorksoutDetailsCard;