/*chama o hook, usa as funcoes do model e chama a view passando o props
vai precisar dos IDS para as funcoes, talvez pegar do key, deixar hidden no html
 ou passar como props tambem
*/

import useCategoria from '../hooks/useCategoria';

import Categoria_model from '../Model/Categoria_model';
import Directory from '../View/components/directory/directory.component';

const Categoria_controle = () => {

    const categorias = useCategoria();

    //pega os dados de um form e cria uma categoria nova
    const handleSubmit = (event) => {
        const formData = new FormData(event.currentTarget);
        event.preventDefault();
        Categoria_model.novaCategoria(formData.get('nome'),formData.get('imagem'));
    };

    //copiei porcamente para o update
    const updateSubmit = (event) => {
        const formData = new FormData(event.currentTarget);
        event.preventDefault();
        Categoria_model.updateCategoria(formData.get('nome'),formData.get('imagem'),formData.get('id'));
    };
    
    //copiei mais porcamente ainda para o delete
    const deleteSubmit = (event) => {
        const formData = new FormData(event.currentTarget);
        event.preventDefault();
        Categoria_model.deleteCategoria(formData.get('id'));
    };

    return (
        <div>
            <Directory categorias = {categorias} />
        </div>
    )

}

export default Categoria_controle;