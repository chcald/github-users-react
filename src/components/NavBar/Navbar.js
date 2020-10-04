import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  backButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'center'
  }
}));

export default function Navbar(props){
  const { title, handleTitle } = props
  const history = useHistory();
  const classes = useStyles();

  function handleChange(user) {
    handleTitle();
    history.go(-1)
  }

    return (
      <AppBar position="static">

        <Toolbar variant="dense">
          { title !== 'Home' &&
          <IconButton edge="start" onClick={handleChange} className={classes.backButton} color="inherit" aria-label="menu">
              <NavigateBeforeIcon/>
              <Typography variant="body1">
                Back 
              </Typography>
          </IconButton>}
          
          <Typography variant="body1" color="inherit" className={classes.title}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    )
}