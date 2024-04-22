import { Button, TextField, Typography, Box, InputAdornment, Rating } from '@mui/material';
import { Email as EmailIcon } from '@mui/icons-material';
import React, { useState } from 'react';

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateDescription = (description) => {
    const wordCount = description.trim().split(/\s+/).length; 
    return wordCount <= 200;
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailError(!validateEmail(newEmail));
  };

  const handleDescriptionChange = (e) => {
    const newDescription = e.target.value;
    setDescription(newDescription);
    setDescriptionError(!validateDescription(newDescription)); 
  };

  const handleSubmit = () => {
    if (emailError || descriptionError) {
      console.log("Form contains errors, cannot submit");
    } else {
      console.log(`Form submitted with email and rating: ${rating}`);
    }
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh', 
        padding: 2,
        backgroundImage: 'url(https://c1.wallpaperflare.com/preview/776/180/874/coffee-shop-indoors-cafe-restaurant.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <Box 
        sx={{ 
          maxWidth: 400,  
          width: '100%', 
          textAlign: 'center', 
          backgroundColor: '#fff',
          padding: 2,
          borderRadius: 2,
        }}
      >
        <Typography variant='h5' gutterBottom>
          FEEDBACK
        </Typography>

        <Rating
          name="star-rating"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
          size="large"
          precision={1}
          sx={{ marginBottom: 2 }} 
        />

        <TextField
          id="email-field"
          label="Email"
          variant='outlined'
          color='success'
          fullWidth
          margin="normal"
          value={email}
          onChange={handleEmailChange}
          error={emailError}
          helperText={emailError ? "Invalid email format" : ""}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon /> 
              </InputAdornment>
            ),
          }}
        />

        <TextField
          id="description-field"
          label="Description"
          variant='outlined'
          color='success'
          multiline
          rows={4}
          fullWidth
          margin="normal"
          value={description}
          onChange={handleDescriptionChange}
          error={descriptionError}
          helperText={descriptionError ? "Maximum 200 words allowed" : ""}
        />

        <Button
          variant='contained'
          color='success'
            onClick={handleSubmit}
          sx={{ marginTop: 2 }}
        >
          SUBMIT
        </Button>
      </Box>
    </Box>
  );
};

export default Feedback;
