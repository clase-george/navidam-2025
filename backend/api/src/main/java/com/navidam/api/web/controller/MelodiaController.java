package com.navidam.api.web.controller;

import com.navidam.api.dto.response.MelodiaDTO;

import com.navidam.sdk.api.NaviDAMAPI;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
public class MelodiaController {

    @GetMapping("/api/melodias")
    List<MelodiaDTO> listPlantillas() {
        return NaviDAMAPI.getInstance().listadoMelodias().stream().map(p -> {
            return new MelodiaDTO(p.titulo());
        }).toList();
    }
}
