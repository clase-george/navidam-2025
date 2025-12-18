package com.navidam.sdk.api.melodias;
import com.navidam.sdk.internal.melodia.Figura;
import com.navidam.sdk.internal.melodia.Instrumento;
import com.navidam.sdk.internal.melodia.Melodia;
import com.navidam.sdk.internal.melodia.Nota;

public class melodias {
	
	

	public static Melodia crear() {
			// TODO Auto-generated method stub
			
		return 	new Melodia("papa")
		    .instrumento(Instrumento.GUITARRA_ACERO)
		    .tempo(120)
		    .nota(Nota.MI, Figura.CORCHEA)
		    .nota(Nota.SOL_SOSTENIDO, Figura.CORCHEA)
		    .nota(Nota.SI, Figura.NEGRA)
		    .nota(Nota.SI, Figura.CORCHEA)
		    .nota(Nota.LA, Figura.CORCHEA)
		    .nota(Nota.SOL_SOSTENIDO, Figura.CORCHEA)
		    .nota(Nota.FA_SOSTENIDO, Figura.NEGRA)
		    .nota(Nota.MI, Figura.BLANCA);
		    
		    
		    
		    
			
		    
			
			}
			
		

	}

