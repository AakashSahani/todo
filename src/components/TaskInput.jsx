import React, { useState } from 'react';

function TaskInput() {
	const [text, setText] = useState('');
	const handleChange = (e) => {
		setText(e.currentTarget.value);
		// console.log(e.currentTarget.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (text === '') {
			alert('Please enter something.');
		} else {
			setText(e.currentTarget.value);
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
			<button type="submit">Add</button>
		</form>
	);
}

export default TaskInput;
