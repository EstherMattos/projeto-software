// DUMMY

/*Usuario_controle é responsável por chamar o Usuario_model para fazer operações
CRUD e outras necessárias para os casos de uso. Além disso se comunica com as views
que requisitam essas informações relacionadas a Usuarios ou recebe das views os
formularios para alteração dos dados persistentes.
*/

const Usuario_controle = () => {

    //READ
    const usuarios = useUsuario();

    //Retorna 1 Usuario dado o ID
    const usuario = getUsuario(id);

    //CREATE
    const handleSubmit = (event) => {};

    //UPDATE
    const updateSubmit = (event) => {};
    
    //DELETE
    const deleteSubmit = (event) => {};

    //VIEW
    return (
        <div>
            <p>Usuarios</p>
        </div>
    )

}

export default Usuario_controle;