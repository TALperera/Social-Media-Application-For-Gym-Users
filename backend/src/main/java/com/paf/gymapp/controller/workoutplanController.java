package com.paf.gymapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.paf.gymapp.Service.Workoutplanservices;
import com.paf.gymapp.model.Workoutplan;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/workoutplan")
public class workoutplanController {

    @Autowired
    private Workoutplanservices workoutplanservices;

    @PostMapping("/workoutsave")
    private String saveWorkout(@RequestBody Workoutplan workoutplans) {
        try {
            workoutplanservices.saveorUpdate(workoutplans);
            return "Workout plan saved";
        } catch (Exception e) {
            return "Failed to save workout plan";
        }
    }

    @GetMapping("/getallworkout")
    private Object getWorkoutplans() {
        try {
            Iterable<Workoutplan> workoutPlans = workoutplanservices.listAll();
            if (workoutPlans.iterator().hasNext()) {
                return workoutPlans;
            } else {
                return "No workout plans available";
            }
        } catch (Exception e) {
            return "Failed to fetch workout plans";
        }
    }

    @PutMapping("/edit/{id}")
    private String update(@RequestBody Workoutplan workoutplan, @PathVariable(name = "id") String _id) {
        try {
            workoutplan.set_id(_id);
            workoutplanservices.saveorUpdate(workoutplan);
            return "Workout plan updated";
        } catch (Exception e) {
            return "Failed to update workout plan";
        }
    }

    @DeleteMapping("/delete/{id}")
    private String deleteWorkoutplan(@PathVariable("id") String _id) {
        try {
            workoutplanservices.deleteWorkoutplan(_id);
            return "Workout plan deleted";
        } catch (Exception e) {
            return "Failed to delete workout plan";
        }
    }

    @RequestMapping("/workoutplan/{id}")
    private Object getWorkoutplan(@PathVariable(name = "id") String workoutplanid) {
        try {
            Workoutplan workoutPlan = workoutplanservices.getWorkoutplanById(workoutplanid);
            if (workoutPlan != null) {
                return workoutPlan;
            } else {
                return "Workout plan not found";
            }
        } catch (Exception e) {
            return "Failed to fetch workout plan";
        }
    }

}
