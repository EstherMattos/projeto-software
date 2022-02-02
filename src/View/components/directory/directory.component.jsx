import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

//"FUNCIONAL"

//Este componente busca os produtos do Banco de Dados
class Directory extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='directory-menu'>
                {//os nomes das variaveis tambem sao um pouco diferentes
                this.props.categorias.map(({ nome, imagem }) => (
                    <MenuItem title={nome} imageUrl={imagem} key={nome} />
                ))}
            </div>
        );
    }
}

export default Directory;