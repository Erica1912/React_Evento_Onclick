import React, { Component} from 'react';

class App extends Component {
  render(){
    return(
      <div className="App">
        <h4>Eventos</h4>
        <button onClick={() => alert ("hola")}>Hola</button>
      </div>
    );
  }
}


export default App;
