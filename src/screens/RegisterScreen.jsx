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
import { registerUser } from "../slices/UserSlice";
import { useNavigate } from "react-router-dom";
import { createUserCart } from "../slices/CartSlice";
import signup from "../assets/signup.jpg";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [password_err, setPasswordErr] = useState(null);
  const [confirm_err, setConfirmErr] = useState(null);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    userInfo && dispatch(createUserCart(userInfo._id));
    userInfo && navigate("/");
  }, [userInfo]);

  const handlePassword = (value) => {
    setPassword(value);
    if (!value.match(/[A-Z]/)) {
      setPasswordErr("must contain capital letter");
    } else if (!value.match(/[0-9]/)) {
      setPasswordErr("must contain a number");
    } else if (!value.match(/[@#$%&*]/)) {
      setPasswordErr("must contain one of these (@,#,$,%,&,*)");
    } else if (value.length < 7) {
      setPasswordErr("should have atleast 7 characters");
    } else {
      setPasswordErr(null);
      return true;
    }
    return false;
  };

  const handleConfirm = (value) => {
    setConfirm(value);
    if (!(value === password)) {
      setConfirmErr("Password does not match");
    } else {
      setConfirmErr(null);
      return true;
    }
    return false;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "" && handlePassword(password) && handleConfirm(confirm)) {
      dispatch(registerUser({ name, email, password }));
      setError(null);
    } else {
      setError("All field must be required");
    }
  };
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <form onSubmit={handleSubmit}>
        <Paper
          elevation={4}
          sx={{
            width: { xs: "80vw", md: "60vw", lg: "80vw", xl: "70vw" },
            height: { xs: "115vh", md: "70vh", xl: "70vh", lg: "90vh" },
            margin: { xs: 1, md: 5 },
            padding: { xs: 2, md: 4, lg: 8 },
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              height: { xs: "40%", md: "100%" },
              width: { xs: "100%", md: "50%" },
            }}
          >
            <img src={signup} style={{ height: "95%" }} alt="" />
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
              Register
            </Typography>
            {error && <Alert severity="error">{error}</Alert>}
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              label="Username"
              variant="standard"
              fullWidth
            />
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
                onChange={(e) => handlePassword(e.target.value)}
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
                    bottom: "20%",
                  }}
                  onClick={() => setShow(!show)}
                />
              )}
            </Box>
            <Box sx={{ display: "flex", position: "relative" }}>
              <TextField
                error={confirm_err}
                value={confirm}
                onChange={(e) => handleConfirm(e.target.value)}
                label="confirm password"
                type={show2 ? "text" : "password"}
                variant="standard"
                helperText={confirm_err && confirm_err}
                fullWidth
              />
              {show2 ? (
                <VisibilityOffIcon
                  sx={{
                    cursor: "pointer",
                    position: "absolute",
                    right: "0%",
                    bottom: "20%",
                  }}
                  onClick={() => setShow2(!show2)}
                />
              ) : (
                <VisibilityIcon
                  sx={{
                    cursor: "pointer",
                    position: "absolute",
                    right: "0%",
                    bottom: "20%",
                  }}
                  onClick={() => setShow2(!show2)}
                />
              )}
            </Box>
            <Button type="submit" variant="contained" fullWidth>
              Submit
            </Button>
            <Typography sx={{ cursor: "pointer", textAlign: "center" }}>
              Have an account?{" "}
              <Link onClick={() => navigate("/login")} underline="always">
                Login here
              </Link>
            </Typography>
          </Box>
        </Paper>
      </form>
    </Stack>
  );
};

export default RegisterScreen;
