import merkury from "./assets/merkury.jpg";
import jowisz from "./assets/jowisz.png";
import saturn from "./assets/saturn.jpg";
import mars from "./assets/mars.jpeg";
import uran from "./assets/uran.png";

export interface Planets {
    id: number;
    name: string;
    photo: string;
}
export const planets: Planets[] = [
    { id:  1, name: "Merkury", photo: merkury, },
    { id:  2, name: "Jowisz", photo: jowisz, },
    { id:  3, name: "Saturn", photo: saturn, },
    { id:  4, name: "Mars", photo: mars, },
    { id:  5, name: "Uran", photo: uran, },
]
