import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient"; // Make sure to import your Supabase instance

export function useFavorite(recipeId: string | undefined) {
  const [isLiked, setIsLiked] = useState(false);

  // Check if the recipe is favorited when the component mounts
  useEffect(() => {
    const fetchFavoriteStatus = async () => {
      if (!recipeId) return;
      
      const { data, error } = await supabase
        .from("recipes") // Assuming the table is called 'recipes'
        .select("favorite")
        .eq("id", recipeId) // Filter by recipe id
        .single();

      if (error) {
        console.error("Error fetching favorite status:", error);
        return;
      }

      setIsLiked(data?.favorite ?? false); // Set the initial liked status
    };

    fetchFavoriteStatus();
  }, [recipeId]);

  // Toggle the favorite status (update directly in the table)
  const toggleFavorite = async (recipeId: string) => {
    const newFavoriteState = !isLiked; // Toggle the state

    const { error } = await supabase
      .from("recipes") // Assuming the table is called 'recipes'
      .update({ favorite: newFavoriteState }) // Update the favorite field
      .eq("id", recipeId); // Filter by recipe id

    if (error) {
      console.error("Error toggling favorite:", error);
      return;
    }

    setIsLiked(newFavoriteState); // Update the local state
  };

  return { isLiked, toggleFavorite };
}
