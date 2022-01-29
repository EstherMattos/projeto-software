// DUMMY

/*Admin_controle é responsável por chamar o admin_model para fazer operações
CRUD e outras necessárias para os casos de uso. Além disso se comunica com as views
que requisitam essas informações relacionadas a admins ou recebe das views os
formularios para alteração dos dados persistentes.
*/

const Admin_controle = () => {

    //READ
    const admins = useAdmin();

    //Retorna 1 admin dado o ID
    const admin = getAdmin(id);

    //CREATE
    const handleSubmit = (event) => {};

    //UPDATE
    const updateSubmit = (event) => {};
    
    //DELETE
    const deleteSubmit = (event) => {};

    //VIEW
    return (
        <div>
            <p>Admins</p>
        </div>
    )

}

export default Admin_controle;