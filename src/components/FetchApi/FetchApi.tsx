import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

type Recipe = {
    id: number;
    title: string;
    time: number;
    difficulty: string;
    ingredients: string[];
    instructions: string;
    image: string;
    user_id: number;
  };

export function FetchApi() {

    const [recipes, setRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        const getRecipes = async () => {
            const { data, error } = await supabase.from("Recipes").select();
            
            if (error) {
                console.error(`Error fetching recipes: ${error.message}`);
            } else {
                if (data && Array.isArray(data)) {
                    setRecipes(data);
                } else {
                    console.warn("Unexpected data format:", data);
                }
            }
        };

        getRecipes();
    }, []);

    useEffect(() => {
        console.log(recipes);
    }, [recipes]);

    return (
        <div>CardApiPlaceholder</div>
    );
}
