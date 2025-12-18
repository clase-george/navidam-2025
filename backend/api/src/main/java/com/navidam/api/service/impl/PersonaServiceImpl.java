package com.navidam.api.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.navidam.api.dto.request.PersonaRequest;
import com.navidam.api.dto.response.PersonaResponse;
import com.navidam.api.jpa.entity.PersonaEntity;
import com.navidam.api.jpa.repository.PersonaRepository;
import com.navidam.api.mapper.PersonaMapper;
import com.navidam.api.service.PersonaService;

@Service
public class PersonaServiceImpl implements PersonaService {

    private final PersonaRepository personaRepository;

    @Autowired
    public PersonaServiceImpl(PersonaRepository personaRepository) {
        this.personaRepository = personaRepository;
    }

    @Override
    public List<PersonaResponse> obtenerPersonas() {
        return personaRepository.findAll()
                .stream()
                .map(PersonaMapper::toPersonaResponse)
                .toList();
    }

    @Override
    public PersonaResponse obtenerPersonaPorId(Long id) {
        PersonaEntity personaEntity = this.personaRepository.getReferenceById(id);
        return PersonaMapper.toPersonaResponse(personaEntity);
    }

    @Override
    public PersonaResponse crearPersona(PersonaRequest request) {
        PersonaEntity nuevaPersona = new PersonaEntity();
        nuevaPersona.setNombre(request.nombre());
        nuevaPersona.setEmail(request.email());
        PersonaEntity personaGuardada = this.personaRepository.save(nuevaPersona);
        return PersonaMapper.toPersonaResponse(personaGuardada);
    }

    @Override
    public void eliminarPersona(Long id) {
        this.personaRepository.deleteById(id);
    }
}
