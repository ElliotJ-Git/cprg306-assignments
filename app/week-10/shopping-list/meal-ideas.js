"use client";

import {useState, useEffect, use} from "react";

export default function MealIdeas({ingredient}){
    const [meals, setMeals] = useState([]);

        async function fetchMealIdeas(ingredient) {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
                const data = await response.json();
                return data.meals || [];
            } catch (error) {
                console.error("Error fetching meal ideas:", error);
                return[];
            }
        }

    async function loadMealIdeas(){
        if(!ingredient) return;
        const fetchedMeals = await fetchMealIdeas(ingredient);
        setMeals(fetchedMeals);
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return(
        <div className="mt-4 w-80 bg-amber-950 flex flex-col items-center rounded-lg p-4 space-y-4">
            <h2 className="text-2xl text-amber-100">Meal Ideas for {ingredient}:</h2>
            {meals.length === 0 ? (
                <p className="text-amber-100">No meal ideas available.</p>
            ) : (
                <ul className="text-amber-100 list-disc list-inside">
                    {meals.map((meal) => (
                        <li key={meal.idMeal} className="p-1 hover:bg-amber-900" onClick="">{meal.strMeal}</li>
                    ))}
                </ul>
            )}
        </div>

    )

}
