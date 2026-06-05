import { useState } from "react";

function DiscoveryForm() {
    const [name, setName] = useState("");

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
        </>
    )
}
export default DiscoveryForm