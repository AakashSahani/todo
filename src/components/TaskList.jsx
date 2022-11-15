import React, { useContext } from 'react';
import Task from './Task';
import TaskContext from '../context/TaskContext';

function TaskList() {
	const { tasks, setTasks } = useContext(TaskContext);

	return (
		<div>
			{tasks.map((task) => (
				<Task key={task.id} task={task} />
			))}
		</div>
	);
}

export default TaskList;
