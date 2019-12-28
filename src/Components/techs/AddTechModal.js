import React, {useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min'

const AddTechModal = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('')

	const onSubmit = () => {
		if (firstName === '' || lastName === '') {
			return M.toast({html: 'Please enter a First Name and Last Name'})
		} else {

			console.log(firstName, lastName)
		}

		setFirstName('');
		setLastName('');
	}
	return (
		<div id="add-tech-modal" className='modal'>
			<div className="modal-content">
				<h4>Enter Tech</h4>
				<div className="row">
					<div className="input-field">
						<input type="text"
							   name='message'
							   value={firstName}
							   onChange={e => setFirstName(e.target.value)}
						/>
						<label className="active">First Name</label>
					</div>
				</div>

				<div className="row">
					<div className="input-field">
						<input type="text"
							   name='message'
							   value={lastName}
							   onChange={e => setLastName(e.target.value)}
						/>
						<label className="active">Last Name</label>
					</div>
				</div>

			</div>
			<div className="modal-footer">
				<a href="#!" onClick={onSubmit} className="modal-close blue waves-effect btn">Enter</a>
			</div>
		</div>
	);
};

export default AddTechModal;
