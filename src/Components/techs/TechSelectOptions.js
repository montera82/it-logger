import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {getTechs} from "../../actions/techAction";
import {connect} from 'react-redux'

const TechSelectOptions = ({tech: {techs, loading}, getTechs}) => {

	useEffect(() => {

		//fetch tech-list from api
		getTechs()
		//eslint-disable-next-line
	}, []);

	return (
		!loading && techs !== null && techs.map((t) =>
			<option value={`${t.firstName} ${t.lastname}`} key={t.id}>{t.firstName} {t.lastName}</option>
		)
	);
};

TechSelectOptions.propTypes = {
	tech: PropTypes.object.isRequired,
	getTechs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	tech: state.tech
})

export default connect(mapStateToProps, {getTechs})(TechSelectOptions);
