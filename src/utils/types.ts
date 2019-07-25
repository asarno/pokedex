
export interface PokemonProps {
    id: string;
    image: string;
    maxCP: number;
    maxHP: number;
    name: string;
    number: number;
    types: string[];
}

export const CARD_COLORS: any = {
    Normal: 'rgb(109, 109, 78)',
    Fire: 'rgb(156, 83, 31)',
    Fighting: 'rgb(125, 31, 26)',
    Water: 'rgb(68, 94, 156)',
    Flying: 'rgb(109, 94, 156)',
    Grass: 'rgb(78, 130, 52)',
    Poison: 'rgb(104, 42, 104)',
    Electric: 'rgb(161, 135, 31)',
    Ground: 'rgb(146, 125, 68)',
    Psychic: 'rgb(161, 57, 89)',
    Rock: 'rgb(120, 104, 36)',
    Ice: 'rgb(99, 141, 141)',
    Bug: 'rgb(109, 120, 21)',
    Dragon: 'rgb(73, 36, 161)',
    Ghost: 'rgb(73, 57, 99)',
    Dark: 'rgb(73, 57, 47)',
    Steel: 'rgb(120, 120, 135)',
    Fairy: 'rgb(155, 100, 112)',
}
