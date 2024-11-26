import { Card } from "../components/Card/Card";

export function Home() {
  return (
    <div>
      <h1 className="font-Nunito text-xl p-4">My recipes</h1>
      <div className="flex space-x-7 p-4 overflow-hidde w-max">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <h1 className="font-Nunito text-xl p-4">Favorites</h1>
      <div className="flex overflow-hidden w-max space-x-7 p-4 ">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <h1 className="font-Nunito text-xl p-4">Recommendation</h1>
      <div className="flex overflow-hidden w-max space-x-7 p-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
