import React from 'react';

import './custom-button.styles.scss';

//"FUNCIONAL"

//Este componente é o botao de sign in do google

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
    <button
        className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
        {...otherProps}
    >
        {children}
    </button>
);

export default CustomButton;