import { useState } from "react";
import Box from '@mui/material/Box';
import emailjs from '@emailjs/browser';
import Button from '@mui/material/Button';
import { ResponsiveDialog } from "../Modal";
import Backdrop from "@mui/material/Backdrop"
import Container from "@mui/material/Container";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CircularProgress from "@mui/material/CircularProgress"
import "./contact.css";

const Contact = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    contact: '',
    message: ''
  })
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true)

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
      .then((response) => {
        if (response.status === 200) {
          setIsLoading(false)
          setIsDialogOpen(true)
        }
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
      {isLoading &&
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress sx={{ color: '#1a3280' }} />
        </Backdrop>
      }
      {isDialogOpen &&
        <ResponsiveDialog
          isDialogOpen={isDialogOpen}
          setIsDialogOpen={setIsDialogOpen}
        />
      }
    </Container>
  )
}

export default Contact;