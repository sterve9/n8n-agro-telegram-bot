# 🤖 n8n Agro Telegram Bot

![License MIT](https://img.shields.io/badge/License-MIT-green.svg)
![n8n](https://img.shields.io/badge/Automation-n8n-orange)
![Made with ❤️ by Sterve](https://img.shields.io/badge/Made%20with%20❤️-by%20Sterve-blue)
![Version](https://img.shields.io/badge/Version-v2.0.0-blue.svg)

---

## 🌿 Description

**n8n Agro Telegram Bot** est un assistant agricole intelligent conçu par **Sterve** pour automatiser les tâches quotidiennes des fermes.  
Il combine la puissance de **n8n**, **Telegram**, **Google Sheets** et **OpenWeatherMap API** pour fournir :  
- des **rapports d’exploitation automatiques**,  
- des **recommandations météorologiques intelligentes**,  
- et une **analyse contextuelle** selon la phase de culture.

🎯 Objectif : rendre l’agriculture plus **connectée, prévisible et productive** grâce à l’automatisation et à l’IA.

![Aperçu du workflow n8n](docs/workflowfinal.png)

---

## 🚀 Nouveautés v2.0 (Octobre 2025)

### 🌦️ Météo intelligente
- Récupération fiable des données météo via OpenWeatherMap.
- Formatage propre des messages Telegram avec conseils personnalisés.
- Gestion complète du `chatId` pour un envoi stable.

### 📊 Rapport automatisé
- Génération automatique du **rapport de la veille (J-1)**.  
- Filtrage par date robuste avec fuseau horaire **Africa/Tunis**.  
- Message clair si aucune donnée disponible.

### 🌱 Recommandations intelligentes
- Reconnaissance de la **phase de maturation** des fruits 🍋.  
- Suppression des rappels d’engrais pendant cette période.  
- Conseils adaptés aux conditions météo du jour.

### 🔐 Sécurité et fiabilité
- Commandes `/meteo`, `/rapport`, `/recommandation`, `/aide` normalisées.  
- Messages sécurisés (prévention d’injection Telegram).  
- Architecture modulaire et extensible pour les prochaines versions (assistant interactif).

---

## 🧰 Technologies utilisées

| Outil / API | Rôle principal |
|--------------|----------------|
| **n8n** | Moteur d’automatisation low-code |
| **Telegram Bot API** | Interface conversationnelle |
| **OpenWeatherMap API** | Source des données météo |
| **Google Sheets** | Base de données agricole |
| **JavaScript (n8n Code Node)** | Logique et analyse IA |

---

## ⚙️ Installation

### 🧩 Importer le workflow dans n8n

1. Ouvre ton instance **n8n** (Cloud ou local).  
2. Clique sur **Import Workflow**.  
3. Sélectionne le fichier :
workflows/assistant-agricole_v2-dev.json

yaml
Copier le code

---

### 🔐 Configurer les credentials nécessaires

| Credential | Rôle |
|-------------|------|
| **Telegram account** | Token du bot Telegram |
| **Google-agro** | Authentification Google Sheets |
| **OpenWeatherMap** | Clé API météo |

---

### ▶️ Lancer le bot

1. Active le workflow dans **n8n**.  
2. Ouvre ton bot sur Telegram.  
3. Envoie `/aide` pour afficher toutes les commandes disponibles.

---

## 💬 Commandes Telegram

| Commande | Description |
|-----------|-------------|
| `/meteo` | Obtenir la météo du jour 🌤️ |
| `/rapport` | Voir le rapport des activités de la veille 📊 |
| `/recommandation` | Recevoir les conseils IA du jour 🌿 |
| `/aide` | Afficher la liste des commandes disponibles 📘 |

---

## 📂 Structure du projet

n8n-agro-telegram-bot/
│
├── workflows/
│ └── assistant-agricole_v2-dev.json
│
├── scripts/
│ └── (extensions prévues)
│
├── docs/
│ └── workflowfinal.png
│
├── CHANGELOG.md
├── LICENSE
└── README.md

yaml
Copier le code

---

## 🕓 Historique des versions

| Version | Date | Description |
|----------|------|-------------|
| v1.0.0 | 2025-09-28 | Première version (météo + rapport) |
| v2.0.0 | 2025-10-23 | Refonte complète : météo fiable, rapport J-1, recommandations maturation |

---

## 🌍 Vision de Sterve

> *“L’automatisation est la clé pour redonner de la valeur au travail agricole en Afrique.  
Avec des outils comme n8n et Telegram, chaque ferme peut devenir intelligente, connectée et rentable.”*

---

## 👨‍💻 Auteur

**Sterve** — Entrepreneur digital & Concepteur d’agents IA  
📬 [Telegram](https://t.me/SterveShop) • [GitHub](https://github.com/sterve9) • [LinkedIn](https://www.linkedin.com/in/ton-profil)

---

## 📜 Licence

Distribué sous licence **MIT**.  
Voir le fichier [LICENSE](./LICENSE) pour plus d’informations.

🧠 Propulsé par **n8n**, **IA**, et la passion pour l’innovation agricole.
