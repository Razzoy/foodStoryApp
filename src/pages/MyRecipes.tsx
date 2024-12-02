import { SearchBar } from "../components/SearchBar/SearchBar";
import { Card } from "../components/Card/Card";
import { FetchApi } from "@/components/FetchApi/FetchApi";

export function MyRecipes() {
  return (
    <div>
      <SearchBar />
      <h1 className="font-Nunito text-[28px] p-4">My recipes</h1>
      <FetchApi>
        {(recipes) => (
          <div className="grid grid-cols-12 gap-4 sm:gap-7 p-4">
            {recipes.map((recipe) => (
              <div className="col-span-6 xs:col-span-4 md:col-span-3 xl:col-span-2">
                <Card
                  recipeId={recipe.id}
                  title={recipe.title}
                  time={`${recipe.time}` + ` min`}
                  image={recipe.image}
                />
              </div>

            ))}
          </div>
        )}
      </FetchApi>
    </div>
  );
}
