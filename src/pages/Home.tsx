import { Link } from "react-router-dom";
import { Card } from "../components/Card/Card";
import { FetchApi } from "@/components/FetchApi/FetchApi";
import arrow from "../assets/icons/Arrowright.svg";

export function Home() {
  return (
    <div>
      <h1 className="font-Bodoni text-[46px] pl-4 py-4">
        Hi, <strong>Kristín!</strong>
      </h1>
      <div className="p-4">
        <h2 className="font-Nunito text-[28px] pb-2">My recipes</h2>
        <div className="flex overflow-x-scroll w-full">
          <FetchApi>
            {(recipes) => (
              <div className="flex space-x-7">
                {recipes.slice(0, 3).map((recipe) => (
                  <a href={"/recipe/" + recipe.id}>

                    <Card
                      title={recipe.title}
                      time={`${recipe.time}` + ` min`}
                      image={recipe.image}
                      recipeId={recipe.id}
                    />
                  </div>
                ))}
                <div className="h-full flex items-center">
                  <Link to="myRecipes">
                    <img src={arrow}></img>
                  </Link>
                </div>
              </div>
            )}
          </FetchApi>
        </div>
        <div className="w-full flex justify-end pt-4 pr-4">
          <Link to="myRecipes">View all</Link>
        </div>
      </div>
      <div className="p-4">
        <h1 className="font-Nunito text-[28px] pb-2">Favorites</h1>
        <div className="flex overflow-x-scroll w-full">
          <FetchApi>
            {(recipes) => (
              <div className="flex space-x-7">
                {recipes.length < 0 ? (
                  recipes.map((recipe) => (
                    <div className="w-44">
                      <Card
                        key={recipe.id}
                        title={recipe.title}
                        time={`${recipe.time} min`}
                        image={recipe.image}
                      />
                    </div>
                  ))
                ) : (
                  <div className="w-44">
                    <Card
                      title="No Recipes Found"
                      time="N/A"
                      image="/path/to/placeholder-image.png" // Replace with your placeholder image path
                    />
                  </div>
                )}
                <div className="h-full flex items-center">
                  <Link to="myRecipes">
                    <img src={arrow}></img>
                  </Link>
                </div>
              </div>
            )}
          </FetchApi>
        </div>
        <div className="w-full flex justify-end pt-4 pr-4">
          <Link to="myRecipes">View all</Link>
        </div>
      </div>
      <div className="p-4">
        <h1 className="font-Nunito text-[28px] pb-2">Recommendation</h1>
        <div className="flex overflow-x-scroll w-full">
          <FetchApi>
            {(recipes) => {
              // Shuffle the recipes array
              const shuffledRecipes = [...recipes].sort(
                () => 0.5 - Math.random()
              );

              // Get the first 3 recipes from the shuffled array
              const randomRecipes = shuffledRecipes.slice(0, 3);

              return (
                <div className="flex space-x-7">
                  {randomRecipes.length > 0 ? (
                    randomRecipes.map((recipe) => (
                      <div className="w-44">
                        <Card
                          key={recipe.id}
                          title={recipe.title}
                          time={`${recipe.time} min`}
                          image={recipe.image}
                        />
                      </div>
                    ))
                  ) : (
                    <Card
                      title="No Recipes Found"
                      time="N/A"
                      image="/path/to/placeholder-image.png" // Replace with your placeholder image path
                    />
                  )}
                  <div className="h-full flex items-center">
                    <Link to="myRecipes">
                      <img src={arrow}></img>
                    </Link>
                  </div>
                </div>
              );
            }}
          </FetchApi>
        </div>
        <div className="w-full flex justify-end pt-4 pr-4">
          <Link to="myRecipes">View all</Link>
        </div>
      </div>
    </div>
  );
}
