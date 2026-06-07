import { useState } from "react";

interface DiscoveryFormProps {
    onAddPlanet: (newPlanet: any) => void;
}

function DiscoveryForm(props: DiscoveryFormProps) {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [distanceFromEarth, setDistanceFromEarth] = useState("");
    const [photo, setPhoto] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
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

                {/* Przycisk musi być 'submit', żeby zadziałał formularz */}
                <button type="submit">Dodaj</button>
                <button type="button">Powrót</button>
            </form>
        </>
    )
}
export default DiscoveryForm;