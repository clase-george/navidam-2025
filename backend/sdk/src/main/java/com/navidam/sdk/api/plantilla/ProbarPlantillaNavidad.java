package com.navidam.sdk.api.plantilla;

import com.navidam.sdk.internal.html.HtmlRenderer;

import java.nio.file.Path;

public class ProbarPlantillaNavidad {

   
    public static void main(String[] args) throws Exception {

        HtmlRenderer renderer = new HtmlRenderer();

        // 1️⃣ Crear modelo de prueba
        PlantillaModelo modelo = new PlantillaModelo(
            "Ana",
            "lopez", 
            "1º DAM", 
            "FPSUMMA", "??",
            "¡Feliz Navidad y mucho ánimo con los exámenes! 🎄", 
            "Alessandro", 
            "ejemplo@gmail.com"
        );

        // 2️⃣ Renderizar como String (solo consola)
        String html = renderer.render("plantilla-A", modelo);
        
        System.out.println("===== HTML RENDERIZADO =====");
        System.out.println(html);
        
        
        modelo.setNombre("Alessandra");
        html = renderer.render("plantilla-A", modelo);
        
        System.out.println("===== HTML RENDERIZADO =====");
        System.out.println(html);

    }
}