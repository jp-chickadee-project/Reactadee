import React, { Component } from 'react';
import Form from './subComps/form';
import Example from './subComps/example';
class BirdForm extends Component {
    state = { 
        data : new Example()
     }
    render() { 
        return ( 
            <div style ={{
                width : '100%',
                height : '100%',
                backgroundColor: '#a3a3a3'
            }}>
                <Form template={this.state.data}></Form>
            
            </div>
         );
    }
}
 
export default BirdForm;