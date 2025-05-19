import { Box, Button, Card, CardContent, CardMedia, CircularProgress, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../app/slice/cartSlice";
import useCartStore from "../app/zustandStore";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  //zustand implementation
  const addToCartZustand = useCartStore(state => state.addToCartZustand);
  
  const handleLoadProducts = async () => {
    setLoading(true);
    try {
      const data = await axios.get("https://fakestoreapi.com/products");
      setProducts(data?.data ?? []);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleLoadProducts();
  }, []);

  
  const handleAddProduct = (item) =>{
    console.log("Adding product to cart:", item);
    addToCartZustand(item);
    // dispatch(addToCart(item));
  }
  
  if (loading) {
    return (
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
  return (
    <Grid container spacing={5} p={3}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card sx={{ maxWidth: 345, borderRadius:3}}>
            <CardMedia
              component="img"
              height="200"
              image={product.image}
              alt={product.title}
              sx={{ objectFit: 'contain', padding: 2 }}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div" noWrap>
                {product.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" noWrap>
                {product.description}
              </Typography>
              <Typography variant="subtitle1" sx={{ mt: 1 }}>
                ${product.price}
              </Typography>
              <Button variant="contained" fullWidth sx={{ mt: 1 }} onClick={()=>handleAddProduct(product)}>
                Add To Cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
