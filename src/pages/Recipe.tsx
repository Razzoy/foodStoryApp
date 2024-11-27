export function Recipe() {
  return (
    <>

      <img src=""></img>
      <h1 className="font-Nunito p-8 text-4xl">Title</h1>
      <div className="flex flex-center gap-28 justify-center">
        <div className="flex flex-col items-center">
          <div className=" flex ">
            <img className="w-4" src="src/assets/icons/Minus.svg"></img>
            <p className="text-2xl font-Nunito ">2</p>
            <img className="w-4" src="src/assets/icons/Plus.svg"></img>
          </div>
          <p className="font-Nunito">Serving</p>
        </div>
        <div className="flex flex-col items-center">
          <img className="w-8 " src="src/assets/icons/blackWatch.svg"></img>
          <p className="font-Nunito">Min</p>
        </div>
        <div className="flex flex-col items-center">
          <img className="w-8" src="src/assets/icons/Muscle.svg"></img>
          <p className="font-Nunito">Easy</p>
        </div>
      </div>
    </>
  )
}
