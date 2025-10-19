// Menu d'aide (Markdown)
const HelpMessage = `🧑‍🌾 *Assistant Agricol IA – Centre d’aide*

Voici les commandes actuellement disponibles :

🔹 \`/meteo\` → Météo du jour avec analyse ☀️🌧️
🔹 \`/rapport\` → Rapport détaillé des activités de la veille 📊
🔹 \`/recommandation\` → Conseils météo intelligents et interventions suggérées 🤖
🔹 \`/aide\` → Affiche ce menu d’aide 📘

🚧 *Fonctionnalité à venir très bientôt* :
Tu pourras bientôt poser librement des questions à l’ingénieur IA
(ex : “Quand fertiliser les citronniers ?” 🍋)
🔧 *Nous y travaillons activement… reste connecté !* 🚀
`;

// Fallback si la commande est inconnue
const FallbackMessage = `❌ Commande non reconnue.

Tape \`/aide\` pour voir les options disponibles.`;

// Export "CommonJS" si jamais tu self-hostes et utilises require()
// (tu peux ignorer pour n8n Cloud : tu copieras le texte dans le node)
module.exports = { HelpMessage, FallbackMessage };
