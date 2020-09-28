import React, {Component} from "react"
import AnimalCard from "./AnimalCard"
import AnimalCardFalse from "./AnimalCardFalse"
import {Grid, Card, Button, Icon, Divider} from "semantic-ui-react" 
import SearchAnimal from "./SearchAnimal"
import { render } from "@testing-library/react"
import {Link} from 'react-router-dom'

class EndangeredAnimals extends Component {

    // handleSeeMoreClick = (evt) => {
    // console.log(evt);
    // return endangeredAnimalCardFalse
    // }

    render() {
        // console.log(this.props);
    
        //5. Add addAnimalToWatchList as props to AnimalCard (Child)
        let endangeredAnimalCard = this.props.animals.map(animal => <AnimalCard key={animal.id} addAnimalToWatchList={this.props.addAnimalToWatchList} animal={animal} login={this.props.login}/>)

        let endangeredAnimalCardFalse = this.props.animals.map(animal => <AnimalCardFalse key={animal.id} addAnimalToWatchList={this.props.addAnimalToWatchList} animal={animal} login={this.props.login}/>)

        let renderFirstThree = this.props.login ? endangeredAnimalCard : endangeredAnimalCard.slice(0, 4)
        return(

        <div>
            {/* <SearchAnimal /> */}
            <br></br> <br></br>
            <h1>EndangeredAnimals</h1>
            <Card.Group centered itemsPerRow={4} padded>
            {/* {endangeredAnimalCard} */}
            {renderFirstThree}
            </Card.Group>
            <br></br>
            {/* <Link to="/wildlife-keep/endanimals"> */}
            <Button animated secondary floated="right" onClick={this.handleSeeMoreClick}>
            <Button.Content visible>See More</Button.Content>
            <Button.Content hidden>
            <Icon name='arrow right' />
            </Button.Content>
            </Button>
            {/* </Link> */}
        </div>   
        )
    }
}
export default EndangeredAnimals
