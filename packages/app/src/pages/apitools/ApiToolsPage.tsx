import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom';
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

export default function page() {

  
    let { companyName } = useParams();

    

    console.log("userid",companyName)
    const classes = useStyles();
  return (
    <Container maxWidth={'xl'} classes={{}}>
      <div
        className={classes.root}
        style={{ marginTop: 30, marginBottom: 100, paddingBottom: 100 }}
      >
        <div >
<img style={{maxWidth:250}} src="https://res.cloudinary.com/platformable/image/upload/v1687341510/internaldevportal/spotlight/rq7iui3t9b3hcf4a3bru.jpg" alt="" />


        </div>
        <h1><strong>{companyName}</strong></h1>

        <Grid container spacing={4}>
          <Grid item xs={8}>
            <Card className={classes.root}>
              <CardActionArea>
               
                <CardContent>
                  <h2 className="text-bold">Design, Document & Build APIs Faster</h2>
                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui necessitatibus pariatur maxime quae velit nisi nemo provident reprehenderit eveniet, quos repellat eligendi dicta animi. Iure ratione exercitationem deleniti sunt et maiores ad natus labore cum, tempore possimus iusto est ipsum nam hic nemo excepturi alias facere nisi corrupti expedita mollitia eos laboriosam? Sunt, a officia fugit nostrum sint eveniet ullam commodi voluptates adipisci voluptatibus enim provident laudantium ipsum repudiandae temporibus eius iusto sed distinctio maiores! Adipisci minus tempora laboriosam repudiandae et, qui aliquid deleniti aliquam quae? Iusto temporibus quis blanditiis ipsam? Quis blanditiis corrupti quam suscipit nemo ad, libero eum commodi laudantium repellat labore expedita dicta debitis facere pariatur molestiae incidunt nesciunt placeat quaerat sapiente. Ullam, eveniet, tenetur itaque atque facilis necessitatibus porro voluptas quo nesciunt obcaecati architecto deleniti. Consectetur libero delectus perferendis quaerat voluptatem eaque reprehenderit impedit, dolore minus facere, iusto architecto nam iste asperiores quod commodi quisquam minima velit unde veritatis? Ex rem ipsam accusamus quaerat nobis quo laudantium totam et est, nulla ratione similique. Praesentium quasi doloremque, enim minus voluptates nesciunt natus earum perspiciatis, alias, deserunt asperiores explicabo dolorem nulla soluta amet sit magni harum! Quis fugit, laborum aliquid, voluptas a, commodi perspiciatis rerum perferendis natus nulla repudiandae molestias modi fuga tenetur quam consequuntur. Assumenda iusto rem expedita temporibus ut ipsum adipisci quibusdam quas voluptatum? Quisquam, minima! Dolorem eos, repudiandae qui suscipit obcaecati ipsa? Possimus expedita sint tempore aliquid obcaecati inventore veniam vel vitae ullam, quam perferendis nihil alias distinctio harum assumenda eveniet ex quasi illo nemo corrupti. Inventore, quidem illo nemo enim dolore in architecto harum molestiae error blanditiis quasi sed quae sit voluptas. Pariatur ratione maxime quidem provident quas explicabo qui minus laborum necessitatibus voluptatum, at officiis suscipit laboriosam, nemo sit ducimus, harum dolorem eligendi quo voluptas magni nihil. Consequatur, totam excepturi. Alias qui laudantium veritatis aspernatur cum fugit itaque maxime voluptate voluptatum, officiis veniam labore. Rem autem vel quas non minus, quae asperiores iure dolorem, esse voluptatibus fugiat molestias, consequatur quo ad veniam voluptates expedita suscipit saepe? Sapiente dolore consequuntur minus. Labore molestias, non deserunt id fugit dolorem excepturi, velit consectetur accusamus enim nihil ex deleniti nesciunt harum, consequatur assumenda nulla nobis temporibus praesentium quos repudiandae optio? Accusantium quibusdam officiis voluptas facere soluta, iusto deserunt veritatis necessitatibus nihil, quas, laborum obcaecati animi eaque! Repellat consectetur nihil eligendi voluptates totam perferendis architecto harum corrupti animi! Dolore cupiditate itaque qui, velit culpa aliquid similique suscipit ipsum?
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={4}>
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
  )
}
