import { Container } from "@mui/material"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { deepOrange } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import "./contact.css";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      fullName: data.get('fullName'),
      email: data.get('email'),
      contact: data.get('contact'),
      query: data.get('query'),
    });
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
        {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar> */}
        <Avatar sx={{ bgcolor: deepOrange[500], mb: 1, mt: 2 }}>NS</Avatar>
        <Typography className="contactHeaderText" component="h1" variant="h5">
          Let's Talk
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
            type="number"
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
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default Contact;