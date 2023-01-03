import React from "react";
import { Button, Stack, TextField } from "@mui/material";

const UPI = () => {
  return (
    <Stack
      sx={{ width: "100%", margin: "3rem 0" }}
      justifyContent={"space-around"}
      alignItems="center"
      direction={"row"}
    >
      <label>UPI Id</label>
      <TextField
        label=""
        variant="outlined"
        placeholder="Paste UPI Link @ here"
      />
      <Button sx={{ padding: "1rem" }} variant="contained">
        Pay Now
      </Button>
    </Stack>
  );
};

export default UPI;
