import React from 'react';

const textOptions = {
  // Initial position
  offset: 0,
  // How often we change the random characters
  interval: 25,
  // Number of random characters to show
  iterations: 10,
  // Random characters to pick from
  characters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'x', '#', '%', '&', '-', '+', '_', '?', '/', '\\', '='],
};

export default class AnimationText extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            wordCounter: 0,
            words: ['design?', 'programmering?', 'teknologi?'],
            word: 'teknologi',
            animatedWord: ''
        };
    }

    componentDidMount () {
        this.doTextAnimation(this.state.words[0], textOptions);
    }

    doWordsAnimation () {
        if (this.state.wordCounter >= this.state.words.length) { return; }
        window.setTimeout(() => {
            this.setState({
                animatedWord: ''
            });
            this.doTextAnimation(this.state.words[this.state.wordCounter], textOptions);
        }, 1000);
    }

    getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getRandomCharacter(characters) {
        return characters[this.getRandomInteger(0, characters.length - 1)];
    }

    doRandomTextEffect(options, text) {
        const { offset, timeout, iterations, characters } = options;
        const length = text.length >= 2 ? text.length : 0;
        return text.substring(0, length) + this.getRandomCharacter(options.characters);
    }

    doTextAnimation (word, options) {
        let counter = 0;
        let wordTimer = null;
        let charTimer = null;
        wordTimer = window.setInterval(() => {
            counter++;
            if (charTimer) { window.clearInterval(charTimer); }
            if (counter >= word.length-1) { 
                window.clearInterval(charTimer);
                window.clearInterval(wordTimer);
                this.setState({
                    animatedWord: word,
                    wordCounter: ++this.state.wordCounter
                }, () => {
                    this.doWordsAnimation();
                });
                return ;
            }
            charTimer = window.setInterval(() => {
                this.setState({
                    animatedWord: this.doRandomTextEffect(options, word.substring(0, counter))
                })
            }, options.interval)
        }, options.interval * options.iterations)
    }

  render() {
      const { animatedWord } = this.state;
    return (
      <section className="animation-ad">
          <h1>
            Er du en som simpelthen elsker <br />
            <span className="text-orange">{animatedWord}</span>
          </h1>

        
      </section>
    );
  }
};