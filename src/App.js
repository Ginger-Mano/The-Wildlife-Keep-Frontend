import React, {Component} from 'react';
import NavigationBar from "./NavigationBar"
import MainComponent from "./MainComponent"
import Footer from "./Footer"
import './App.css';
import {Route, Switch} from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import UserPage from "./Userpage"
import Static1 from "./Static1"
import Static2vid from './Static2vid';
import Static11 from "./Static11"
import useSound from 'use-sound'
import UserProfile from "./UserProfile"
import { render } from '@testing-library/react';

class App extends Component {
    state = {
      login: false
    }

  render() {
    console.log(this.state.login);
  return (
   
    <div className="App">
      <NavigationBar />
      {/* <Static1 />   */}
      {/* <Static11 /> */}
      <Switch>
  <Route exact path="/" render={ () => <MainComponent login={this.state.login}/>}/>
      {/* <MainComponent login={this.state.login}/> */}
      {/* <Route path="/userpage" render={ () => <UserPage />}/> */}
      </Switch>
       {/* <Static2vid />   */}
      <Footer />
    </div>
  
  );
}
}

export default withRouter(App);
