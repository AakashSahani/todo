import React, { useContext, useEffect, useRef, useState } from 'react';
import TaskContext from '../context/TaskContext';

function Task({ task }) {
	const [active, setActive] = useState(false);

	const handleChange = () => {
		setActive((current) => !current);
		console.log(active);
	};
	return (
		<div key={task.id} className={`task ${active ? 'line-thorough' : ''}`}>
			<input
				type="checkbox"
				name="complete"
				id="complete"
				onChange={handleChange}
			/>
			<li>
				<span className="line">{task.text}</span>
			</li>
		</div>
	);
}

export default Task;
