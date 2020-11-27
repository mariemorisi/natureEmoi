const { response } = require('express');
const client = require('./database');

const dataMapper = {
    getAllPlants: (callback) => {
        if (typeof callback !== 'function') {
            console.error('Function required as parameter');
            return;
        }

        const queryObj = {
            text: `SELECT * FROM "plants"`
        };

        client.query(queryObj, (error, result) => {
            if (error) {
                console.error(error);
            }

            let plants = [];
            if (result) {
                plants = result.rows;
                console.log(plants);
            }
            callback(error, plants);
        });
    },
    getBestPlants: (callback) => {
        const query = {
            text: `SELECT * FROM "plants" WHERE "category" = 'meilleure vente'`
        }
        client.query(query, (error, result) => {
            if(error) {
            console.error('erreur sur les bestSellers');
        }

        let bestPlants = [];
        if (result) {
            bestPlants = result.rows;
        }
        callback(error, bestPlants);
        });
    }
}


module.exports = dataMapper;