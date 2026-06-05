import './App.css'
import { planets, type Planets } from "./data.ts";
import {useState} from "react";

function App() {
  const [objects] = useState<Planets[]>(planets);
  const photosTest = objects.map((obj: Planets) => obj.photo);

  return (
    <>
     <div className="App">
       <h1>AstroLog</h1>
       {photosTest.map((photo, index) => (
           <img key={index} src={photo}  width="100"/>
       ))}
     </div>
    </>
  )
}

export default App
