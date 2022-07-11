
export interface Pokemon {
    id: number,
    name: string,
    number: string,
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
    activeMoves?: Move[]
}

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

export interface Type {
    id: number,
    name: string,
    noDamageTo?: Type[],
    halfDamageTo?: Type[],
    doubleDamageTo?: Type[],
    noDamageFrom?: Type[],
    halfDamageFrom?: Type[],
    doubleDamageFrom?: Type[],
}