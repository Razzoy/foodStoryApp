import { useState } from "react";

export type IngredientProps = {
  ingredient?: { item: string; amount: number; unit: string };
};

export function Ingredient({ ingredient }: IngredientProps) {
  const [isAdded, setIsAdded] = useState(false);

  console.log("ingredients:", ingredient);
  if (!ingredient) {
    return <h1>spinner</h1>;
  }
  return (
    <div className="flex gap-2 w-full justify-between">
      <p className="font-Nunito">
        {ingredient.amount ?? 3} {ingredient.unit ?? "cups"}{" "}
        {ingredient.item ?? "flour"}
      </p>
      <button onClick={() => setIsAdded(!isAdded)}>
        {!isAdded ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="plus-sign-stroke-rounded">
              <path
                id="Vector"
                d="M12 4V20M20 12H4"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M8.09394 16C7.73543 16 7.39586 15.826 7.17828 15.526L4.23349 11.479C4.14224 11.3541 4.07559 11.2117 4.03738 11.06C3.99917 10.9082 3.99014 10.7501 4.01082 10.5947C4.03149 10.4393 4.08146 10.2897 4.15786 10.1545C4.23426 10.0192 4.33559 9.90099 4.45602 9.80656C4.57615 9.71139 4.71319 9.64185 4.85925 9.60195C5.00532 9.56206 5.15752 9.5526 5.30711 9.57411C5.4567 9.59562 5.60073 9.64768 5.73091 9.72729C5.86109 9.80691 5.97485 9.91251 6.06564 10.038L8.00328 12.6988L12.875 4.56208C13.0366 4.29342 13.294 4.10239 13.5908 4.03088C13.8876 3.95936 14.1996 4.01321 14.4582 4.18061C14.9964 4.52864 15.1621 5.26586 14.8258 5.82648L9.06977 15.4359C8.97151 15.6007 8.83607 15.7381 8.67521 15.8361C8.51435 15.9341 8.33293 15.9897 8.14669 15.9983L8.09394 16Z"
              fill="salmon"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
