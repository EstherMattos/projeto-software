//agora chama o controle, que por sua vez vai chamar o diretorio

import React from 'react';
import Categoria_controle from '../../../Controller/Categoria_controle';

import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <Categoria_controle/>
    </div>
);

export default HomePage;