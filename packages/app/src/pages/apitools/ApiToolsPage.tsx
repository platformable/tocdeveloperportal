import React, { useEffect, useMemo, useState } from 'react';
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
import Box from '@material-ui/core/Box';
import ReactMarkdown from 'react-markdown';
import { Tools } from '../../json/tools';
import { InfoCard } from '@backstage/core-components';
import { techdocsModuleAddonsContribPlugin } from '@backstage/plugin-techdocs-module-addons-contrib';
import './ApiToolsPage.css'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      img:{
        maxWidth:'100%'
      },
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    card: {
      padding: '0.75rem'
    },
    markdown: {
      whiteSpace: 'pre-wrap'
    }
    
  }),
);
export interface IApiTool  {
  name: string;
  description: string;
  image: string;
  details: {
      categories: string[];
      links: Array<{sourceName: string, url: string;}>;
      supportedBy: string[];
  },
  releases: Array<{version: string, releaseDate: string}>
  content: string
}






export default function page() {
  let { companyName } = useParams();
  useEffect(() => {
    const links = document.querySelectorAll('.markdown p a')
    links.forEach(link => {
      link.setAttribute('target', '_blank')
    });
  }, []);
//   const Tools = [
//     {
//       name: 'Stoplight',
//       description: 'Design first, Develop Better',
//       image: 'https://res.cloudinary.com/platformable/image/upload/v1687341510/internaldevportal/spotlight/rq7iui3t9b3hcf4a3bru.jpg',
//       details: {
//           categories: ['API','Design','API Documentation'],
//           links: [
//             {
//                 sourceName: 'Github',
//                 url: 'https://github.com/Midships/digital-txn-signing'
//             }
//             //...more links
//           ],
//           supportedBy: ['Security']
//       },
//       releases: [
//           {
//               version: '0.0.0',
//               releaseDate: 'May 2023' 
//           }
//       ],
//       content: `
// # Include the next code under metadata -> annotations:
// \n[![Drag Racing](https://raw.githubusercontent.com/Midships/digital-txn-signing/master/images/passwordless_enroll.png)](https://raw.githubusercontent.com/Midships/digital-txn-signing/master/images/passwordless_enroll.png)
// \n
// Create a “/docs” folder in template root directory and create a index.md. You can use this as starter:
// \n
// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu mi, euismod non sagittis ac, fringilla non diam. Phasellus suscipit fringilla venenatis. Morbi mi libero, dictum ut purus id, luctus consectetur turpis. Nullam eu nisi et ante commodo hendrerit. Nulla consequat ipsum eu felis suscipit, ultrices viverra nibh maximus. Curabitur mauris mauris, scelerisque sit amet suscipit a, suscipit quis libero. Pellentesque elementum pulvinar metus laoreet eleifend.
// \n
// Nullam feugiat nisi eget placerat consectetur. In hac habitasse platea dictumst. Fusce at dui laoreet, molestie ex a, consequat sapien. Proin eget lectus rutrum, viverra enim a, venenatis mauris. Proin nec tortor in lacus sollicitudin viverra. Duis eget dui pulvinar, vehicula dui id, scelerisque lorem. Proin non mauris vel eros bibendum tempor eu quis ipsum. Praesent faucibus ex sed purus bibendum, a varius enim hendrerit. Fusce sed est et lorem ultricies tincidunt. Pellentesque dolor eros, imperdiet at nunc at, posuere elementum enim. Sed mauris augue, maximus at imperdiet vel, pharetra nec dolor. Aliquam vitae sem cursus, ornare libero a, tempus metus. Quisque in est in mi gravida condimentum. Suspendisse vehicula tempus pellentesque.
// \n
// # Our contact details
// Steps:

// 1. Create [yaml file](https://github.com/leoncan122/followMe/blob/master/apis/openapi-example.yaml) to create the entitie and store in local folder or github
// 2. Define url or file path at Location's section in app-config.yaml

// ### For any additional support please contact Midships using the following channels:

// Website: www.midships.io\n
// Email: support@midships.io / sales@midships.io
// \n
// [![Watch the video](https://img.youtube.com/vi/7rgvapDYPo0/hqdefault.jpg)](https://www.youtube.com/watch?v=7rgvapDYPo0)
// \n


//       `
//     },
//   ];

  const data: IApiTool = useMemo(() => Tools.find(tool => tool.name === companyName), [companyName])!

  console.log('userid', data);
  const classes = useStyles();

  
  return (
    <Container maxWidth={'xl'} classes={{}}>
      {/* <base target="_blank" /> */}
      <div
        className={classes.root}
        style={{ marginTop: 30, marginBottom: 100, paddingBottom: 100 }}
      >
        <div>
          <img
            style={{ maxWidth: 250 }}
            src="https://res.cloudinary.com/platformable/image/upload/v1687341510/internaldevportal/spotlight/rq7iui3t9b3hcf4a3bru.jpg"
            alt=""
          />
        </div>
        <h1>
          <strong>{data?.name}</strong>
        </h1>
        <h3>{data?.description}</h3>

        <Grid container spacing={4}>
          <Grid item xs={8}>
            <Card className={classes.root}>
             
                <CardContent>
                  <div >
                  <ReactMarkdown className='markdown' children={data.content} />
                    
                  </div>
                </CardContent>
            
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Grid spacing={5}>
              <Card className={classes.card}>
                <Box
                  fontWeight="fontWeightBold"
                  m={1}
                  fontSize="h6.fontSize"
                  borderBottom={1}
                  pb={1}
                  borderColor="grey.500"
                >
                  DETAILS
                </Box>
                <CardContent>
                  <Box fontSize="h6.fontSize" fontWeight="fontWeightBold">
                    Categories
                  </Box>
                  <ul>
                    {data.details.categories.map(category => (
                      <li>
                        {category}
                      </li>
                    ))}
                  </ul>

                  <Box fontSize="h6.fontSize" fontWeight="fontWeightBold">
                    Supported By
                  </Box>
                  <ul>
                    <li>Security</li>
                  </ul>

                  <Box fontSize="h6.fontSize" fontWeight="fontWeightBold">
                    Repository
                  </Box>
                  <ul>
                    {data?.details.links.map(link => (
                      <li>
                      <a href={link.url}>
                        {link.sourceName}
                      </a>
                    </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Grid>

            <br />

            <Grid>
              <Card className={classes.card}>
                <Box
                  fontWeight="fontWeightBold"
                  m={1}
                  fontSize="h6.fontSize"
                  borderBottom={1}
                  pb={1}
                  borderColor="grey.500"
                >
                  RELEASES
                </Box>
                <CardContent>
                  <Box>{data.releases ? 
                    data?.releases.map(release => (
                      `version: ${release.version}        date: ${release.releaseDate}`
                    )) : 
                    'No Releases'
                    }</Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
