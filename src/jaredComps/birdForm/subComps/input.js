import React, { Component } from 'react';
class Input extends Component {
    state = {  }
    componentDidMount(){
        console.log(this.props.value);
    }
    render() { 
        let cal = (this.props.value === null)?'':this.props.value;
        return ( 
            <React.Fragment>
                <input type = 'text' value = {cal} onChange = {e=>{this.props.update(this.props.text, e.target.value);
                }}>{}</input>
            </React.Fragment>
         );
    }
}
 
export default Input;