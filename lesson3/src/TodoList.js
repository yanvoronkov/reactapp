import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './App.css';

export default function InteractiveList() {
	const [dense, setDense] = React.useState(false);
	const [tasks, setTasks] = React.useState([]);

	const handleAddTask = () => {
		const taskInput = document.getElementById('taskInput');
		const newTask = taskInput.value;
		setTasks([...tasks, newTask]);
		taskInput.value = '';
	};

	const handleDeleteTask = (index) => {
		const updatedTasks = tasks.filter((_, i) => i !== index);
		setTasks(updatedTasks);
	};

	return (
		<Box sx={{ flexGrow: 1, maxWidth: 752 }}>
			<TextField id="taskInput" label="Введите текст задачи" variant="outlined" />
			<Button сlassName="button" onClick={handleAddTask} variant="contained" color="primary">
				Добавить задачу
			</Button>
			<List dense={dense}>
				{tasks.map((task, index) => (
					<ListItem
						key={index}
						secondaryAction={
							<IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(index)}>
								<DeleteIcon />
							</IconButton>
						}
					>
						<ListItemAvatar>
							<Avatar>
								<FolderIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary={task} />
					</ListItem>
				))}
			</List>
		</Box>
	);
}