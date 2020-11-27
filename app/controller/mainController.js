const dataMapper = require('../dataMapper');

const mainController = {
    homePage: (request, response) => {
        dataMapper.getAllPlants((error, plants) => {
            if(error) {
                console.err('Erreur dans le mainController');
                return;
            }

            dataMapper.getBestPlants((error, bestPlants) => {
                if(error) {
                    console.log("erreur getBestPlants");
                }
                response.render('home', { bestPlants, plants })
            })
    })} 
}

module.exports = mainController;