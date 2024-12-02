import { MdDashboard } from "react-icons/md";
import { BiSolidJoystickButton } from "react-icons/bi";
import { MdCancel } from "react-icons/md";
import { RiFileAddFill } from "react-icons/ri";
import { IoEyeSharp } from "react-icons/io5";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";
import { Link } from "react-router-dom";
import { RiAdminFill } from "react-icons/ri";

function Nav({isOpen,setIsOpen}){
  
    return(
        <>
            <div className={`h-[100vh] ${isOpen ? 'w-[19vw]' : 'w-[0]'} bg-black text-white flex gap-5 flex-col justify-start p-7 items-center`}>
          <div className="w-full flex justify-between m-5 ">
                        <h1 className="text-green-500 text-xl font-bold">CLASSIC BINGO </h1>
                        <button className="" onClick={()=>setIsOpen(false)}><MdCancel size={25} /></button>

          </div>
          
        <div className="flex cursor-pointer justify-start gap-4 border-b-[2px] border-white p-2  rounded-b-lg  w-full items-center">
                <div className="text-xl"><MdDashboard /></div>
                <div className="text-xl  font-bold">Dashbord</div>
            </div>

            <div className="flex cursor-pointer justify-start gap-4 border-b-[2px] border-white p-2  rounded-b-lg  w-full items-center">     
                <div className="text-xl"><RiAdminFill /></div>
                   <div className="text-md font-bold">
                    <Link to="/Admine">SUPER-ADMINE</Link>
                    </div>
            </div> 


            <div className="flex cursor-pointer justify-start gap-4 border-b-[2px] border-white p-2  rounded-b-lg  w-full items-center">
                <div className="text-xl"><BiSolidJoystickButton /></div>
                <div className="text-xl  font-bold">PLAY BINGO!</div>
            </div>
            <div className="flex cursor-pointer justify-start gap-4 border-b-[2px] border-white p-2  rounded-b-lg  w-full items-center">
                <div className="text-xl"><RiFileAddFill /></div>
                <div className="text-xl  font-bold">ADD CARD</div>
            </div>  <div className="flex cursor-pointer justify-start gap-4 border-b-[2px] border-white p-2  rounded-b-lg  w-full items-center">
                <div className="text-xl"><IoEyeSharp /></div>
                <div className="text-xl  font-bold">CARD LIST</div>
            </div>  <div className="flex cursor-pointer justify-start gap-4 border-b-[2px] border-white p-2  rounded-b-lg  w-full items-center">
                <div className="text-xl"><IoSettings /></div>
                <div className="text-xl  font-bold">
                    <Link to="/setting">SETTING</Link>
                </div>
                </div>
                
             <div className="flex cursor-pointer justify-start gap-4 border-b-[2px] border-white p-2  rounded-b-lg  w-full items-center">
                <div className="text-xl"><RiLogoutBoxRFill /></div>
                <div className="text-xl  font-bold">LOG OUT</div>
            </div>
            
        </div>
      
        </>
      
      
    )
}
export default Nav