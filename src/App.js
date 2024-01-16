import React, { useState } from "react";
import AramaÇubuğu from "./bilesenler/AramaCubugu/AramaCubugu.js";
import Gönderiler from "./bilesenler/Gonderiler/Gonderiler.js";

import "./App.css";
import sahteVeri from "./sahte-veri.js";

const App = () => {
  const [gonderiler, setGonderiler] = useState(sahteVeri);
  const [arama, setArama] = useState("");

  const gonderiyiBegen = (gonderiID) => {
    let yeniGönderi = [];
    yeniGönderi = gonderiler.map((item) => {
      if(item.id === gonderiID) item.likes++;
    });
   setGonderiler(yeniGönderi);
  };

  const aramaYap =(arama) => {
    let filterArray = [];
    filterArray = sahteVeri.filter(item => {
     return item.id == arama || item.username.includes(arama); 
    })
    setGonderiler(filterArray);
  }

  return (
    <div className="App">
      <AramaÇubuğu 
        aramaYap = {aramaYap}
      />
      <Gönderiler 
      gonderiyiBegen={gonderiyiBegen} 
      gonderiler={gonderiler} />
    </div>
  );
};

export default App;
