import {ADD_TECH, GET_LOGS, GET_TECHS, LOGS_ERROR, TECHS_ERROR} from "./types";
import {setLoading} from "./logAction";


export const getTechs = () => async (dispatch) => {
	try {
		setLoading()
		const res = await fetch('/techs');
		const data = await res.json()

		dispatch({
			type: GET_TECHS,
			payload: data
		})

	} catch (err) {
		dispatch({
			type: TECHS_ERROR,
			payload: err.response.data
		})
	}
}

export const addTech = (tech) => async (dispatch) => {
	try {
		setLoading()
		const res = await fetch('/techs', {
			'method': 'POST',
			body: JSON.stringify(tech),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await res.json();

		dispatch({
			type: ADD_TECH,
			payload: data
		})

	} catch (err) {
		dispatch({
			type: TECHS_ERROR,
			payload: err
		})
	}
}


