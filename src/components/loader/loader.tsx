import {Player} from '@lottiefiles/react-lottie-player';
import animationData from './loader.json';

export const Loader = () => {
    return (

            <Player
                className={'loader'}
                autoplay
                loop
                src={animationData}
                style={{height: '150px', width: '150px',}}
                data-test-id='loader'
            />


    );
};
