import merkury from "./assets/merkury.jpg";
import jowisz from "./assets/jowisz.png";
import saturn from "./assets/saturn.jpg";
import mars from "./assets/mars.jpeg";
import uran from "./assets/uran.png";

export interface Planets {
    id: number;
    photo: string;
}
export const planets: Planets[] = [
    { id:  1, photo: merkury, },
    { id:  2, photo: jowisz, },
    { id:  3, photo: saturn, },
    { id:  4, photo: mars, },
    { id:  5, photo: uran, },
]
