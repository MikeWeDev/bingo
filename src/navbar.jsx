import {  useState } from "react"
import { MdDashboard } from "react-icons/md";
import { FaCodeBranch } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { IoExitSharp } from "react-icons/io5";

function Nav({isOpen,setIsOpen}){
   const [isModlaeopen,setIsmodaleopen]=useState(false)
    const handleModle=()=>{
        setIsOpen(true)
              
    }
    const blur = isOpen ? "opacity-[0.3]" : "opacity-[1]";

    return(
        <>
            <div className={`h-[100vh] ${blur} w-[19vw] bg-[#104F55]  text-white flex   border border-[2px] gap-5 flex-col justify-start p-7 items-center`}>
          <div className="">
                        <h1 className="text-green-400 text-3xl  font-bold mb-8">BINGO </h1>

          </div>
          
            <div className="flex gap-2 w-full items-center">
            
               <div className="w-[30%]">
                    <img src="/IMG_20241112_085124_584.jpg" alt="img" className="rounded-full w-full h-full"/>
                </div>

                <div className="w-[70%] flex-col">
                    <div className="text-lg text-sarrif font-bold ">Derje lema</div>
                    <div className="text-lg text-green-400 font-bold">OWNER</div>
                </div>
            </div>

            <div className="flex cursor-pointer justify-between  w-full items-center">
                <div className="text-md  font-bold">Dahbored</div>
                <div className="text-lg"><MdDashboard /></div>
            </div>
            <div className="flex cursor-pointer justify-between  w-full items-center">
                <div className="text-md  font-bold">ADD BRANCH</div>
                <div className="">< FaCodeBranch/></div>
            </div>
            <div className="flex cursor-pointer justify-between  w-full items-center">
                <div className="text-md  font-bold">DELETE BRANCH</div>
                <div className="">< FaCodeBranch/></div>
            </div>
            <div className="flex cursor-pointer justify-between  w-full items-center">
                <div className="text-md  font-bold">Exit</div>
                <div className=""><IoExitSharp /></div>
            </div>
            <button className="bg-[#C2095A] w-full p-3 font-bold rounded-lg" onClick={handleModle}>ADD BRANCH</button>
            
        </div>
      
        </>
      
      
    )
}
export default Nav