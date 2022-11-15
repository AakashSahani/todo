import React from 'react';
import Button from './shared/Button';

function TaskState() {
	return (
		<ul className="task-state">
			<li>
				<Button text="All" />
			</li>
			<li>
				<Button text="Active" />
			</li>
			<li>
				<Button text="Completed" />
			</li>
		</ul>
	);
}

export default TaskState;
