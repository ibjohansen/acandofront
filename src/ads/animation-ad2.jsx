import React from 'react';

/**
 * NOTE: animation-ad.jsx is an attempt on doing animations with react-anime, but
 * I felt that it was somewhat restraining. So this is an attempt to use the vanilla
 * anime.js library and just have react render out the initial html. We will 
 * manipulate the html through anime.js although this is not the recommended way.
 */
export default class AnimationAd2 extends React.Component {

    componentDidMount () {
        const heightDistance = window.innerHeight * 0.45;
        const widthDistance = window.innerWidth * 0.45;
        const ballSize = 20; //in pixels
        const colorOrange = '#FF4C05';
        const colorWhite = '#fff';
        const initialDelay = 500;

        anime({
            targets: '.ball-container-1',
            easing: "easeOutCubic",
            duration: 700,
            delay: (el, index) => (index * heightDistance)+initialDelay,
            translateX: (el, index) => {
                return [(index * ballSize) + ballSize, (index*ballSize)+ballSize]
            },
            scaleY: (el, index) => {
                return [1, 10.5 + (index * 1.5)];
            }
        });
        anime({
            targets: '.ball-container-2',
            easing: "easeOutCubic",
            duration: 700,
            delay: (el, index) => initialDelay+1400+(index*heightDistance),
            translateX: [10, 10],//(el, index) => [(index * ballSize) + ballSize, (index*ballSize)+ballSize],
            translateY: [-2, -2],//(el, index) => [200 + (index * 30), 200 + (index * 30)],
            scaleX: (el, index) => [0, 20.5]
        });
        
        let ballHeadConfiguration = (index) => {
            return {
                targets: `.ball-head-${index}`,
                easing: 'easeOutCubic',
                translateX: [
                    { value: (index*ballSize)+ballSize, duration: 1},
                    { value: ((index*ballSize)+ballSize + (20.5*ballSize)), duration: 700, delay: initialDelay+1400+(index*heightDistance)}
                    //{ value: (index*ballSize) + window.innerWidth*2, duration: 700, delay: 2400}
                ],
                translateY: [
                    { value: 10, duration: 1},
                    { value: 200 + (index*30), duration: 700, delay: initialDelay+(index*heightDistance)}
                ],
                background: [
                    { value: colorOrange, duration: 1},
                    { value: colorWhite, duration: 300, delay: initialDelay+(1100+(index*heightDistance))}
                ]
            };
        };
        anime(ballHeadConfiguration(0));
        anime(ballHeadConfiguration(1));
        anime(ballHeadConfiguration(2));
        anime(ballHeadConfiguration(3));

        anime({
            targets: '.line-container',
            translateX: (el, index) => [(index * ballSize) + ballSize, (index * ballSize) + ballSize],
            translateY: (el, index) => [202 + (index * 30), 202 + (index * 30)],
            duration: 1,
            delay: (el, index) => initialDelay+1400+(index*heightDistance),
            opacity: [0, 1]

        });
        anime({
            targets: '.animation-ad-container',
            easing: 'easeOutCubic',
            translateX: -window.innerWidth,
            delay: (initialDelay/2)+2500,
            duration: 700
        });
    }

    render () {

        return (
            <section className="animation-ad">
                
                <div className="animation-ad-container">
                    <h1>Liker du å holde deg oppdatert på de siste trendene?</h1>
                    <div className="animation-canvas">
                        <div className="ball-container ball-container-1 white"></div>
                        <div className="ball-container ball-container-1 white"></div>
                        <div className="ball-container ball-container-1 white"></div>
                        <div className="ball-container ball-container-1 white"></div>
                    </div>
                    <div className="animation-canvas">
                        <div className="line-container line-container-1 orange">
                            <div className="ball-container ball-container-2 orange"></div>
                        </div>
                        <div className="line-container line-container-1 orange">
                            <div className="ball-container ball-container-2 orange"></div>
                        </div>
                        <div className="line-container line-container-1 orange">
                            <div className="ball-container ball-container-2 orange"></div>
                        </div>
                        <div className="line-container line-container-1 orange">
                            <div className="ball-container ball-container-2 orange"></div>
                        </div>
                    </div>
                    <div className="animation-canvas">
                        <div className="ball-container ball-head ball-head-0 orange"></div>
                        <div className="ball-container ball-head ball-head-1 orange"></div>
                        <div className="ball-container ball-head ball-head-2 orange"></div>
                        <div className="ball-container ball-head ball-head-3 orange"></div>
                    </div>

                    <div className="animation-offset-container">
                        <h1>Da er lorem ipsum dolor mit amet.</h1>
                    </div>
                </div>  
            </section>
        );
    }
}