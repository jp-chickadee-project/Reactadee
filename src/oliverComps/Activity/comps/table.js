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

let options = { Today: 'Today',
                Week:'This Week',
                Month:'This Month',
                Year:'This Year'
                };

let headers = Object.keys(example);
var date = new Date(1492873308*1000);
console.log(date.getMonth())
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
        
        return ( 
            <div style={{
               width: '100%',
               height: '100%'
            }}>
                <div style={{
                    height: '8%'
                }}>{this.buildOptions(options)}</div>
                <div style={{
                }}>{this.buildHeaders(headers)}</div>
                <div style={{   
                }}>{this.buildTable(example)}</div>
                
            </div>
         );
    }

    buildOptions(options){
        let width = 
        |        
          
    }

    renderTable(content){

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
                width: width,
                fontSize: '150%',
                textAlign: 'center'
            }}>{item}</div>
        })
    }

}
 
export default Table;