import React from "react";
import './myMealDash.css';
import MealForm from './mealForm';
import MealDisplay from './mealDisplay';

function MyMealDash() {

    return (
        <div className='myMealDash'>


            <div className='myMealDashContent'>


                <div className='myMealDashTitle'>
                    <p className="mealPlanTitle">My Meal Plans</p>
                </div>
                <MealForm />
                <MealDisplay />
                

            </div>
       </div>

    );
}

export default MyMealDash;