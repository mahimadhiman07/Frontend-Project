import React, { useState } from "react";
import { Container, TextField, Button, Box, Typography, Paper } from "@mui/material";
import "./LoginPage.css";

const LoginPage = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = () => {
    onLogin(credentials); // Call the onLogin function passed as a prop
  };

  return (
    <div className="loginpage">
      
      <Container className="d-flex justify-content-center align-items-center vh-100 ">
        <Paper elevation={3} className="login-container p-4" style={{backgroundColor:"  #AB886D"}}>
          <Box className="d-flex flex-column align-items-center" >
            <Typography variant="h5" gutterBottom>
              Login
            </Typography>
            <Box component="form" className="w-100" noValidate>
              <TextField
                label="Username"
                name="username"
                type="text"
                fullWidth
                margin="normal"
                variant="outlined"
                
                value={credentials.username}
                onChange={handleInputChange}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#a0522d", // Initial border color (brown)
                    },
                    "&:hover fieldset": {
                      borderColor: "#d2691e", // Lighter brown border on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#8b4513", // Darker brown border when focused
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#5c4033", // Label color
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#8b4513", // Darker brown color for focused label
                  },
                }}
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                fullWidth
                margin="normal"
                variant="outlined"
                value={credentials.password}
                onChange={handleInputChange}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#a0522d", // Initial border color (brown)
                    },
                    "&:hover fieldset": {
                      borderColor: "#d2691e", // Lighter brown border on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#8b4513", // Darker brown border when focused
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#5c4033", // Label color
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#8b4513", // Darker brown color for focused label
                  },
                }}
              />
              <Button
                variant="contained"
                color=" #F1E5D1"
                fullWidth
                className="mt-3 login-button"
                onClick={handleLogin}
              >
                Login
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export default LoginPage;
