import {
    START_CHARACTERS_LOADING,
    END_CHARACTERS_LOADING,
    SET_CHARACTERS,
} from '../action-types'

const initialState = {
    characters: [],
    isLoading: false,
}
export const reduсer = (state = initialState, action) => {
    switch (action.type) {
        case START_CHARACTERS_LOADING: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case END_CHARACTERS_LOADING: {
            return {
                ...state,
                isLoading: false,
            }
        }
        case SET_CHARACTERS: {
            return {
                ...state,
                characters: action.payload,
                isLoading: false,
            }
        }
        default: return state;
    }
}