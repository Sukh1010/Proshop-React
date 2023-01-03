import { Box, Button, MenuItem, Select, Stack } from "@mui/material";
import React from "react";
import { useState } from "react";
import Card from "./Card";
import UPI from "./UPI";

const Payment = ({ handleChange, values }) => {
  return (
    <Stack
      alignSelf={"center"}
      sx={{ margin: "4rem 0", width: "100%" }}
      alignItems="center"
    >
      <Box>
        <label>Payment Method :</label>
        <Select
          value={values.payamentType}
          onChange={handleChange}
          name="paymentType"
        >
          <MenuItem value="card">Card</MenuItem>
          <MenuItem value="upi">UPI</MenuItem>
          <MenuItem value="cod">COD</MenuItem>
        </Select>
      </Box>
      {values.paymentType === "card" ? (
        <Card handleChange={handleChange} values={values} />
      ) : values.paymentType === "upi" ? (
        <UPI />
      ) : null}
    </Stack>
  );
};

export default Payment;
