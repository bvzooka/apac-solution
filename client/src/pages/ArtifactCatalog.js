import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ArtifactCatalog() {
  const [artifacts, setArtifacts] = useState([]);

  // Fetch data dari backend
  useEffect(() => {
    fetch('http://localhost:3000/api/artifacts')
      .then(res => res.json())
      .then(data => setArtifacts(data));
  }, []);

  return (
    <div className="catalog">
      <h1>Koleksi Museum Geologi Bandung</h1>
      <div className="artifact-grid">
        {artifacts.map(artifact => (
          <Link 
            to={`/artifact/${artifact.qr_code}`} 
            key={artifact.id}
            className="artifact-card"
          >
            <img 
              src={`/images/${artifact.image_url}`} 
              alt={artifact.name} 
            />
            <h3>{artifact.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}