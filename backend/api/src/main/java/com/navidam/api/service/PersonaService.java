package com.navidam.api.service;

import java.util.List;

import com.navidam.api.dto.request.PersonaRequest;
import com.navidam.api.dto.response.PersonaResponse;

public interface PersonaService {

    List<PersonaResponse> obtenerPersonas();

    PersonaResponse obtenerPersonaPorId(Long id);

    PersonaResponse crearPersona(PersonaRequest request);

    void eliminarPersona(Long id);
}
