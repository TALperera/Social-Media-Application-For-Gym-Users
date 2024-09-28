package com.paf.gymapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.paf.gymapp.Service.workoutStatService;
import com.paf.gymapp.model.Workoutstatus;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/workoutStatus")
public class workoutStatController {

    @Autowired
    private workoutStatService workoutStatService;

    @PostMapping(value = "/add")
    private String addstatus(@RequestBody Workoutstatus workoutstatus) {
        try {
            workoutStatService.saveorUpdate(workoutstatus);
            return "Workout status added successfully.";
        } catch (Exception e) {
            return "Failed to add workout status. Error: " + e.getMessage();
        }
    }

    @GetMapping(value = "/getAll")
    private Object getWorkoutStatus() {
        try {
            Iterable<Workoutstatus> workoutStatusList = workoutStatService.listAll();
            if (workoutStatusList.iterator().hasNext()) {
                return workoutStatusList;
            } else {
                return "No workout status available.";
            }
        } catch (Exception e) {
            return "Failed to fetch workout status. Error: " + e.getMessage();
        }
    }

    @PutMapping(value = "/update/{id}")
    private Object updatestatus(@RequestBody Workoutstatus workoutstatus, @PathVariable(name = "id") String _id) {
        try {
            workoutstatus.set_id(_id);
            workoutStatService.saveorUpdate(workoutstatus);
            return "Workout status updated successfully.";
        } catch (Exception e) {
            return "Failed to update workout status. Error: " + e.getMessage();
        }
    }

    @DeleteMapping(value = "/delete/{id}")
    private Object deletestatus(@PathVariable("id") String _id) {
        try {
            workoutStatService.deletestatus(_id);
            return "Workout status deleted successfully.";
        } catch (Exception e) {
            return "Failed to delete workout status. Error: " + e.getMessage();
        }
    }

    @RequestMapping(value = "/get/{id}") //this is for get status by id
    private Object getstatus(@PathVariable(name = "id") String statusid) {
        try {
            Workoutstatus workoutStatus = workoutStatService.getstatusById(statusid);
            if (workoutStatus != null) {
                return workoutStatus;
            } else {
                return "Workout status not found.";
            }
        } catch (Exception e) {
            return "Failed to fetch workout status. Error: " + e.getMessage();
        }
    }
}
