import React, { useEffect, useState } from "react";

function ArtefactDetail({ artifactId }) {
  const [artifact, setArtifact] = useState(null);

  useEffect(() => {
    fetch("/artefact.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === artifactId);
        setArtifact(found);
      });
  }, [artifactId]);

  if (!artifact) return <p>Memuat data...</p>;

  return (
    <div>
      <h1 style={{fontFamily: 'Times New Roman', fontSize: '45px'}}>{artifact.tipe}</h1>
      <h2 style={{fontFamily: 'Times New Roman', fontSize: '35px'}}>{artifact.name}</h2>
      {artifact.image && <img src={artifact.image} alt={artifact.name} />}
      <p style={{textAlign: 'justify', marginLeft: '10px', marginRight: '50px', fontFamily: 'Times New Roman', fontSize: '24px'}}>{artifact.description1}</p>
      <p style={{textAlign: 'justify', marginLeft: '10px', marginRight: '50px', fontFamily: 'Times New Roman', fontSize: '24px'}}>{artifact.description2}</p>
      <p style={{textAlign: 'justify', marginLeft: '10px', marginRight: '50px', fontFamily: 'Times New Roman', fontSize: '24px'}}>{artifact.description3}</p>
      <p style={{textAlign: 'justify', marginLeft: '10px', marginRight: '50px', fontFamily: 'Times New Roman', fontSize: '24px'}}>{artifact.description4}</p>
      <p style={{textAlign: 'justify', marginLeft: '10px', marginRight: '50px', fontFamily: 'Times New Roman', fontSize: '24px'}}>{artifact.description5}</p>
      <p style={{textAlign: 'justify', marginLeft: '10px', marginRight: '50px', fontFamily: 'Times New Roman', fontSize: '24px'}}>{artifact.description6}</p>
      <p style={{textAlign: 'justify', marginLeft: '10px', marginRight: '50px', fontFamily: 'Times New Roman', fontSize: '24px'}}>{artifact.description7}</p>
      <p style={{textAlign: 'justify', marginLeft: '10px', marginRight: '50px', fontFamily: 'Times New Roman', fontSize: '24px'}}>{artifact.description8}</p>
      <p style={{textAlign: 'justify', marginLeft: '10px', marginRight: '50px', fontFamily: 'Times New Roman', fontSize: '24px'}}>{artifact.description9}</p>
      <p style={{textAlign: 'justify', marginLeft: '10px', marginRight: '50px', fontFamily: 'Times New Roman', fontSize: '24px'}}>{artifact.description10}</p>
    </div>
  );
}

export default ArtefactDetail;
