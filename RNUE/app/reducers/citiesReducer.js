const initialState = [
  {
    "id": "59ad53cc397b7b09486589ed",
    "city": "Ypsilanti",
    "image": "http://fanaru.com/images/club/trivia/t48.png"
  }
]

export default function citiesReducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_CITY':
      return [...state, {
        id: action.payload.name,
        city: action.payload.name,
        country: action.payload.country
      }]
  }
  return state
}
