// DUMMY

/*Utiliza a stripe para realizar o pagamento e retorna o sucesso ou gera um 
erro dizendo o motivo da falha.
*/
const pagamento = () => {

    const stripe = require('stripe')(STRIPE_SECRET_KEY);

    const produto = getTheProduct(idProduto);

    stripe.charges.create({
        amount: produto.preco,
        currency: 'brl',
        source: cardToken.id,
        description: `Payment for ${produto.nome}`,
        metadta: {
            productId: produto.id
        }
    },
    function(err, charge) {
        if(err) new Error("Payment Failed");
        else console.log("Payment Success");
    })

}