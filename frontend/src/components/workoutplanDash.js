import './workoutplanDash.css';
import WorkoutForm from './workoutForm';
import WorkoutDisplayC from './workoutDisplay';


function MyWorkoutPlanDash() {

    return (
      <div className="myPlanDash">
        <div className="myPlanDashContent">
          <div className="myPlanDashTitle">
            <p className="workoutPlanTitle">My Workout Plan</p>
          </div>
          <WorkoutForm />
          <br /> <br />
          <WorkoutDisplayC />
        </div>
      </div>
    );
}

export default MyWorkoutPlanDash;