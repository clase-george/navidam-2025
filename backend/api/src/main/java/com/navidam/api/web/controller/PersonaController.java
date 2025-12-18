package com.navidam.api.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.navidam.api.dto.request.PersonaRequest;
import com.navidam.api.dto.response.PersonaResponse;
import com.navidam.api.service.PersonaService;

import jakarta.websocket.server.PathParam;

@CrossOrigin
@RestController

public class PersonaController {

    private final PersonaService personaService;

    @Autowired
    public PersonaController(PersonaService personaService) {
        this.personaService = personaService;
    }

    @GetMapping("/personas")
    public List<PersonaResponse> obtenerPersonas() {
        return personaService.obtenerPersonas();
    }

    @GetMapping("/personas/{id}")
    public PersonaResponse obtenerPersonaPorId(@PathVariable Long id) {
        return personaService.obtenerPersonaPorId(id);
    }

    @PostMapping("/personas")
    public PersonaResponse crearPersona(@RequestBody PersonaRequest request) {
        return personaService.crearPersona(request);
    }
}
