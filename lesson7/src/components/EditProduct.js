// src/components/EditProduct.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../features/products/productsSlice';

const EditProduct = ({ product, isEditing, setEditingProductId }) => {
	const [name, setName] = useState(product.name);
	const [description, setDescription] = useState(product.description);
	const [price, setPrice] = useState(product.price);
	const [available, setAvailable] = useState(product.available);

	const dispatch = useDispatch();

	const handleEdit = () => {
		setEditingProductId(product.id);
	};

	const handleCancel = () => {
		setEditingProductId(null);
		setName(product.name);
		setDescription(product.description);
		setPrice(product.price);
		setAvailable(product.available);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(updateProduct({ id: product.id, name, description, price: parseFloat(price), available }));
		setEditingProductId(null);
	};

	return (
		<div>
			{isEditing ? (
				<form onSubmit={handleSubmit} className="edit-product-form">
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
					<textarea
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						required
					></textarea>
					<input
						type="number"
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
					<button type="submit">Сохранить</button>
					<button type="button" onClick={handleCancel}>Отмена</button>
				</form>
			) : (
				<button onClick={handleEdit}>Редактировать</button>
			)}
		</div>
	);
};

export default EditProduct;
