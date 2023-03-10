import React, { useEffect, useState } from "react";
import { Alert, Grid } from "@mui/material";
import Product from "../components/Product";
import Loading from "../components/Loading";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../slices/ProductSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const {
    all_products: products,
    loading,
    error,
  } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchAllProducts());
    let user = localStorage.getItem("userInfo"); //check
  }, []);

  return (
    <>
      {loading && <Loading />}
      {error && <Alert severity="error">{error}</Alert>}

      <Grid container justifyContent={"space-around"} rowSpacing={3}>
        {products?.map((item) => (
          <Product key={item._id} product={item} />
        ))}
        {/* {products?.map((item) => (
          <Product key={item._id} product={item} />
        ))} */}
      </Grid>
    </>
  );
};

export default HomeScreen;
