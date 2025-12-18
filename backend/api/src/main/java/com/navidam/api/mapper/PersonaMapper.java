package com.navidam.api.mapper;

import com.navidam.api.dto.response.PersonaResponse;
import com.navidam.api.jpa.entity.PersonaEntity;

public class PersonaMapper {

    public static PersonaResponse toPersonaResponse(PersonaEntity e) {
        return new PersonaResponse(
                e.getId(),
                e.getNombre(),
                e.getEmail());
    }
}
