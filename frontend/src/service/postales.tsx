import type { APIResult,APIError } from "./api";
import type {PostalPreview, PostalRequest} from "@/types/Postal.tsx";

const baseURL :string="http://localhost:8080";

export async function previewPostal (request:PostalRequest):Promise<APIResult<PostalPreview>>{
    const response = await fetch(`${baseURL}/api/postales/preview`,{
        method:'POST',
        headers:{
            'Content-type':'application/json',
        },
        body: JSON.stringify(request) // Enviamos lo que hay en el estado
    });
    if (response.ok){
        const preview:PostalPreview =  await response.json();
        return {ok:true, data:preview};
    }
    const error:APIError = await response.json();
    return {ok:false, error: error};
}

export async function notificarPostal (request:PostalRequest):Promise<APIResult<PostalPreview>>{
    const response = await fetch(`${baseURL}/api/postales/notificacion`,{
        method:'POST',
        headers:{
            'Content-type':'application/json',
        },
        body: JSON.stringify(request) // Enviamos lo que hay en el estado
    });
    if (response.ok){
        return {ok:true};
    }
    const error:APIError = await response.json();
    return {ok:false, error: error};
}


