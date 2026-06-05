import { type Planets } from "../data.ts";

interface DetailsScreenProps {
    objects: Planets[];
}

function DetailsScreen(props: DetailsScreenProps) {
    return (
        <>
            {props.objects.map((obj) => (
                <div key={obj.id} className="details">
                    <div className="photo">
                        <img src={obj.photo} alt={obj.name} width={200} />
                    </div>
                    <div className="description">
                        <h3>{obj.name}</h3>
                        <p>Typ: {obj.type}</p>
                        <p>Odległość: {obj.distanceFromEarth}</p>
                    </div>
                    <button>Powrót</button>
                    <button>Rejestr odkryć</button>
                </div>
            ))}
        </>
    );
}
export default DetailsScreen;