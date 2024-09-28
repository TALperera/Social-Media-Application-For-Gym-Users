import React, { useEffect, useState } from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import axios from "axios";


function Mainworkoutplan() {
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

    return (
     <div>
      {workoutData.map((workout, index) => (
        <Card
          key={index}
          sx={{
            borderRadius: 8,
            backgroundColor: "white",
            padding: "2px",
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
        </Card>
      ))}
    </div>
  );
}

export default Mainworkoutplan;