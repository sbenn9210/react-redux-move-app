import React, {Component} from 'react'
import { connect } from 'react-redux'

class MovieInput extends Component {

  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <h3>Input your Movies</h3>
        <input type="text" placeholder="Movie Title" />
        <input type="text" placeholder="Image URL" />
        <button onClick={this.props.onSublmitClick}>Submit</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSublmitClick : () => dispatch({type: "ADD_MOVIE"})
  }
}


export default connect(mapDispatchToProps)(MovieInput)
