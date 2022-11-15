import React from 'react';
import { TaskProvider } from './context/TaskContext';
import Header from './components/Header';
import TaskContainer from './components/TaskContainer';

function App() {
	return (
		<TaskProvider>
			<div className="app">
				<Header />
				<TaskContainer />
			</div>
		</TaskProvider>
	);
}

export default App;
