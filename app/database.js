// 1. require le module
const { Client } = require('pg');

// 2. Créer un client
const client = new Client();

// 3. Connecter le client
client.connect();

// 4. Exporter le client connecté
module.exports = client;