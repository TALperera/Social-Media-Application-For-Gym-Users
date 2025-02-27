package com.spring.postplan.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MediaResponseDTO {
    private String id;
    private String fileName;
    private String contentType;
    private String description;
}
