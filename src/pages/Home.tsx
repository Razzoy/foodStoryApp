import { Card } from "../components/Card/Card";

export function Home() {
  return (

    <div className="">
      <div className="p-4">
        <h1 className="font-Nunito text-xl pb-2">My recipes</h1>
        <div className="flex overflow-scroll w-full">
          <div className="flex space-x-7">
            <Card title="lasagna" time="1 klst" />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <div className="p-4">
        <h1 className="font-Nunito text-xl pb-2 ">Favorites</h1>
        <div className="flex  overflow-scroll w-full">
          <div className="flex space-x-7">

            <Card />
            <Card />
            <Card />
            <Card />
            <button>See more</button>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h1 className="font-Nunito text-xl pb-2">Recommendation</h1>
        <div className="flex overflow-scroll w-full">
          <div className="flex space-x-7">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}
