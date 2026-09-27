import WorksoutDetailsCard from "@/component/WorksoutDetailsCard";
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
      <WorksoutDetailsCard workout={workout}></WorksoutDetailsCard>
    </div>
  );
};

export default WorksOutDetailsPage;
