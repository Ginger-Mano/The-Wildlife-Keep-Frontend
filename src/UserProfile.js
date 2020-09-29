import React, {Component} from "react"
import Userpage from "./Userpage"
import {Route} from 'react-router-dom'
import {Form, Modal} from "semantic-ui-react" 

class UserProfile extends Component {
//     state = {
//         user: [],
//         username: "",
//         name: "",
//         age: "",
//         location: "",
       
//     }

//     // componentDidMount() {
//     //     fetch(`http://localhost:3000/users`)
//     //     .then(res => res.json())
//     //     .then(userArray => 
//     //         this.setState({
//     //         user: userArray})
//     //         )
//     //     }

// handleChange = (evt) => {
//     this.setState({
//         [evt.target.name]: evt.target.value
//     })
//     // console.log(evt);
// } 

// newUserState = (newUserObj) => {
//     const newUser = [...this.state.user, newUserObj]

//     this.setState({
//         user: newUser
//     })
// }

// handleSubmit = (evt) => {
//     // console.log(evt);
//     evt.preventDefault()

//     const userObj = {
//         username: this.state.username,
//         name: this.state.name,
//         age: this.state.age,
//         location: this.state.location
//       }

//       fetch(`http://localhost:3000/users`, {
//           method: "POST",
//           headers: {
//               "Content-Type": "application/json"
//           },
//           body: JSON.stringify(userObj)
//       })
//       .then(res => res.json())
//       .then(newUserObj => {
//           this.newUserState(newUserObj)
//           this.props.setCurrentUser(newUserObj)
//       } )
//       this.setState({
//           name: "",
//           username: "",
//           age: "",
//           location: "",
//       })
// }

// updatedUser = (updatedUserObj) => {

//     const updatedUserArr = this.state.user.map(user => {
//         if (user.id === updatedUserObj.id){
//             return updatedUserObj
//         } else {
//             return user
//         }
//     })
//     this.setState({
//         user: updatedUserArr
//     })
//     console.log(updatedUserArr)
//     console.log(updatedUserObj)
// }
// deleteUser = (userId) => {
//     console.log(this.state.user, "hi");
//     let copyOfUserArr = this.state.user.filter((user) => {
//         return user.id !== userId
//     })
//     this.setState({
//         user: copyOfUserArr
//     })
// }


    render() {
        // let newUserMapped = this.state.user.map(user => <Userpage user={user} key={user.id} updatedUser={this.updatedUser} deleteUser={this.deleteUser} /> )
        return(
            // <Modal>
            // <Route path="/wildlife-keep/userprofile">
            <div>
            <h1 className="watch">User Profile</h1>
            <Form onSubmit={this.props.handleSubmit}>
            <Form.Group widths="equal">
            <Form.Input type="text" fluid label=" Username" placeholder="Username" name="username" onChange={this.props.handleChange} value={this.props.username}/><br></br>
            <Form.Input type="text" fluid label="Name" placeholder="Name" name="name" onChange={this.props.handleChange} value={this.props.user.name} />
            <Form.Input type="text" fluid label="Age" placeholder="Age" name="age" onChange={this.props.handleChange} value={this.props.age}/>
            <Form.Input type="text" fluid label="Location" placeholder="Location" name="location" onChange={this.props.handleChange} value={this.props.location}/>
            
          </Form.Group>
          <Form.Button>Submit Form</Form.Button>
        </Form>
        {/* </Modal> */}
         {/* <div> */}
             {/* {newUserMapped} */}
         {/* </div> */}
             </div>
            // </Route>
        )
    }
}
export default UserProfile