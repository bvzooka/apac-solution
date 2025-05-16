import ArtifactCatalog from './pages/ArtifactCatalog';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ArtifactCatalog />} /> {/* Halaman utama jadi katalog */}
        <Route path="/scan" element={<QRScanner />} />
        <Route path="/artifact/:qrCode" element={<ArtifactDetail />} />
      </Routes>
    </Router>
  );
}