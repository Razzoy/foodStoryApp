
import { useState } from "react";

export function Grocery() {
  console.log ("Grocery component is rendering");
  const [foods, setFoods] = useState([

    {
      id:1,
      text: 'Chicken',
      completed: true
    },
    {
      id:2,
      text: 'Yogurt',
      completed: false
    }, 
    {
      id:3,
      text: 'Tomato',
      completed: true
    },
    {
      id:4,
      text: 'Cucumber',
      completed: false
    }, 
    {
      id:5,
      text: '',
      completed: false,
      isDisplayOnly: true
    }, 
    {
      id:6,
      text: '',
      completed: false,
      isDisplayOnly: true
    }, 
    {
      id:7,
      text: '',
      completed: false,
      isDisplayOnly: true
    }, 
    {
      id:8,
      text: '',
      completed: false,
      isDisplayOnly: true
    }, 
    {
      id:9,
      text: '',
      completed: false,
      isDisplayOnly: true
    }, 
    {
      id:10,
      text: '',
      completed: false,
      isDisplayOnly: true
    }, 
    {
      id:11,
      text: '',
      completed: false,
      isDisplayOnly: true
    }, 
    {
      id:12,
      text: '',
      completed: false,
      isDisplayOnly: true
    } 
  ]
  );
  const [text, setText] = useState('');

    function addFood(text:string){
      if(text.trim()=='') {
      const newFood = {
        id: Date.now(),text, 
        completed: false
      };
      setFoods([...foods, newFood]);
      setText('');
      }
    }
    function deleteFood(id:number) {
      setFoods(foods.filter(food=>food.id !== id));
    }
      function toggleCompleted (id:number) {
        setFoods(foods.map(food =>{
          if (food.id ===id && !food.isDisplayOnly) {
            return {...food, completed: !food.completed};
        }
        	else{
            return food;
          }
      }));
    }

            // text 2xl=32 px/
            return (
              <div className = " font-nunito p-20 ">
                <h1 className = "font-semibold text-2xl mb-10">Grocery List</h1> 
                <ul className = "space-y-3 ">
                  {foods.map(food => (
                    <li key={food.id} className="text-[16px]  "> 
                      <input 
                        type="checkbox" 
                        checked={food.completed} 
                        onChange={() => toggleCompleted(food.id)} 
                        disabled={false} //*gerir checkbox óvirkt*//
                        title = {food.text} //when hover over  checkbox, the color change*//
                        className= "mr-3  h-5 w-5 accent-[#fd614e]" //accent is for the color inside the checkbox*//

                      />
                      {food.text}
                      {!food.isDisplayOnly && (

                      <button onClick={() => deleteFood(food.id)}></button>
                      )}
                    </li>
                  ))}
                </ul>
                <input 
                  value={text} 
                  onChange={(e) => setText(e.target.value)} 
                />
     
    </div>
  );
}

   
          
      