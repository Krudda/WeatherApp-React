import { useState } from 'react';
import  {useDispatch} from 'react-redux';
import {setSearchLocation} from '../../../redux/actions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { styled } from '@material-ui/core/styles';


const ErrorTitle = styled(DialogTitle)({
    color: '#ff5f5f',
    textAlign: 'center',
    backgroundColor: '#f1f1f1',
    '& h2': {
        fontSize: '3rem',
    }
});
const ErrorDialogContent = styled(DialogContent)({
    backgroundColor: '#f1f1f1'
});
const ErrorDialogContentText = styled(DialogContentText)({
    fontSize: '2rem',
    textAlign: 'left',
});
const ErrorTextField = styled(TextField)({
    '& label': {
        fontSize: '2rem',
    },
    '& input' : {
        lineHeight: '2rem',
        fontSize: '2rem',
        textTransform: 'uppercase',
        color: '#464646e6',
        '& focused': {
            color: 'red'
        }
    }
});
const ErrorDialogActions = styled(DialogActions)({
    backgroundColor: '#f1f1f1',
    '&  button' : {
        fontSize: '2rem',
    },
    '&  button:first-child' : {
        color: '#5e5e5ee6'
    }
});

export default function FormDialog() {
  const [open, setOpen] = useState(true);
  const [searchCity, setSearchCity] = useState('');

  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
  };

  const inputHandler = (e) => {
    setSearchCity(e.target.value.toUpperCase());
}
const submitHandler  = (e) =>{
    e.preventDefault();
    const validCity = searchCity.trim();
    if (validCity !== '') {
        dispatch(setSearchLocation(validCity));
    }
    setSearchCity('');
    setOpen(false);
}

  return (
    <div>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <ErrorTitle id="form-dialog-title">Weather request execution error</ErrorTitle>
            <ErrorDialogContent>
                <ErrorDialogContentText>
                    Apparently, the name of the city you are looking for was written incorrectly,
                    or its name was not correctly recognized. Try again:
                </ErrorDialogContentText>
                <ErrorTextField
                    onInput = {inputHandler}
                    autoFocus
                    margin="dense"
                    id="name"
                    label="search city"
                    type="text"
                    fullWidth
                    value = {searchCity}
                    // onSubmit={handleClose}
                />
            </ErrorDialogContent>
            <ErrorDialogActions>
                <Button onClick={handleClose} >
                    Cancel
                </Button>
                <Button onClick={submitHandler} color="primary">
                    Search
                </Button>
            </ErrorDialogActions>
      </Dialog>
    </div>
  );
}
