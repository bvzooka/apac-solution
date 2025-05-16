import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ArtifactDetail() {
  const { qrCode } = useParams(); // Ambil parameter dari URL
  const [artifact, setArtifact] = useState(null);

  useEffect(() => {
    // Fetch data artefak dari backend berdasarkan qrCode
    fetch(`http://localhost:3000/api/artifacts/qr/${qrCode}`)
      .then((res) => res.json())
      .then((data) => setArtifact(data));
  }, [qrCode]);

  return (
    <div>
      {artifact && (
        <>
          <h1>{artifact.name}</h1>
          <img src={artifact.imageUrl} alt={artifact.name} />
          <p>{artifact.description}</p>
        </>
      )}
    </div>
  );
}