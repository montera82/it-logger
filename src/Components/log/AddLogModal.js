import React, {useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min'
import {connect} from 'react-redux'
import {addLog} from "../../actions/logAction";
import PropTypes from 'prop-types'

const AddLogModal = ({addLog}) => {
	const [message, setMessage] = useState('');
	const [attention, setAttention] = useState(false);
	const [tech, setTech] = useState('')

	const onSubmit = () => {
		if (message === '' || tech === '') {
			return M.toast({html: 'Please enter a message and tech'})
		} else {

			const log = {
				message,
				tech,
				attention,
				date: new Date()
			}
			addLog(log);
			M.toast({html: `Log successfully added by ${tech}`})
		}

		setMessage('');
		setAttention(false)
		setTech('');
	}
	return (
		<div id="add-log-modal" className='modal' style={modalStyle}>
			<div className="modal-content">
				<h4>Enter System Log</h4>
				<div className="row">
					<div className="input-field">
						<input type="text"
							   name='message'
							   value={message}
							   onChange={e => setMessage(e.target.value)}
						/>
						<label className="active">Log Message</label>
					</div>
				</div>

				<div className="row">
					<div className="input-field">
						<select
							name="tech"
							className="browser-default"
							value={tech}
							onChange={e => setTech(e.target.value)}>
							<option value="" disabled>Select Technician</option>
							<option value="John Doe">John Doe</option>
							<option value="Sam Smith">Sam Smith</option>
							<option value="Sara Wilson">Sara Wilson</option>

						</select>
					</div>
				</div>

				<div className="row">
					<div className="input-field">
						<p>
							<label>
								<input
									type="checkbox"
									className='filled-in'
									checked={attention}
									value={attention}
									onChange={e => setAttention(!attention)}/>
								<span>Needs Attention</span>
							</label>
						</p>
					</div>
				</div>
			</div>
			<div className="modal-footer">
				<a href="#!" onClick={onSubmit} className="modal-close blue waves-effect btn">Enter</a>
			</div>
		</div>
	);
};

AddLogModal.propTypes = {
	addLog: PropTypes.func.isRequired,
}

const modalStyle = {
	width: '75%',
	height: '75%'
}
export default connect(null, {addLog})(AddLogModal);
