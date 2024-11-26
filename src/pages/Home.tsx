import { Card } from "../components/Card/Card";

export function Home() {
  return (
    <div>
      <h1 className="font-Nunito text-xl p-4">My recipes</h1>
      <div className="flex p-4 overflow-scroll w-full"> 
        <div className="flex space-x-7">
        <Card />
        <Card />
        <Card />
        <Card />
        </div>
      </div>
      <h1 className="font-Nunito text-xl p-4">Favorites</h1>
      <div className="flex p-4 overflow-scroll w-full">
        <div className="flex space-x-7">
        <Card />
        <Card />
        <Card />
        <Card />
        </div>
      </div>
      <h1 className="font-Nunito text-xl p-4">Recommendation</h1>
      <div className="flex p-4 overflow-scroll w-full">
        <div className="flex space-x-7">
        <Card />
        <Card />
        <Card />
        <Card />
        </div>
      </div>
    </div>
  );
}
