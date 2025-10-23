# 🧾 Changelog

## [v2.0.0] - 2025-10-23
### 🚀 Added
- 🌦️ Météo intelligente : données précises avec formatage Telegram amélioré.
- 📊 Rapport J-1 automatisé avec fuseau horaire **Africa/Tunis**.
- 🌿 Recommandations adaptées à la phase de **maturation** (sans rappel d’engrais).
- 🔒 Sécurité renforcée : propagation du `chatId`, normalisation d’entrée.
- ⚙️ Nouvelle architecture de workflow modulaire (météo / rapport / recommandation / aide).

### 🐞 Fixed
- Problème de **rapport vide** en absence de données.
- Gestion des dates (TZ Africa/Tunis) corrigée.
- Amélioration de la cohérence des messages Telegram (Markdown et fallback).

### 🧠 Notes techniques
- Fusion et filtrage optimisés dans le code JS.
- Réorganisation des nœuds (HTTP, Edit Fields, Set) pour meilleure lisibilité.
- Testé sur n8n Cloud v2 avec Telegram Bot API stable.

---

## [v0.1.0] - 2025-10-18
### 🎉 Initial release
- Version de base du bot n8n Agro Telegram :
  - Déclencheur Telegram + `/aide`, `/meteo`, `/rapport`, `/recommandation`
  - Lecture Google Sheets
  - Intégration Open-Meteo
  - Analyse JavaScript simple
# 🧾 Changelog
