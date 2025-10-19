/**
 * Filtre les données pour ne garder que celles d'hier (format YYYY-MM-DD)
 * Utilisé pour traiter les données des feuilles Google Sheets.
 * @param {Array<{json: any}>} items
 * @returns {Array<{json: any}>}
 */
function filterByYesterday(items) {
  // 📅 Calcul de la date d’hier
  const today = new Date();
  today.setDate(today.getDate() - 1);
  const yesterday = today.toISOString().split('T')[0]; // Format YYYY-MM-DD

  // 🔍 Filtrage des données
  return items.filter(item => item.json.date === yesterday);
}

// ✅ Exemple d'utilisation dans n8n (Code node)
// return filterByYesterday(items);
