// src/components/ProductList.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct, toggleAvailability } from '../features/products/productsSlice';
import EditProduct from './EditProduct';

const ProductList = () => {
	const [editingProductId, setEditingProductId] = useState(null); // Новое состояние для отслеживания редактируемого продукта
	const products = useSelector((state) => state.products.products);
	const dispatch = useDispatch();

	return (
		<div className="product-list">
			<h2>Список продуктов</h2>
			{products.length === 0 && <p>Продукты отсутствуют.</p>}
			{products.map((product) => (
				<div key={product.id} className="product-item">
					<h3>{product.name}</h3>
					<p>{product.description}</p>
					<p>Цена: ${product.price.toFixed(2)}</p>
					<p>Доступность: {product.available ? 'Да' : 'Нет'}</p>

					{/* Если продукт не в режиме редактирования, отображаем кнопки "Удалить" и "Сделать доступным" */}

					{editingProductId !== product.id && (
						<>
							<button onClick={() => dispatch(deleteProduct(product.id))}>Удалить</button>
							<button onClick={() => dispatch(toggleAvailability(product.id))}>
								{product.available ? 'Сделать недоступным' : 'Сделать доступным'}
							</button>
						</>
					)}

					{/* При редактировании продукта передаем setEditingProductId для управления режимом редактирования */}
					<EditProduct
						product={product}
						isEditing={editingProductId === product.id}
						setEditingProductId={setEditingProductId}
					/>
				</div>
			))}
		</div>
	);
};

export default ProductList;
