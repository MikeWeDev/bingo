import Nav from "./navbar"
import Admine1 from "./SuperAdmin/admine1"
import Admine2 from "./BranchAdmine/admine2"
import { Card } from "./Card/Card"
import Login from "./login/Login"
import { useState } from "react"
import { Card2 } from "./BranchAdmine/BranchCard"

function App() {
   const [isOpen,setIsOpen]=useState(false)
   const [isOpen2,setIsOpen2]=useState(false)

  return (
    <>
    <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
    {/**<Bingo /> */}
    <Admine1  isOpen={isOpen} setIsOpen={setIsOpen} />
    <Admine2  isOpen2={isOpen2} setIsOpen2={setIsOpen2} />
    <Card isOpen={isOpen} setIsOpen={setIsOpen} />
    <Card2 isOpen2={isOpen2} setIsOpen2={setIsOpen2} />


    <Login />
    </>
  )
}

export default App
