import React ,{Component} from 'react';
import './App.css';
import CharAdder from './components/CharAdder/CharAdder'

class App extends Component {

  render(){
      
    return (
        <div className="App">
          <CharAdder/>          
        </div>
      )
    }

}

export default App;
