package com.paf.gymapp.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paf.gymapp.model.Workoutplan;
import com.paf.gymapp.repository.WorkoutplanRepo;

@Service
public class Workoutplanservices {

    @Autowired
    private WorkoutplanRepo repo;

    public void saveorUpdate(Workoutplan workoutplans) {

        repo.save(workoutplans);
    }

    public Iterable<Workoutplan> listAll() {

        return this.repo.findAll();

    }

    public void deleteWorkoutplan(String _id) {
        repo.deleteById(_id);

    }

    public Workoutplan getWorkoutplanById(String workoutplanid) {
        return repo.findById(workoutplanid).get();
    }

}