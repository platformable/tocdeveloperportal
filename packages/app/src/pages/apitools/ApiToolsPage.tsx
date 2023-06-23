import React, { useEffect, useMemo } from 'react';
import {  useParams } from 'react-router-dom';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
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
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
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


  const data: IApiTool = useMemo(() => Tools.find(tool => tool.name === companyName), [companyName])!

  console.log('userid', data);
  const classes = useStyles();

  
  return (
    <Container maxWidth={'xl'} classes={{}}>
 
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
                <ReactMarkdown 
                  className='markdown'
                  components={{
                    code({children,className}) {
                      const match = /language-(\w+)/.exec(className || "");
                      return (
                        <SyntaxHighlighter
                            style={materialDark}
                            children={String(children[0])}
                            language={match![1]}
                        />
                    );
                    }
                  }}
                   >
                    {data.content}
                  {/* Reference  https://codesandbox.io/s/react-markdown-typescript-syntax-highlight-00uz6?file=/src/App.tsx */}
                  </ReactMarkdown>

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
