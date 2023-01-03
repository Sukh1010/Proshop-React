import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const handleLink = () => {
    navigate(`/product/${product._id}`);
  };

  return (
    <Grid item xs={12} sm={5.8} md={3.8} lg={2.8}>
      <Card sx={{ minHeight: 380 }} elevation={4}>
        <Link className="pointer" onClick={handleLink}>
          <CardMedia
            component="img"
            alt={product.name}
            height="220"
            sx={{ width: "80%", paddingLeft: 5 }}
            image={product.image}
          />
        </Link>
        <CardContent>
          <Link
            className="pointer"
            sx={{ color: "black" }}
            underline="hover"
            onClick={handleLink}
          >
            <Typography
              // fontSize={"1.2rem"}
              gutterBottom
              variant="h6"
              component="div"
            >
              {product.name.length > 50
                ? product.name.slice(0, 40) + "..."
                : product.name}
            </Typography>
          </Link>
          <Rating value={product.ratings} precision={0.5} readOnly />
          <Typography fontSize={"1.2rem"} variant="h6" color="black">
            ${product.price}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default Product;
