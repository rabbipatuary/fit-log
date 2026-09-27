import React from 'react';

const PlanMetrics = ({totalExercises,totalMinutes,totalCalories}:{totalExercises:number,totalMinutes:number ,totalCalories:number}) => {
    return (
        <div>
            <div className="w-full rounded-3xl border border-gray-800 bg-[#14171d] my-6 p-6 flex justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Exercises</p>
                      <h2 className="text-3xl font-bold text-lime-400">{totalExercises}</h2>
                    </div>
            
                    <div>
                      <p className="text-gray-400 text-sm">Minutes</p>
                      <h2 className="text-3xl font-bold text-white">{totalMinutes}</h2>
                    </div>
            
                    <div>
                      <p className="text-gray-400 text-sm">Calories</p>
                      <h2 className="text-3xl font-bold text-white">{totalCalories}</h2>
                    </div>
                  </div>
        </div>
    );
};

export default PlanMetrics;