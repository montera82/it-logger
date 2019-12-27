import React, {useEffect, Fragment} from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min'
import SearchBar from "./Components/layout/SearchBar";
import Logs from "./Components/log/Logs";
import AddBtn from "./Components/layout/AddBtn";
import AddLogModal from "./Components/log/AddLogModal";

function App() {

	useEffect(() => {
		// initialize materialize javascript
		M.AutoInit()
	})

	return (
		<Fragment>
			<SearchBar/>
			<div className="container">
				<AddBtn/>
				<AddLogModal/>
				<Logs/>
			</div>
		</Fragment>
	);
}

export default App;
