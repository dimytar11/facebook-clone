
const INITIAL_STATE = {
  addedPosts: [
   
  ],
  addedComment: [],
  addedBiography: [
    {
      text: "biography",
    },
  ],
};

const postReduser = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CREATEPOST":
      return {
        ...state,
        addedPosts: [action.payload, ...state.addedPosts],
      };
    case "CREATECOMMENT":
      return {
        ...state,
        addedComment: [...state.addedComment, action.payload],
      };
    case "CREATEBIOGRAPHY":
      return {
        ...state,
        addedBiography: [...state.addedBiography, action.payload],
      };

    default:
      return state;
  }
};
export default postReduser;
