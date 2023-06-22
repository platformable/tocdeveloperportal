import React, { useEffect, useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

export default function Index() {
  const classes = useStyles();
  let companyName = 'Stoplight';

  //const [data,setData]=useState(File)

  /*  useEffect(() => {

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('Origin','http://localhost:3000');
    const fetchData = async () => {
      try {
        const response = await fetch(File, {
          mode: 'no-cors',
          credentials: 'include',
          method: 'GET',
          headers: headers
      })
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching .json file:', error);
      }
    };

    fetchData();
  }, []); */

  //console.log("data",data)
  return (
    <Container maxWidth={'xl'} classes={{}}>
      <div
        className={classes.root}
        style={{ marginTop: 30, marginBottom: 100, paddingBottom: 100 }}
      >
        <h1>API TOOLS</h1>

        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image="https://res.cloudinary.com/platformable/image/upload/v1687341510/internaldevportal/spotlight/rq7iui3t9b3hcf4a3bru.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Spotlight.io
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to={`/apitools/tool/${companyName}`}>
                  <Button size="small" color="primary">
                    Read more
                  </Button>
                </Link>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image="https://res.cloudinary.com/platformable/image/upload/v1687341510/internaldevportal/spotlight/rq7iui3t9b3hcf4a3bru.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Spotlight.io
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to={`/test/page/${companyName}`}>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </Link>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
