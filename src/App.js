import React, {useEffect} from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min'

function App() {

	useEffect(() => {
		M.init()
	})

	return (
		<p>IT Logger</p>
	);
}

export default App;
