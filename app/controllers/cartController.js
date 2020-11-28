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

    }
 }

module.exports = cartController;