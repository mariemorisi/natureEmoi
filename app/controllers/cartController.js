const { response } = require("express");
const dataMapper = require('../dataMapper');

const cartController = {
    cartPage: (request, response) => {
        if(!request.session.cart) {
            request.session.cart = [];
        }
        
        const cart = request.session.cart;
        // console.log("j'essaye de passer par là, dans ma session il y a : ");
        const details = {
            shipping: 9.90,
            totalTf: 0,
            total: 0,
          }
        
        if (cart) {

            for (const plant of cart) {
                plant.subTotal = plant.quantity * plant.price;
                console.log(plant.subTotal + " : subtotal");
                details.totalTf += plant.subTotal;
                console.log(details.totalTf + " : totalTF");
            }
        }

        details.total = details.totalTf + details.shipping;
        console.log(details);
        response.render('cart', { cart, details });

    }, 

    addCart: (request, response)=> {
        if (!request.session.cart) {
            request.session.cart= [];
        }
        console.log("j'essaye de passer par là et de rediriger ");

        const cart = request.session.cart;
        const id = Number(request.params.id);

        const plantInCart = cart.find(item => item.id === id);
        if (!plantInCart) {
            
            dataMapper.getOnePlant(id, (error, plant) => {

                plant.quantity = 1;
                cart.push(plant);
                response.redirect('/panier');
            })
        } else {
            plantInCart.quantity++;
            response.redirect('/panier');
        }

    },

    deleteCart: (request, response) => {
    const id = Number(request.params.id);

    const cart = request.session.cart;

    
    const plantInCart = cart.find(item => item.id === id);
    if (plantInCart) {

      plantInCart.quantity--;

      // Ensuite on vérifie si on a 0 ou moins afin de retirer la figurine du panier

      // filter renvoi un nouveau tableau fabriquer a partir d'un tableau que l'on a filtré avec une condition
      // On recréer complètement le panier ( c'est à dire que lin va créer une nouvelle référence)

      request.session.cart = request.session.cart.filter(plant => plant.quantity > 0);
      
      response.redirect('/panier');
    } else {
      next();
    }
    }
 }

module.exports = cartController;