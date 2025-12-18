package com.navidam.sdk.api;

import com.navidad.sdk.api.melodias.Salir;
import com.navidam.sdk.internal.html.Plantilla;
import com.navidam.sdk.internal.melodia.Melodia;

import java.util.List;

public class NaviDAMAPI {

    private static NaviDAMAPI instace;

    public static NaviDAMAPI getInstance() {
        if (instace == null) {
            instace = new NaviDAMAPI();
        }
        return instace;
    }

    public List<Melodia> listadoMelodias() {
        return List.of(
                 Salir.crear()
        );
    }

    public List<Plantilla> listadoPlantillas() {
        return List.of(
        		 new Plantilla("Plantilla1").path("Plantilla-A")
        );
    }
    
}
