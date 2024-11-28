
import { Card } from "../components/Card/Card";
import { FetchApi } from "@/components/FetchApi/FetchApi";

export function Home() {
  return (

    <div className="">
      <div className="p-4">
        <h1 className="font-Nunito text-xl pb-2">My recipes</h1>
        <div className="flex overflow-x-scroll w-full">
          <FetchApi>
            {(recipes) => (
              <div className="flex space-x-7">
                {recipes.map((recipe) => (
                  <Card
                    key={recipe.id}
                    title={recipe.title}
                    time={`${recipe.time}` + ` min`}
                    image={recipe.image} />
                ))}
              </div>
            )}
          </FetchApi>
        </div>
      </div>
      <div className="p-4">
        <h1 className="font-Nunito text-xl pb-2 ">Favorites</h1>
        <div className="flex overflow-x-scroll w-full">
          <FetchApi>
            {(recipes) => (
              <div className="flex space-x-7">
                {recipes.length < 0 ? (
                  recipes.map((recipe) => (
                    <Card
                      key={recipe.id}
                      title={recipe.title}
                      time={`${recipe.time} min`}
                      image={recipe.image}
                    />
                  ))
                ) : (
                  <Card
                    title="No Recipes Found"
                    time="N/A"
                    image="/path/to/placeholder-image.png" // Replace with your placeholder image path
                  />
                )}
              </div>
            )}
          </FetchApi>
        </div>
      </div>
      <div className="p-4">
        <h1 className="font-Nunito text-xl pb-2">Recommendation</h1>
        <div className="flex overflow-x-scroll w-full">
          <FetchApi>
            {(recipes) => {
              // Shuffle the recipes array
              const shuffledRecipes = [...recipes].sort(() => 0.5 - Math.random());

              // Get the first 3 recipes from the shuffled array
              const randomRecipes = shuffledRecipes.slice(0, 3);

              return (
                <div className="flex space-x-7">
                  {randomRecipes.length > 0 ? (
                    randomRecipes.map((recipe) => (
                      <Card
                        key={recipe.id}
                        title={recipe.title}
                        time={`${recipe.time} min`}
                        image={recipe.image}
                      />
                    ))
                  ) : (
                    <Card
                      title="No Recipes Found"
                      time="N/A"
                      image="/path/to/placeholder-image.png" // Replace with your placeholder image path
                    />
                  )}
                </div>
              );
            }}
          </FetchApi>

        </div>
      </div>
    </div>
  );
}
