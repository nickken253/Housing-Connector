import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  dialog: {
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0px 3px 15px rgba(0, 0, 0, 0.2)',
  },
  title: {
    backgroundColor: '#6200ea',
    color: 'white',
    padding: '16px',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '1.25rem',
  },
  content: {
    padding: theme.spacing(3),
  },
  input: {
    marginBottom: theme.spacing(2),
    '& label.Mui-focused': {
      color: '#6200ea',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#6200ea',
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
      '&.Mui-focused fieldset': {
        borderColor: '#6200ea',
      },
    },
  },
  actions: {
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: '8px',
    padding: theme.spacing(1, 3),
    textTransform: 'none',
    fontWeight: 'bold',
  },
}));

const SellDialog = ({ open, handleClose }) => {
  const classes = useStyles();
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
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" classes={{ paper: classes.dialog }}>
        <DialogTitle id="form-dialog-title" className={classes.title}>Sell Property</DialogTitle>
        <DialogContent className={classes.content}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Property Name"
            type="text"
            fullWidth
            className={classes.input}
          />
          <TextField
            margin="dense"
            id="location"
            label="Location"
            type="text"
            fullWidth
            className={classes.input}
          />
          <TextField
            margin="dense"
            id="price"
            label="Price"
            type="number"
            fullWidth
            className={classes.input}
          />
          <TextField
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            className={classes.input}
            multiline
            rows={4}
          />
          <TextField
            margin="dense"
            id="bedrooms"
            label="Bedrooms"
            type="number"
            fullWidth
            className={classes.input}
          />
          <TextField
            margin="dense"
            id="bathrooms"
            label="Bathrooms"
            type="number"
            fullWidth
            className={classes.input}
          />
          <TextField
            margin="dense"
            id="size"
            label="Size (sq ft)"
            type="number"
            fullWidth
            className={classes.input}
          />
        </DialogContent>
        <DialogActions className={classes.actions}>
          <Button onClick={handleClose} color="primary" className={classes.button}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary" className={classes.button}>
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
