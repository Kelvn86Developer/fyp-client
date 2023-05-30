import { FILTER_VENUE, DAYS_FILTER, GET_FREE_VENUES } from "../types";

export default (state, action) => {
    switch(action.type){
        case GET_FREE_VENUES:
            console.log(state);
            return {
                ...state,
                venues: [...state.venues]
            };
        default:
            return state;

    }
};
