import { type Planets} from "../data.ts";

interface CatalogListProps {
    objects: Planets[];
}
function CatalogList(props: CatalogListProps) {
    return (
        <>
            <div className="Catalog">
                <h2>Katalog</h2>

            {props.objects.map((obj) => (
                <div key={obj.id} className="Elements">
                    <p>{obj.name}</p>
                </div>
            ))}
            </div>
        </>
    )
}
export default CatalogList