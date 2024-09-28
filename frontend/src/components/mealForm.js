import React, { useState } from 'react';
import './mealForm.css';
import axios from 'axios';
import Close from '../assets/close.png';

const MealForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [mealData, setMealData] = useState({
        mealName: '',
        mealCategory: 'keto',
        mealPhoto: '',
        mealIngredients: '',
        mealInstructions: '',
        mealCalories: '',
        mealPortion: ''
    });

    const openPopup = () => {
        setIsOpen(true);
    };

    const CloseBut = () => {
        setIsOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMealData({
            ...mealData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => { 
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/meal', mealData);
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
            <button className='createMealBut' onClick={openPopup}>Create Meal Plan</button>
            {isOpen && (
                <div className='mealFormPopup'>
                    <form onSubmit={handleSubmit}>
                        
                        
                        <label className='mealNameLB'>Meal Name:</label>
                        <input type='text' className='mealNameInput' name='mealName' value={mealData.mealName} onChange={handleChange} /><br />

                        <label className='mealLB2'>Select Meal Category:</label>
                        <select className='mealCatSelect' name='mealCategory' value={mealData.mealCategory} onChange={handleChange}>
                            <option value='vegetarian'>Vegetarian</option>
                            <option value='vegan'>Vegan</option>
                            <option value='keto'>Keto</option>
                        </select><br />

                        <label className='mealLB3'>Add your Meal photos:</label>
                        <input type='file' className='mealImageInput' name='mealPhoto' onChange={handleChange} /><br />

                        <label className='mealLB3'>Ingredients:</label>
                        <textarea className='mealIngredientsInput' name='mealIngredients' value={mealData.mealIngredients} onChange={handleChange} /><br />

                        <label className='mealLB3'>Instructions:</label>
                        <textarea className='mealInstructionsInput' name='mealInstructions' value={mealData.mealInstructions} onChange={handleChange} /><br />

                        <label className='mealLB3'>Calories(Cal):</label>
                        <input type='String' className='mealCaloriesInput' name='mealCalories' value={mealData.mealCalories} onChange={handleChange} /><br />

                        <label className='mealLB3'>Portion(kg):</label>
                        <input type='String' className='mealPortionInput' name='mealPortion' value={mealData.mealPortion} onChange={handleChange} /><br />

                        <button type='submit' className='mealSubmitBut'>Share</button>
                        <button onClick={CloseBut} className='mealCBut'> <img src={Close} alt='meal icon'  /> </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default MealForm;
