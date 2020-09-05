import produce from "immer";

const initialState = {
  currentArtist: null,
  status: "idle",
};

export default function artistsReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_ARTIST_PROFILE": {
      return {
        ...state,
        status: "loading",
      };
    }

    case "RECEIVE_ARTIST_PROFILE": {
      return produce(state, (draftState) => {
        //dont leave it null, but create an empty object instead
        if (!draftState.currentArtist) {
          draftState.currentArtist = {};
        }
        draftState.currentArtist.profile = action.profile;
        draftState.status = "idle";
      });
    }

    case "REQUEST_ARTIST_PROFILE_ERROR": {
      return {
        ...state,
        status: "error",
      };
    }

    default: {
      return state;
    }
  }
}
