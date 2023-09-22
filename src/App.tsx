import { useState } from "react";
import "./App.css";

function App() {  
  const [musicStarted, setMusicStarted] = useState(false);  
  const startMusic = async () => {
    if (!musicStarted) {
      const audio = new Audio("/Flores-Amarillas.mp3");
      await audio.play();
      audio.loop = true;
      setMusicStarted(true);
    }
  };
  
  return (
    
   <div onClick={startMusic} className="flower">
    <div className="text-above">Feliz 21 bb ❤️</div>
    <div className="mid">
    </div>
    <div className="Petal1 p1">
    </div>
    <div className="Petal1 p2">
    </div>
    <div className="Petal1 p3">
    </div>
    <div className="Petal1 p4">
    </div>
    <div className="Petal2 p1">
    </div>
    <div className="Petal2 p2">
    </div>
    <div className="Petal2 p3">
    </div>
    <div className="Petal2 p4">
    </div>
    <div className="Petal3 p1">
    </div>
    <div className="Petal3 p2">
    </div>
    <div className="Petal3 p3">
    </div>
    <div className="Petal3 p4">
    </div>
    <div className="text-below">Te amo mucho Sofia P. </div>
  </div>
  );
}

export default App;
