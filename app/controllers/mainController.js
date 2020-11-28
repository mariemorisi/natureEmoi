const dataMapper = require('../dataMapper');

const mainController = {
    homePage: (request, response) => {
        dataMapper.getAllPlants((error, plants) => {
            if(error) {
                console.error('Erreur dans le mainController');
                return;
            }

            dataMapper.getBestPlants((error, bestPlants) => {
                if(error) {
                    console.log("erreur getBestPlants");
                }
                response.render('home', { bestPlants, plants })
            })
        })
    },
    article: (request, response) => {
        console.log(request.params.id + ' : request.params.id log')
        dataMapper.getOnePlant(Number(request.params.id), (error, plant) => {
            if(error) {
                console.error('Erreur getOnePlant');
            }
            response.render('article', { plant })
        })
    } 
}

module.exports = mainController;