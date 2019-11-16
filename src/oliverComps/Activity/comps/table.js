import React, { Component } from 'react';
import TblRow from './tblRow';
let example ={
    "rfid": "011016A269",
    "feederID": "CLIF",
    "visitTimestamp": 1492873308,
    "temperature": 44,
    "mass": 108,
    "bandCombo": "#a0/V",  
}

let headers = Object.keys(example);
example = (()=>{
    let arr = [];
    for(let i = 0; i < 50; i++){
        arr.push(example);
    }
    return arr;
})()
class Table extends Component {
    state = {  }
    render() { 
        console.log(headers);
        return ( 
            <div style={{
               
            }}>
                
                <div style={{
                    backgroundColor: 'white',
                    position: 'sticky'
                }}>{this.buildHeaders(headers)}</div>
                <div style={{
                    overflowY: 'scroll'
                    
                }}>{this.buildTable(example)}</div>
                
            </div>
         );
    }

    buildTable(content){
        return content.map(row=>{
            return <TblRow rowContent={row}></TblRow>
        })
    }

    buildHeaders(headers){
        let width = window.screen.width / headers.length;
        return headers.map(item =>{
            return <div style={{
                display: 'inline-block',
                width: '15%',
                fontSize: '150%',
                textAlign: 'center'
            }}>{item}</div>
        })
    }

}
 
export default Table;