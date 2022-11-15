import { createContext, useState } from 'react';
import TaskData from '../data/TaskData';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
	const [tasks, setTasks] = useState(TaskData);

	const addTask = (newTask) => {
		setTasks((tasks) => {
			tasks.push({ id: tasks.length, text: newTask, isCompleted: false });
			return tasks;
		});
	};

	const removeTask = (taskId) => {
		setTasks((tasks) => tasks.filter((task) => task.id != taskId));
	};

	const filterTasks = (action) => {
		switch (action) {
			case 'All':
				setTasks(tasks);
				break;
			case 'Active':
				setTasks((tasks) => tasks.filter((task) => task.isCompleted === false));
				break;
			case 'Completed':
				setTasks((tasks) => tasks.filter((task) => task.isCompleted === true));
				break;
			default:
				setTasks(tasks);
				break;
		}
	};
	return (
		<TaskContext.Provider
			value={{ tasks, setTasks, addTask, removeTask, filterTasks }}
		>
			{children}
		</TaskContext.Provider>
	);
};

export default TaskContext;
