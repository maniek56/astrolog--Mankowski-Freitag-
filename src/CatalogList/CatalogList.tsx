import { type Planets} from "../data.ts";

interface CatalogListProps {
    objects: Planets[];
    onChange: (id: number) => void;
}
function CatalogList(props: CatalogListProps) {
    return (
        <>
            <div className="catalog">
                <h2>Katalog</h2>
            {props.objects.map((obj) => (
                <div key={obj.id} className="elements"
                    onClick={() => props.onChange(obj.id)}>
                    <p>{obj.name}</p>
                </div>
            ))}
            </div>
        </>
    )
}
export default CatalogList