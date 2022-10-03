import * as React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";
import { Product } from "../../types";
import { images } from "../../assets/images";
import { useNavigate } from "@tanstack/react-location";
import { useCartManagement } from "../../contexts/CartManagement.context";

type Props = {
  product?: Product;
};

export const CardInterested = ({ product }: Props) => {
  const navigate = useNavigate();
  const cartManagement = useCartManagement();

  if (!product) {
    return null;
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="250"
        image={(images as any)[product.picture]}
        alt="green iguana"
        sx={{ padding: "8px" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Product {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </Typography>
        <Typography variant="body1" mt="12px">
          Price: {product.price} USD
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="secondary" onClick={() => cartManagement.addToCart(product)}>
          Add to Cart
        </Button>
        <Button
          color="secondary"
          onClick={() => navigate({ to: `/products/${product.name.toLowerCase()}` })}
        >
          More Details
        </Button>
      </CardActions>
    </Card>
  );
};
