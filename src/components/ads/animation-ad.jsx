import React from 'react';
//import Anime from 'react-anime';

export default class AnimationAd extends React.Component {
  render () {
    //const heightDistance = window.innerHeight * 0.45;
    //const widthDistance = window.innerWidth * 0.45;
    //const ballSize = 20; //in pixels
    return <section className="animation-ad" />;
    /*
    return (
      <section className="animation-ad">
        <Anime easing="easeOutCubic"
          duration={500}
          delay={2400}
          translateX={-window.innerWidth}
        >
          <h1>Liker du å holde deg oppdatert på de siste trendene?</h1>
          <div className="animation-ad-container">
            <div className="animation-canvas">
              <Anime easing="easeOutCubic"
                duration={700}
                direction="normal"
                loop={false}
                delay={(el, index) => index * heightDistance}
                translateX={(el, index) => [(index * ballSize) + ballSize, (index*ballSize)+ballSize]}
                scaleY={(el, index) => [1, 10.5 + (index * 1.5)]}
              >
                <div className="ball-container ball-container-1 white" />
                <div className="ball-container ball-container-1 white" />
                <div className="ball-container ball-container-1 white" />
                <div className="ball-container ball-container-1 white" />
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
                <div className="ball-container ball-head-1 orange" />
                <div className="ball-container ball-head-1 orange" />
                <div className="ball-container ball-head-1 orange" />
                <div className="ball-container ball-head-1 orange" />
              </Anime>
            </div>
            <div className="animation-canvas">
              <Anime easing="easeOutCubic"
                duration={1400}
                direction="normal"
                loop={false}
                delay={(el, index) => (index * 240)+700}
                translateX={(el, index) => [(index * ballSize) + 30, (index*ballSize)+30]}
                translateY={(el, index) => [200 + (index * 30), 200 + (index * 30)]}
                scaleX={(el, index) => [0, 20.5]}
              >
                <div className="ball-container ball-container-2 orange" />
                <div className="ball-container ball-container-2 orange" />
                <div className="ball-container ball-container-2 orange" />
                <div className="ball-container ball-container-2 orange" />
              </Anime>
            </div>
            <div className="animation-canvas">
              <Anime easing="easeOutCubic"
                duration={1400}
                direction="normal"
                loop={false}
                delay={(el, index) => (index * 240)+700}
                translateX={(el, index) => [(index * ballSize) + ballSize, (index*ballSize) + 460]}
                translateY={(el, index) => [200 + (index * 30), 200 + (index * 30)]}
                opacity={[
                  { value: 0.5, duration: 5, delay: 0 },
                  { value: 1, duration: 695, delay: 0 }
                ]}
              >
                <div className="ball-container ball-head-2 white" />
                <div className="ball-container ball-head-2 white" />
                <div className="ball-container ball-head-2 white" />
                <div className="ball-container ball-head-2 white" />
              </Anime>
            </div>
                            
                        
          </div>
                    
        </Anime>
      </section>
    );
    */
  }
}
