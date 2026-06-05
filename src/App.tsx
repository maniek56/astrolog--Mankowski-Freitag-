import './App.css'
import { planets, type Planets } from "./data.ts";
import {useState} from "react";
import CatalogList from "./CatalogList/CatalogList.tsx";
import IntroScreen from "./IntroScreen/IntroScreen.tsx";
import DetailsScreen from "./DetailsScreen/DetailsScreen.tsx";
import DiscoveryForm from "./DiscoveryForm/DiscoveryForm.tsx";

function App() {
  const [objects] = useState<Planets[]>(planets);
  const [selectId, setSelectedId] = useState<number | null>(null);
  const selectedObject = objects.find((object) => object.id === selectId) || null;

  return (
    <>
     <div className="App">
       <h1>AstroLog</h1>
       <CatalogList objects={objects}  onChange={setSelectedId} />
       <IntroScreen />
       <DetailsScreen objects={selectedObject ? [selectedObject] : []} />
       <DiscoveryForm/>
     </div>
    </>
  )
}

export default App
