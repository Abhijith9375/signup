import { Button, TextField, Typography, InputAdornment, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { Visibility, VisibilityOff, Email, Person } from '@mui/icons-material';

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!emailPattern.test(value));
  };

  const backgroundStyle = {
    backgroundImage: 'url("https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const containerStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '20px',
    borderRadius: '10px',
    width: '300px', // Ensures consistent width for the inner container
  };

  return (
    <div style={backgroundStyle}>
      <div style={containerStyle}>
        <Typography variant="h5" gutterBottom>Sign-Up</Typography>
        <TextField
          id="outlined-username"
          label="Username"
          variant="outlined"
          color="success"
          fullWidth // Ensures the text field takes the full container width
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Person fontSize="small" /> {/* Adjusts the icon size */}
              </InputAdornment>
            ),
          }}
        /><br /><br />
        <TextField
          id="outlined-email"
          label="Email"
          variant="outlined"
          color="success"
          fullWidth
          value={email}
          onChange={handleEmailChange}
          error={emailError}
          helperText={emailError ? "Invalid email address" : ""}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email fontSize="small" /> {/* Adjusts the icon size */}
              </InputAdornment>
            ),
          }}
        /><br /><br />
        <TextField
          id="outlined-password"
          label="Password"
          variant="outlined"
          type={showPassword ? 'text' : 'password'}
          color="success"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        /><br /><br />
        <Button variant="contained" fullWidth>Submit</Button> {/* Makes the button full-width */}
      </div>
    </div>
  );
};

export default SignupPage;
