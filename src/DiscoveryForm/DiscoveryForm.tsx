import { useState } from "react";

function DiscoveryForm() {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [directionFromEarth, setDirectionFromEarth] = useState("");
    const [photo, setPhoto] = useState("");
    return (
        <>
            <div className="form">
                <h2>Zgłoś obiekt</h2>

                <input
                    type="text"
                    placeholder="Nazwa"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <input
                type="text"
                placeholder="Typ"
                value={type}
                onChange={(e) => setType(e.target.value)}
            />

            <input
                type="text"
                placeholder="Odległość"
                value={directionFromEarth}
                onChange={(e) => setDirectionFromEarth(e.target.value)}
            />

            <input
                type="text"
                placeholder="Link do zdjęcia"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
            />

            <button>Dodaj</button>
            <button>Powrót</button>
        </>
    )
}
export default DiscoveryForm