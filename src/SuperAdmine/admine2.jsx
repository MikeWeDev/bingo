import React, { useState, useEffect } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { GoGraph } from "react-icons/go";
import { FaChartPie } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCalendarAlt } from "react-icons/fa";
import { BsFileBarGraphFill } from "react-icons/bs";

function Admine2({ isOpen,handleClick }) {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = currentDateTime.toISOString().split("T")[0];

  // Initialize state for branches
  const [branch1, setBranch1] = useState({ totalProfit: 0, totalGain: 0 });
  const [branch2, setBranch2] = useState({ houseProfit: 0, totalGain: 0 });
  const [branch3, setBranch3] = useState({ id: 0, totalGain: 0 });

  const [visibility, setVisibility] = useState({
    branch1: false,
    branch2: false,
    branch3: false,
  });

  useEffect(() => {
    fetch("https://run.mocky.io/v3/4e2ba548-e283-498f-9e77-5307b59d3f4d")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.length >= 3) {
          setBranch1(data[0]); // First branch
          setBranch2(data[1]); // Second branch
          setBranch3(data[2]); // Third branch
        } else {
          console.error("Insufficient data received");
        }
      })
      .catch((error) =>
        console.error("There was a problem with the fetch operation:", error)
      );
  }, []);

  const toggleVisibility = (branchKey) => {
    setVisibility((prev) => ({
      ...prev,
      [branchKey]: !prev[branchKey], // Toggle visibility for the specific branch
    }));
  };

  return (
    <div
      className={`h-[100vh] absolute top-0 right-0 ${isOpen ? 'w-[81vw]' : 'w-[100vw]'} gap-4 flex flex-col justify-around bg-[#0b1337] p-5`}
    >
         <div className={`h-[8vh] w-[5vw]  text-white`}>
          <button className={`text-white text-3xl ${isOpen ? 'opacity-[0]' : 'opacity-[1]'} `}  onClick={()=>handleClick()} ><GiHamburgerMenu /></button>  
        </div>


      <div className="flex justify-between flex-1 flex-wrap gap-2">
        {/* Branch 1 */}
       { /**----------------------------------------------------------------------------*/}
    
        <div className="w-[30%] h-full bg-[#101c44] p-4 flex justify-start items-center gap-4 text-white">
          <h1 className="text-white font-bold">
            <FaCalendarAlt size={60} />
          </h1>
          <div>
            <h2 className="text-2xl text-[#9b9faa] font-saarif">DAILY TOTAL</h2>
            <h3 className="text-xl font-bold font-saarif">
              {visibility.branch1 ? `${branch1.totalGain} BIRR` : "****"}
            </h3>
            <button
              className="text-xl"
              onClick={() => toggleVisibility("branch1")}
            >
              <IoEyeSharp />
            </button>
          </div>
        </div>

        {/* Branch 2 */}
        <div className="w-[30%] h-full  bg-[#101c44] p-4 flex justify-start items-center gap-4 text-white">
          <h1 className="text-white font-bold">
            <BsFileBarGraphFill size={60} />
          </h1>
          <div>
            <h2 className="text-2xl text-[#9b9faa] font-saarif">
              DAILY CHANGE
            </h2>
            <h3 className="text-xl font-bold font-saarif">
              {visibility.branch2 ? `${branch2.houseProfit} BIRR` : "****"}
            </h3>
            <button
              className="text-xl"
              onClick={() => toggleVisibility("branch2")}
            >
              <IoEyeSharp />
            </button>
          </div>
        </div>

        {/* Branch 3 */}
        <div className="w-[30%] h-full bg-[#101c44] p-4 flex justify-start items-center gap-4 text-white">
          <h1 className="text-white font-bold">
            <BsFileBarGraphFill size={60} />
          </h1>
          <div>
            <h2 className="text-2xl text-[#9b9faa] font-saarif">TOTAL SHOP</h2>
            <h3 className="text-xl font-bold font-saarif">
              {visibility.branch3 ? `${branch3.totalGain}` : "****"}
            </h3>
            <button
              className="text-xl"
              onClick={() => toggleVisibility("branch3")}
            >
              <IoEyeSharp />
            </button>
          </div>
        </div>
       
      </div>

      {/* Table */}
      <div className="flex-1 p-4 text-white">
        <table className="w-full h-full">
          <thead>
            <tr>
              <th className="bg-[#244b96]">#</th>
              <th className="bg-[#244b96]">USER</th>
              <th className="bg-[#244b96]">GAMES</th>
              <th className="bg-[#244b96]">WIN</th>
              <th className="bg-[#244b96]">PROFIT</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>kirkose</td>
              <td>{branch1.totalGain}</td>
              <td>{branch1.houseProfit || 0}</td>
              <td>{formattedDate}</td>
              <td>{formattedDate}</td>

            </tr>
            <tr>
              <td>lideta</td>
              <td>{branch2.totalGain}</td>
              <td>{branch2.houseProfit || 0}</td>
              <td>{formattedDate}</td>
              <td>{formattedDate}</td>

            </tr>
            <tr>
              <td>saris</td>
              <td>{branch3.totalGain}</td>
              <td>{branch3.houseProfit || 0}</td>
              <td>{formattedDate}</td>
              <td>{formattedDate}</td>

            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admine2;

