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

// "smooth" is WIP :p
const smoothDesignPath = (startX, startY) => {
  return {
    charD: `M ${startX+20},${startY+80} l 0,-50 c 40,0 40,50 0,50`,
    charE: `M ${startX+60},${startY+60} l 30,0 c 0,-20 -30,-20 -30,0 c 0,30 30,20 30,10`,
    charS: `M ${startX+130},${startY+55} c -5,-15 -25,-15 -30,-5 c 0,20 25,0 30,20 c -5,15 -25,15 -30,0`,
    charI: `M ${startX+140},${startY+80} l 0,-30 M ${startX+140},${startY+40} l 0,-2`,
    charG: `M ${startX+180},${startY+55} c -5,-15 -25,-15 -30,15 c 5,15 25,15 30,-5 z M ${startX+182},${startY+45} l 0,35 c 0,20 -30,30 -30,10`,
    charN: `M ${startX+195},${startY+45} l 0,35 M ${startX+195},${startY+50} c 10,-10 30,-10 30,0 l 0,31`
  };
};

export default class AnimationText2 extends React.Component {

  render() {
    const orangePath = sharpDesignPath(6, 0);
    const whitePath = sharpDesignPath(3, -1);
    const smoothOrangePath = smoothDesignPath(6, 0);
    const smoothWhitePath = smoothDesignPath(3, -1);
    return (
      <section className="animation-ad text-animation-ad">
        <h1>
            Er du en som simpelthen elsker <br />
            

          <svg viewBox="0 0 300 110" xmlns="http://www.w3.org/2000/svg">
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
          <svg viewBox="0 0 300 110" xmlns="http://www.w3.org/2000/svg">
            <path
              className="char-d white"
              d={smoothWhitePath.charD}
            />
            <path
              className="char-e white"
              d={smoothWhitePath.charE}
            />
            <path
              className="char-s white"
              d={smoothWhitePath.charS}
            />
            <path
              className="char-i white"
              d={smoothWhitePath.charI}
            />
            <path
              className="char-g white"
              d={smoothWhitePath.charG}
            />
            <path
              className="char-n white"
              d={smoothWhitePath.charN}
            />
            <path
              className="char-d"
              d={smoothOrangePath.charD}
            />
            <path
              className="char-e"
              d={smoothOrangePath.charE}
            />
            <path
              className="char-s"
              d={smoothOrangePath.charS}
            />
            <path
              className="char-i"
              d={smoothOrangePath.charI}
            />
            <path
              className="char-g"
              d={smoothOrangePath.charG}
            />
            <path
              className="char-n"
              d={smoothOrangePath.charN}
            />
          </svg>
        </h1>
      </section>
    );
  }
}

