import { Link } from "react-router-dom";

type Props = {
  hidemodal: () => void
}
export function BurgerModal({ hidemodal }: Props) {
  return (
    <div className="bg-black/80 fixed w-screen h-screen z-10" onClick={hidemodal}>
      <div className="flex flex-col gap-6 h-full">
        <div className="text-white flex flex-col justify-center gap-2 h-full items-center">
          <div className="flex gap-3">
            <img className="w-4" src="src/assets/icons/Settings.svg"></img>
            <button className="text-left w-48">Account settings</button>
          </div>
          <div className="flex gap-3">
            <img className="w-3" src="src/assets/icons/Help.svg"></img>
            <button className="text-left w-48">Help center</button>
          </div>
          <div className="flex gap-3">
            <img className="w-4" src="src/assets/icons/Terms.svg"></img>
            <button className="text-left w-48">Terms and conditions</button>
          </div>

          <Link to="/login" className="flex justify-center p-12">
            <div className="bg-customGreen w-56 rounded-xl flex justify-center">
              <span className="text-white p-2">Log out</span>
            </div>
          </Link>
          
        </div>
        <div className="flex justify-center"></div>
      </div>
    </div>
  );
}
