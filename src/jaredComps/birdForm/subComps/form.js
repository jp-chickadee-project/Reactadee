import React, {Component} from 'react';
import FrmRow from './frmRow';
/**
 * @prop {function} updateData - updates info from user
 * @prop {Object} example - used to pass info 
 */
class Form extends Component{
    render() {
        return (
            <div style ={{width : '50%', margin : 'auto'}}>
                {this.buildForm(this.props.content)}
            </div>
           
        );
    }
    buildForm(content){
        let keys = Object.keys(content);
        return keys.map((key,i) => {
            return <FrmRow key ={key+i} text ={key} value ={this.props.content[key]} updateData ={this.props.updateData}/>
        }

        );
    }
}
export default Form;