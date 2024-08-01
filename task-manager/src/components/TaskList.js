// src/components/TaskList.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../features/tasks/tasksSlice';

const TaskList = () => {
	const dispatch = useDispatch();
	const tasks = useSelector((state) => state.tasks.tasks);
	const status = useSelector((state) => state.tasks.status);
	const error = useSelector((state) => state.tasks.error);

	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchTasks());
		}
	}, [status, dispatch]);

	if (status === 'loading') {
		return <div>Загрузка...</div>;
	}

	if (status === 'failed') {
		return <div>Ошибка: {error}</div>;
	}

	return (
		<div className="task-list">
			<h2>Список задач</h2>
			<ul>
				{tasks.map((task) => (
					<li key={task.id}>
						<span>{task.title}</span> - {task.completed ? 'Выполнено' : 'Не выполнено'}
					</li>
				))}
			</ul>
		</div>
	);
};

export default TaskList;
