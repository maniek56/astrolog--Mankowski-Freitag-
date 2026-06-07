import { useState } from "react";

interface DiscoveryFormProps {
    onAddPlanet: (newPlanet: any) => void;
}

function DiscoveryForm(props: DiscoveryFormProps) {
    // Kontrolowane inputy (wymaganie z treści projektu)
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [distanceFromEarth, setDistanceFromEarth] = useState("");
    const [photo, setPhoto] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // 1. WALIDACJA (Blokada pustych pól)
        if (!name.trim() || !type.trim() || !distanceFromEarth.trim() || !photo.trim()) {
            alert("Błąd: Wszystkie pola muszą być wypełnione przed zgłoszeniem odkrycia!");
            return; // Przerwa działanie, dane nie lecą do rodzica
        }

        // 2. WYSYŁANIE W GÓRĘ (Spięcie z rodzicem)
        props.onAddPlanet({
            name,
            type,
            distanceFromEarth: distanceFromEarth,
            photo
        });

        // 3. CZYSZCZENIE (Automatyczne zerowanie pól po zatwierdzeniu)
        setName("");
        setType("");
        setDistanceFromEarth("");
        setPhoto("");
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2>Zgłoś obiekt</h2>

            <input
                type="text"
                placeholder="Nazwa"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="text"
                placeholder="Typ"
                value={type}
                onChange={(e) => setType(e.target.value)}
            />


            <input
                type="text"
                placeholder="Odległość"
                value={distanceFromEarth}
                onChange={(e) => setDistanceFromEarth(e.target.value)}
            />
                <input
                    type="text"
                    placeholder="Odległość"
                    value={distanceFromEarth}
                    onChange={(e) => setDistanceFromEarth(e.target.value)}
                />


            <input
                type="text"
                placeholder="Link do zdjęcia"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
            />

            <button type="submit">Dodaj</button>
            <button type="button">Powrót</button>
        </form>
    );
}

export default DiscoveryForm;