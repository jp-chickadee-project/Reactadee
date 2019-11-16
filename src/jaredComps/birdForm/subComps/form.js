import React, {Component} from 'react';
import FrmRow from './frmRow';
const example = {
        "bagAndBirdWeight": 22.75, 
        "bagWeight": 12.3, 
        "bandNumber": "2830-56002", 
        "banders": "Lindsay, Szarmach", 
    	"bandCombo": "#B/v0",
        "bibWidth": 22.5, 
        "billDepth": 3.7, 
        "billLength": 5.1, 
        "billWidth": 3.5, 
        "birdWeight": 10.45, 
        "capLength": 32.5, 
        "captureSite": "Carpenter Net", 
        "captureTimestamp": 1507296600, 
        "image": null, 
        "legLeftBottom": "NONE", 
        "legLeftTop": "v0", 
        "legRightBottom": "#", 
        "legRightTop": "B",
        "logTimestamp": 1507579560, 
        "longestSecondary": 54, 
        "netEnterTimestamp": 1507262400, 
        "netExitTimestamp": 1507262400, 
        "notes": "molting R6, R6 photos taken", 
        "releasedTimestamp": 1507262400, 
    	"rfid": "011016A4D4", 
        "species": "BCCH", 
        "suspectedSex": "unknown", 
        "tailLength": 61, 
        "tarsusLength": 17.7, 
        "tissueSample": "feather", 
        "weather": "Clear, 55F", 
        "wingChordLength": 63   
}

class Form extends Component{
    state ={}
    render() {
        return (
            <div style ={{width : '50%', margin : 'auto'}}>
                {this.buildForm(example)}
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