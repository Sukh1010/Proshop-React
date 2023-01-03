import React from "react";
import {
  Alert,
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
  Checkbox,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../slices/UserSlice";
const ProfileScreen = () => {
  const [checked, setChecked] = useState(true);
  const { name, email } = useSelector((state) => state.user.userInfo);
  const [username, setUserName] = useState(name);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(updateUser({ name }));
  };

  return (
    <Grid container>
      <Grid item md={7} justifyContent={"center"}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Stack width={"60%"} spacing={6}>
            <Typography variant="h4">Profile</Typography>
            <TextField
              label="Name"
              value={username}
              onChange={(e) => !checked && setUserName(e.target.value)}
              variant="standard"
              readOnly={checked}
            />
            <TextField label="Email" value={email} variant="standard" />
            <Box>
              <Checkbox onChange={() => setChecked(!checked)} /> Check here to
              Update
            </Box>
            <Button
              disabled={checked}
              onClick={handleSubmit}
              variant="contained"
              sx={{ padding: "0.7rem 0" }}
            >
              update
            </Button>
          </Stack>
        </Box>
      </Grid>
      <Grid item md={4}>
        <Paper sx={{ padding: 4, mt: 4 }} elevation={3}>
          <Typography variant="h5" fontSize={"1.8rem"}>
            Order History
          </Typography>
          <Alert sx={{ mt: 4 }} severity="info">
            No orders Yet
          </Alert>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default ProfileScreen;
