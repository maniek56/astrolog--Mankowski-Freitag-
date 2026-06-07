import './App.css'
import { planets, type Planets } from "./data.ts";
import {useState} from "react";
import CatalogList from "./CatalogList/CatalogList.tsx";
import IntroScreen from "./IntroScreen/IntroScreen.tsx";
import DetailsScreen from "./DetailsScreen/DetailsScreen.tsx";
import DiscoveryForm from "./DiscoveryForm/DiscoveryForm.tsx";

function App() {
  const [objects, setObjects] = useState<Planets[]>(planets);
  const [selectId, setSelectedId] = useState<number | null>(null);
  const selectedObject = objects.find((object) => object.id === selectId) || null;
  const handleAddPlanet = (newPlanet: Omit<Planets, "id">) => {
    const newId = objects.length > 0 ? Math.max(...objects.map((o) => o.id)) + 1 : 1;
    const planet: Planets = { ...newPlanet, id: newId };
    setObjects((prev) => [...prev, planet]);
    setSelectedId(newId);
  };
  const [screen, setScreen] = useState<"intro" | "details" | "form">("intro");
  const handleSelect = (id: number) => {
    setSelectedId(id);
    setScreen("details");
  };
  return (
      <>
        <div className="App">
          <h1>AstroLog</h1>

          <CatalogList objects={objects} onChange={handleSelect} />

          <div className="main">
            {screen === "intro" && (
                <IntroScreen onOpenForm={() => setScreen("form")} />
            )}

            {screen === "details" && (
                <DetailsScreen
                    objects={selectedObject ? [selectedObject] : []}
                    onBack={() => setScreen("intro")}
                    onOpenForm={() => setScreen("form")}
                />
            )}

            {screen === "form" && (
                <DiscoveryForm
                    onAddPlanet={handleAddPlanet}
                    onBack={() => setScreen("intro")}
                />
            )}
          </div>
        </div>
      </>
  )
}

export default App