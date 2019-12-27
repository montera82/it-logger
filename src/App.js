import React, {useEffect} from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min'

function App() {

	useEffect(() => {
		// initialize materialize javascript
		M.AutoInit()
	})

	return (
		<p>My app</p>
	);
}

export default App;
