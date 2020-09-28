import React, {Component} from "react"
import UserUpdateForm from "./UserUpdateForm"
import UserDeleteModal1 from "./UserDeleteModal1"

class Userpage extends Component {

    handleDelete = (event) => {
        console.log(this.props.user.id);
        fetch(`http://localhost:3000/users/${this.props.user.id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then((deletedUser) => {
            console.log(deletedUser)
            // console.log(this.props)
            this.props.deleteUser(this.props.user.id)
        })
    } 

  
    render() {
        // console.log(this.props);
        return(
            <div>
                <br></br>
            <h2>Welcome, {this.props.user.username}!</h2>
            <br></br>
            <h3>
                Here is your profile info: <br></br>
                <br></br>
                Name: {this.props.user.name} <br></br>
                Age: {this.props.user.age} <br></br>
                Location: {this.props.user.age}
            </h3>
            {/* <button onClick={this.handleDelete}>Delete Profile</button> */}
            <UserDeleteModal1 handleDelete={this.handleDelete} />
            <UserUpdateForm user={this.props.user} updatedUser={this.props.updatedUser}/>
            </div>
        )
    }
}
export default Userpage