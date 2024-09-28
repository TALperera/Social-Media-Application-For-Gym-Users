import React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function WorkoutDisplayC() {
  const [workoutData, setWorkoutData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/workoutplan/getallworkout"
      );
      setWorkoutData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const navigate = useNavigate();

  const handleUpdateClick = (workoutId) => {
    // Navigate to the update route with the workout ID as a parameter
    navigate(`/edit/${workoutId}`);
    console.log("workoutId", workoutId);
  };

  const handleDeleteClick = async (workoutId) => {
    try {
      // Send DELETE request to delete workout with given ID
      await axios.delete(
        `http://localhost:8080/api/v1/workoutplan/delete/${workoutId}`
      );
      setWorkoutData(
        workoutData.filter((workout) => workout._id !== workoutId)
      );
      fetchData();
    } catch (error) {
      console.error("Error deleting workout:", error);
    }
  };

  return (
    <div>
      {workoutData.map((workout, index) => (
        <Card
          key={index}
          sx={{
            borderRadius: 8,
            backgroundColor: "white",
            padding: "8px",
            marginBottom: "16px",
            boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.2)",
          }}
        >
          <CardContent sx={{ padding: "8px" }}>
            <Typography variant="h6" gutterBottom>
              {workout.workoutname}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Type: {workout.workouttype}
            </Typography>
            <Typography variant="body2" paragraph>
              {workout.description}
            </Typography>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <Typography variant="body2" gutterBottom>
                  <strong>Exercise</strong>
                </Typography>
                {workout.exercises.map((exercise, exIndex) => (
                  <Typography key={exIndex} variant="body2" gutterBottom>
                    {exercise.name}
                  </Typography>
                ))}
              </div>
              <div>
                <Typography variant="body2" gutterBottom>
                  <strong>Sets</strong>
                </Typography>
                {workout.exercises.map((exercise, exIndex) => (
                  <Typography key={exIndex} variant="body2" gutterBottom>
                    {exercise.sets}
                  </Typography>
                ))}
              </div>
              <div>
                <Typography variant="body2" gutterBottom>
                  <strong>Reps</strong>
                </Typography>
                {workout.exercises.map((exercise, exIndex) => (
                  <Typography key={exIndex} variant="body2" gutterBottom>
                    {exercise.reps}
                  </Typography>
                ))}
              </div>
            </div>
          </CardContent>
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "4px 60px",
            }}
          >
            <IconButton
              aria-label="editSA"
              size="large"
              onClick={() => handleUpdateClick(workout._id)}
            >
              <EditIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              aria-label="deleteSA"
              size="large"
              onClick={() => handleDeleteClick(workout._id)}
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
export default WorkoutDisplayC;
