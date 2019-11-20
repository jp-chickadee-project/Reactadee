import React, { Component } from 'react';
import TblRow from './tblRow';

//1492873308  timestamp

let exDate = new Date().getTime();
let example ={
    "rfid": "011016A269",
    "feederID": "CLIF",
    "visitTimestamp": exDate,
    "temperature": 44,
    "mass": 108,
    "bandCombo": "#a0/V",  
}

let options = ['Today','This Week','This Month','This Year'];

let headers = Object.keys(example);
example = (()=>{
    let arr = [];
    for(let i = 0; i < 20; i++){
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
                <div id='tableDiv' style={{   
                }}>{this.buildTable(example)}</div>
                
            </div>
         );
    }

    buildOptions(options){
        console.log(options)
        let width = window.screen.width / options.length;
        return options.map(element => {
            return <div style={{
                width: width,
                display: 'inline-block',
                backgroundColor: 'blanched-almond',
                textAlign: 'center',
                height: '100%'
                
            }}><button onClick={(e)=>{this.renderTable(element)}} style={{
                height: '100%',
                width: '50%',
                fontSize: '125%',
                backgroundColor: 'lightgray',
                border: 'none',
                borderRadius: '5%'
            }}>{element}</button></div>
        });
          
    }

    renderTable(content){
        let sendData = [];
        let nowTime = new Date();
        let nowMonth = nowTime.getMonth();
        let nowDay = nowTime.getDate();
        let nowYear = nowTime.getFullYear();
        
        if(content === "Today"){
            example.forEach(element => {
                let visitDay = new Date(element.visitTimestamp);
                let month = visitDay.getMonth();
                let day = visitDay.getDate();
                let year = visitDay.getFullYear();
                if(nowMonth === month && nowDay === day && nowYear === year){
                    sendData.push(element);
                }
                
            });   
        }
        else if(content === 'This Month'){
            example.forEach(element => {
                let visitDay = new Date(element.visitTimestamp);
                let month = visitDay.getMonth();
                let year = visitDay.getFullYear();
                if(nowMonth === month && nowYear === year){
                    sendData.push(element);
                }
            });
        }
        else{
            example.forEach(element => {
                let visitDay = new Date(element.visitTimestamp);
                let year = visitDay.getFullYear();
                if(nowYear === year){
                    sendData.push(element);
                }
            });
        }
        console.log(sendData)
        document.getElementById("tableDiv").innerHTML = this.buildTable(sendData);
   }

    buildTable(content){
        console.log('hello')
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