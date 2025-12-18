package com.navidad.sdk.api.melodias;

import com.navidam.sdk.internal.melodia.Figura;
import com.navidam.sdk.internal.melodia.Instrumento;
import com.navidam.sdk.internal.melodia.Melodia;
import com.navidam.sdk.internal.melodia.Nota;

public class Salir {

public static Melodia crear() {

	try {
		 return new Melodia("Salir")
	    .instrumento(Instrumento.GUITARRA_OVERDRIVE)
	    .tempo(160)
	    .nota(Nota.MI, Figura.NEGRA)
	    .nota(Nota.SI, Figura.CORCHEA)
	    .nota(Nota.DO, Figura.CORCHEA)
	    .nota(Nota.SI, Figura.NEGRA)
	    .nota(Nota.LA, Figura.NEGRA)
	    .nota(Nota.SOL, Figura.NEGRA)
	    .nota(Nota.FA_SOSTENIDO, Figura.NEGRA)
		.nota(Nota.MI, Figura.BLANCA)
		.nota(Nota.MI, Figura.NEGRA)
		.nota(Nota.SI, Figura.CORCHEA)
		.nota(Nota.DO, Figura.CORCHEA)
		.nota(Nota.SI, Figura.NEGRA)
		.nota(Nota.LA, Figura.NEGRA)
		.nota(Nota.SOL, Figura.NEGRA)
		.nota(Nota.FA_SOSTENIDO, Figura.NEGRA)
		.nota(Nota.MI, Figura.BLANCA);
		}catch(Exception e) {
			// TODO: handle exception
			return null;
		}
	
}
}

