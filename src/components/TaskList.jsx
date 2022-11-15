import React, { useState } from 'react';
import TaskData from '../data/TaskData';

function TaskList() {
	const [tasks, setTasks] = useState(TaskData);
	return (
		<div>
			{tasks.map((task) => (
				<div key={task.id} className="task">
					<input type="checkbox" name="" id="" />
					<li>
						<span>{task.text}</span>
					</li>
				</div>
			))}
		</div>
	);
}

export default TaskList;
