import { configureStore, createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [
      { id: 1, name: 'Товар 1', price: 100, image: '/image_1.jpg', isFavorite: false, inCart: false },
      { id: 2, name: 'Товар 2', price: 200, image: '/image_2.jpg', isFavorite: false, inCart: false },
      { id: 3, name: 'Товар 3', price: 300, image: '/image_3.jpg', isFavorite: false, inCart: false },
      { id: 4, name: 'Товар 4', price: 400, image: '/image_4.jpg', isFavorite: false, inCart: false },
      { id: 5, name: 'Товар 5', price: 500, image: '/image_5.jpg', isFavorite: false, inCart: false },
      { id: 6, name: 'Товар 6', price: 600, image: '/image_6.jpg', isFavorite: false, inCart: false },
      { id: 7, name: 'Товар 7', price: 700, image: '/image_7.jpg', isFavorite: false, inCart: false },
      { id: 8, name: 'Товар 8', price: 800, image: '/image_8.jpg', isFavorite: false, inCart: false },
      { id: 9, name: 'Товар 9', price: 900, image: '/image_9.jpg', isFavorite: false, inCart: false },
      { id: 10, name: 'Товар 10', price: 1000, image: '/image_10.jpg', isFavorite: false, inCart: false },
    ],
    minPrice: 0,
    maxPrice: 1000,
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const product = state.products.find((p) => p.id === action.payload);
      if (product) {
        product.isFavorite = !product.isFavorite;
      }
    },
    addToCart: (state, action) => {
      const product = state.products.find((p) => p.id === action.payload);
      if (product) {
        product.inCart = true;
      }
    },
    removeFromCart: (state, action) => {
      const product = state.products.find((p) => p.id === action.payload);
      if (product) {
        product.inCart = false;
      }
    },
    removeFromFavorites: (state, action) => {
      const product = state.products.find((p) => p.id === action.payload);
      if (product) {
        product.isFavorite = false;
      }
    },
    setPriceRange: (state, action) => {
      state.minPrice = action.payload.minPrice;
      state.maxPrice = action.payload.maxPrice;
    },
  },
});

export const {
  toggleFavorite,
  addToCart,
  removeFromCart,
  removeFromFavorites,
  setPriceRange,
} = productsSlice.actions;

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});

export default store;
