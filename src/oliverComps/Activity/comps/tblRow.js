import React, { Component } from 'react';
class tblRow extends Component {
    state = {  }
    render() { 
        let rowStyle = {
            width: '100%',
            textAlign: (typeof this.props.textAlign !== 'undefined')? this.props.textAlign: 'center'
        }
        let lcell = {
            width: '50%',
            float: 'left'
        }
        let rcell = {
            width: '50%',
            float: 'right'
        }
        return ( 
            this.buildRows(this.props.rowContent)
         );
    }

    buildRows(column){
        let keys = Object.keys(column);
        return <div>
            {keys.map(cell=>
                <div>{column[cell]}</div>
            )}
        </div>
    }
}
 
export default tblRow;