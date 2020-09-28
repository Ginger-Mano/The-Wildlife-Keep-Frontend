import React, {Component} from "react"
import UserProfile from "./UserProfile"
import AnimalCard from "./AnimalCard"
import {Route} from 'react-router-dom'
import { Card } from "semantic-ui-react"


class WatchList extends Component {

    render() {
        
        // console.log(this.props);
        // console.log(this.state.watchAnimals);

        // 6. Map over the watchAnimals array to render the AnimalCard
        let watchListArr = this.props.watchAnimals.map(animal => 
        <AnimalCard animal={animal} removeAnimal={this.props.removeAnimal}/>)
        
        return(    
        <div>
        <br></br>
        {/* <Route path="/wildlife-keep/userprofile">
        <UserProfile /><br></br>
        </Route> */}
        <h1 className="watch">WatchList</h1>    
        <h3>Here are your animals: </h3><br></br>
        <Card.Group centered itemsPerRow={4}>
        {watchListArr}
        </Card.Group>
        </div>

        )
    }
}
export default WatchList
