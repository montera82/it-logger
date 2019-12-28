import {
	ADD_LOG,
	CLEAR_CURRENT,
	DELETE_LOG,
	GET_LOGS,
	LOGS_ERROR,
	SET_CURRENT,
	SET_LOADING,
	UPDATE_LOG
} from "../actions/types";

const initialState = {
	logs: null,
	current: null,
	loading: false,
	error: null
}

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_LOADING:
			return {
				...state,
				loading: true
			};
		case GET_LOGS:
			return {
				...state,
				logs: action.payload,
				loading: false
			};
		case SET_CURRENT:
			return {
				...state,
				current: action.payload
			};
		case CLEAR_CURRENT:
			return {
				...state,
				current: null
			}
		case UPDATE_LOG:
			console.log(action.payload);
			return {
				...state,
				logs: state.logs.map(log => log.id === action.payload.id ? action.payload : log)
			}
		case ADD_LOG:
			return {
				...state,
				logs: [...state.logs, action.payload],
				loading: false
			};

		case DELETE_LOG:
			return {
				...state,
				logs: state.logs.filter(log => log.id !== action.payload),
				loading: false
			}
		case LOGS_ERROR:
			console.error(action.payload)
			return {
				...state,
				error: action.payload,
				loading: false
			};
		default :
			return state
	}
}
