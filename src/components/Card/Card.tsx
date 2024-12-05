import HeartIcon from "@/components/HeartIcon/HeartIcon";
import watch from "@/assets/icons/Watch.svg"

export type CardProps = {
  title?: string;
  time?: string;
  image?: string;
  recipeId?: string;
  favorite?: boolean;
};

export function Card({ title, time, image, recipeId, favorite }: CardProps) {
  if (!recipeId || favorite === undefined) return <h2>loading...</h2>;
  return (
    <div className="relative">
      <a
        className="bg-center bg-cover rounded-xl h-64 flex flex-col justify-end"
        style={{
          backgroundImage: `url(${
            image ?? "/src/assets/img/Cheeseburgers.png"
          })`,
        }}
        href={"/recipe/" + recipeId}
      >
        <div className="bg-gradient-to-t from-lime-800 from 100% rounded-xl h-36 flex flex-col justify-end">
          <div className="p-2 flex flex-col">
            <h3 className="text-white self-stretch text-sm font-semibold ml-2">
              {title ?? "Cheeseburgers"}
            </h3>
            <div className="flex justify-between p-2">
              <div className="flex items-center gap-1">
                <img src={watch} alt="" className="w-3" />
                <p className="text-white text-xs">{time ?? "30 min"}</p>
              </div>
            </div>
          </div>
        </div>
      </a>
      <HeartIcon recipeID={recipeId} isFavorite={favorite} />
    </div>
  );
}
