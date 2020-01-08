import React from 'react'


export default class FilterContainer extends React.Component {
    render() {
        return (
        <div className='navWrapper'>
         
            <form>  
            <input type="radio" name="filter" value="all" onChange={this.props.wholeHog} />
            All<br></br>

            <input type="radio" name="filter" value="greased" onChange={() => this.props.greaseFilter(true)} />
            Filter by Greased<br></br>

            <input type="radio" name="filter" value="greased" onChange={() => this.props.greaseFilter(false)}/>
            Filter by Dryness<br></br>

            <input type="radio" name="filter" value="weight" onChange={() => this.props.nameSorterLowest('weight')} />
            Sort by Lowest Weight<br></br>

            <input type="radio" name="filter" value="weight" onChange={() => this.props.nameSorterHighest('weight')} />
            Sort by Highest Weight<br></br>

            <input type="radio" name="filter" value="name" onChange={() => this.props.nameSorterLowest('name')} />
            Sort From A to Z <br></br>

            <input type="radio" name="filter" value="name" onChange={() => this.props.nameSorterHighest('name')} />
            Sort From Z to A<br></br>
            </form>

        </div>
        )
    }
}