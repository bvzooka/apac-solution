const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

exports.generateArtifactInfo = async (artifactData) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const prompt = `Buat deskripsi menarik tentang artefak museum ini dalam 3 paragraf:
  Nama: ${artifactData.nama}
  Deskripsi: ${artifactData.deskripsi}
  Sejarah: ${artifactData.sejarah}`;
  
  const result = await model.generateContent(prompt);
  return result.response.text();
};