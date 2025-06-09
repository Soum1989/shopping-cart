import React, { useContext } from 'react';
import CartContext from '../store/cart-context';
import CartItem from '../components/CartItem/CartItem';
import { Button, Grid, Typography } from '@mui/material';

const Cart = () => {
  const { cart, increaseQty, decreaseQty } = useContext(CartContext);

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={8}>
          {cart.map((item, index) => (
            <CartItem
              key={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              qty={item.qty}
              onAdd={() => increaseQty(item.id)}
              onRemove={() => decreaseQty(item.id)}
            />
          ))}
        </Grid>
        <Grid item xs={4}>
          <h1>Order Details</h1>
          <Typography variant="h5" gutterBottom>
            Total Amount: ${totalAmount.toFixed(2)}
          </Typography>
          <Button variant="outlined">Checkout</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cart;
