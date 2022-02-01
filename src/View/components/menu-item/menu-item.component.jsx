import React from 'react';

import './menu-item.styles.scss';

//"FUNCIONAL"

//Este componente carrega a estrutura do menu inicial de produtos da homepage

const MenuItem = ({ title, imageUrl }) => (
    <div className={`menu-item`}>
        <div
            className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>

    </div>
);

export default MenuItem;