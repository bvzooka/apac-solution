import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner, Html5Qrcode } from "html5-qrcode"; // Tambahkan impor Html5Qrcode

function QRScanner({ onScan }) {
  const [availableCameras, setAvailableCameras] = useState([]);
  const [selectedCamera, setSelectedCamera] = useState(null);

  useEffect(() => {
    // Dapatkan daftar kamera yang tersedia
    Html5Qrcode.getCameras()
      .then(devices => {
        if (devices && devices.length) {
          setAvailableCameras(devices);
          // Otomatis pilih kamera belakang (environment) jika ada
          const rearCamera = devices.find(device => 
            device.label.toLowerCase().includes('back') || 
            device.label.toLowerCase().includes('rear')
          );
          setSelectedCamera(rearCamera?.id || devices[0].id);
        }
      })
      .catch(err => console.error("Camera error:", err));
  }, []);

  useEffect(() => {
    if (!selectedCamera) return;

    const scanner = new Html5QrcodeScanner("reader", {
      fps: 10,
      qrbox: 250,
      videoConstraints: {
        deviceId: { exact: selectedCamera }
      }
    });

    scanner.render(
      (decodedText) => {
        onScan(decodedText);
        scanner.clear().catch(err => console.error("Clear error:", err));
      },
      (error) => console.warn("Scan error:", error)
    );

    return () => {
      scanner.clear().catch(() => {});
    };
  }, [selectedCamera, onScan]);

  return (
    <div>
      {availableCameras.length > 1 && (
        <select 
          onChange={(e) => setSelectedCamera(e.target.value)}
          className="camera-selector"
        >
          {availableCameras.map(camera => (
            <option key={camera.id} value={camera.id}>
              {camera.label || `Camera ${camera.id}`}
            </option>
          ))}
        </select>
      )}
      <div id="reader" style={{width: "50%", margin: "auto"}} />
    </div>
  );
}

export default QRScanner;