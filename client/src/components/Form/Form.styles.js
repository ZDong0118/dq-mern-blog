import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
  multilineColor: {
    color: '#333',
  },
  textfield: {
    marginBottom: '2rem',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  button: {
    marginRight: 10,
    marginBottom: 10,
  },
  buttonSave: {
    backgroundColor: '#57B93E',
    '&:hover': {
      backgroundColor: '#306321',
    },
  },
  buttonUpdate: {
    backgroundColor: '#39ACDC',
    '&:hover': {
      backgroundColor: '#195972',
    },
  },
  buttonDelete: {
    backgroundColor: '#EC3646',
    '&:hover': {
      backgroundColor: '#821720',
    },
  },
}));
