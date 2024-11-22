export function SearchBar() {
      
    return (
      <div className="flex justify-center p-8">
        <div className="flex items-center px-4 py-2 bg-white border border-mainRed rounded-full"  >    
        <img src ="src/assets/icons/Search.svg"  alt="Search icon" className="w-5 h-5 mr-2 " />
        <input className ="text-left font-Nunito w-80 outline-none" placeholder="Search Recipe" />
        </div> 
      </div>
    )
  }

 //* <p className= "font-Nunito">halló heimur</p>
  
  //*<button class = " bg-blue-500"></button>