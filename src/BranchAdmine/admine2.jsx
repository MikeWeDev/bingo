import { SiShutterstock } from "react-icons/si";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaCoins } from "react-icons/fa6";
import { CiFlag1 } from "react-icons/ci";
import { FaFlagCheckered } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import Nav2 from "./branchNav";
function Admine2({ isOpen2,setIsOpen2 }) {
  const blur = isOpen2 ? "opacity-[0.3]" : "opacity-[1]";
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date()); 
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = currentDateTime.toISOString().split('T')[0]; 


  // Initialize state for branches
  const [branch1, setBranch1] = useState({ totalProfit: 0 });
  const [branch2, setBranch2] = useState({ totalProfit: 0 });
  const [branch3, setBranch3] = useState({ totalProfit: 0 });

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

  return (
    <div className="flex mt-[10%]">
     <Nav2  isOpen2={isOpen2} setIsOpen2={setIsOpen2}/>
      <div
        className={`h-[100vh] ${blur}  w-[81vw] gap-4 flex flex-col justify-around bg-white p-5 `}
      >

        <div className="flex justify-between flex-1 ">
          {/* Branch 1 */}
          <div className="w-[30%] h-full bg-[#134074] flex flex-col justify-around items-start pl-8 text-white ">
            <h1 className="text-3xl">
              <FaMoneyCheckDollar />
            </h1>
            <h2 className="text-2xl font-bold font-saarif">TOTAL GAIN</h2>
            <h3 className="text-xl font-bold font-saarif">
              {branch1.totalGain}
            </h3>
            <p className="text-lg font-bold font-saarif">
              Profit by <span className="text-red-500">15%</span>
            </p>
          </div>

          {/* Branch 2 */}
          <div className="w-[30%] h-full bg-[#134074] flex flex-col justify-around items-start pl-8 text-white ">
            <h1 className="text-3xl">
              <FaMoneyCheckDollar />
            </h1>
            <h2 className="text-2xl font-bold font-saarif">HOUSE PROFIT</h2>
            <h3 className="text-xl font-bold font-saarif">
              {branch2.houseProfit}
            </h3>
            <p className="text-lg font-bold font-saarif">
              Profit by <span className="text-red-500">15%</span>
            </p>
          </div>

          {/* Branch 3 */}
          <div className="w-[30%] h-full bg-[#134074] flex flex-col justify-around items-start pl-8 text-white ">
            <h1 className="text-3xl">
              <FaMoneyCheckDollar />
            </h1>
            <h2 className="text-2xl font-bold font-saarif">TOTAL GAME</h2>
            <h3 className="text-xl font-bold font-saarif">
              {branch3.id}
            </h3>
            <p className="text-lg font-bold font-saarif">
              Profit by <span className="text-red-500">15%</span>
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="flex-1 p-4">
          <table className="w-full h-1/2 ">
            <thead>
              <tr>
                <th>Branch</th>
                <th>Total Gain</th>
                <th>House Profit</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>kirkose</td>
                <td>{branch1.totalGain}</td>
                <td>{branch1.houseProfit || 0}</td>
                <td>{formattedDate}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Admine2;
