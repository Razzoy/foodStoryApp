import { SearchBar } from "../components/SearchBar/SearchBar";
import { Card } from "../components/Card/Card";
export function MyRecipes() {
  return (
    <div>
      <SearchBar />
      <h1 className="font-Nunito text-xl p-4">My recipes</h1>
      <div className="flex flex-wrap space-x-7 p-4">
        <Card />
        <Card />
      </div>
      <div className="flex flex-wrap space-x-7 p-4">
        <Card />
        <Card />
      </div>
    </div>
  );
}
