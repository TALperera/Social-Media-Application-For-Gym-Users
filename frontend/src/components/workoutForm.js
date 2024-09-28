import React, { useState, useEffect } from "react";
import axios from "axios";
import "./workoutForm.css";
import { useParams } from "react-router-dom";

const WorkoutForm = ({ onClose, onSubmit }) => {
  const [workoutName, setWorkoutName] = useState("");
  const [description, setDescription] = useState("");
  const [workoutType, setWorkoutType] = useState("strength"); // Set initial value for workoutType
  const [exercises, setExercises] = useState([
    { name: "", sets: "", reps: "" },
  ]);
  const [showPopup, setShowPopup] = useState(false);
  const { workoutId } = useParams(); // Get the workout ID from the URL

  useEffect(() => {
    if (workoutId) {
      fetchWorkoutDetails(workoutId);
    }
  }, [workoutId]);

  const fetchWorkoutDetails = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/workoutplan/workoutplan/${id}`
      );
      const { workoutname, description, workouttype, exercises } =
        response.data;
      setWorkoutName(workoutname);
      setDescription(description);
      setWorkoutType(workouttype);
      setExercises(exercises);
      setShowPopup(true); // Automatically open the popup when details are fetched
    } catch (error) {
      console.error("Error fetching workout details:", error);
    }
  };

  const handleExerciseChange = (index, e) => {
    const { name, value } = e.target;
    const newExercises = [...exercises];
    newExercises[index][name] = value;
    setExercises(newExercises);
  };
  const handleAddExercise = () => {
    setExercises([...exercises, { name: "", sets: "", reps: "" }]);
  };

  const handleRemoveExercise = (index) => {
    const newExercises = [...exercises];
    newExercises.splice(index, 1);
    setExercises(newExercises);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const workoutData = {
      workoutname: workoutName,
      description: description,
      workouttype: workoutType,
      exercises: exercises,
    };

    try {
      if (workoutId) {
        await axios.put(
          `http://localhost:8080/api/v1/workoutplan/edit/${workoutId}`,
          workoutData
        );
      } else {
        const response = await axios.post(
          "http://localhost:8080/api/v1/workoutplan/workoutsave",
          workoutData
        );
        console.log(response.data);
      }
      onSubmit(setShowPopup(false));
    
    } catch (error) {
      console.error("Error submitting workout data:", error);
    }
  };

  return (
    <div>
      <button
        className="add-workoutplan-buttonSA"
        onClick={() => setShowPopup(true)}
      >
        + Add New Workout Plan
      </button>
      {showPopup && (
        <div className="workout-form-overlaySA">
          <div className="workout-form-containerSA">
            <button
              className="close-buttonSA"
              onClick={() => setShowPopup(false)}
            >
              X
            </button>
            <h2 className="form-titleSA">
              {workoutId ? "Update" : "Create"} Workout Plan
            </h2>
            <form onSubmit={handleSubmit}>
              <label className="form-labelSA">
                Workout Name:
                <input
                  className="form-inputSA"
                  type="text"
                  value={workoutName}
                  onChange={(e) => setWorkoutName(e.target.value)}
                />
              </label>
              <br />
              <label className="form-labelSA">
                Description:
                <input
                  className="form-inputSA"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </label>
              <br />
              <label className="form-labelSA">
                Workout Type:
                <select
                  className="form-inputSA"
                  value={workoutType}
                  onChange={(e) => setWorkoutType(e.target.value)}
                >
                  <option value="strength">Strength</option>
                  <option value="endurance">Endurance</option>
                  <option value="flexibility">Flexibility</option>
                </select>
              </label>
              <br />
              <div>
                <h3 className="form-subtitleSA">Exercises:</h3>
                {exercises.map((exercise, index) => (
                  <div key={index} className="exercise-rowSA">
                    <label className="form-labelSA">
                      Name:
                      <input
                        className="form-inputSA"
                        type="text"
                        name="name"
                        value={exercise.name}
                        onChange={(e) => handleExerciseChange(index, e)}
                      />
                    </label>
                    <label className="form-labelSA">
                      Sets:
                      <input
                        className="form-inputSA"
                        type="text"
                        name="sets"
                        value={exercise.sets}
                        onChange={(e) => handleExerciseChange(index, e)}
                      />
                    </label>
                    <label className="form-labelSA">
                      Reps:
                      <input
                        className="form-inputSA"
                        type="text"
                        name="reps"
                        value={exercise.reps}
                        onChange={(e) => handleExerciseChange(index, e)}
                      />
                    </label>
                    <div className="exercise-buttons-container">
                      {index === exercises.length - 1 && (
                        <button
                          type="button"
                          className="add-exercise-buttonSA"
                          onClick={handleAddExercise}
                        >
                          +
                        </button>
                      )}
                      {index !== 0 && (
                        <button
                          type="button"
                          className="remove-exercise-buttonSA"
                          onClick={() => handleRemoveExercise(index)}
                        >
                          -
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <br />
              <button type="submit" className="submit-buttonSA">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkoutForm;
