import React, { useState, useRef } from "react";

export function Grocery() {
  const [foods, setFoods] = useState([{ id: 1, text: "", completed: false }]);
  const inputRefs = useRef<HTMLInputElement[]>([]);

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLInputElement>,
    id: number,
    index: number
  ) {
    if (event.key === "Enter") {
      event.preventDefault();
      if (event.currentTarget.value.trim() !== "") {
        addFood(index + 1);
        inputRefs.current[index + 1].focus();
      }
    } else if (event.key === "Backspace" && event.currentTarget.value === "") {
      event.preventDefault();
      removeFood(id, index);
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      } else {
        inputRefs.current[0].focus();
      }
    }
  }

  function addFood(index: number) {
    console.log(index);
    const newFood = {
      id: Date.now(),
      text: "",
      completed: false,
    };
    const newFoods = [...foods];
    newFoods.splice(index, 0, newFood);
    console.log(newFoods)
    setFoods(newFoods);
  }

  function removeFood(id: number, index: number) {
    if (foods.length > 1) {
      const newFoods = foods.filter((food) => food.id !== id);
      setFoods(newFoods);
    }
  }

  function updateFoodText(id: number, newText: string) {
    if (newText.length === 1) {
      addFood(foods.length);
    }
    setFoods(
      foods.map((food) => (food.id === id ? { ...food, text: newText } : food))
    );
  }

  function toggleCompleted(id: number) {
    setFoods(
      foods.map((food) =>
        food.id === id ? { ...food, completed: !food.completed } : food
      )
    );
  }
  console.log(foods);
  return (
    <>
      <div className="font-nunito p-20">
        <h1 className="font-Nunito text-[28px] mb-10">Grocery List</h1>
        <ul className="space-y-3">
          {foods.map((food, index) => (
            <li key={food.id} className="text-[16px] flex items-center">
              <input
                type="checkbox"
                checked={food.completed}
                onChange={() => toggleCompleted(food.id)}
                className="mr-3 h-5 w-5 accent-[#fd614e] flex-shrink-0"
              />
              <input
                type="text"
                value={food.text}
                onChange={(e) => updateFoodText(food.id, e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, food.id, index)}
                ref={(el) => {
                  if (el) inputRefs.current[index] = el;
                }}
                className={`bg-transparent focus:outline-none flex-grow ${
                  food.completed ? "line-through text-gray-500" : ""
                }`}
                placeholder={
                  index === foods.length - 1 ? "Add new item..." : ""
                }
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-customGreen w-36 rounded-xl flex justify-center ml-60 mt-96">
        <span className="text-black p-2">Finish</span>
      </div>
    </>
  );
}
