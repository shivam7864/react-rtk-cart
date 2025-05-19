import { create } from 'zustand'
//persistent store
import { persist } from 'zustand/middleware';

const addToCartZustand = (set, get) => (product) => {
    const { items, totalQuantity, totalAmount } = get();
    const existing = items.find(item => item.id === product.id);

    let updatedItems;
    if (existing) {
        updatedItems = items.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
    } else {
        updatedItems = [...items, { ...product, quantity: 1 }];
    }

    set({
        items: updatedItems,
        totalQuantity: totalQuantity + 1,
        totalAmount: totalAmount + product.price,
    });
};

const decreaseQuantityZustand = (set, get) => (id) => {
    const { items, totalQuantity, totalAmount, removeFromCart } = get();
    const item = items.find(i => i.id === id);

    if (item && item.quantity > 1) {
        const updatedItems = items.map(i =>
            i.id === id ? { ...i, quantity: i.quantity - 1 } : i
        );
        set({
            items: updatedItems,
            totalQuantity: totalQuantity - 1,
            totalAmount: totalAmount - item.price,
        });
    } else {
        get().removeFromCartZustand(id); // note: call it from state
    }
};

const removeFromCartZustand = (set, get) => (id) => {
    const { items, totalQuantity, totalAmount } = get();
    const item = items.find(i => i.id === id);
    if (!item) return;

    const updatedItems = items.filter(i => i.id !== id);
    set({
        items: updatedItems,
        totalQuantity: totalQuantity - item.quantity,
        totalAmount: totalAmount - item.price * item.quantity,
    });
};

const clearCartZustand = (set) => () => {
    set({
        items: [],
        totalQuantity: 0,
        totalAmount: 0,
    });
};

const useCartStore = create(
    persist(
        (set, get) => ({
            items: [],
            totalQuantity: 0,
            totalAmount: 0,
            addToCartZustand: addToCartZustand(set, get),
            decreaseQuantityZustand: decreaseQuantityZustand(set, get),
            removeFromCartZustand: removeFromCartZustand(set, get),
            clearCartZustand: clearCartZustand(set),
        }),
        {
            name: 'cart-storage', // localStorage key
            getStorage: () => localStorage,
        }
    )
);


export default useCartStore;