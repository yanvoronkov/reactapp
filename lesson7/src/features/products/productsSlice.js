// src/features/products/productsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// Начальное состояние для продуктов
const initialState = {
	products: [],
};

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		addProduct: (state, action) => {
			// Добавление нового продукта в массив
			state.products.push({ id: uuidv4(), ...action.payload });
		},
		deleteProduct: (state, action) => {
			// Удаление продукта по id
			state.products = state.products.filter(product => product.id !== action.payload);
		},
		updateProduct: (state, action) => {
			// Обновление существующего продукта
			const { id, name, description, price, available } = action.payload;
			const existingProduct = state.products.find(product => product.id === id);
			if (existingProduct) {
				existingProduct.name = name;
				existingProduct.description = description;
				existingProduct.price = price;
				existingProduct.available = available;
			}
		},
		toggleAvailability: (state, action) => {
			// Переключение доступности продукта
			const existingProduct = state.products.find(product => product.id === action.payload);
			if (existingProduct) {
				existingProduct.available = !existingProduct.available;
			}
		},
	},
});

// Экспорт действий и редьюсера
export const { addProduct, deleteProduct, updateProduct, toggleAvailability } = productsSlice.actions;
export default productsSlice.reducer;
