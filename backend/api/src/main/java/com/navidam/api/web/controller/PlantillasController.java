package com.navidam.api.web.controller;

import com.navidam.api.dto.response.PlantillaDTO;
import com.navidam.sdk.api.NaviDAMAPI;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
public class PlantillasController {

    @GetMapping("/api/plantillas")
    List<PlantillaDTO> listPlantillas() {
        return NaviDAMAPI.getInstance().listadoPlantillas().stream().map(p->{
            return new PlantillaDTO(p.getTitulo());
        }).toList();
    }
}
