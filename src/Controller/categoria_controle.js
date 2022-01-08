//chama o hook e chama a view passando o props

import useCategoria from '../hooks/useCategoria';
import Categoria from '../View/Categoria';

import Categoria_model from '../Model/Categoria_model';

const Categoria_controle = () => {

    const categorias = useCategoria();

    //logs para teste
    //console.log(categorias);
    //console.log('teste');
    //console.log(formData.get('nome'));

    const handleSubmit = (event) => {
        const formData = new FormData(event.currentTarget);
        event.preventDefault();
        Categoria_model.novaCategoria(formData.get('nome'),formData.get('imagem'));
        
        /* loop pelas antradas do form
        for (let [key, value] of formData.entries()) {
          console.log(key, value);
        }*/
    };

    return (
        <div>
            <Categoria categorias={categorias} />
            <form onSubmit={handleSubmit}>
                <label>Nome da Categoria:
                <input type="text" name="nome" />
                </label>
                <label>URL da Imagem:
                <input type="text" name="imagem" />
                </label>
                <button type='submit'>ENVIAR</button>
            </form>
        </div>
    )

}

export default Categoria_controle;