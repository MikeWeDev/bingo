
import { useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";

export const Card2 = ({ isOpen2, setIsOpen2 }) => {
  // Initialize the state as an object to hold values for each column (B, I, N, G, O)
  const [cardValues, setCardValues] = useState({
    B: [null, null, null, null, null],
    I: [null, null, null, null, null],
    N: [null, null, null, null, null],
    G: [null, null, null, null, null],
    O: [null, null, null, null, null],
  });

  const values = isOpen2 ? "translate-x-[0%]" : "translate-x-[-400%]";

  // Function to handle input changes and update state
  const handleInputChange = (column, index, newValue) => {
    setCardValues((prevValues) => {
      const updatedValues = { ...prevValues };
      updatedValues[column][index] = newValue;
      return updatedValues;
    });
  };

  return (
    <>
      <div
        className={`bg-red-500 ${values}  border-b-[2px] border-black absolute top-[130%] left-[30%] w-[40%]  flex justify-center items-center`}
      >
        <div className="w-[500px] h-[450px]  flex flex-col items-center gap-4">
          <div className="flex relative text-white text-2xl font-bold ">
            CREATE A CARD
            <span
              className="mt-1 absolute right-[-80%] text-3xl  cursor-pointer text-center"
              onClick={() => setIsOpen2(false)}
            >
              <FaDeleteLeft />
            </span>
          </div>
          <div className="border border-[2px] flex">
            {["B", "I", "N", "G", "O"].map((column) => {
              return (
                <div key={column} className="border border-[2px] flex flex-col">
                  <div className="text-xl font-bold text-center">{column}</div>
                  {[0, 1, 2, 3, 4].map((index) => (
                    <input
                      key={`${column}-${index}`}
                      type="number"
                      value={cardValues[column][index]}
                      className="w-[100%]  border border-[2px] text-center text-xl font-bold font-saarif  h-[50px]"
                      onChange={(e) =>
                        handleInputChange(column, index, Number(e.target.value))
                      }
                    />
                  ))}
                </div>
              );
            })}
          </div>
          <button className="bg-green-400 w-1/2  p-3 font-bold rounded-lg">
            Add card
          </button>
        </div>
      </div>
    </>
  );
};

