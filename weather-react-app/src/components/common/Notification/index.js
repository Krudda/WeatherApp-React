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
import { cyan, amber } from '@material-ui/core/colors'


const ErrorDialog = styled(Dialog)({
    '& .MuiPaper-rounded': {
        borderRadius: '20px'
    }
});
const ErrorTitle = styled(DialogTitle)({
    margin: '5px 24px 0',
    color: '#ff5f5f',
    textAlign: 'center',
    backgroundColor: '#fffcf4',
    borderBottom: '1px solid',
    borderBottomColor: cyan['700'],
    '& h2': {
        fontSize: '3rem',
    }
});
const ErrorDialogContent = styled(DialogContent)({
    backgroundColor: '#fffcf4'
});
const ErrorDialogContentText = styled(DialogContentText)({
    paddingTop: '10px',
    fontSize: '2rem',
    textAlign: 'left',
});
const ErrorTextField = styled(TextField)({
    '& label': {
        fontSize: '2rem',
    },
    '& label.Mui-focused': {
        color: cyan['700'],
        fontSize: '2rem',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: cyan['700'],
    },
    '& input' : {
        lineHeight: '2.5rem',
        fontSize: '2.5rem',
        textTransform: 'uppercase',
        color: '#464646e6',
    },
    '&  lastOfType' : {
        display: 'none'
     }
});
const ErrorDialogActions = styled(DialogActions)({
    backgroundColor: '#fffcf4',
    padding: '5px 24px 16px',
    '&  button' : {
        fontSize: '2rem',
    },
    '&  button:first-child' : {
        color: '#5e5e5ee6'
    },
    '&  button:last-child' : {
        color: cyan['700']
    }
});

export default function FormDialog() {
  const [open, setOpen] = useState(true);
  const [searchCity, setSearchCity] = useState('');
  const [errorField, setErrorField] = useState(false);
  const [label, setLabel] = useState('search city');

  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
  };

  const inputHandler = (e) => {
    setSearchCity(e.target.value.toUpperCase());
    setErrorField(false);
    setLabel('search city')
}
const submitHandler  = (e) =>{
    e.preventDefault();
    const validCity = searchCity.trim();

    if (validCity === '') {
        setErrorField(true);
        setLabel('PLEASE INPUT CITY NAME')
    } else {
        dispatch(setSearchLocation(validCity));
        setSearchCity('');
        setOpen(false);
        setLabel('search city')
    }
}

  return (
    <div>
        <ErrorDialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <ErrorTitle id="form-dialog-title">Weather request execution error</ErrorTitle>
            <ErrorDialogContent>
                <ErrorDialogContentText>
                    Apparently, the name of the city you are looking for was written incorrectly,
                    or its name was not correctly recognized. Try again:
                </ErrorDialogContentText>
                <form autoComplete="off" onSubmit = {submitHandler}>
                    <ErrorTextField
                        error = {errorField}
                        onInput = {inputHandler}
                        autoFocus
                        margin="dense"
                        id="name"
                        label = {label}
                        type="text"
                        fullWidth
                        value = {searchCity}
                    />
                </form>
            </ErrorDialogContent>
            <ErrorDialogActions>
                <Button onClick={handleClose} >
                    Cancel
                </Button>
                <Button onClick={submitHandler}>
                    Search
                </Button>
            </ErrorDialogActions>
      </ErrorDialog>
    </div>
  );
}
