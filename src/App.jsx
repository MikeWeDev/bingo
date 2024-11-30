import Nav from "./navbar"
import Admine1 from "./SuperAdmin/admine1"
import Admine2 from "./BranchAdmine/admine2"
import { Card } from "./Card/Card"
import Login from "./login/Login"
import { useState } from "react"

function App() {
   const [isOpen,setIsOpen]=useState(false)
  const handleClick=()=>{
     setIsOpen(true)
  }
  return (
    <>
    <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
    <Admine1  isOpen={isOpen} setIsOpen={setIsOpen} handleClick={handleClick} />
    </>
  )
}

export default App
