//"FUNCIONAL"

/*Categoria_controle é responsável por chamar a categoria_model para fazer operações
CRUD e outras necessárias para os casos de uso. Além disso se comunica com as views
que requisitam essas informações relacionadas a categoria ou recebe das views os
formularios para alteração dos dados persistentes.
*/
import useCategoria from '../hooks/useCategoria';

import Categoria_model from '../Model/Categoria_model';
import Directory from '../View/components/directory/directory.component';

const Categoria_controle = () => {

    //READ
    const categorias = useCategoria();

    //CREATE
    const handleSubmit = (event) => {
        const formData = new FormData(event.currentTarget);
        event.preventDefault();
        Categoria_model.novaCategoria(formData.get('nome'),formData.get('imagem'));
    };

    //UPDATE
    const updateSubmit = (event) => {
        const formData = new FormData(event.currentTarget);
        event.preventDefault();
        Categoria_model.updateCategoria(formData.get('nome'),formData.get('imagem'),formData.get('id'));
    };
    
    //DELETE
    const deleteSubmit = (event) => {
        const formData = new FormData(event.currentTarget);
        event.preventDefault();
        Categoria_model.deleteCategoria(formData.get('id'));
    };

    //VIEW
    return (
        <div>
            <Directory categorias = {categorias} />
        </div>
    )

}

export default Categoria_controle;