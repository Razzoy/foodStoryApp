import { SearchBar } from "../components/SearchBar/SearchBar";
import { Card } from "../components/Card/Card";
export function MyRecipes() {
  return (
    <div>
      <SearchBar />
      <h1 className="font-Nunito text-xl p-4">My recipes</h1>
      <div className="flex flex-wrap justify-evenly overflow-y-scroll">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
