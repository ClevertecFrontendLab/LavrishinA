import sprite from '@utils/sprite.svg';

export const MaxLogo = () => {
    return (
        <div className={'logoContainer fullLogo'}>
            <svg className={'logo'}>
                <use xlinkHref={`${sprite}#logo`} />
            </svg>
        </div>
    );
};
