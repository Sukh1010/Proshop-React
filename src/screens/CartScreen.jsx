import {
  Alert,
  Link,
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchCartItems, createUserCart } from "../slices/CartSlice";
import Loading from "../components/Loading";
import CartItem from "../components/CartItem";

const CartScreen = () => {
  const { userInfo } = useSelector((state) => state.user);
  const { items, loading, amount, subQty } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    userInfo && dispatch(fetchCartItems(userInfo._id));
  }, []);
  return (
    <Stack>
      <Button
        sx={{ width: "9%", padding: "0.7rem 1rem" }}
        variant="outlined"
        onClick={() => navigate("/")}
      >
        Go Back
      </Button>
      <br />
      {loading && <Loading /> && !userInfo ? (
        <Alert severity="info">
          You are not logged In, please{" "}
          <Link
            sx={{ cursor: "pointer" }}
            underline="always"
            onClick={() => navigate("/login")}
          >
            Login here
          </Link>
        </Alert>
      ) : items?.length === 0 ? (
        <Alert severity="info">
          {" "}
          Your cart is Empty, continue shoppong{" "}
          <Link
            sx={{ cursor: "pointer" }}
            underline="always"
            onClick={() => navigate("/")}
          >
            here
          </Link>{" "}
        </Alert>
      ) : (
        <Grid container>
          <Grid item md={7}>
            <List>
              {items?.map((item) => (
                <CartItem item={item} key={item._id} />
              ))}
            </List>
          </Grid>
          <Grid item md={4} sx={{ padding: 4 }}>
            <Paper sx={{ padding: 2 }} elevation={3}>
              <List>
                <ListItem>
                  <Typography variant="h6">
                    Subtotal ({subQty}) items
                    <br /> Amount: $ {Math.ceil(amount).toFixed(2)}
                  </Typography>
                </ListItem>
                <Divider />
                <ListItem>
                  <Button
                    sx={{ padding: "1rem 0", mt: 2 }}
                    variant="contained"
                    fullWidth
                    onClick={() => navigate("/checkout")}
                  >
                    Proceed to checkout
                  </Button>
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      )}
    </Stack>
  );
};

export default CartScreen;
