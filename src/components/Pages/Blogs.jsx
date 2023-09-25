import { Box, Typography } from '@mui/material'
import React from 'react'

const Blogs = () => {
  return (
    <>
      <Box minHeight={'80vh'} backgroundColor='#aaffaa' p={10} borderRadius={10}>
        <Box display={'flex'} p={15} backgroundColor='yellow' borderRadius={5}>
          <Box width={'70%'} paddingRight={10}>
            <h3 className='text-decoration-underline text-danger' >फलफुल र हामी    </h3>
            <Typography variant='body1' textAlign={'justify'}>

              <li className='list-unstyled text-decoration-underline' > Introduction:</li>
              <li className='list-unstyled'>
                Welcome to a world of taste and nutrition, where the Organic Fruits and Juice Center Shop App brings you the best of organic fruits and revitalizing juices at your convenience. In this blog, we dive into the wonders of this app, exploring how it combines the goodness of organic fruits with the refreshing power of natural juices, making healthy living easier and more enjoyable for all.</li>

              The Organic Advantage:
              <li className='list-unstyled'>
                With the Organic Fruits and Juice Center Shop App, you can say goodbye to artificial additives and processed ingredients. Embracing the organic way of life, the app offers a selection of fruits that are grown with care and respect for nature, ensuring every bite is brimming with wholesome goodness.
              </li>

              A Symphony of Juices:
              <li className='list-unstyled'>
                Quench your thirst and revitalize your body with an exquisite range of natural juices. From classic combinations like apple-carrot to exotic blends like pineapple-mango-ginger, the app offers a symphony of flavors that will delight your taste buds and nourish your body.
              </li>
              Customizable Juice Creations:
              <li className='list-unstyled'>
                For the adventurous souls, the app allows you to customize your juice creations. Mix and match your favorite fruits, add superfood boosts like chia seeds or spinach, and create a personalized elixir tailored to your health goals and preferences.
              </li>
    

            </Typography>
          </Box>
          <Box width='30%' marginLeft='10' paddingTop={10}>
            <img src="Category_images/blog.JPG" alt="" style={{ width: '100%', borderRadius: '40%' }} />
            <Typography variant='h5' textAlign={'right'} >  <li className='list-unstyled'>राम कुमार पुडासैनी <br />(R.K)</li>

            </Typography>
          </Box>
        </Box>
      </Box>
      <hr  className='my-4'/>
      <Box minHeight={'80vh'} backgroundColor='#aaffaa' p={10} borderRadius={10}>
        <Box  display={'flex'} p={15} backgroundColor='yellow' borderRadius={5}>
          <Box width='30%' marginLeft='15' paddingTop={10}   >
            <img src="Category_images/blog.JPG" alt="" style={{ width: '100%', borderRadius: '40%' }} />
            <Typography variant='h5' textAlign={'left'} >  <li className='list-unstyled'>राम कुमार पुडासैनी <br />(R.K)</li>

            </Typography>
          </Box>
          <Box width={'70%'} paddingLeft={5}>
            <h3 className='text-decoration-underline text-danger' >फलफुल र हामी  </h3>
            <Typography variant='body1' textAlign={'justify'}>
            Wellness at Your Doorstep:
              <li className='list-unstyled'>
                Busy schedules and long commutes are no longer obstacles to healthy living. The app ensures that your daily dose of nutrition is just a few taps away. Order your organic fruits and juices online and have them delivered fresh to your doorstep, saving you time and effort.
              </li>
              Boosting Immunity and Vitality:
              <li className='list-unstyled'>
                Organic fruits and fresh juices are packed with vitamins, minerals, and antioxidants that support your immune system and promote overall vitality. The app's focus on quality and freshness guarantees that you're getting the maximum nutrition from every bite and sip.
              </li>

              Seasonal Delights:
              <li className='list-unstyled'>
                Just like nature's bounty, the app embraces the beauty of seasonal fruits and juices. Discover the joy of indulging in fruits at their peak ripeness and juices made from the finest seasonal produce.
              </li>
              Loyalty Rewards and Offers:
              <li className='list-unstyled'>
                The Organic Fruits and Juice Center Shop App cherishes its loyal customers. Earn rewards points with every purchase and unlock special offers, encouraging you to embark on a continuous journey towards a healthier lifestyle.
              </li>
              Educational Resources:
              <li className='list-unstyled'>
                Knowledge is a powerful tool for making informed decisions. The app provides educational resources on the benefits of organic living, the nutritional value of various fruits, and the advantages of consuming natural juices.
              </li>
              Conclusion:
              <li className='list-unstyled'>
                The Organic Fruits and Juice Center Shop App is a wellness haven, offering a diverse selection of organic fruits and revitalizing juices that nourish both body and soul. As you embark on this health-conscious journey, let the app be your guide to making deliciously healthy choices every day. Embrace the fusion of nature's gifts and technological convenience, and experience a renewed sense of well-being with every delightful sip and bite. Cheers to a healthier and happier you!
              </li>
            </Typography>
          </Box>

        </Box>
      </Box>
    </>
  )
}

export default Blogs  