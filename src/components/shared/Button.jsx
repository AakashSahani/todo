import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import TaskContext from '../../context/TaskContext';

function Button({ text, isActive }) {
	const [active, setActive] = useState(isActive);
	const { filterTasks } = useContext(TaskContext);
	const handleClick = () => {
		setActive((current) => !current);
		active && filterTasks(text);
	};
	return (
		<button className={`button ${active && 'active'}`} onClick={handleClick}>
			{text}
		</button>
	);
}

Button.propTypes = {
	text: PropTypes.string.isRequired,
	isActive: PropTypes.bool,
};

Button.defaultProps = {
	isActive: false,
};

export default Button;
