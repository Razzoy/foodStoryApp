export function Login() {
  return (
    <div className="w-full flex justify-center p-8">
    <div className="flex flex-col max-w-md  ">
      <img className="flex justify-left flex-wrap w-[110px]  " src="src/assets/icons/Logo.svg"></img>
      <div className="flex flex-col mt-10 gap-4">
        <h1 className="text-3xl font-bold flex font-Bodoni">Cook What You Have,</h1>
        <h2 className="text-xl font-Bodoni italic  ">Discover What You Love!</h2>
      </div>
      <div className="flex justify-center">
        <img className=" " src="src/assets/icons/mainPicture.svg"></img>
      </div>
     
      <h1 className="font-Nunito flex justify-center text-wrap text-xl"> Login</h1>
      <div className="flex items-center flex-col p-4 text-neutral-400">
        <div className="border-2 border-customGreen rounded-lg w-80 flex  cursor-pointer p-2 ">
          <input className="text-left font-Nunito w-80 outline-none" placeholder="Email"/>
        </div>
      </div>
      <div className="flex items-center flex-col ">
        <div className="border-2 border-customGreen rounded-lg w-80 flex p-2 cursor-pointer text-neutral-400 ">
          <input type= "password" className="text-left font-Nunito w-80 outline-none" placeholder="Password"/>
        </div>
      </div>
      <div className="flex justify-center p-4">
      <div className="border-2 border-customGreen rounded-xl w-80 p-2 bg-customGreen flex justify-center  ">
      <button className="font-Nunito  ">
        Get started
      </button>
      </div>
      </div>
    
    </div>
    </div>
    /*border-radius: 8px;
        border: none;
        height: 1rem;
        justify-content: center;
        display: flex;
        cursor: pointer;
        padding: 10px; */
  )
}
