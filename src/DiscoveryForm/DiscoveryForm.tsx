import { useState } from "react";
import type {Planets} from "../data.ts";

interface DiscoveryFormProps {
    onAddPlanet: (newPlanet: Omit<Planets, "id">) => void;
    onBack: () => void;
}

function DiscoveryForm(props: DiscoveryFormProps) {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [distanceFromEarth, setDistanceFromEarth] = useState("");
    const [photo, setPhoto] = useState("");

    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim() === "" || type.trim() === "" || distanceFromEarth.trim() === "") {
            setError("Wypełnij pola: nazwa, typ i odległość.");
            return;
        }
        props.onAddPlanet({
            name,
            type,
            distanceFromEarth: distanceFromEarth,
            photo
        });
        setName("");
        setType("");
        setDistanceFromEarth("");
        setPhoto("");
    };
    return (
        <>
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
                    placeholder="Odległość od Ziemi"
                    value={distanceFromEarth}
                    onChange={(e) => setDistanceFromEarth(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Link do zdjęcia"
                    value={photo}
                    onChange={(e) => setPhoto(e.target.value)}
                />

                {error && <p className="error">{error}</p>}
                <button type="submit">Dodaj</button>
                <button type="button" onClick={props.onBack}>Powrót</button>
            </form>
        </>
    )
}
export default DiscoveryForm;