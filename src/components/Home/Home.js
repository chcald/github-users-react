import React from 'react'
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.button.main,
        '&:hover': {
            backgroundColor: theme.palette.button.secondary
          }
    },
  }));

export default function Home({handleTitle}) {

    function handleChange(user) {
        handleTitle();
        history.push(`/person/${user}`)
      }

    const history = useHistory();
    const classes = useStyles()
    
    const topFive = ['GrahamCampbell','fabpot','weierophinney','rkh','josh']
    
    return (
        <Box component="span" m={1}>
            {topFive.map(user =>
            <Button 
                key={user} 
                color="secondary" 
                className={classes.button}
                onClick={()=> handleChange(user)}
                > {user}
            </Button>
             )}
        </Box>
    )
}