import { Box, Stack, TextField } from "@mui/material";
import React from "react";

const Address = ({ handleChange, values }) => {
  return (
    <Stack
      alignSelf={"center"}
      sx={{ margin: "3rem 0", width: "70%" }}
      spacing={3}
    >
      <Box>
        <TextField
          value={values.house_no}
          onChange={handleChange}
          name="house_no"
          label="House No :"
          variant="standard"
          fullWidth
        />
      </Box>
      <Box>
        <TextField
          value={values.street_name}
          onChange={handleChange}
          name="street_name"
          label="Street Name :"
          variant="standard"
          fullWidth
        />
      </Box>
      <Box>
        <TextField
          value={values.city}
          onChange={handleChange}
          name="city"
          label="City :"
          variant="standard"
          fullWidth
        />
      </Box>
      <Box>
        <TextField
          value={values.state}
          onChange={handleChange}
          name="state"
          label="State :"
          variant="standard"
          fullWidth
        />
      </Box>
      <Box>
        <TextField
          value={values.country}
          onChange={handleChange}
          name="country"
          label="Country :"
          variant="standard"
          fullWidth
        />
      </Box>
      <Box>
        <TextField
          value={values.pincode}
          onChange={handleChange}
          name="pincode"
          label="PinCode :"
          type={"number"}
          variant="standard"
          fullWidth
        />
      </Box>
    </Stack>
  );
};

export default Address;
