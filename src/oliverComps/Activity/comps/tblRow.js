import React, { Component } from 'react';
class tblRow extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                {this.buildRows(this.props.rowContent)}
            </div>
            
         );
    }

    buildRows(column){
        
        let keys = Object.values(column);
        let width = window.screen.width / keys.length;
        return <div style={{
               
        }}>
            
            
            {keys.map(cell=>
                <div style={{
                   
                    display: 'inline-block',
                    width: width,
                    textAlign: 'center',
                    
                    
                }}>{cell}</div>
            )}
        </div>
    }
}
 
export default tblRow;