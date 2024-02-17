import { Player } from '@lottiefiles/react-lottie-player';
import animationData from './loader.json';
export const Loader = () => {
    return (
        <Player
            autoplay
            loop
            src={animationData}
            style={{ height: '300px', width: '300px' }}
        />
    );
};