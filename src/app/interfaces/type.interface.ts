export interface Type {
    id: number,
    name: string,
    noDamageTo: Type[],
    halfDamageTo: Type[],
    doubleDamageTo: Type[],
    noDamageFrom: Type[],
    halfDamageFrom: Type[],
    doubleDamageFrom: Type[],
}