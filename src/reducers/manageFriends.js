export function manageFriends(state={friends: []}, action){
  switch (action.type) {
    // case 'ADD_FRIEND':
      // let friend = state.friends.map(friend => {friend.name, friend.hometown, friend.id})
      // return {friends: friend}
      case "ADD_FRIEND":
        return (
          {...state,
              friends: [
                ...state.friends,
                action.fred
              ]
          }
      )
    default:
      return state;
  }
}
