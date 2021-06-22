import React,{Component} from "react";
import {
   Route,
   NavLink,
   HashRouter
  } from 'react-router-dom';
import {Facebook, LinkedIn, Instagram} from '@material-ui/icons';
import './App.css';
import template from './template';
import './template.css';
import walkin from './walkin';
import payment from './payment';
import logo from './logo.svg';
import './imageupload.js';
// import Footer from './footer';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div class="split left">
          <div style={{ display: "flex" }}>
            <div id="nav"style={{width: "23%",height: "100%",background: "#ff502d",padding: "30px 0px",position: "fixed"}}>
            <div id="im1" align="center"><img src={logo} alt="Logo" style={{width:"20vh",height:"20vh"}}/></div>
            <div id="ms">
              <h3>Welcome,</h3>
              <h1>Name</h1>
            </div>
              <ul>
                <li><NavLink exact activeClassName="active" exact to='/' >My Profile </NavLink></li>
              </ul> 
              <ul>
                <li><NavLink activeClassName="active" to='/template'>GAT Application</NavLink></li>
              </ul> 
              <ul>
                <li><NavLink activeClassName="active" to='/walkin'>Walk-in Application</NavLink></li>
              </ul> 
              <ul>
                <li><NavLink activeClassName="active" to='/payment'>Pay online</NavLink></li>
              </ul> 
              <ul>
                <li><NavLink activeClassName="active" to='/Logout'>Logout</NavLink></li>
              </ul>
              <div className="icons">
                <a href="https://www.facebook.com/msit.official/" style={{color:"white"}}>
                  <Facebook id="st" style={{fontSize:"6vh"}}/>
                </a>&nbsp; &nbsp; &nbsp;  &nbsp;
                <a href="https://www.linkedin.cn/company/msit-official?trk=similar-pages_result-card_full-click" style={{color:"white"}}>
                  <LinkedIn id="st" style={{fontSize:"6vh"}}/>
                </a>&nbsp;&nbsp; &nbsp;&nbsp;
                <a href="https://www.facebook.com/msit.official/" style={{color:"white"}}> 
                  <Instagram id="st" style={{fontSize:"6vh"}}/>
                </a>
              </div> 
            </div>
          </div>
          <div className="content">
            <Route exact path="/" component={template}/>
            <Route path="/GatApplication" component={template}/>
            <Route path="/walkin" component={walkin}/>
            <Route path="/payment" component={payment}/>
            <Route path="/Logout" component={template}/>
          </div>
        </div>
        {/* <div class="split bottom">
        <Footer/>
          <footer><p>www.msitprogram.net | enquires@msitprogram.net <br/> Ph: +91-40-66531342 | Mob: +91-7799834585</p></footer>
        </div> */}
      </HashRouter>
      );
    }
  }

  export default App;