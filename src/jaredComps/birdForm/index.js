import React, { Component } from 'react';
import Form from './subComps/form';
import Example from './subComps/example';
class BirdForm extends Component {
    state = {
        data: new Example()
    }
    render() {
        return (
            <div style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#a3a3a3'
            }}>
                <Form content={this.state.data} updateData = {this.updateData.bind(this)}></Form>
            </div>
        );
    }
    updateData(key, value) {
        let current = this.state.data;
        current[key] = value;
        this.setState({data:current})
    }
}

export default BirdForm;