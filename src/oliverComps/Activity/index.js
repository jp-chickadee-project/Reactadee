import React, { Component } from 'react';
import Table from './comps/table';
class Visit extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{
                backgroundColor: '#FFEBCD',
                height: '100%',
                width: '100%',
            }}>
                <Table></Table> 
            </div>
         );
    }
}
 
export default Visit;