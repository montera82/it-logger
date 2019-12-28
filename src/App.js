import React, {useEffect, Fragment} from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min'
import SearchBar from "./Components/layout/SearchBar";
import Logs from "./Components/log/Logs";
import AddBtn from "./Components/layout/AddBtn";
import AddLogModal from "./Components/log/AddLogModal";
import EditLogModal from "./Components/log/EditLogModal";
import AddTechModal from "./Components/techs/AddTechModal";
import TechListModal from "./Components/techs/TechListModal";
import {Provider} from "react-redux"
import store from "./store";

function App() {

	useEffect(() => {
		// initialize materialize javascript
		M.AutoInit()
	})

	return (
		<Provider store={store}>
		<Fragment>
			<SearchBar/>
			<div className="container">
				<AddBtn/>
				<AddLogModal/>
				<EditLogModal/>
				<AddTechModal/>
				<TechListModal/>
				<Logs/>
			</div>
		</Fragment>
		</Provider>
	);
}

export default App;
