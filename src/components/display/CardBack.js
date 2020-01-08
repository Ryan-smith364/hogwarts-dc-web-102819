import React from 'react'

export default class CardBack extends React.Component {
    render () {
        return (
        <div onClick={()=>this.props.flipCard(true)}>
            <div className="column" >
            <div className="ui fluid card">
            <h3 className="header">Name: {this.props.hog.name}</h3>
                <h3>Speciality: {this.props.hog.specialty}</h3>
                <h3>Greased: {this.props.hog.greased ? 'Very' : 'Dry'}</h3>
                <h3>Weight: {this.props.hog.weight} pounds</h3>
                <h3>Highest Medal Achieved: {this.props.hog['highest medal achieved']}</h3>
            </div>
              
   
            </div>
        </div>
        )
    }
}
