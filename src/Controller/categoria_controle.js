//cria o hook, usa as funcoes do model e chama a view passando o props

import useCategoria from '../hooks/useCategoria';

import Categoria_model from '../Model/Categoria_model';
import Directory from '../View/components/directory/directory.component';

const Categoria_controle = () => {

    const categorias = useCategoria();

    const handleSubmit = (event) => {
        const formData = new FormData(event.currentTarget);
        event.preventDefault();
        Categoria_model.novaCategoria(formData.get('nome'),formData.get('imagem'));
    };

    return (
        <div>
            <Directory categorias={categorias} />
        </div>
    )

}

export default Categoria_controle;