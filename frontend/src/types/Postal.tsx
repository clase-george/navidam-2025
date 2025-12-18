export type PostalRequest = {
    id: number;
    nombre: string;
    apellido: string;
    curso: string;
    centro: string;
    tipoPostal: string;
    mensaje: string;
    emisor: string;
    emailEmisor: string;
    melodia: string;
    plantilla: string;
    año: number;
    
}

export type PostalPreview = {
    html: string;
}