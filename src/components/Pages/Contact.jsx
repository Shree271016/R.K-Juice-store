
import { ContactEmergency, ContactMail, ContactPage } from '@mui/icons-material'
import { Box, Button, TextField, Typography } from '@mui/material'
import { green, lightGreen, yellow } from '@mui/material/colors'
import React from 'react'
 
const Contact = () => {
  return (
    <> 
    <Box backgroundColor='teal' padding={10} display ={'flex'}  > 
      <Box width={'50%'}  backgroundColor='#ffddaa' paddingTop={3} paddingBottom={11} paddingLeft={15} sx={{borderTopLeftRadius:10,borderBottomLeftRadius:10}} >
        <Typography variant='h4' paddingLeft ={4}  sx={{textDecoration:'underline'}} color='purple'>
        Address 
        </Typography >
        <Typography variant='h5' >R.K. Juice</Typography>  
        <Typography variant='h6' >Sallaghari,17,Bhaktapur</Typography> 
        <Typography variant='h6'>Phone :9841616367</Typography>  
        <Typography variant='h6' >Email:info@rkjuice.com.np</Typography>  
        <Typography variant='h6' >Web : www.rkjuice.com.np </Typography>  
        </Box>
      <Box width={'50%'} backgroundColor='#ddffaa' sx={{borderTopRightRadius:10,borderBottomRightRadius:10 ,color:'',fontSize:'40px' }} >
      <Typography variant='h4' textAlign ={'center'}  sx={{textDecoration:'underline'}} color='purple'>
        
        Contact Form
        </Typography>
        <form>
        <TextField fullWidth  label='Emali' placeholder='Enter Your Email Address' required color='success' />
        <TextField fullWidth  label='Subject' placeholder='Enter Your Email Address' required color='success'/>
        <TextField fullWidth  label='Body' placeholder='Enter Your Email Address' required color='success' multiline rows={4} variant='filled'/>
        <Button variant='contained' color='warning' sx={{marginTop:'10px'}} fullWidth >Submit</Button>
        </form>  
      {/* <ContactPage/>  */}
      </Box>
        
    </Box> 
    <Box>
      <Typography variant='h3' textAlign={'center'} fontWeight={'bold'}>Address Location</Typography>
    </Box>
    <Box padding={10} backgroundColor='#FF00FF'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d441.6758130628675!2d85.40899480667466!3d27.673828310272732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a908f5927b1%3A0x37b3a4c8c4b400b5!2sBisu%20Pharmacy!5e0!3m2!1sen!2snp!4v1688987470625!5m2!1sen!2snp" width="100%" height="450"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    </Box>

    </>
    
  )
}

export default Contact 