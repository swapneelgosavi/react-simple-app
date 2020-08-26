import React ,{Component} from 'react';
import CharButton from './CharButton';
import ResetButton from './ResetButton';

class CharAdder extends Component {

    constructor(){
        super();

        this.state = {
            name : ''
        }

        this.finalCharAdder = this.finalCharAdder.bind(this);
        this.finalCharReset = this.finalCharReset.bind(this);
    }
    
    render() {
        return (
            <div>
                <CharButton buttonName="A" incrementMethod={this.finalCharAdder}/>
                <CharButton buttonName="B" incrementMethod={this.finalCharAdder}/>
                <CharButton buttonName="C" incrementMethod={this.finalCharAdder}/>               
                <span className="name">{this.state.name}</span>
                <ResetButton buttonName="Reset" resetMethod={this.finalCharReset}/>
            </div>
            
        )
    }

    finalCharAdder(buttonName) {
       /* this.setState
        ( 
            { 
                name: this.state.name + buttonName
            } 
        );*/

        this.setState ( (prevState) => { 
                return {name: prevState.name + buttonName}
            } 
        );
    }

    finalCharReset(testProp){
        console.log(`Called with param: ${testProp}`);
        this.setState ( () => { 
            return { name: '' }
        } 
    );
    }

}

export default CharAdder;