package com.navidam.api.jpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.navidam.api.jpa.entity.PersonaEntity;

public interface PersonaRepository extends JpaRepository<PersonaEntity, Long> {
    
}
