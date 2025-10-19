# Scripts – n8n-agro-telegram-bot

Ces scripts correspondent à tes Code nodes du workflow. Tu peux les copier-coller dans n8n Cloud quand tu réimportes le workflow ailleurs.

## Index

| #  | Fichier                      | Rôle / Node n8n                 |
|---:|------------------------------|----------------------------------|
| 01 | 01-filterByYesterday.js      | Filtrer les lignes “hier” (Code: `filtrer par date`) |
| 02 | 02-formatWeatherFields.js    | Transformer la réponse Open-Meteo (équiv. de `Edit Fields1`) |
| 03 | 03-buildFarmReport.js        | Construire le rapport Telegram (Code: `Code in JavaScript`) |
| 04 | 04-buildRecommendation.js    | Générer les recommandations météo (Code: `Construire prompt IA1`) |
| 05 | 05-telegramMessages.js       | Textes statiques: Aide & Fallback |

## Utilisation rapide (n8n Cloud)

- **Rapport** : ouvrir le Code node `Code in JavaScript` → coller le contenu de `03-buildFarmReport.js` → finir par:
```js
return buildFarmReport(items, 7899716689); // remplace par ton chat_id de secours




