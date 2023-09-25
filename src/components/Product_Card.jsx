import { ShoppingBag, ShoppingCart } from '@mui/icons-material'
import { Button, Card, CardActions, CardContent, CardMedia, Rating, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Product_Card = ({image,title,price}) => {
  return (
    <>

<Card sx={{ maxWidth: 345 }} >
                <CardMedia
                  sx={{ height: 140 }}
                  height="140"
                  image={image}
                  title={title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <p style={{fontWeight:'bold'}}>Price:{price}</p>
                    <p2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi tenetur nam, </p2>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" startIcon={<ShoppingBag color='warning' style={{ fontSize: '30px' }} />} variant='contained'>Buy &nbsp; Now</Button>
                  <Button size="small" endIcon={<ShoppingCart color='warning' style={{ fontSize: '30px' }} />} variant='contained'>Add to Cart</Button>
                 
                </CardActions>
                <li className='list-unstyled ' >
                  <Link  href=' ' >
                    <Rating name="read-only" value={4} readOnly />
                  </Link>
                </li>
              </Card>
    </>
  )
}

export default Product_Card