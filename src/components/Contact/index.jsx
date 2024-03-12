import { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import emailjs from '@emailjs/browser';
import "./contact.css";

const Contact = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    contact: '',
    message: ''
  })

  const sendEmail = async (e) => {
    e.preventDefault();

    let emailParams = {
      to_name: 'Gaurav Dhoot',
      from_name: userDetails.name,
      from_name_contact: userDetails.contact,
      from_name_email: userDetails.email,
      message: userDetails.message
    }

    await emailjs
      .send('service_1tm6tho', 'template_b9cwkpa', emailParams, {
        publicKey: 'f_zwCMGdAkRxQXKgB',
      })
      .then(() => {
        console.log('SUCCESS!');
        setUserDetails({
          name: '',
          email: '',
          contact: '',
          message: ''
        })
      }, (error) => {
        console.log('FAILED...', error.text);
      },
      );
  };

  function handleTextInputChange(e) {
    let key = e.target.name
    let textInputObject = { ...userDetails }
    textInputObject[key] = e.target.value
    setUserDetails({
      ...textInputObject
    })
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography className="contactHeaderText" component="h1" variant="h5" sx={{ mt: 3 }}>
          Let's Talk
        </Typography>
        <form onSubmit={sendEmail}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="fullName"
            label="Full Name"
            name="name"
            type="text"
            autoComplete="fullName"
            autoFocus
            size="small"
            value={userDetails.name}
            onChange={(e) => handleTextInputChange(e)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            size="small"
            value={userDetails.email}
            onChange={(e) => handleTextInputChange(e)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="contact"
            label="Contact"
            type="text"
            id="contact"
            autoComplete="contact"
            size="small"
            value={userDetails.contact}
            onChange={(e) => handleTextInputChange(e)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="message"
            label="Message"
            type="text"
            multiline
            rows={4}
            id="message"
            autoComplete="message"
            size="small"
            value={userDetails.message}
            onChange={(e) => handleTextInputChange(e)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, padding: '0.7rem' }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container >
  )
}

export default Contact;