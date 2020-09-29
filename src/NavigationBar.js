import React, {Component} from "react"
import UserProfile from "./UserProfile"
import {Route} from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { NavLink , Link} from 'react-router-dom'
import {Form, Modal} from "semantic-ui-react" 
 import {
     Button,
     Container,
     Menu,
     Visibility,
     Icon
   } from 'semantic-ui-react'


class NavigationBar extends Component {
     state = {}

    //  handleClick = (evt) => {
    //   console.log(evt);
    //   return <UserProfile />
    //  }

     hideFixedMenu = () => this.setState({ fixed: false })
     showFixedMenu = () => this.setState({ fixed: true })
  
    render() {  
      
         const { children } = this.props
        const { fixed } = this.state
      return    <div className="nav"> <Visibility
     once={false}
     onBottomPassed={this.showFixedMenu}
     onBottomPassedReverse={this.hideFixedMenu}
   ><Menu color="black"
     fixed={fixed ? 'top' : null}
     inverted={!fixed}
     pointing={!fixed}
     secondary={!fixed}
     size='large'
   >
      <Container>
     
     <Menu.Item  as='a' active>
       <NavLink to='/'>Home</NavLink>
     </Menu.Item>
   
     <Menu.Item as='a'>Animals</Menu.Item>
     <Menu.Item as='a'>Organizations</Menu.Item>
     <Menu.Item as='a'>Tribe</Menu.Item>
     <Menu.Item position='right'>

       <Button as='a' color="black" inverted={!fixed}>
         Log in
       </Button>

         <Modal closeIcon trigger= {<Button icon color="black" inverted={!fixed} style={{ marginLeft: '0.5em'}}>
         Sign Up
          </Button>}>
          <UserProfile setCurrentUser={this.props.setCurrentUser}/>
       </Modal>
      

     </Menu.Item>
   </Container>
 </Menu>
 </Visibility></div>
     }
    }



export default NavigationBar