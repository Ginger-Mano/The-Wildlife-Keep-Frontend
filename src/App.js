import React, {Component} from 'react';
import NavigationBar from "./NavigationBar"
import MainComponent from "./MainComponent"
import Footer from "./Footer"
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Userpage from "./Userpage"
import { withRouter } from 'react-router-dom'
import useSound from 'use-sound'

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
     // componentDidMount() {
    //     fetch(`http://localhost:3000/users`)
    //     .then(res => res.json())
    //     .then(userArray => 
    //         this.setState({
    //         user: userArray})
    //         )
    //     }

  render() {
    console.log(this.state.login);
  return (
   
    <div className="App">
      <NavigationBar setCurrentUser={this.setCurrentUser}  />
      <Switch>
  <Route exact path="/" render={ () => <MainComponent login={this.state.login}/>}/>
  {/* <Route exact path="/endanimals" render={ () => <AnimalCardFalse />}/> */}
     
      <Route path="/userpage" render={ () => <Userpage user={this.state.user} />}/>
      </Switch>
     
      <Footer />
    </div>
  
  );
}
}

export default withRouter(App);
