import { Link } from "react-router-dom";
import { Card } from "../components/Card/Card";
import arrow from "../assets/icons/Arrowright.svg";
import { FetchApi } from "@/components/FetchApi/FetchApi";

type Recipe = {
  id: string;
  title: string;
  time: number;
  difficulty: string;
  ingredients: { item: string; amount: number; unit: string }[];
  instructions: { step: number; instruction: string }[];
  image: string;
  user_id: number;
  favorite: boolean;
  servings: number;
};

export function Home() {
  return (
    <FetchApi>
      {(recipes) => (
        <div>
          <h1 className="font-Bodoni text-[46px] pl-4 py-4">
            Hi, <strong>Kristín!</strong>
          </h1>

          {/* My Recipes Section */}
          <Section
            title="My recipes"
            recipes={recipes.slice(0, 4)}
            viewMoreLink="myRecipes"
          />

          {/* Favorites Section */}
          <Section
            title="Favorites"
            recipes={recipes.filter((recipe) => recipe.favorite).slice(0, 4)}
            viewMoreLink="myRecipes"
            placeholder={{
              title: "No Favorites Found",
              time: "N/A",
              image: "/path/to/placeholder-image.png",
            }}
          />

          {/* Recommendations Section */}
          <Section
            title="Recommendation"
            recipes={getRandomRecipes(recipes, 4)}
            viewMoreLink="myRecipes"
            placeholder={{
              title: "No Recommendations Found",
              time: "N/A",
              image: "/path/to/placeholder-image.png",
            }}
          />
        </div>
      )}
    </FetchApi>
  );
}

interface SectionProps {
  title: string;
  recipes: Recipe[];
  viewMoreLink: string;
  placeholder?: {
    title: string;
    time: string;
    image: string;
  };
}

const Section: React.FC<SectionProps> = ({
  title,
  recipes,
  viewMoreLink,
  placeholder,
}) => (
  <div className="p-4">
    <h2 className="font-Nunito text-[28px] pb-2">{title}</h2>
    <div className="flex overflow-x-scroll w-full">
      <div className="flex space-x-7">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div key={recipe.id} className="w-44">
              <Card
                title={recipe.title}
                time={`${recipe.time} min`}
                image={recipe.image}
                recipeId={recipe.id}
                favorite={recipe.favorite}
              />
            </div>
          ))
        ) : placeholder ? (
          <div className="w-44">
            <Card
              title={placeholder.title}
              time={placeholder.time}
              image={placeholder.image}
            />
          </div>
        ) : null}
        <div className="h-full flex items-center">
          <Link to={viewMoreLink}>
            <img src={arrow} alt="View more" />
          </Link>
        </div>
      </div>
    </div>
    <div className="w-full flex justify-end pt-4 pr-4">
      <Link to={viewMoreLink}>View all</Link>
    </div>
  </div>
);

function getRandomRecipes(recipes: Recipe[], count: number): Recipe[] {
  const shuffled = [...recipes].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
