import { Box, Stack, TextField } from "@mui/material";
import React from "react";

const PersonalInfo = ({ handleChange, values }) => {
  return (
    <Stack
      alignSelf={"center"}
      sx={{ margin: "3rem 0", width: "70%" }}
      spacing={3}
    >
      <Box>
        <TextField
          value={values.fname}
          onChange={handleChange}
          name="fname"
          label="First Name"
          variant="standard"
          fullWidth
        />
      </Box>
      <Box>
        <TextField
          value={values.lname}
          onChange={handleChange}
          label="Last Name"
          name="lname"
          variant="standard"
          fullWidth
        />
      </Box>
      <Box>
        <TextField
          value={values.email}
          onChange={handleChange}
          label="Email"
          name="email"
          type={"email"}
          variant="standard"
          fullWidth
        />
      </Box>
      <Box>
        <TextField
          value={values.phone_no}
          onChange={handleChange}
          name="phone_no"
          type={"number"}
          variant="standard"
          label="Phone No"
          fullWidth
        />
      </Box>
      <Box>
        <TextField
          value={values.alt_phone_no}
          onChange={handleChange}
          name="alt_phone_no"
          label="Alt Phone No"
          type={"number"}
          variant="standard"
          fullWidth
        />
      </Box>
    </Stack>
  );
};

export default PersonalInfo;
