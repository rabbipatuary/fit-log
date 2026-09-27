import SavePlan from "@/workoutsdetails/SavePlan";
import TodayPlan from "@/workoutsdetails/TodayPlan";
import Image from "next/image";
import React from "react";

interface ParamsType {
  params: Promise<{ Id: string }>;
}

const getWorkOUtData = async (Id: string) => {
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${Id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  const data = await res.json();

  return data;
};

const WorksOutDetailsPage = async ({ params }: ParamsType) => {
  const { Id } = await params;

  const workout = await getWorkOUtData(Id);

  return (
    <div className="min-h-screen bg-[#0d0f12] text-white p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">


        <div>
          <Image
            src={workout.image}
            alt={workout.name}
            width={500}
            height={400}
            className="w-full  object-cover rounded-xl"
          />
        </div>



        <div>
          <h1 className="text-3xl font-bold uppercase">{workout.name}</h1>

          <p className="text-gray-400 mt-3">{workout.description}</p>

          

          <div className="flex gap-2 mt-4">
            {workout.muscleGroups?.map((muscle: string) => (
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

              <span>{workout.equipment}</span>
            </div>

            <div className="flex justify-between p-4 border-b border-gray-800">
              <span className="text-gray-400 text-sm">DIFFICULTY</span>

              <span>{workout.difficulty}</span>
            </div>

            <div className="flex justify-between p-4 border-b border-gray-800">
              <span className="text-gray-400 text-sm">SETS</span>

              <span>{workout.sets}</span>
            </div>

            <div className="flex justify-between p-4 border-b border-gray-800">
              <span className="text-gray-400 text-sm">REPS</span>

              <span>{workout.reps}</span>
            </div>

            <div className="flex justify-between p-4 border-b border-gray-800">
              <span className="text-gray-400 text-sm">DURATION</span>

              <span>{workout.duration} min</span>
            </div>

            <div className="flex justify-between p-4 border-b border-gray-800">
              <span className="text-gray-400 text-sm">CALORIES</span>

              <span>{workout.caloriesBurned} kcal</span>
            </div>

            <div className="flex justify-between p-4">
              <span className="text-gray-400 text-sm">RATING</span>

              <span>{workout.rating}</span>
            </div>
          </div>



          <div className="mt-7">
            <h2 className="font-bold text-lg mb-4">INSTRUCTIONS</h2>

            <ol className="space-y-3 text-gray-400">
              {workout.instructions?.map(
                (instruction: string, index: number) => (
                  <li key={index}>
                    {index + 1}. {instruction}
                  </li>
                ),
              )}
            </ol>
          </div>

          

          <div className="flex gap-3 mt-7">
            <TodayPlan workout={workout}></TodayPlan>

            <SavePlan workout={workout}></SavePlan>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksOutDetailsPage;
