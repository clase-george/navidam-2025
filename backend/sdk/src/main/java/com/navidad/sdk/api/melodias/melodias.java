package com.navidad.sdk.api.melodias;
import com.navidam.sdk.internal.melodia.Figura;
import com.navidam.sdk.internal.melodia.Instrumento;
import com.navidam.sdk.internal.melodia.Melodia;
import com.navidam.sdk.internal.melodia.Nota;

public class melodias {

public static Melodia crear() {
		return new Melodia("19 dias")
	    .instrumento(Instrumento.PIANO_ACUSTICO)
	    .tempo(120)
	    .nota(Nota.LA, Figura.CORCHEA)
	    .nota(Nota.LA, Figura.CORCHEA)
	    .nota(Nota.LA, Figura.NEGRA)
	    .nota(Nota.SOL, Figura.CORCHEA)
	    .nota(Nota.FA_SOSTENIDO, Figura.CORCHEA)
	    .nota(Nota.SOL, Figura.NEGRA)
		.nota(Nota.SI, Figura.CORCHEA)
		.nota(Nota.LA, Figura.BLANCA);
		
		
}
	
}



