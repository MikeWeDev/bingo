import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Settings = ({ isOpen, handleClick }) => {
  const [hideWinAmount, setHideWinAmount] = useState("");
  const [cartelaOption, setCartelaOption] = useState("");
  const [winnerType, setWinnerType] = useState("");
  const [theme, setTheme] = useState("");

  return (
    <div
      className={`h-[100vh] absolute top-0 right-0 ${
        isOpen ? "w-[81vw]" : "w-[100vw]"
      } bg-white rounded-lg shadow-md flex flex-col justify-around bg-[#0b1337] p-10 gap-4 `}
    >
      {/* Hamburger Button */}
      <div className="h-[5vh]  w-[5vw] text-black">
        <button
          className={`text-black text-3xl ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
          onClick={() => handleClick()}
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold mb-6 text-center text-black">Settings</h1>

      {/* Settings Content */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Hide Win Amount */}
        <div className="mb-6 text-black">
          <h3 className="text-lg font-bold mb-2 flex items-center">
            <span className="mr-2">💵</span> Hide Win Amount
          </h3>
          <div>
            <label className="flex items-center mb-2">
              <input
                type="radio"
                value="yes"
                checked={hideWinAmount === "yes"}
                onChange={() => setHideWinAmount("yes")}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="no"
                checked={hideWinAmount === "no"}
                onChange={() => setHideWinAmount("no")}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>

        {/* Cartela Options */}
        <div className="mb-6 text-black">
          <h3 className="text-lg font-bold mb-2 flex items-center">
            <span className="mr-2">🔗</span> Cartela Options
          </h3>
          <div>
            <label className="flex items-center mb-2">
              <input
                type="radio"
                value="cartelaCard"
                checked={cartelaOption === "cartelaCard"}
                onChange={() => setCartelaOption("cartelaCard")}
                className="mr-2"
              />
              Cartela Card
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="printTicket"
                checked={cartelaOption === "printTicket"}
                onChange={() => setCartelaOption("printTicket")}
                className="mr-2"
              />
              Print Ticket
            </label>
          </div>
        </div>

        {/* Winner Type */}
        <div className="lg:col-span-2 text-black">
          <h3 className="text-lg font-bold mb-2 flex items-center">
            <span className="mr-2">👑</span> Winner Type
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              "1 Pattern",
              "2 Pattern",
              "3 Pattern",
              "4 Pattern",
              "T Pattern",
              "X Pattern",
              "Square Pattern",
              "Full House",
            ].map((type, index) => (
              <label key={index} className="flex items-center">
                <input
                  type="radio"
                  value={type}
                  checked={winnerType === type}
                  onChange={() => setWinnerType(type)}
                  className="mr-2"
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        {/* Themes */}
        <div className="mb-6 text-black">
          <h3 className="text-lg font-bold mb-2 flex items-center">
            <span className="mr-2">🎨</span> Themes
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {["Classic black", "Black", "Keno", "Purple"].map((themeOption, index) => (
              <label key={index} className="flex items-center">
                <input
                  type="radio"
                  value={themeOption}
                  checked={theme === themeOption}
                  onChange={() => setTheme(themeOption)}
                  className="mr-2"
                />
                {themeOption}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
