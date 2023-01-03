import React from "react";
import { Box, Select, Stack, MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import { usePaymentInputs } from "react-payment-inputs";
import mastercard from "../../assets/mastercard.png";
import visa from "../../assets/visa.png";
import rupay from "../../assets/rupay.png";

const Card = ({ handleChange, values }) => {
  const { getCardNumberProps, getCVCProps, getExpiryDateProps } =
    usePaymentInputs();
  return (
    <Stack sx={{ padding: "3rem 0" }} spacing={2}>
      <Box>
        <lable>Card Type :</lable>
        <Select
          onChange={handleChange}
          value={values.card_type}
          name="card_type"
        >
          <MenuItem value="mastercard">MasterCard</MenuItem>
          <MenuItem value="visa">Visa</MenuItem>
          <MenuItem value="rupay">RuPay</MenuItem>
        </Select>
      </Box>
      <Box>
        <label> Card holder Name :</label>
        <TextField
          value={values.holder_name}
          onChange={handleChange}
          name="holder_name"
          variant="standard"
          placeholder="Card Holder Name"
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <label> Card Number :</label>
        <TextField
          value={values.cardNumber}
          name="cardNumber"
          inputProps={getCardNumberProps({ onChange: handleChange })}
          variant="standard"
        />
        <img
          style={{ height: 60, marginLeft: 6 }}
          src={
            values.card_type === "mastercard"
              ? mastercard
              : values.card_type === "visa"
              ? visa
              : rupay
          }
        />
      </Box>
      <Box>
        <label> CVV :</label>
        <TextField
          value={values.cvc}
          name="cvc"
          inputProps={getCVCProps({ onChange: handleChange })}
          variant="standard"
        />
      </Box>
      <Box>
        <label> Expiry Date :</label>
        <TextField
          value={values.expiryDate}
          name="expiryDate"
          inputProps={getExpiryDateProps({ onChange: handleChange })}
          variant="standard"
        />
      </Box>
    </Stack>
  );
};

export default Card;
