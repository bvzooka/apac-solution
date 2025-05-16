import { useNavigate } from 'react-router-dom';
import { QrScanner } from '@yudiel/react-qr-scanner';

export default function QRScanner() {
  const navigate = useNavigate();

  const handleScan = (result) => {
    if (result) {
      // Navigasi ke halaman detail dengan qrCode sebagai parameter
      navigate(`/artifact/${result}`);
    }
  };

  return (
    <div>
      <h1>Scan QR Artefak</h1>
      <QrScanner
        onDecode={handleScan}
        onError={(error) => console.log(error?.message)}
      />
    </div>
  );
}