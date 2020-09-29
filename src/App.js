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
import AnimalCardFalse from './AnimalCardFalse';

class App extends Component {
    state = {
      login: false,
      user: {}
    }

  setCurrentUser = (userObj) => {
      this.setState({
        user: userObj
      })
    }

  render() {
    console.log(this.state.login);
  return (
   
    <div className="App">
      <NavigationBar setCurrentUser={this.setCurrentUser} />
      <Switch>
  <Route exact path="/" render={ () => <MainComponent login={this.state.login}/>}/>
  {/* <Route exact path="/endanimals" render={ () => <AnimalCardFalse />}/> */}
     
      <Route path="/userpage" render={ () => <UserPage user={this.state.user}/>}/>
      </Switch>
     
      <Footer />
    </div>
  
  );
}
}

export default withRouter(App);
