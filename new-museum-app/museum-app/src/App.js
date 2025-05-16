import React, { useState } from "react";
import QRScanner from "./components/QRScanner";
import ArtefactDetail from "./components/ArtefactDetail";

function App() {
  const [selectedId, setSelectedId] = useState(null);

  const handleScan = (data) => {
    if (data) {
      setSelectedId(data);
    }
  };

  return (
    <div className="App">
      {!selectedId ? (
        <QRScanner onScan={handleScan} />
      ) : (
        <ArtefactDetail artifactId={selectedId} />
      )}
    </div>
  );
}

export default App;
