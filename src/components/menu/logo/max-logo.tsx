import React from 'react';
import s from './logo.module.css';
import sprite from '@utils/sprite.svg';

export const MaxLogo = () => {
    return (
        <div className={`${s.logoContainer} ${s.fullLogo}`}>
            <svg className={s.logo}>
                <use xlinkHref={`${sprite}#logo`} />
            </svg>
        </div>
    );
};
