// import { BlockRounded } from '@mui/icons-material'
import { BorderColor, Favorite, FavoriteBorder, Label, LabelOutlined, ShoppingBag, ShoppingCart } from '@mui/icons-material'
import { Checkbox, FormControlLabel, Grid, Radio, RadioGroup, Rating, Typography } from '@mui/material'
import React from 'react'
import { Link } from '@mui/material'
// import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Product_Card from '../Product_Card';

const Products = () => {
  return (
    <>
      <Grid container>
        <Grid xs={12} sm={6} md={3} padding={3} >
          <Typography variant='h5' fontWeight={'bold '} color={'turquoise'}>Deals</Typography>
          <Typography variant='button' display={'flex'} flexDirection={'column'} >
            <Link href='#' underline='hover' >Flash Deals</Link>
            <Link href='#' underline='hover'>Top Deals</Link>
            <Link href='#' underline='hover'>   Deals of the day</Link>
          </Typography>
          <Typography variant='h4' fontWeight={'bold'}

            color='turquoise'>Departments
          </Typography>
          <li className='list-unstyled'>
            <FormControlLabel control={<Checkbox defaultChecked size='medium' color='error' icon={<FavoriteBorder />} checkedIcon={<Favorite />} />} label="Mobiles" />
          </li>
          <li className='list-unstyled'>
            <FormControlLabel control={<Checkbox defaultChecked size='medium' color='error' icon={<FavoriteBorder />} checkedIcon={<Favorite />} />} label="Laptops" />
          </li>
          <li className='list-unstyled'>
            <FormControlLabel control={<Checkbox defaultChecked size='medium' color='error' icon={<FavoriteBorder />} checkedIcon={<Favorite />} />} label="Home" />
          </li>
          <li className='list-unstyled'>
            <FormControlLabel control={<Checkbox defaultChecked size='medium' color='error' icon={<FavoriteBorder />} checkedIcon={<Favorite />} />} label="Kitchen" />
          </li>
          <li className='list-unstyled'>
            <FormControlLabel control={<Checkbox defaultChecked size='medium' color='error' icon={<FavoriteBorder />} checkedIcon={<Favorite />} />} label="Accessories" />
          </li>

          <Typography variant='h5' fontWeight={'bold'} color='turquoise'>Prices </Typography>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="0"
            name="radio-buttons-group"
          >
            <FormControlLabel value="0" control={<Radio icon={<LabelOutlined />} checkedIcon={<Label />} />} label=" All" />
            <FormControlLabel value="1" control={<Radio icon={<LabelOutlined />} checkedIcon={<Label />} />} label="Upto Rs.1000" />
            <FormControlLabel value="2" control={<Radio icon={<LabelOutlined />} checkedIcon={<Label />} />} label="Rs.1000 - Rs.10000" />
            <FormControlLabel value="3" control={<Radio icon={<LabelOutlined />} checkedIcon={<Label />} />} label="RS.10000-Rs.50000" />
            <FormControlLabel value="4" control={<Radio icon={<LabelOutlined />} checkedIcon={<Label />} />} label="Rs.50000-Rs.100000" />
            <FormControlLabel value="4" control={<Radio icon={<LabelOutlined />} checkedIcon={<Label />} />} label="Above Rs.100000" />
          </RadioGroup>
          <Typography variant='h5' fontWeight={'bold'} color='turquoise' marginTop={3}>Avg.customer Review </Typography>
          <li className='list-unstyled'>
            <Link href=' '>
              <Rating name="read-only" value={1} readOnly />
            </Link>
          </li>
          <li className='list-unstyled'>
            <Rating name="read-only" value={2} readOnly />
          </li>
          <li className='list-unstyled'>
            <Rating name="read-only" value={3} readOnly />
          </li>
          < li className='list-unstyled'>
            <Rating name="read-only" value={4} readOnly />
          </li>
          <li className='list-unstyled'>
            <Rating name="read-only" value={5} readOnly />
          </li>


        </Grid>

        <Grid xs={12} sm={6} md={9} padding={5}>
          <Grid container spacing={5}>
            <Grid xs={12} sm={6} md={4} lg={3} item>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }} 
                  height="140"
                  image="./category_images/rk1.png"
                  title="Dragon Fruits"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Mango
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <p style={{fontWeight:'bold'}}>Price:Rs.150 /kg</p>
                    <p2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi tenetur nam, </p2>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" startIcon={<ShoppingBag color='warning' style={{ fontSize: '30px' }} />} variant='contained'>Buy &nbsp; Now</Button>
                  <Button size="small" endIcon={<ShoppingCart color='warning' style={{ fontSize: '30px' }} />} variant='contained'>Add to Cart</Button>
                </CardActions>  
                 
                <Grid display="flex" justifyContent="center" alignItems="center">
                <Rating name="read-only" value={3} readOnly />

  </Grid>
              </Card>
            </Grid>
            <Grid xs={12} sm={6} md={4} lg={3} item>
              <Card sx={{ maxWidth: 345 }} >
                <CardMedia
                  sx={{ height: 140 }}
                  height="140"
                  image="./category_images/rk2.webp"
                  title="Dragon Fruits"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Red Cheery
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <p style={{fontWeight:'bold'}}>Price:Rs.1650 /kg</p>
                    <p2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi tenetur nam, </p2>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" startIcon={<ShoppingBag color='warning' style={{ fontSize: '30px' }} />} variant='contained'>Buy &nbsp; Now</Button>
                  <Button size="small" endIcon={<ShoppingCart color='warning' style={{ fontSize: '30px' }} />} variant='contained'>Add to Cart</Button>
                 
                </CardActions>
                <li className='list-unstyled ' >
                  <Link href=' ' >
                    <Rating name="read-only" value={4} readOnly />
                  </Link>
                </li>
              </Card>
            </Grid>
            <Grid xs={12} sm={6} md={4} lg={3} item>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  height="140"
                  image="./category_images/rk3.jpg"
                  title="Dragon Fruits"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Guava
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    
                    <p style={{fontWeight:'bold'}}>Price:Rs.240 /kg</p>
                    <p2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi tenetur nam, </p2>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" startIcon={<ShoppingBag color='warning' style={{ fontSize: '30px' }} />} variant='contained'>Buy &nbsp; Now</Button>
                  <Button size="small" endIcon={<ShoppingCart color='warning' style={{ fontSize: '30px' }} />} variant='contained'>Add to Cart</Button>
                </CardActions>
                <li className='list-unstyled ' >
                  <Link href=' ' >
                    <Rating name="read-only" value={5} readOnly />
                  </Link>
                </li>
              </Card>
            </Grid>
            <Grid xs={12} sm={6} md={4} lg={3} item>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  height="140"
                  image="./category_images/rk4.jpg"
                  title="Dragon Fruits"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Papaya
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    
                    <p style={{fontWeight:'bold'}}>Price:Rs.180 /kg</p>
                    <p2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi tenetur nam, </p2>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" startIcon={<ShoppingBag color='warning' style={{ fontSize: '30px' }} />} variant='contained'>Buy &nbsp; Now</Button>
                  <Button size="small" endIcon={<ShoppingCart color='warning' style={{ fontSize: '30px' }} />} variant='contained'>Add to Cart</Button>
                </CardActions>
                <li className='list-unstyled ' >
                  <Link href=' ' >
                    <Rating name="read-only" value={1} readOnly />
                  </Link>
                </li>
              </Card>
            </Grid>
            <Grid xs={12} sm={6} md={4} lg={3} item>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  height="140"
                  image="./category_images/rk5.jpg"
                  title="Dragon Fruits"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Dragon Fruits
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  
                    <p style={{fontWeight:'bold'}}>Price:Rs.650 /kg</p>
                    <p2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi tenetur nam, </p2>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" startIcon={<ShoppingBag color='warning' style={{ fontSize: '30px' }} />} variant='contained'>Buy &nbsp; Now</Button>
                  <Button size="small" endIcon={<ShoppingCart color='warning' style={{ fontSize: '30px' }} />} variant='contained'>Add to Cart</Button>
                </CardActions>
                <li className='list-unstyled ' >
                  <Link href=' ' >
                    <Rating name="read-only" value={2} readOnly />
                  </Link>
                </li>
              </Card>
            </Grid>
            <Grid xs={12} sm={6} md={4} lg={3} item>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  height="140"
                  image="./category_images/rk6.webp"
                  title="Dragon Fruits"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    kwivi
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    
                    <p style={{fontWeight:'bold'}}>Price:Rs.600 /kg</p>
                    <p2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi tenetur nam, </p2>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" startIcon={<ShoppingBag color='warning' style={{ fontSize: '30px' }} />} variant='contained'>Buy &nbsp; Now</Button>
                  <Button size="small" endIcon={<ShoppingCart color='warning' style={{ fontSize: '30px' }} />} variant='contained'>Add to Cart</Button>
                </CardActions>
                <li className='list-unstyled ' >
                  <Link href=' ' >
                    <Rating name="read-only" value={3} readOnly />
                  </Link>
                </li>
              </Card>
            </Grid>
            <Grid xs={12} sm={6} md={4} lg={3} item>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  height="140"
                  image="./category_images/rk7.webp"
                  title="Dragon Fruits"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Dragun Fruits
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
              
                    <p style={{fontWeight:'bold'}}>Price:Rs.650 /kg</p>
                    <p2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi tenetur nam, </p2>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" startIcon={<ShoppingBag color='warning' style={{ fontSize: '30px' }} />} variant='contained'>Buy &nbsp; Now</Button>
                  <Button size="small" endIcon={<ShoppingCart color='warning' style={{ fontSize: '30px' }} />} variant='contained'>Add to Cart</Button>
                </CardActions>
                <li className='list-unstyled ' >
                  <Link href=' ' >
                    <Rating name="read-only" value={4} readOnly />
                  </Link>
                </li>
              </Card>
            </Grid>
            <Grid xs={12} sm={6} md={4} lg={3} item>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  height="140"
                  image="./category_images/rk8.jpg"
                  title="Dragon Fruits"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Pineapple
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  
                    <p style={{fontWeight:'bold'}}>Price:Rs.170 /kg</p>
                    <p2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi tenetur nam, </p2>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" startIcon={<ShoppingBag color='warning' style={{ fontSize: '30px' }} />} variant='contained'>Buy &nbsp; Now</Button>
                  <Button size="small" endIcon={<ShoppingCart color='warning' style={{ fontSize: '30px' }} />} variant='contained'>Add to Cart</Button>
                </CardActions>
                <li className='list-unstyled ' >
                  <Link href=' ' >
                    <Rating name="read-only" value={3} readOnly />
                  </Link>
                </li>
              </Card>
            </Grid>

            <Grid xs={12} sm={6} md={4} lg={3} item>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  height="140"
                  image="./category_images/rk9.jpg"
                  title="Dragon Fruits"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Kwivi
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
          
                    <p style={{fontWeight:'bold'}}>Price:Rs.650 /kg</p>
                    <p2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi tenetur nam, </p2>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" startIcon={<ShoppingBag color='warning' style={{ fontSize: '30px' }} />} variant='contained'>Buy &nbsp; Now</Button>
                  <Button size="small" endIcon={<ShoppingCart color='warning' style={{ fontSize: '30px' }} />} variant='contained'>Add to Cart</Button>
                </CardActions>
                <li className='list-unstyled ' >
                  <Link href=' ' >
                    <Rating name="read-only" value={5} readOnly />
                  </Link>
                </li>
              </Card>
            </Grid>

            <Grid xs={12} sm={6} md={4} lg={3} item>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  height="140"
                  image="./category_images/rk10.jpg"
                  title="Dragon Fruits"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Watermelon
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  
                    <p style={{fontWeight:'bold'}}>Price:Rs.90 /kg</p>
                    <p2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi tenetur nam, </p2>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" startIcon={<ShoppingBag color='warning' style={{ fontSize: '30px' }} />} variant='contained'>Buy &nbsp; Now</Button>
                  <Button size="small" endIcon={<ShoppingCart color='warning' style={{ fontSize: '30px' }} />} variant='contained'>Add to Cart</Button>
                </CardActions>
                <li className='list-unstyled ' >
                  <Link href=' ' >
                    <Rating name="read-only" value={3} readOnly />
                  </Link>
                </li>
              </Card>
            </Grid>

            <Grid xs={12} sm={6} md={4} lg={3} item>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  height="140"
                  image="./category_images/rk11.jpg"
                  title="Dragon Fruits"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Orange
                  </Typography>
                  <Typography variant="body2" color="text.secondary">

                    <p style={{fontWeight:'bold'}}>Price:Rs.140 /kg</p>
                    <p2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi tenetur nam, </p2>
                    
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" startIcon={<ShoppingBag color='warning' style={{ fontSize: '30px' }} />} variant='contained'>Buy &nbsp; Now</Button>
                  <Button size="small" endIcon={<ShoppingCart color='warning' style={{ fontSize: '30px' }} />} variant='contained'>Add to Cart</Button>
                </CardActions>
                <li className='list-unstyled ' >
                  <Link href=' ' >
                    <Rating name="read-only" value={1} readOnly />
                  </Link>
                </li>
              </Card>
            </Grid>

            <Grid xs={12} sm={6} md={4} lg={3} item>
            <Product_Card image='https://np-live-21.slatic.net/kf/S404a8531abf149d9b07fa2928fa14ed0i.jpg' title='Puja ' price='500'/>
            </Grid>

            <Grid xs={12} sm={6} md={4} lg={3} item>
            <Product_Card image='https://static-01.daraz.com.np/p/06b28037e514d45c85eae5fa540d838b.jpg_200x200q80-product.jpg_.webp' title='T shirt' price='230/kg'/>
            </Grid>

            <Grid xs={12} sm={6} md={4} lg={3} item>
            <Product_Card image='https://static-01.daraz.com.np/p/8e2a3967ff20049a9371bf5ff6e4b431.jpg' title='Mouse' price='2300/pic'/>
            </Grid>

            <Grid xs={12} sm={6} md={4} lg={3} item>
             <Product_Card image='https://np-live-21.slatic.net/kf/S7e982758acb94412990963c666fddc56n.jpg' title='Towel' price='230/piece'/>
            </Grid>

          </Grid>


        </Grid>

      </Grid>

    </>
  )
}

export default Products