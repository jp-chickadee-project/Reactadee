import React, {Component} from 'react';
import FrmRow from './frmRow';

class Form extends Component{
    render() {
        return (
            <div style ={{width : '50%', margin : 'auto'}}>
                {this.buildForm(this.props.template)}
            </div>
           
        );
    }
    buildForm(content){
        let keys = Object.keys(content);
        return keys.map(key=>{
            return <FrmRow text ={key} value ={content[key]}/>
        }

        );
    }
}
export default Form;