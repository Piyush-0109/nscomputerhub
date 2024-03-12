import { Container } from "@mui/material"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import emailjs from '@emailjs/browser';
import "./contact.css";
import { useRef } from "react";

const Contact = () => {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     fullName: data.get('fullName'),
  //     email: data.get('email'),
  //     contact: data.get('contact'),
  //     query: data.get('query'),
  //   });
  // };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    let emailParams = {
      to_name: 'NS Computer Hub',
      from_name: '',
      from_name_contact: '',
      message: ''
    }

    emailjs
      .send('service_1tm6tho', 'template_b9cwkpa', emailParams, {
        publicKey: 'f_zwCMGdAkRxQXKgB',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* <Typography className="contactHeaderText" component="h1" variant="h5" sx={{ mt: 3 }}>
          Let's Talk
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} action="mailto:absalon0109@gmail.com">
          <TextField
            margin="normal"
            required
            fullWidth
            id="fullName"
            label="Full Name"
            name="fullName"
            type="text"
            autoComplete="fullName"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
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
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="query"
            label="Query"
            type="text"
            multiline
            rows={4}
            id="query"
            autoComplete="query"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, padding: '0.7rem' }}
          >
            Submit
          </Button>
          <a style={{ background: 'blue', padding: "0.7rem" }}>
            Submit
          </a>
        </Box> */}

        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" /><br />
          <label>Email</label>
          <input type="email" name="user_email" /><br />
          <label>Contact</label>
          <input type="text" name="user_contact" /><br />
          <label>Message</label>
          <textarea name="message" /><br />
          <input type="submit" value="Send" />
        </form>
      </Box>
    </Container >
  )
}

export default Contact;