import React from 'react'
import Card from './Card'

export default class CardContainer extends React.Component {
    render() {
            console.log(this.props)
        return (
            <div className='ui three cloumn grid'>
                {this.props.hogs.map( hog => <Card hog={hog}/> )}
            </div>
        )
    }
}