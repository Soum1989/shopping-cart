import React from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';

const CartItem = ({ title, image, price, qty, onAdd, onRemove }) => {
  return (
    <Card sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
      <img src={image} alt={title} height="100" />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography>${price}</Typography>
        <Typography>Quantity: {qty}</Typography>
        <Button onClick={onAdd}>+</Button>
        <Button onClick={onRemove}>-</Button>
      </CardContent>
    </Card>
  );
};

export default CartItem;
