import React from 'react';


const sharpDesignPath = (startX, startY) => {
  return {
    charD: `M ${startX+10},${startY+80} l 0,-50 l 20,25 l -20,25`,
    charE: `M ${startX+40},${startY+65} l 30,0 l -15,-15 l -15,15 l 15,15 l 7,-7`,
    charS: `M ${startX+95},${startY+50} l -15,10 l 15,10 l -15,10`,
    charI: `M ${startX+107},${startY+80} l 0,-30 M ${startX+107},${startY+40} l 0,-2`,
    charG: `M ${startX+150},${startY+65} l -15,15 l -15,-15 l 15,-15 l 15,15 l 0,30 l -30,0`,
    charN: `M ${startX+160},${startY+80} l 0,-30 l 20,30 l 0,-30`
  };
};

export default class AnimationText2 extends React.Component {

  render() {
    const orangePath = sharpDesignPath(6, 0);
    const whitePath = sharpDesignPath(3, -1);
    return (
      <section className="animation-ad text-animation-ad">
        <h1>
            Er du en som simpelthen elsker <br />
            

          <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
            <path
              className="char-d white"
              d={whitePath.charD}
            />
            <path
              className="char-e white"
              d={whitePath.charE}
            />
            <path
              className="char-s white"
              d={whitePath.charS}
            />
            <path
              className="char-i white"
              d={whitePath.charI}
            />
            <path
              className="char-g white"
              d={whitePath.charG}
            />
            <path
              className="char-n white"
              d={whitePath.charN}
            />
            <path
              className="char-d"
              d={orangePath.charD}
            />
            <path
              className="char-e"
              d={orangePath.charE}
            />
            <path
              className="char-s"
              d={orangePath.charS}
            />
            <path
              className="char-i"
              d={orangePath.charI}
            />
            <path
              className="char-g"
              d={orangePath.charG}
            />
            <path
              className="char-n"
              d={orangePath.charN}
            />
          </svg>
        </h1>
      </section>
    );
  }
}

