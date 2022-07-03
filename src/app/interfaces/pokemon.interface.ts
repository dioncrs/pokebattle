import { Move } from "./move.interface";
import { Type } from "./type.interface";

export interface Pokemon {
    id: number,
    name: string,
    types: Type[],
    person: string,
    hp: number,
    hpMax: number,
    atack: number,
    def: number,
    atackSpec: number,
    defSpec: number,
    speed: number,
    level: number,
    moves: Move[],
}