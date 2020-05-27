import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

class App extends React.Component {
  state = {
    language: 'english'
  }

  onLanguageChange = language => {
    this.setState({language})
  }

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i className="flag us" onClick={() => this.onLanguageChange('english')}></i>
          <i className="flag nl" onClick={() => this.onLanguageChange('dutch')}></i>
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <ColorContext.Provider value="primary"> {/*here I can change the color of the button */}
            <UserCreate></UserCreate>
          </ColorContext.Provider>
        </LanguageContext.Provider>
      </div>
    )
  }
}

export default App;
