import React, { useContext, useState } from 'react';
import TaskContext from '../context/TaskContext';

function TaskInput() {
	const [text, setText] = useState('');
	const { addTask } = useContext(TaskContext);
	const handleChange = (e) => {
		setText(e.currentTarget.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (text === '') {
			alert('Please enter something.');
		} else {
			setText(e.currentTarget.value);
			addTask(text);
			setText('');
		}
	};
	return (
		<form className="task-input" onSubmit={handleSubmit}>
			<input
				type="text"
				name="task"
				id="task"
				placeholder="add details"
				onChange={handleChange}
			/>
			<button type="submit" onSubmit={handleSubmit}>
				Add
			</button>
		</form>
	);
}

export default TaskInput;
