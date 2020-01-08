import React from 'react' 


export default class CardFront extends React.Component {
    
    changeString(string) {
        
       let newString = string.replace(/ /g, '_').toLowerCase()
       return newString

    }

    render(){
        return (
            <div className="column" onClick={()=>this.props.flipCard(false)}  >
                <div className="ui fluid card">
                <div className="image">
                    <img src={require(`../../hog-imgs/${this.changeString(this.props.hog.name)}.jpg`)}/>
                </div>
                    <h3 className="header">{this.props.hog.name}</h3>
                </div>
          </div>
        )
     }
}