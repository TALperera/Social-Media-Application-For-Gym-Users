import React, { useState } from 'react';
import './AddStatusPopup.css';
import AddStatusPopup from './AddStatusPopup';
import WorkoutStatusList from './WorkoutStatusList';

const MyWorkoutStatus = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleSubmit = (formData) => {

    console.log("Form submitted with data:", formData);

    closePopup();
  };

  return (
    <div className="workout-status-container">
        <h5>My Workout Status</h5>

      <button onClick={openPopup}>Add Status</button>
      <AddStatusPopup isOpen={isPopupOpen} onClose={closePopup} onSubmit={handleSubmit} />

        <WorkoutStatusList />
    </div>
  );
};

export default MyWorkoutStatus;
