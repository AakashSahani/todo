import React from 'react';
import TaskState from './TaskState';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

function TaskContainer() {
	return (
		<div className="task-container">
			<TaskState />
			<TaskInput />
			<TaskList />
		</div>
	);
}

export default TaskContainer;
