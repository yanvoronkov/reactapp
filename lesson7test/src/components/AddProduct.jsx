//Компонент для добавления продукта:
//Создайте форму, позволяющую пользователям вводить данные нового продукта
//(имя, описание, цена, доступность) и добавлять его в каталог.

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../index.js';


const AddProduct = () => {
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');
	const [available, setAvailable] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addProduct({ name, description, price, available }));
		setName('');
		setDescription('');
		setPrice('');
		setAvailable(false);
	};
	return (
		<div>
			<h1>Add Product</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Name:</label>
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div>
					<label>Description:</label>
					<input
						type="text"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</div>
				<div>
					<label>Price:</label>
					<input
						type="number"
						value={price}
						onChange={(e) => setPrice(e.target.value)}
					/>
				</div>
				<div>
					<label>Available:</label>
					<input
						type="checkbox"
						checked={available}
						onChange={(e) => setAvailable(e.target.checked)}
					/>
				</div>
				<button type="submit">Add Product</button>
			</form>
		</div>
	);
};
export default AddProduct;