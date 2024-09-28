package com.paf.gymapp.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.paf.gymapp.model.Workoutplan;

public interface WorkoutplanRepo extends MongoRepository <Workoutplan,String>{

}
