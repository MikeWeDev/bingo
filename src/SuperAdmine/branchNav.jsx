import {  useState } from "react"
import { MdDashboard } from "react-icons/md";
import { BiSolidJoystickButton } from "react-icons/bi";
import { MdCancel } from "react-icons/md";
import { RiFileAddFill } from "react-icons/ri";
import { IoEyeSharp } from "react-icons/io5";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";
import { TbReport } from "react-icons/tb";
import { FaShopware } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { IoTrailSignOutline } from "react-icons/io5";
import { PiLockKeyFill } from "react-icons/pi";
function Nav2({isOpen,setIsOpen}){
  
    return(
        <>
            <div className={`h-[100vh] ${isOpen ? 'w-[19vw]' : 'w-[0]'} bg-[#101c44] text-white flex   gap-8 flex-col justify-start p-7 items-center`}>
        
          <div className="w-full flex justify-between m-5 border-b-[2px] border-white p-2 ">
                        <h1 className="text-WHITE text-xl font-bold">BACK OFFICE</h1>
                        <button className="" onClick={()=>setIsOpen(false)}><MdCancel size={25} /></button>

          </div>
          
        <div className="flex cursor-pointer justify-start gap-4  w-full items-center">
                <div className="text-lg"><MdDashboard /></div>
                <div className="text-lg  font-bold">Dashbord</div>
            </div>
            <div className="flex cursor-pointer justify-start gap-4  w-full items-center">
                <div className="text-lg"><TbReport /></div>
                <div className="text-lg  font-bold">WEKKLEY REPORT</div>
            </div>
            <div className="flex cursor-pointer justify-start gap-4  w-full items-center">
                <div className="text-lg"><FaShopware /></div>
                <div className="text-lg  font-bold">SHOPS</div>
            </div>  <div className="flex cursor-pointer justify-start gap-4  w-full items-center">
                <div className="text-lg"><RiAdminFill /></div>
                <div className="text-lg  font-bold">ADMINE PKG</div>
            </div>  <div className="flex cursor-pointer justify-start gap-4  w-full items-center">
                <div className="text-lg"><IoTrailSignOutline /></div>
                <div className="text-lg  font-bold">TRANSITION</div>
            </div>  <div className="flex cursor-pointer justify-start gap-4  w-full items-center">
                <div className="text-lg"><RiLogoutBoxRFill /></div>
                <div className="text-lg  font-bold">SETTING</div>
            </div>
            <div className="flex cursor-pointer justify-start gap-4  w-full items-center">
                <div className="text-lg"><PiLockKeyFill /></div>
                <div className="text-lg  font-bold">SIGN OUT</div>
            </div>
            
        </div>
      
        </>
      
      
    )
}
export default Nav2