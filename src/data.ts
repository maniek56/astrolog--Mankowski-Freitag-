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
    { id:  1, name: "Merkury", type: "Planeta", distanceFromEarth: "77 000 000 km", photo: merkury, },
    { id:  2, name: "Jowisz", type: "Planeta", distanceFromEarth: "778 500 000 km", photo: jowisz, },
    { id:  3, name: "Saturn", type: "Planeta", distanceFromEarth: "1 200 000 000 km", photo: saturn, },
    { id:  4, name: "Mars", type: "Planeta", distanceFromEarth: "54 600 000 km", photo: mars, },
    { id:  5, name: "Uran", type: "Planeta", distanceFromEarth: "2 600 000 000 km", photo: uran, },
]
