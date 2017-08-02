import React from 'react';
import Anime from 'react-anime';

export default class AnimationAd extends React.Component {

    componentDidMount () {

    }

    render () {
        const heightDistance = window.innerHeight * 0.45;
        const widthDistance = window.innerWidth * 0.45;
        const ballSize = 20; //in pixels

        return (
            <section className="animation-ad">
                <h1>Liker du å holde deg oppdatert på de siste trendene?</h1>
                <div>
                    
                </div>
                <div className="animation-container">
                    <div className="animation-canvas">
                        <Anime easing="easeOutCubic"
                                duration={700}
                                direction="normal"
                                loop={false}
                                delay={(el, index) => index * heightDistance}
                                translateX={(el, index) => [(index * ballSize) + ballSize, (index*ballSize)+ballSize]}
                                scaleY={(el, index) => [1, 10.5 + (index * 1.5)]}
                            >
                            <div className="ball-container ball-container-1 white"></div>
                            <div className="ball-container ball-container-1 white"></div>
                            <div className="ball-container ball-container-1 white"></div>
                            <div className="ball-container ball-container-1 white"></div>
                        </Anime>
                    </div>
                    <div className="animation-canvas">
                        <Anime easing="easeOutCubic"
                                duration={700}
                                direction="normal"
                                loop={false}
                                delay={(el, index) => index * heightDistance}
                                translateX={(el, index) => [(index * ballSize) + ballSize, (index*ballSize)+ballSize]}
                                translateY={(el, index) => [10, 200 + (index * 30)]}
                            >
                            <div className="ball-container ball-head-1 orange"></div>
                            <div className="ball-container ball-head-1 orange"></div>
                            <div className="ball-container ball-head-1 orange"></div>
                            <div className="ball-container ball-head-1 orange"></div>
                        </Anime>
                    </div>
                    <div className="animation-canvas">
                        <Anime easing="easeOutCubic"
                                duration={700}
                                direction="normal"
                                loop={false}
                                delay={(el, index) => (index * 240)+700}
                                translateX={(el, index) => [(index * ballSize) + 30, (index*ballSize)+30]}
                                translateY={(el, index) => [200 + (index * 30), 200 + (index * 30)]}
                                scaleX={(el, index) => [0, 10.5]}
                            >
                            <div className="ball-container ball-container-2 orange"></div>
                            <div className="ball-container ball-container-2 orange"></div>
                            <div className="ball-container ball-container-2 orange"></div>
                            <div className="ball-container ball-container-2 orange"></div>
                        </Anime>
                    </div>
                    <div className="animation-canvas">
                        <Anime easing="easeOutCubic"
                                duration={700}
                                direction="normal"
                                loop={false}
                                delay={(el, index) => (index * 240)+700}
                                translateX={(el, index) => [(index * ballSize) + ballSize, (index*ballSize) + 230]}
                                translateY={(el, index) => [200 + (index * 30), 200 + (index * 30)]}
                                opacity={[
                                    { value: 0.5, duration: 5, delay: 0 },
                                    { value: 1, duration: 695, delay: 0 }
                                ]}
                            >
                            <div className="ball-container ball-head-2 white"></div>
                            <div className="ball-container ball-head-2 white"></div>
                            <div className="ball-container ball-head-2 white"></div>
                            <div className="ball-container ball-head-2 white"></div>
                        </Anime>
                    </div>
                </div>
            </section>
        );
    }
}