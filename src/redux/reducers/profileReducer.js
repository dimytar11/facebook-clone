const INITIAL_STATE = {
  biography: "",
  coverPhoto: "https://images8.alphacoders.com/682/thumb-1920-682878.jpg",
  avatar:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
};

const profileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANGEBIOGRAPHY":
      return {
        ...state,
        biography: action.payload,
      };

    case "CHANGECOVER":
      return {
        ...state,
        coverPhoto: [action.payload],
      };

    case "CHANGEAVATAR":
      return {
        ...state,
        avatar: action.payload,
      };

    default:
      return state;
  }
};
export default profileReducer;
