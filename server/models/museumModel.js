// Data sementara (nanti bisa diganti dengan database)
let museums = [
    { id: 1, name: "Museum Nasional", location: "Jakarta" },
    { id: 2, name: "Museum Seni", location: "Bandung" }
];

// Fungsi untuk mendapatkan semua museum
exports.getAllMuseums = () => {
    return museums;
};

// Fungsi untuk menambahkan museum baru
exports.addMuseum = (newMuseum) => {
    const id = museums.length + 1;
    const museum = { id, ...newMuseum };
    museums.push(museum);
    return museum;
};