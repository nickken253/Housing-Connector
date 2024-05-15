import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';



const SellDialog = ({ open, handleClose }: any) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSubmit = () => {
    setSnackbarOpen(true);
    handleClose();
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" >
        <DialogTitle id="form-dialog-title" >Sell Property</DialogTitle>
        <DialogContent >
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Property Name"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="location"
            label="Location"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="price"
            label="Price"
            type="number"
            fullWidth
          />
          <TextField
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            multiline
            rows={4}
          />
          <TextField
            margin="dense"
            id="bedrooms"
            label="Bedrooms"
            type="number"
            fullWidth
          />
          <TextField
            margin="dense"
            id="bathrooms"
            label="Bathrooms"
            type="number"
            fullWidth
          />
          <TextField
            margin="dense"
            id="size"
            label="Size (sq ft)"
            type="number"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" >
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary" >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="success" variant="filled">
          Done, we will process the house
        </Alert>
      </Snackbar>
    </>
  );
}

export default SellDialog;
