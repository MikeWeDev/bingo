import {useState} from "react"
function Login() {
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")

  const handleSubmit=()=>{
    setPassword("");
    setUsername("");
    alert(`ACCOUNT CREATED SUCCESSFULLY (${username})`)
 }
 
  return (
    <div className="w-full h-[100vh] border justify-center bg-[#EDF4ED] flex items-start ">
        <div className="wrapper h-[50%] w-[80%] flex flex-col justify-center items-center mt-[15vh]">
            <h1 className="font-bold  text-2xl w-1/2 p-4 sm:text-5xl text-black">Sign In</h1>
            <form onSubmit={handleSubmit} className=" flex w-1/2 flex-col gap-3" >
                <input className="  border-black border-[2px] font-bold p-2 "
                 type="name"
                  placeholder="username" 
                  value={username}
                  onChange={(e)=>setUsername(e.target.value)}
                />
                <select name="" id="" className=" border-black border-[2px]  uppercase opacity-[0.8]  p-2" >
                  <option value="">select your branch</option>
                  <option value="">KIRKOSE</option>
                  <option value="">LIDETA</option>
                  <option value="">SARIS</option>
                </select>
                <input className="border-black border-[2px] font-bold p-2" 
                 type="password"
                 placeholder="password"
                 value={password}
                 onChange={(e)=>setPassword(e.target.value)}
                 />
        <button className="bg-teal-500 p-2  text-white translate-x-[50%] w-1/2 ">
            Create
        </button>
            </form>
        </div>
    </div>
  )
}

export default Login
