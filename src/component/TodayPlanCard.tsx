import { IFitlog } from "@/types/FitlogDataType";
import Image from "next/image";
import { TbClock } from "react-icons/tb";
import { FaFire } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import Link from "next/link";
import TodayPlanCardButtons from "./TodayPlanCardButtons";

const TodayPlanCard = ({ plan }: { plan: IFitlog[] }) => {
  return (
    <div>
      {plan.length === 0 ? (
        <div className="text-center px-4">
          <h1 className="text-[28px] sm:text-[40px] font-bold">
            NOTHING HERE YET
          </h1>

          <p className="pb-4 text-sm sm:text-base text-[#a1a1aa]">
            Browse the library and add a lift to get today moving.
          </p>

          <Link href={"/workouts"}>
            <button className="btn text-black btn-warning bg-[#c2f800]">
              Browse Workouts
            </button>
          </Link>
        </div>
      ) : (
        plan.map((plan) => {
          return (
            <div key={plan.id}>
              <div className="w-full rounded-3xl border border-gray-800 bg-[#14171d] mb-2 p-4 sm:p-6">
                <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-6">
                  {/* Image */}
                  <div className="relative w-full h-52 sm:h-60 lg:h-30 lg:w-53.75 shrink-0 overflow-hidden rounded-2xl">
                    <Image
                      src={plan.image}
                      alt={plan.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Workout Information */}
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl sm:text-2xl font-bold uppercase text-white">
                      {plan.name}
                    </h2>

                    <p className="mt-1 text-sm sm:text-lg text-gray-400">
                      {plan.equipment}
                    </p>

                    <div className="mt-3 flex flex-wrap items-center gap-3 sm:gap-5 text-sm sm:text-base text-gray-300">
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

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-3">
                    <Link
                      href={`/workouts/${plan.id}`}
                      className="w-full sm:w-auto"
                    >
                      <button className="btn btn-outline cursor-pointer rounded-4xl w-full sm:w-auto">
                        View Details
                      </button>
                    </Link>

                    <TodayPlanCardButtons id={plan.id} />
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default TodayPlanCard;
