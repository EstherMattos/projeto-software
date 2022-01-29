// DUMMY

/*Produto_controle é responsável por chamar o produto_model para fazer operações
CRUD e outras necessárias para os casos de uso. Além disso se comunica com as views
que requisitam essas informações relacionadas a produtos ou recebe das views os
formularios para alteração dos dados persistentes.
*/

const Produto_controle = () => {

    //READ
    const produtos = useProduto();

    //Retorna 1 produto dado o ID
    const produto = getProduto(id);

    //CREATE
    const handleSubmit = (event) => {};

    //UPDATE
    const updateSubmit = (event) => {};
    
    //DELETE
    const deleteSubmit = (event) => {
    };

    //VIEW
    return (
        <div>
            <p>Produtos</p>
        </div>
    )

}

export default Produto_controle;