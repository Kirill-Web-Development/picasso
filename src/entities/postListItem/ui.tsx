import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { forwardRef, FC } from 'react';
import { Link } from 'react-router-dom';


export const PostListItem: FC<Post> = forwardRef(({userId, title, body, id}, ref) => {

  const postBody = (
      <Card component='article' sx={{ width: '100%'}}>
          <CardContent>
        <Typography variant="h1" color="text.secondary" gutterBottom>
          {id}
        </Typography>
        <Typography variant="body2" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        {userId}-{title}-{body}
        </Typography>
      </CardContent>
      <CardActions>
          <Link to={`/${id}`}>
            <Button size="small"> 
            Подробнее
            </Button>
          </Link>
      </CardActions>
    </Card>
  )


  return (
    <>
      {ref ? 
        <Box ref={ref} sx={{ width: '100%'}}>
          {postBody}
        </Box> :
        postBody
    }
    </>
  );
})