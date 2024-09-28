package com.paf.gymapp.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "meal")




public class mealDTO {  
    @Id
    private String id;
    private String mealName;
    private String mealCategory;
    private String mealPhoto;
    private String mealIngredients;
    private String mealInstructions;
    private String mealCalories;
    private String mealPortion;

}

