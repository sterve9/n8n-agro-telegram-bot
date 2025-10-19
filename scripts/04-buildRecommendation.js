/**
 * Produit un message de recommandations intelligentes selon la météo.
 * @param {{weather?: any, chatId?: number}} params
 * @returns {{json: {message: string, chatId: number}}[]}
 */
function buildRecommendation({ weather = {}, chatId = 0 } = {}) {
  const tempMax = weather.temp_max ?? "N/A";
  const tempMin = weather.temp_min ?? "N/A";

  const vent = parseFloat(String(weather.vent || "0").replace(" km/h", ""));
  const pluie = parseFloat(String(weather.pluie || "0").replace(" mm", ""));
  const pluieDemain = parseFloat(String(weather.pluie_demain || "0").replace(" mm", ""));

  // 🧠 Règles d'analyse simples
  const meteoConseil = [];
  if (vent > 30) {
    meteoConseil.push(`🚫 Évitez les pulvérisations aujourd’hui : vent trop fort (🌬️ ${vent} km/h).`);
  }
  if (pluieDemain > 10 && pluie < 5) {
    meteoConseil.push(`🌧️ Pluie prévue demain (💧 ${pluieDemain} mm), pensez à pulvériser aujourd’hui.`);
  }
  if (pluie > 10) {
    meteoConseil.push(`⚠️ Pluie aujourd’hui (💧 ${pluie} mm), évitez les engrais, risque de ruissellement.`);
  }
  if (meteoConseil.length === 0) {
    meteoConseil.push("✅ Bonne fenêtre météo pour les interventions.");
  }

  // 📌 Consignes générales et dosages (exemples)
  const recommandations = [
    "- Ne pas pulvériser aujourd’hui sur la même ferme que la veille.",
    "- Injecter engrais 30 min après ouverture des vannes.",
    "- Alterner les tâches lourdes (un seul tracteur disponible) pour éviter l'usure et la fatigue."
  ];

  const dosages = [
    "- Azote (N) : 3 kg/ha",
    "- Phosphore (P) : 1 L/ha",
    "- Potassium (K) : 4 kg/ha"
  ];

  const message = `📊 *Recommandation intelligente*

🌡️ Temp max : ${tempMax}
🌡️ Temp min : ${tempMin}
💨 Vent aujourd’hui : ${vent} km/h
💧 Pluie aujourd’hui : ${pluie} mm
🌧️ Pluie demain : ${pluieDemain} mm

🧠 *Analyse météo*
${meteoConseil.join("\n")}

📌 *Consignes générales*
${recommandations.join("\n")}

📌 *Dosages standards*
${dosages.join("\n")}
`;

  return [{ json: { message, chatId } }];
}

// ✅ Exemple d’utilisation dans n8n (Code node)
// const weather = $node["Edit Fields1"]?.json || {};
// const chatId = $json.chatId || 0;
// return buildRecommendation({ weather, chatId });
