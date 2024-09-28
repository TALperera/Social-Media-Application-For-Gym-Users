import React, { useEffect, useState } from 'react';
import './mealDisplay.css';
import axios from 'axios';
import Close from '../assets/close.png';

function MealDisplay() {
    const [meals, setMeals] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [mealData, setMealData] = useState({
    });

    useEffect(() => {
        fetch('http://localhost:8080/meal') 
            .then(response => response.json())
            .then(data => setMeals(data))
            .catch(error => console.error(error));
    }, []);


    const handleDelete = (mealToDelete) => {
        fetch(`http://localhost:8080/meal/${mealToDelete.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mealToDelete)
        })
        .then(response => {
            if (response.ok) {
                setMeals(prevMeals => prevMeals.filter(meal => meal !== mealToDelete));
            } else {
                console.error('Failed to delete meal');
            }
        })
        .catch(error => console.error(error));

        
    };

    const openPopup = (meal) => {
        console.log("Meal ID from meal object:", meal.id); 
        setIsOpen(true);
        setMealData({
            mealName: meal.mealName,
            mealCategory: meal.mealCategory,
            mealPhoto: meal.mealPhoto,
            mealIngredients: meal.mealIngredients,
            mealInstructions: meal.mealInstructions,
            mealCalories: meal.mealCalories,
            mealPortion: meal.mealPortion,
            id: meal.id
        });
    };
    
    
    

    const CloseBut = () => {
        setIsOpen(false);
    };
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMealData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!mealData.id) {
            console.error("Meal ID is not available");
            return;
        }
    
        try {
            const response = await axios.put(`http://localhost:8080/meal/${mealData.id}`, mealData);
            console.log("Meal data submitted:", response.data);
            // Reset the form fields
            setMealData({
                mealName: '',
                mealCategory: 'vegetarian',
                mealPhoto: '',
                mealIngredients: '',
                mealInstructions: '',
                mealCalories: '',
                mealPortion: ''
            });
            // Close the form popup
            setIsOpen(false);
        } catch (error) {
            console.error("Failed to submit meal data:", error);
        }
    };
    

    

    return (
        <div>
            {meals.map(meal => (
                <div className='mealCase'  key={meal.id}>
                    <h3>{meal.mealName}</h3>
                    <p className='melCat'>Category: {meal.mealCategory} </p>
                    <img src={meal.mealPhoto} className='melImg' alt={meal.mealName} />
                    <p className='melIng'>Ingredients: {meal.mealIngredients}</p>
                    <p className='melIns'>Instructions: {meal.mealInstructions}</p>
                    <p className='melCal'>Calories(Cal): {meal.mealCalories}</p>
                    <p className='melPor'>Portion(kg): {meal.mealPortion}</p>
                    <button className='mealDel' onClick={() => handleDelete(meal)}>Delete</button>
                    


                    <button className='editMealBut' onClick={() => openPopup(meal)}>Edit Meal Plan</button>

                    {isOpen && (
                        <div className='mealFormPopup2'>
                            <form onSubmit={handleSubmit}>
                                <label className='mealName'>Meal Name:</label>
                                <input type='text' className='mealNameInput' name='mealName' value={mealData.mealName} onChange={handleChange} /><br />

                                <label className='mealCat'>Select Meal Category:</label>
                                <select className='mealCatSelect' name='mealCategory' value={mealData.mealCategory} onChange={handleChange}>
                                    <option value='vegetarian'>Vegetarian</option>
                                    <option value='vegan'>Vegan</option>
                                    <option value='keto'>Keto</option>
                                </select><br />

                                <label className='mealPhoto'>Edit your Meal photos:</label>
                                <input type='file' className='mealImageInput' name='mealPhoto' onChange={handleChange} /><br />

                                <label className='mealIngredients'>Ingredients:</label>
                                <textarea className='mealIngredientsInput' name='mealIngredients' value={mealData.mealIngredients} onChange={handleChange} /><br />

                                <label className='mealInstructions'>Instructions:</label>
                                <textarea className='mealInstructionsInput' name='mealInstructions' value={mealData.mealInstructions} onChange={handleChange} /><br />

                                <label className='mealCalories'>Calories(cal):</label>
                                <input type='String' className='mealCaloriesInput' name='mealCalories' value={mealData.mealCalories} onChange={handleChange} /><br />

                                <label className='mealPortion'>Portion(kg):</label>
                                <input type='String' className='mealPortionInput' name='mealPortion' value={mealData.mealPortion} onChange={handleChange} /><br />

                                <button type='submit' onClick={handleSubmit} className='mealSubmitBut'>Update</button>

                                <button onClick={CloseBut} className='mealCBut'> <img src={Close} alt='meal icon'  /> </button>
                            </form>
                        </div>
                    )}

                </div>
            ))}
        </div>
    );
}

export default MealDisplay;
