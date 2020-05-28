import React from 'react';
import LanguageConetext from '../context/LanguageContext';

class LanguageSelector extends React.Component {
  static contextType = LanguageConetext;
  render() {
    return (
      <div>
        Select a language:
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange('english')}
        ></i>
        <i
          className="flag nl"
          onClick={() => this.context.onLanguageChange('dutch')}
        ></i>
      </div>
    );
  }
}

export default LanguageSelector;
