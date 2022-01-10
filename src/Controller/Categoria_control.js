/*chama o hook, usa as funcoes do model e chama a view passando o props
vai precisar dos IDS para as funcoes, talvez pegar do key, deixar hidden no html
 ou passar como props tambem
*///ToDo: usar hooks para atualizar automaticamente com as mudanças

import useCategoria from '../hooks/useCategoria';

import Categoria_model from '../Model/Categoria_modelo';
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

/*// forms de exemplo para teste

<form onSubmit={updateSubmit}>
    <input type="text" name="nome" placeholder="nome" />
    <input type="text" name="imagem" placeholder="imagemURL" />
    <input type="hidden" name='id' value={id} />
    <button type="submit">update</button>
</form>

<form onSubmit={deleteSubmit}>
    <input type="hidden" name='id' value={id} />
    <button type="submit">DELETE</button>
</form>
*/