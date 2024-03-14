import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Lottie from 'lottie-react';
import EmailSuccess from "../../assets/lottie-animations/email-sent-success.json"
import { DialogContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import "./modal.css"

export const ResponsiveDialog = (dialogProps) => {
  const { isDialogOpen, setIsDialogOpen } = dialogProps;
  const navigate = useNavigate();

  const handleClose = () => {
    setIsDialogOpen(false);
    navigate("/")
  };

  return (
    <React.Fragment>
      <Dialog
        open={isDialogOpen}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
          <Lottie animationData={EmailSuccess} loop={true} style={{ height: 120, width: 120 }} />
          <Typography variant='h5' className='textStyleHeader' sx={{ marginTop: '1rem' }}>Thank You</Typography>
          <Typography variant='body1' sx={{ marginTop: "0.5rem" }} className='dailogSubtext'>
            Your submission has been recieved.
          </Typography>
          <Typography variant='body1' className='dailogSubtext'>
            We will be in touch and contact you soon!
          </Typography>
          <Button variant='contained' onClick={handleClose} sx={{ marginTop: '1rem' }}>
            Back to site
          </Button>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}