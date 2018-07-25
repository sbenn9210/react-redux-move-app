const initialState = {
  MoveTitle : "",
  MovieURL : ""
}

const reducer = (state = initialState, action) => {
  if(action.type === "ADD_MOVIE") {
    return {
      ...state,
      MovieTitle : state.MovieTitle,
      MovieUrL : state.MoveURL
    }
  } 

  return state
}



export default reducer
