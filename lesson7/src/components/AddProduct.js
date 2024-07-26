// src/components/AddProduct.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../features/products/productsSlice';

const AddProduct = () => {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');
	const [available, setAvailable] = useState(true);

	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (name && description && price) {
			dispatch(addProduct({ name, description, price: parseFloat(price), available }));
			setName('');
			setDescription('');
			setPrice('');
			setAvailable(true);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="add-product-form">
			<h2>Добавить продукт</h2>
			<input
				type="text"
				placeholder="Название"
				value={name}
				onChange={(e) => setName(e.target.value)}
				required
			/>
			<textarea
				placeholder="Описание"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
				required
			></textarea>
			<input
				type="number"
				placeholder="Цена"
				value={price}
				onChange={(e) => setPrice(e.target.value)}
				required
			/>
			<label>
				Доступность:
				<input
					type="checkbox"
					checked={available}
					onChange={(e) => setAvailable(e.target.checked)}
				/>
			</label>
			<button type="submit">Добавить продукт</button>
		</form>
	);
};

export default AddProduct;
