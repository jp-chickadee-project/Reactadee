import React, { Component } from 'react';
import Config from '../config/config';
class Login extends Component {
    state = { 
        username:'johnsrya',
        foot:'https://dinepos.nmu.edu/GatherPub/img/foot.jpg',
     }
    render() { 
        let inputStyle={
            width:'80%',
            marginBottom:'1vh'
        }
        return ( 
            <div style={{width:'100%',height:'100%',backgroundColor:'white',
                backgroundImage: 'url('+this.state.foot+")",
                backgroundRepeat:'no-repeat',
                backgroundPosition:'center center',
                backgroundSize: "100% 100%",paddingTop:'10vh'}}>
                <div style={{width:'30%',height:'80%',backgroundColor:'white',
                            margin:'auto',boxShadow:'2px 5px 8px 10px #2a2a2a',
                            borderRadius:4,border:'.5px solid black'}}>
                    <img style={{width:'100%'}} src='https://www.nmu.edu/sites/default/files/UserFiles/Pictures/NMU_Stack_Transparent.png'></img>
                    <input style={inputStyle} type='text'></input>
                    <input style={inputStyle} type='password'></input>
                    {/* <span>Log in to </span>
                    <span>{Config.appTitle}</span> */}
                </div>
                <button onClick={()=>{this.props.loopBack(this.state.username)}}></button>
            </div>
         );
    }
    tryAuth(){
        return true;
    }
}
 
export default Login;