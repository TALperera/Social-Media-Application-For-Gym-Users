package com.paf.gymapp.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

import com.paf.gymapp.model.Exercise;

@Document(collection = "workoutplan")
public class Workoutplan {

    @Id
    private String _id;
    private String workoutname;
    private String workouttype;
    private String description;
    private List<Exercise> exercises;

    public Workoutplan(String _id, String workoutname, String workouttype, String description,
            List<Exercise> exercises) {
        this._id = _id;
        this.workoutname = workoutname;
        this.workouttype = workouttype;
        this.description = description;
        this.exercises = exercises;
    }

    public Workoutplan() {
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getWorkoutname() {
        return workoutname;
    }

    public void setWorkoutname(String workoutname) {
        this.workoutname = workoutname;
    }

    public String getWorkouttype() {
        return workouttype;
    }

    public void setWorkouttype(String workouttype) {
        this.workouttype = workouttype;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Exercise> getExercises() {
        return exercises;
    }

    public void setExercises(List<Exercise> exercises) {
        this.exercises = exercises;
    }

    @Override
    public String toString() {
        return "Workoutplan [_id=" + _id + ", workoutname=" + workoutname + ", workouttype=" + workouttype
                + ", description=" + description + ", exercises=" + exercises + "]";
    }
}
