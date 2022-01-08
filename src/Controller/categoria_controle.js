//chama o hook e chama a view passando o props

import useCategoria from '../hooks/useCategoria';
import Categoria from '../View/Categoria';

const Categoria_controle = () => {

    const categorias = useCategoria();

    //logs para teste
    console.log(categorias);
    console.log('teste');

    return (
        <Categoria categorias={categorias} />
    )

}

export default Categoria_controle;