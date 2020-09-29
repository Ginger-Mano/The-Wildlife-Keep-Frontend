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
      user: {},
      username: "",
      name: "",
      age: "",
      location: "",
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

handleChange = (evt) => {
  this.setState({
      [evt.target.name]: evt.target.value
  })
  // console.log(evt);
} 

newUserState = (newUserObj) => {
  const newUser = [...this.state.user, newUserObj]

  this.setState({
      user: newUser
  })
}

handleSubmit = (evt) => {
  // console.log(evt);
  evt.preventDefault()

  const userObj = {
      username: this.state.username,
      name: this.state.name,
      age: this.state.age,
      location: this.state.location
    }

    fetch(`http://localhost:3000/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userObj)
    })
    .then(res => res.json())
    .then(newUserObj => {
        this.newUserState(newUserObj)
        this.props.setCurrentUser(newUserObj)
    } )
    this.setState({
        name: "",
        username: "",
        age: "",
        location: "",
    })
}

updatedUser = (updatedUserObj) => {

  const updatedUserArr = this.state.user.map(user => {
      if (user.id === updatedUserObj.id){
          return updatedUserObj
      } else {
          return user
      }
  })
  this.setState({
      user: updatedUserArr
  })
  console.log(updatedUserArr)
  console.log(updatedUserObj)
}
deleteUser = (userId) => {
  console.log(this.state.user, "hi");
  let copyOfUserArr = this.state.user.filter((user) => {
      return user.id !== userId
  })
  this.setState({
      user: copyOfUserArr
  })
}


  render() {
    console.log(this.state.login);
  return (
   
    <div className="App">
      <NavigationBar setCurrentUser={this.setCurrentUser} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
      <Switch>
  <Route exact path="/" render={ () => <MainComponent login={this.state.login}/>}/>
  {/* <Route exact path="/endanimals" render={ () => <AnimalCardFalse />}/> */}
     
      <Route path="/userpage" render={ () => <Userpage user={this.state.user} updatedUser={this.updatedUser} deleteUser={this.deleteUser}/>}/>
      </Switch>
     
      <Footer />
    </div>
  
  );
}
}

export default withRouter(App);
