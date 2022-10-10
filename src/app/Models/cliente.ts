import { Barrios } from "./barrios";

export class Cliente {
    id : number;
    nombre : string;
    apellido :string;
    dni : string;
    telefono : string;
    email : string;
    fechNac : string;
    idBarrio : number;
    barrio? : Barrios
}
