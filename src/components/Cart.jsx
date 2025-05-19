import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useCartStore from "../app/zustandStore";

import {
  addToCart,
  clearCart,
  decreaseQuantity,
  removeFromCart,
} from "../app/slice/cartSlice";
import { shallow } from "zustand/shallow";

const Cart = () => {
  const dispatch = useDispatch();
  
  // const { items, totalQuantity, totalAmount } = useSelector(
  //   (state) => state.cart
  // );

  //Zustand Implementation
  const items = useCartStore((state) => state.items);
  const totalQuantity = useCartStore((state) => state.totalQuantity);
  const totalAmount = useCartStore((state) => state.totalAmount);
  const addToCartZustand = useCartStore((state) => state.addToCartZustand);
  const decreaseQuantityZustand = useCartStore(
    (state) => state.decreaseQuantityZustand
  );


  return (
    <Box sx={{ p: 4 }}>
      <h1>Cart</h1>
      {items?.length === 0 ? (
        <Typography>Your cart is empty.</Typography>
      ) : (
        items?.map((item) => (
          <Box key={item.id} sx={{ mb: 3 }}>
            <Typography variant="h6">{item.title}</Typography>
            <Typography>Price: ${item.price}</Typography>
            <Typography>Quantity: {item.quantity}</Typography>
            <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
              <Button
                variant="contained"
                size="small"
                onClick={() => addToCartZustand(item)} //Justand Implementation for sample
              >
                +
              </Button>
              <Button
                variant="outlined"
                size="small"
                onClick={() => dispatch(decreaseQuantity(item.id))}
                // disabled={item.quantity === 1}
              >
                −
              </Button>

              <Button
                variant="outlined"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </Button>
            </Box>
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))
      )}
      <h3>Total Items: {totalQuantity}</h3>
      <h3>Total Price: ${totalAmount?.toFixed(2)}</h3>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </Box>
  );
};

export default Cart;
