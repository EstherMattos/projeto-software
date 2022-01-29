// DUMMY

/*Carrinho_controle representa um carrinho de compras, e é usado para satisfazer
os caso de uso do carrinho. Para isso ele precisa de produtos, usuário, e pedido.
Ele não se comunica com carrinho model, pois não existe uma tabela de carrinhos,
mas precisa se comunicar com os models de produto e usuário para criar um pedido,
e se comunica com pedido_model para persistir esse dado.
*/

const Carrinho_controle = () => {

    //READ
    const carrinho = useCarrinho();

    //ADICIONA PRODUTO
    const handleAdd = (event) => {}

    //REMOVE PRODUTO
    const handleRemove = (event) => {}

    //FECHA CARRINHO E GERA PEDIDO
    const handlePedido = (event) => {}

    //VIEW
    return (
        <div>
            <p>Carrinho</p>
        </div>
    )

}

export default Carrinho_controle;