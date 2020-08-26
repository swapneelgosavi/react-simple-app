import React ,{Component} from 'react';
import './CharButton.css';

class ResetButton extends Component {

    constructor() {
        super();

        //this.resetChar = this.resetChar.bind(this);

    }

    render() {
        return (
            <div>
                {/* <button onClick={this.resetChar}> {this.props.buttonName}  </button>                */}
                  
                 {/* Calling parent method directly with parameter */} 
                <button onClick={ () => this.props.resetMethod(this.props.buttonName) }> {this.props.buttonName}  </button>               
            </div>
                     
        )
    }

    // resetChar() {
    //       this.props.resetMethod();
    // }
}

export default ResetButton;