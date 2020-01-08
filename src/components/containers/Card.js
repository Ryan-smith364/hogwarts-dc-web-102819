import React from 'react'
import CardFront from '../display/CardFront'
import CardBack from '../display/CardBack'

export default class Card extends React.Component {
    
    constructor(){
        super()
        this.state = { side: true}
    }

    flipCard = (input) => {
        this.setState({side: input})
    }

    render() {
        console.log(this.props)
        return (
            <div>
                {this.state.side ? <CardFront flipCard={this.flipCard} hog={this.props.hog} /> : <CardBack flipCard={this.flipCard} hog={this.props.hog}  />  }
              
            </div>
        )
    }
}