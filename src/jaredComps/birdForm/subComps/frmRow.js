import React, { Component } from 'react';
/**
 * @prop {text} text - form input text
 * @prop {value} value - The form input default value
 * @prop {text} textAlign - #optional 
 * */
class FrmRow extends Component{
    state = {  }
    render() { 
        let rowStyle = {
            width : '100%',
            textAlign : (typeof this.props.textAlign !== 'undefined')? this.props.textAlign:'center' 
        }
        let lCell = {
            width : '50%',
            float : 'left'
        }
        let rCell = {
            width : '50%',
            float : 'right'
        }
        return ( 
            <div style={rowStyle}> {/*row */}
                <div style={lCell}>{/*left cell */}
                    {this.props.text}

                </div>
                <div style={rCell}>{/*right cell */}
                <input style ={{width :'100%'}} type = 'text' value = {this.props.value}></input>
                </div>
               
            </div>
         );
    }
}
 
export default FrmRow;