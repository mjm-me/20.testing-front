export type Character = {
  id: number;
  isAlive: boolean;
  message: string;
  name: string;
  family: string;
  age: number;

  reignYears?: number;
  weapon?: number;
  skillLevel?: number;
  adviseTo?: Character;
  serverLevel?: number;
  servesTo?: Character;

  category: 'king' | 'fighter' | 'adviser' | 'squire'; //es un tipo de unión para usar esos valores
};
