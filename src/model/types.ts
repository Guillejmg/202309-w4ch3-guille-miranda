export interface CharacterData {
  isAlive: boolean;
  message: string;
  name: string;
  family: string;
  age: number;
  category: string;

}

export interface King extends CharacterData {
  reignYears: number;
}
export interface Advisor extends CharacterData {
  adviseTo: Fighter;
}
export interface Fighter extends CharacterData {
  weapon: string;
  skillLevel: number;
}
export interface Squire extends CharacterData {
  serveLevel: number;
  servesTo: Fighter;
}
