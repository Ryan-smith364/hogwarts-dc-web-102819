import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import FilterContainer from './containers/FilterContainer'
import CardContainer from './containers/CardContainer'

class App extends Component {

  constructor(){
    super();
    this.state = {
      hogs: hogs
    }
  }

  wholeHog = () => {
    this.setState({
      hogs: hogs
    })
  }

  greaseFilter = (input) => {
    
      let greasedHogs = hogs.filter(hog => hog.greased === input)
      this.setState({
        hogs: greasedHogs
      })
  }

  nameSorterLowest = (input) => {
    let sortedHogs = hogs.sort(function(a, b){
      if(a[input] < b[input]) { return -1; }
      if(a[input] > b[input]) { return 1; }
      return 0;
  })
   this.setState({
     hogs: sortedHogs
   })
  }

  nameSorterHighest = (input) => {
    let sort = hogs.sort(function(a ,b){
      if(a[input] > b[input]) { return -1; }
      if(a[input] < b[input]) { return 1; }
      return 0;
    })
    this.setState({
      hogs: sort
    })
  }

  render() {
    return (
      <div className="App">
          < Nav />
          <FilterContainer greaseFilter={this.greaseFilter} nameSorterLowest={this.nameSorterLowest} nameSorterHighest={this.nameSorterHighest} wholeHog={this.wholeHog}/>
          <CardContainer hogs={this.state.hogs}/>
      </div>

    )
  }
}

export default App;
