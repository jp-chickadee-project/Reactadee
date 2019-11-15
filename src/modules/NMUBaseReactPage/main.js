import React, { Component } from 'react'; 
import Login from './comps/login';
const fontYellow = '#ffc425';
const nmuLightGreen = '#065540';
const nmuDarkGreen = '#034030';

const loginFontSize = '2vmin';
/**
 * The main page container for nmu react page
 * @param content a react component to render in the display area  
 * @param Pages 
 */
class Main extends Component {
    state = { 
        headImg:'https://www.nmu.edu//Webb/Images/NMULogos/NMU_G_Horizontal_Transparent.png',
        foot:'https://dinepos.nmu.edu/GatherPub/img/foot.jpg',
        fontFamily:'times new roman',
        at:null, // auth
        user:null,
        nav:null,
        content:null
     }
     /**
      * Gets the users name or displays login link
      */
    getUser(){
        let link = null;
        let user = 'login';
        if(this.state.user === null){
            return <span>{user}</span>
        }
        else{
            return <React.Fragment>
            <span>{this.state.user}</span>
            <span style={{marginLeft:'.5vw',marginRight:'.5vw'}}>|</span>
            <span onClick={()=>{this.deAuth()}}>logout</span>
        </React.Fragment>
        }
    }
    render() { 
        let requireAuth = this.state.at;
        return (
            <React.Fragment>
                <link rel="shortcut icon" href="https://www.nmu.edu/favicon.ico?v=2" />
                <header style={{width:'100vw',height:'7vh',backgroundColor:'#034030',
                                overflow:'hidden',
                                backgroundImage: 'url('+this.state.headImg+")",
                                backgroundRepeat:'no-repeat',
                                backgroundPosition:'center center',
                                backgroundSize: "auto 100%",
                                fontSize:loginFontSize,
                                verticalAlign:'bottom',
                                fontFamily:this.state.fontFamily,
                                color:fontYellow,
                                textAlign:"right",
                                display:(()=>{return !requireAuth?'none':''})()}}>
                                    {this.getUser()}
                </header>
                {!this.requireAuth && this.getNav()}
                <div style={{width:'100vw',height:(()=>{return !requireAuth?'100vh':'90vh'})(),fontFamily:this.state.fontFamily,backgroundColor:'white', overflow:'hidden'}}>
                    {this.getContent()}
                </div>
            </React.Fragment>
             );
    }
    /**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  Page generation area ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /**
     * Generates the navigation bar for page based on provided pages,
     * This function is only invoked through the pages parameter 
     */
    getNav(){
        let style = {height:'3vh',width:'100vw',backgroundColor:nmuLightGreen,overflow:
        'hidden', fontSize:'2vmin'}
        if(this.state.nav === null){
            return <div style={style}></div>
        }
        else{
            return <nav style={style}>
                {this.state.nav.map(
                    navi=>
                        <span style={{color: nmuDarkGreen, filter:'invert(100%)',marginRight:'1vw',marginLeft:'1vw'}}
                            onClick={()=>{this.navClick(navi)}}>
                            {navi}
                        </span>)}
            </nav>
        }
    }
    /**
     * Determines if content is avalible for displaying 
     * !~!! this will default to displaying content, automatically assuming that 
     * this content is meant to be statically displayed over the pages.
     * If only pages are avalible then the generatePagesAndNav function will be run to build the navigation bar 
     */
    getContent(){
        let defaultMSG = 'No Content to display';
        switch(true){
            case(!this.state.at):
                this.state.user === null && this.setState({user:''})
                return <Login loopBack={(username)=>{this.authenticatedUserCallBack(username)}}/>
            case (typeof this.props.content !== 'undefined'):
                return this.props.content;
            case (typeof this.props.pages !=='undefined'):
                return this.generatePagesAndNav();
            default:
                return<h1>{defaultMSG}</h1>
        }
    }
    /**
     * 
     */
    generatePagesAndNav(){
        let newNav = Object.keys(this.props.pages)
        if(this.state.nav === null){
            this.setState({
                nav: newNav,
                content:newNav[0]
            });
        }
        return this.state.content;
    }
    navClick(page){
        this.setState({
            content:this.props.pages[page]
        })
    }
    /**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  Authentication Loop Back area ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    authenticatedUserCallBack(username){
        this.setState({
            user:username,
            at:true
        });
    }
    /**
     * De Authenticates users 
     */
    deAuth(){
        this.setState({
            user:null,
            at:false,
            nav:null,
            content:null
        });
        localStorage.clear();
    }
}
export default Main;