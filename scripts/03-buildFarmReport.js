/**
 * Construit un rapport Telegram clair à partir des données d'intervention.
 * Regroupe les actions par ferme et formate un message structuré.
 * @param {Array<{json: any}>} items - Données fusionnées depuis les feuilles Google Sheets
 * @param {number} fallbackChatId - ID Telegram de secours
 * @returns {{json: {chat_id: number, message: string}}[]}
 */
function buildFarmReport(items, fallbackChatId = 0) {
  const chatId = items.find(i => i.json.chat_id)?.json.chat_id || fallbackChatId || 0;
  const date = items.find(i => i.json.date)?.json.date || "Date inconnue";

  // 🏡 Grouper les interventions par ferme
  const fermeMap = {};
  for (const item of items) {
    const ferme = item.json.ferme || "Ferme inconnue";
    const vanne = item.json.vanne || "N/A";
    const intervention = item.json.intervention;
    const pulverisation = item.json.pulvérisation;
    const produit = item.json.produit || "inconnu";

    if (!fermeMap[ferme]) fermeMap[ferme] = [];

    if (intervention) fermeMap[ferme].push(`   ➤ ${intervention} (Vanne ${vanne})`);
    if (pulverisation) {
      fermeMap[ferme].push(`   ➤ ${pulverisation}\n     - Produit : ${produit}\n     - Vanne : ${vanne}`);
    }
  }

  // 🧱 Construire le message complet
  let message = `📊 *Rapport d’exploitation — ${date}*\n\n`;
  for (const [ferme, lignes] of Object.entries(fermeMap)) {
    message += `🏡 *${ferme}*\n${lignes.join("\n")}\n\n`;
  }

  message = message.trim();

  return [{ json: { chat_id: chatId, message } }];
}

// ✅ Exemple d’utilisation dans n8n (Code node)
// return buildFarmReport(items, 7899716689);
