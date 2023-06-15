import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: '3% 5%',
    },
    paper: {
      height: 140,
      width: '100%',
      color: 'black',
      padding: '1,5rem 2.25rem',
      borderRadius: '10px 50px 10px 50px',
      backgroundColor: '#f0f0f0',
      textAlign: 'center',
      display: "flex",
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    },
    control: {
      padding: theme.spacing(2),
    },
  }),
);
const links = [
    {icon: '/docs.svg', href: '/docs', text: 'Docs'},
    {icon: '/api.svg', href: '/api-docs', text: 'API'},
    {icon: '/developer.svg', href: '/catalog', text: 'Developers'},

]
export default function HomeHeroLinks() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center"  spacing={5}>
          {links && links!.map((value, index) => (
            <Grid key={index} item xs={12} md={6} lg={3}  >
              <Link to={value.href}>
              <Paper className={classes.paper} >
                {/* <img src={value.icon} alt="icon"/> */}
                <img src={value.icon} alt={`${value.text} icon`} width={70}/>
                <h3>{value.text}</h3>
              </Paper>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
