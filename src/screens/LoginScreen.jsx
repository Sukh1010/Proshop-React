import {
  Alert,
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, loginUser } from "../slices/UserSlice";
import { useNavigate } from "react-router-dom";

import login from "../assets/login.jpg";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [error, setError] = useState(null);
  const [password_err, setPasswordErr] = useState(null);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo, error } = useSelector((state) => state.user);

  useEffect(() => {
    userInfo && navigate("/");
  }, [userInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <form onSubmit={handleSubmit}>
        <Paper
          elevation={4}
          sx={{
            width: { xs: "85vw", md: "60vw", lg: "75vw", xl: "60vw" },
            height: {
              xs: "90vh",
              md: "70vh",
              sm: "100vh",
              xl: "70vh",
              lg: "90vh",
            },
            margin: { xs: 1, md: 2, sm: 1, lg: 1 },
            padding: { xs: 3, md: 3, sm: 1, lg: 5 },
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              height: { xs: "50%", md: "100%" },
              width: { xs: "100%", md: "50%" },
            }}
          >
            <img src={login} style={{ height: "86%" }} alt="" />
          </Box>
          <Box
            sx={{
              height: { xs: "50%", md: "100%" },
              width: { xs: "100%", md: "50%" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <Typography sx={{ textAlign: "center" }} variant="h5">
              Sign In
            </Typography>
            {error && <Alert severity="error">{error}</Alert>}

            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              type={"email"}
              variant="standard"
              fullWidth
            />
            <Box sx={{ display: "flex", position: "relative" }}>
              <TextField
                error={password_err}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                type={show ? "text" : "password"}
                variant="standard"
                helperText={password_err && password_err}
                fullWidth
              />
              {show ? (
                <VisibilityOffIcon
                  sx={{
                    cursor: "pointer",
                    position: "absolute",
                    right: "0%",
                    bottom: "20%",
                  }}
                  onClick={() => setShow(!show)}
                />
              ) : (
                <VisibilityIcon
                  sx={{
                    cursor: "pointer",
                    position: "absolute",
                    right: "0%",
                    bottom: "10%",
                  }}
                  onClick={() => setShow(!show)}
                />
              )}
            </Box>

            <Button type="submit" variant="contained" fullWidth>
              Sign In
            </Button>
            <Typography sx={{ cursor: "pointer", textAlign: "center" }}>
              Don't have account?{" "}
              <Link onClick={() => navigate("/register")} underline="always">
                Register here
              </Link>
            </Typography>
          </Box>
        </Paper>
      </form>
    </Stack>
  );
};

export default LoginScreen;
