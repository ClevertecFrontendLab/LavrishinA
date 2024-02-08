import sprite from '@utils/sprite.svg';
import s from './logo.module.css';

export const MinLogo = () => {
    return (
        <div className={`${s.logoContainer} ${s.minLogo}`}>
            <svg className={s.collapsedLogo}>
                <use xlinkHref={`${sprite}#collapsedlogo`} />
            </svg>
        </div>
    );
};
