/* main.js */

'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
import { Router , Route, Link , hashHistory } from 'react-router';

var Button = require('react-bootstrap/lib/Button');
var ButtonToolbar = require('react-bootstrap/lib/ButtonToolbar');
var About = require('./views/about');
var Home = require('./views/home.js');
var Blog = require('./views/blog.js');
var Contact = require('./views/contact.js');
import FacebookLogin from 'react-facebook-login';
//import about from './view/about';

var Main = React.createClass({
    getInitialState: function() {
        return {
          switch: true,
          content : (<Home/>)
        };
    },
    componentDidMount: function() {
		this.setState({content: (<Home/>) }); 
    },

    responseFacebook : function (response) {
        console.log(response);
    },
   
    setBlock: function(page) {
        switch(page){
            case 'Home':
                this.setState({content: (<Home/>) }); 
                break;
            case 'About':
                this.setState({content: (<About/>) }); 
                break;
            case 'Blog':
                this.setState({content: (<Blog/>) }); 
                break;
            case 'Contact':
                this.setState({content: (<Contact/>) }); 
                break;
        }
    },
    render() {
        
        return (
            <div>
                <div className="brand">CxN Boutique</div>
                {/*<div className="address-bar">3481 Melrose Place | Beverly Hills, CA 90210 | 123.456.7890</div>*/}
                {/*<div>
                    <FacebookLogin
                        appId="102642933514210"
                        autoLoad={true}
                        fields="name,email,picture"
                        callback={this.responseFacebook}
                        cssClass="my-facebook-button-class"
                        icon="fa-facebook" 
                    />
                    </div>
                */}
                <nav className="navbar navbar-default" role="navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="index.html">CxN Boutique</a>
                        </div>
                       
                        
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li>
                                    <Button bsStyle="link" bsSize="large" style={{fontSize: '30px', width: '150px', fontFamily: "Open Sans"}} onClick={ () => {this.setBlock('Home')} } >Home</Button>
                                </li>
                                <li>
                                     {/*<Link to='about'>about</Link>*/}
                                     <Button bsStyle="link" bsSize="large" style={{fontSize: '30px', width: '150px', fontFamily: "Open Sans"}} onClick={ () => {this.setBlock('About')} } >About</Button>
                                </li>
                                <li>
                                  <Button bsStyle="link" bsSize="large" style={{fontSize: '30px', width: '150px', fontFamily: "Open Sans"}} onClick={ () => {this.setBlock('Blog')} } >Blog</Button>
                                </li>
                                <li>
                                    <Button bsStyle="link" bsSize="large" style={{fontSize: '30px', width: '150px', fontFamily: "Open Sans"}} onClick={ () => {this.setBlock('Contact')} } >Contact</Button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                
                {this.state.content}

                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <p>Copyright &copy; CxN Boutique 2016</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>      
        );
    }
});
module.exports = Main;
//React.render(<Main />, document.body);
//ReactDOM.render(<Main />, document.body);
//ReactDOM.render(<Main />, document.getElementById("app") );
//ReactDOM.render(<Router history={hashHistory} routes={Routes} />, document.getElementById("app") );
