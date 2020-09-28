import React, { Component } from "react"
import { Button, Form, Segment, Modal } from 'semantic-ui-react'

class UserUpdateForm extends Component {
    state = {
        username: "",
        name: "",
        age: "",
        location: ""
    }
    handleChange = (evt) => {
        // console.log(this.props);
        let {value, name} = evt.target
        this.setState({
           [name]: value
        })
    }
    handleUpdateSubmit = (evt) => {
        evt.preventDefault()
        console.log(evt);
        fetch(`http://localhost:3000/users/${this.props.user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                //the state includes the name, username, etc...
               this.state
            )
        })
        .then(res => res.json())
        .then((updatedUserObj) => {
            console.log(updatedUserObj)
            this.props.updatedUser(updatedUserObj)
    })
}

    render() {
        // const [open, setOpen] = React.setState(false)
        // console.log(this.props.user);
    return(
       
    <Modal
      closeIcon
    //   open={open}
    //   onClose={() => setOpen(false)}
    //   onOpen={() => setOpen(true)}
      trigger={<Button>Update Info</Button>}
    >
    
    <Form inverted onSubmit={this.handleUpdateSubmit}>
    <Segment inverted>   
      <Form.Group widths='equal'>
        <Form.Input fluid label='Username' placeholder={this.props.user.username} name="username" onChange={this.handleChange} value={this.props.username}/>
        <Form.Input fluid label='Name' placeholder={this.props.user.name}name="name" onChange={this.handleChange} value={this.props.name}/>
        <Form.Input fluid label='Age' placeholder={this.props.user.age} name="age" onChange={this.handleChange} value={this.props.age} />
        <Form.Input fluid label='Location' placeholder={this.props.user.location} name="location" onChange={this.handleChange} value={this.props.location} />
      </Form.Group>
      <Button type='submit'>Submit Update</Button>
      </Segment>
    </Form>

    </Modal>
    
)
    }
 }
export default UserUpdateForm