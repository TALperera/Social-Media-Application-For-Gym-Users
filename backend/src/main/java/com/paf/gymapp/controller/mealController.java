package com.paf.gymapp.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.paf.gymapp.model.mealDTO;
import com.paf.gymapp.repository.mealRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;



@RestController
public class mealController {
    
    @Autowired
    private mealRepository mealRepo;

    @GetMapping("/meal")    
    public ResponseEntity<?> getAllmeal(){
        List<mealDTO> meal = mealRepo.findAll();
    
        if (meal.size() > 0){
            return new ResponseEntity<List<mealDTO>>(meal, HttpStatus.OK);
        }else{
            return new ResponseEntity<>("No meal plans available", HttpStatus.NOT_FOUND);
        }
    }



    @PostMapping("/meal")
    public ResponseEntity<?> addmeal(@RequestBody mealDTO meal){
        try { 
            mealDTO newmeal = mealRepo.save(meal);
            return new ResponseEntity<>(newmeal, HttpStatus.CREATED); // Changed status to CREATED
        } catch(Exception e) {
            return new ResponseEntity<>("Failed to add meal plan", HttpStatus.INTERNAL_SERVER_ERROR); // Changed status to INTERNAL_SERVER_ERROR
        }
    }
    
    

    @PutMapping("meal/{id}")
    public ResponseEntity<?> updatemeal(@PathVariable String id, @RequestBody mealDTO meal){
        try{
            Optional<mealDTO> mealData = mealRepo.findById(id);
            if (mealData.isPresent()){
                mealDTO _meal = mealData.get();
                _meal.setMealName(meal.getMealName());
                _meal.setMealCategory(meal.getMealCategory());
                _meal.setMealPhoto(meal.getMealPhoto());
                _meal.setMealIngredients(meal.getMealIngredients());
                _meal.setMealInstructions(meal.getMealInstructions());
                _meal.setMealCalories(meal.getMealCalories());
                _meal.setMealPortion(meal.getMealPortion());
                return new ResponseEntity<>(mealRepo.save(_meal), HttpStatus.OK);
            }else{
                return new ResponseEntity<>("meal plan not found", HttpStatus.NOT_FOUND);
            }
        }catch(Exception e){
            return new ResponseEntity<>("Failed to update meal plan", HttpStatus.NOT_FOUND);
        }
        
    }

    

    @GetMapping("/meal/{id}")
    public ResponseEntity<?> getMealById(@PathVariable String id){
        try{
            Optional<mealDTO> mealData = mealRepo.findById(id);
            if (mealData.isPresent()){
                mealDTO meal = mealData.get();
                return new ResponseEntity<>(meal, HttpStatus.OK);
            }else{
                return new ResponseEntity<>("Meal plan not found", HttpStatus.NOT_FOUND);
            }
        }catch(Exception e){
            return new ResponseEntity<>("Failed to fetch meal plan", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

   

    @DeleteMapping("/meal/{id}")
public ResponseEntity<?> deleteMeal(@PathVariable String id){
    try{
        Optional<mealDTO> mealData = mealRepo.findById(id);
        if (mealData.isPresent()){
            mealRepo.deleteById(id);
            return new ResponseEntity<>("Meal plan deleted successfully", HttpStatus.OK);
        }else{
            return new ResponseEntity<>("Meal plan not found", HttpStatus.NOT_FOUND);
        }
    }catch(Exception e){
        return new ResponseEntity<>("Failed to delete meal plan", HttpStatus.INTERNAL_SERVER_ERROR);
    }
}

}
