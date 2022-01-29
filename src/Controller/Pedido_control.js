// DUMMY

/*Pedido_controle lida com os pedidos dos usuarios tanto na visão do usuário que pode
acompanhar o andamento ou cancelar os pedidos, quanto na visão dos administradores, 
que também precisam ver o andamento, mas também atualizar o andamento. O pedido 
funciona como um meio termo entre um carrinho e o pagamento, e tambem guarda o 
historico pois persiste no DB.
*/

const Pedido_controle = () => {

    //READ
    const pedidos = usePedido();

    //Retorna 1 pedido dado o ID
    const pedido = getPedido(id);

    //Atualiza o estado do pedido (aguardando pagamento, pago, entregue)
    const handleUpdate = (event) => {}

    //Cancela
    const cancelar = (event) => {}

    //VIEW
    return (
        <div>
            <p>Pedidos</p>
        </div>
    )

}

export default Pedido_controle;