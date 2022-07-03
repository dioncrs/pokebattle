import { Type } from "./type.interface";

export interface Move {
    id: number,
    name: string,
    accuracy: number,
    type: Type,
    effect_chance:null,
    pp: number,
    priority: number,
    power: number,
    learnedLevel: number
}