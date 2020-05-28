import React from 'react';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

class Button extends React.Component {
  // example using the Consumer
  renderButton = (color) => {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {/* always going to be a funtion */}
          {({language}) => (language === 'english' ? 'Submit' : 'Voorleggen')}
        </LanguageContext.Consumer>
      </button>
    );
  };
  render() {
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
