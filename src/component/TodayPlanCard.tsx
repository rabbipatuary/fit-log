import { IFitlog } from "@/types/FitlogDataType";
 import Image from "next/image";
 import { RxCross2 } from "react-icons/rx";
 import { TbClock } from "react-icons/tb";
 import { FaFire } from "react-icons/fa";
 import { CiStar } from "react-icons/ci";
const TodayPlanCard = ({ plan }: { plan: IFitlog[] }) => {
  return (
    <div>
      {plan.map((plan) => {
        return (
          <div key={plan.id}>
           
            <div className="w-full rounded-3xl border border-gray-800 bg-[#14171d] mb-2 p-6">
              <div className="flex items-center gap-6 ">
                <div className="relative h-30 w-53.75 shrink-0 overflow-hidden rounded-2xl">
                  <Image
                    src={plan.image}
                    alt={plan.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="text-2xl font-bold uppercase text-white">
                    {plan.name}
                  </h2>

                  <p className="mt-1 text-lg text-gray-400">{plan.equipment}</p>

                  <div className="mt-3 flex items-center gap-5 text-gray-300">
                    <div className="flex items-center gap-2">
                      <TbClock className="text-xl text-lime-400" />
                      <span>{plan.duration} min</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <FaFire className="text-lg text-lime-400" />
                      <span>{plan.caloriesBurned} kcal</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <CiStar className="text-2xl text-lime-400" />
                      <span>{plan.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button className="rounded-full border border-gray-700 px-7 py-3 text-lg text-white">
                    View Details
                  </button>

                  <button className="flex items-center gap-2 rounded-full bg-lime-400 px-7 py-3 text-lg font-semibold text-black">
                    ✓ Mark as Done
                  </button>

                  <button className="text-2xl text-gray-500">
                    <RxCross2 />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodayPlanCard;
