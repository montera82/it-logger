import {ADD_TECH, GET_TECHS, TECHS_ERROR} from "../actions/types";

const initial = {
	techs: [],
	loading: false,
	error: null
}


export default (state = initial, action) => {

	switch (action.type) {

		case GET_TECHS:
			return {
				...state,
				techs: action.payload,
				loading: false
			};

		case ADD_TECH:
			return {
				...state,
				techs: [...state.techs, action.payload],
				loading: false,
			}
		case TECHS_ERROR:
			console.log(action.payload)
			return {
				...state,
				error: action.payload
			}
		default:
			return state;
	}
}
