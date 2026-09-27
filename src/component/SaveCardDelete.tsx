"use client";

import { Workoutcontext } from "@/context/WorkOutsContext";
import React, { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";

const SaveCardDelete = ({ id }: { id:number }) => {
  const {  setSave } = useContext(Workoutcontext);

  const handleSaveCardDelete = () => {
    toast.success("Save Plan Deleted")
    setSave((prev) => prev.filter((item) => item.id !== id));
    
  };

  return (
    <div>
      <button
        onClick={handleSaveCardDelete}
        className="text-2xl text-gray-500 cursor-pointer"
      >
        <RxCross2 />
      </button>
    </div>
  );
};

export default SaveCardDelete;