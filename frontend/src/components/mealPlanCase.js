import React, { useEffect, useState } from 'react';
import './mealPlanCase.css';

function MealPlanCase() {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/meal')
            .then(response => response.json())
            .then(data => setMeals(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <p className="mealPlanText">Meal Plans</p>
            {meals.map(meal => (
                <div className='mealPlanFiller' key={meal._id}>
                    <p className='meelTilte'>{meal.mealName}</p>                    
                    <img src={meal.mealPhoto} className='meal-Photo' alt={meal.mealName} />
                    <p className='meelCat'>Category:  {meal.mealCategory}</p>
                    <p className='meelIng'>Ingredients:  {meal.mealIngredients}</p>
                    <p className='meelIns'>Instructions:  {meal.mealInstructions}</p>
                    <p className='meelCal'>Calories(cal):  {meal.mealCalories}</p>
                    <p className='meelPo'>Portion(kg):  {meal.mealPortion}</p>
                </div>
            ))}
        </div>
    );
}

export default MealPlanCase;
