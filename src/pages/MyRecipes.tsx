import { SearchBar } from "../components/SearchBar/SearchBar";
import { Card } from "../components/Card/Card";
import { FetchApi } from "@/components/FetchApi/FetchApi";

export function MyRecipes() {
  return (
    <div>
      <SearchBar />
      <h1 className="font-Nunito text-xl p-4">My recipes</h1>
      <FetchApi>
        {(recipes) => (
          <div className="flex flex-wrap gap-7 p-4">
            {recipes.map((recipe) => (
              <a href={"/recipe/" + recipe.id}>
                <Card
                  key={recipe.id}
                  title={recipe.title}
                  time={`${recipe.time}` + ` min`}
                  image={recipe.image}
                />
              </a>
            ))}
          </div>
        )}
      </FetchApi>
    </div>
  );
}
