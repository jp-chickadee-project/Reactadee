import React, { Component } from 'react';
import Form from './subComps/form';
class BirdForm extends Component {
    state = {  }
    render() { 
        return ( 
            <div style ={{
                width : '100%',
                height : '100%',
                backgroundColor: '#a3a3a3'
            }}>
                <Form></Form>
            
            </div>
         );
    }
}
 
export default BirdForm;