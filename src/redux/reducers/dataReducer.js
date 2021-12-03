import { initialState } from "../store/store";
import { GET_DATA } from "../actions";

const dataReducer = (state = initialState.data, action) => {
    const { type, payload } = action
    switch (type) {
        case GET_DATA:
            return {
                ...state,
                 data: payload
            }
        default: return state
    }
}

export default dataReducer