import merkury from "./assets/merkury.jpg";
import jowisz from "./assets/jowisz.png";
import saturn from "./assets/saturn.jpg";
import mars from "./assets/mars.jpeg";
import uran from "./assets/uran.png";

export interface Planets {
    id: number;
    name: string;
    type: string;
    distanceFromEarth: string;
    photo: string;
}
export const planets: Planets[] = [
    { id:  1, name: "Merkury", type: "Planeta", distanceFromEarth: "test", photo: merkury, },
    { id:  2, name: "Jowisz", type: "Planeta", distanceFromEarth: "test", photo: jowisz, },
    { id:  3, name: "Saturn", type: "Planeta", distanceFromEarth: "test", photo: saturn, },
    { id:  4, name: "Mars", type: "Planeta", distanceFromEarth: "test", photo: mars, },
    { id:  5, name: "Uran", type: "Planeta", distanceFromEarth: "test", photo: uran, },
]
