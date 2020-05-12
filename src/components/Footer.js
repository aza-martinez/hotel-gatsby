import React from 'react';
import { css } from '@emotion/core';

const Footer = () => {

    const currentYear =  new Date().getFullYear();

    return (
        <React.Fragment>
            <footer css={css`
                width: 100%;
                background-color: #130f40;
                padding: 1rem;
                margin-top: 1rem;
            `}>
                <p css={css`
                    text-align: center;
                    color: #ffffff;
                    font-weight: 700;
                `}>
                    Hotel Gatsby. Todos los derechos Reservados {currentYear} &copy;
                </p>
            </footer>
        </React.Fragment>
    );
};

export default Footer;