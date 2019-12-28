import React, {useEffect} from 'react';
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";
import {connect} from 'react-redux'
import {getLogs} from "../../actions/logAction";

const Logs = ({log: {logs, loading}, getLogs}) => {

	useEffect(() => {
		//fetch it logs
		getLogs()
	}, []);

	if (loading || !logs) {
		return <Preloader/>
	}

	return (
		<ul className="collection with-header">
			<li className="collection-header">
				<h4 className="center">System Logs</h4>
			</li>
			{(!loading && logs.length === 0) ?
				(<p className="center">No logs to show...</p>) :
				(
					logs.map(log => <LogItem key={log.id} log={log}/>)
				)
			}
		</ul>
	);
};

const mapStateToProps = state => ({
	log: state.log
});

export default connect(mapStateToProps, {getLogs})(Logs);
