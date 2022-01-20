import React from 'react';

const Button = ({ children, styles, ...props }) => {
    return (
        <button className={styles} type='submit' {...props}>
            {children}
        </button>

    );
};

export default Button;
