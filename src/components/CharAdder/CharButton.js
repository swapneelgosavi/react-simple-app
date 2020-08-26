import React ,{Component} from 'react';
import './CharButton.css';

class CharButton extends Component {

    constructor() {
        super();
        // this.state = {
        //     name : 'A'
        // }

        this.addChar = this.addChar.bind(this);

    }

    render() {
        return (
            <div>
                <button onClick={this.addChar}> {this.props.buttonName}  </button>               
            </div>
                     
        )
    }

    addChar() {
        // this.setState( 
        //         { name: this.state.name + 'A'} 
        //     );

        this.props.incrementMethod(this.props.buttonName);
    }
}

export default CharButton;