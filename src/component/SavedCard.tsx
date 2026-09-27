import React from "react";
import { IFitlog } from "@/types/FitlogDataType";
import Image from "next/image";

import { TbClock } from "react-icons/tb";
import { FaFire } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import Link from "next/link";
import SaveCardDelete from "./SaveCardDelete";
const SavedCard = ({ save }: { save: IFitlog[] }) => {
  return (
    <div>
      {save.length === 0 ? (
        <div className="text-center">
          <h1 className="text-[40px] font-bold">NOTHING HERE YET</h1>
          <p className="pb-4 text-[#a1a1aa]">
            Browse the library and add a lift to get today moving.
          </p>
          <Link href={"/workouts"}>
            <button className="btn text-black btn-warning bg-[#c2f800]">
              Browse Workouts
            </button>
          </Link>
        </div>
      ) : (
        save.map((save) => {
          return (
            <div key={save.id}>
              <div className="w-full rounded-3xl border border-gray-800 bg-[#14171d] mb-2 p-6">
                <div className="flex items-center gap-6 ">
                  <div className="relative h-30 w-53.75 shrink-0 overflow-hidden rounded-2xl">
                    <Image
                      src={save.image}
                      alt={save.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <h2 className="text-2xl font-bold uppercase text-white">
                      {save.name}
                    </h2>

                    <p className="mt-1 text-lg text-gray-400">
                      {save.equipment}
                    </p>

                    <div className="mt-3 flex items-center gap-5 text-gray-300">
                      <div className="flex items-center gap-2">
                        <TbClock className="text-xl text-lime-400" />
                        <span>{save.duration} min</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <FaFire className="text-lg text-lime-400" />
                        <span>{save.caloriesBurned} kcal</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <CiStar className="text-2xl text-lime-400" />
                        <span>{save.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Link href={`/workouts/${save.id}`}>
                      <button className="btn btn-outline cursor-pointer rounded-4xl">
                        View Details
                      </button>
                    </Link>

                    <SaveCardDelete id={save.id}></SaveCardDelete>
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

export default SavedCard;
