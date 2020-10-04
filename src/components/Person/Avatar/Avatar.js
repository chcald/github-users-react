import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    content: {
        display: 'flex',
        alignContent: 'flex-start',
    },
    item: {
        margin: '1.5rem 1rem 1rem 2rem',
    },
    subtitle2: {
        color: theme.palette.textSecondary.main,
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
      margin: '1.5rem 1rem 1rem 2rem'
    },
  }))



export default function PersonAvatar(props) {
    const classes = useStyles()
    const { avatar_url, login, location } = props
    return (
        <div>
            <div className={classes.content}>
                <Avatar className={classes.large} src={avatar_url}/>
                <div className={classes.item}>
                    <Typography variant="subtitle1"> {login} </Typography>
                    <Typography variant="caption" className={classes.subtitle2}> {location} </Typography>
                </div>
            </div>
            <Divider variant="middle"/>
        </div>
    )
}