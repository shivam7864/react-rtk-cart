// src/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [], // Each item: {id, name, price, quantity}
    totalQuantity: 0,
    totalAmount: 0,
};

const handleAddToCart = (state, action) => {
    console.log("action",action.payload);
    
    const item = action.payload;
    const existing = state.items.find(i => i.id === item.id);

    if (existing) {
        existing.quantity += 1;
    } else {
        state.items.push({ ...item, quantity: 1 });
    }
    state.totalQuantity += 1;
    state.totalAmount += item.price;
}

const handleRemoveFromCart = (state, action) => {
    const id = action.payload;
    const item = state.items.find(i => i.id === id);

    if (item) {
        state.totalQuantity -= item.quantity;
        state.totalAmount -= item.price * item.quantity;
        state.items = state.items.filter(i => i.id !== id);
    }

};

const handleDecreaseQuantity = (state, action) => {
    const id = action.payload;
    const item = state.items.find(i => i.id === id);

    if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalAmount -= item.price;
    } else {
        cartSlice.caseReducers.removeFromCart(state, action);
    }
}

const handleClearCart = (state) => {
    state.items = [];
    state.totalQuantity = 0;
    state.totalAmount = 0;
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: handleAddToCart,
        removeFromCart: handleRemoveFromCart,
        decreaseQuantity: handleDecreaseQuantity,
        clearCart: handleClearCart
    }
});

export const { addToCart, removeFromCart, decreaseQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
