import type { APIResult,APIError } from "./api";
import type {Melodia} from "@/types/Melodia.tsx";


const baseURL :string="http://localhost:8080";

export async function listadoMelodias ():Promise<APIResult<Melodia[]>>{
    const response = await fetch(`${baseURL}/api/melodias`,{
        method:'GET',
        headers:{
            'Accept':'application/json',
        },
    });
    if (response.ok){
        const melodias:Melodia[] =  await response.json();
        return {ok:true, data:melodias};
    }
    const error:APIError = await response.json();
    return {ok:false, error: error};
}