import Nav from "./navbar";
import Nav2 from "./SuperAdmine/branchNav";
import Admine1 from "./Admine/admine1";
import Admine2 from "./SuperAdmine/admine2";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Settings from "./Setting/seting";
import Nav3 from "./Setting/SettingNav";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
              <Admine1 isOpen={isOpen} setIsOpen={setIsOpen} handleClick={handleClick} />
            </>
          }
        />

        <Route
          path="/Admine"
          element={
            <>
              <Nav2 isOpen={isOpen} setIsOpen={setIsOpen} />
              <Admine2 isOpen={isOpen} setIsOpen={setIsOpen} handleClick={handleClick} />
            </>
          }
        />
         <Route
          path="/setting"
          element={
            <>
             <Nav3     isOpen={isOpen} setIsOpen={setIsOpen}   />
             <Settings isOpen={isOpen} setIsOpen={setIsOpen} handleClick={handleClick}/>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
