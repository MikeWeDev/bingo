import { useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";

export const Card = ({ isOpen, setIsOpen }) => {
 const values = isOpen ? "translate-x-[0%]" : "translate-x-[-400%]";
  return (
    <>
      <div
        className={`bg-red-500 ${values} p-5 border-b-[2px] border-black absolute top-[20%] left-[30%] w-[40%]  flex justify-center items-center`}
      >
        <div className="w-[300px] h-[300px]  flex flex-col items-center  gap-6">
          <div className="flex relative text-white text-2xl font-bold  ">
            CREATE A BRANCH
            <span
              className="mt-1 absolute right-[-65%] text-3xl  cursor-pointer text-center"
              onClick={() => setIsOpen(false)}
            >
              <FaDeleteLeft />
            </span>
          </div>
          <div className="w-full flex flex-col gap-2">
             <input type="text"  placeholder="Username" className="w-full h-[35px] rounded-sm"/>
             <input type="text"  placeholder="branch"   className="w-full h-[35px] rounded-sm"/>
             <input type="text"  placeholder="password"  className="w-full h-[35px] rounded-sm"/>

          </div>
          <button className="bg-green-400 w-1/2  p-3 font-bold rounded-lg">
            Add Branch
          </button>
        </div>
      </div>
    </>
  );
};
