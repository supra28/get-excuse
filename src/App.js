import React, { Component } from 'react';
import './App.css';
import ReactCopyButtonWrapper from 'react-copy-button-wrapper';
const excuses = require('excuses').developers;
let text= "";
class App extends Component {

getExcuse() {
   text = excuses.getRandom();
    return text;
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <p style={{fontSize: '14px'}} >{this.getExcuse()}</p>
          <ReactCopyButtonWrapper text={text}>
            <button>Copy</button>
          </ReactCopyButtonWrapper>
        </div>
      </div>
    );
  }
}

export default App;
