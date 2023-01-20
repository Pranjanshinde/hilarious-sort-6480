
import './App.css';
import { Select } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react'
import { Button, ButtonGroup,Box } from '@chakra-ui/react';
import LargeWithNewsletter from "./footer.jsx";

function App() {
  return (
    <div className="App">
      <div>
        <div className="nav_top">
        <div className="nav1">
          <div id="country">
          <h5>Country:</h5>
        <Select placeholder='Select Country' style={{width:"20px"}}>
  <option value='India'>India</option>
  <option value='United States'>United States</option>
  <option value='Canada'>Canada</option>
</Select>
</div>
<h5>Stores</h5> </div>
<img src="https://media.designrush.com/inspiration_images/136113/conversions/_1513770583_731_coach1_7e6b6e6bb763-mobile.jpg" alt="soch logo" className="logo" />
<div className='nav_3'>
  <div id="tell">
        <Input htmlSize={4} width='200px' placeholder='Search Items' />
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg7u1QNtfvOSUjq1deNENKbOX6659nweakeA&usqp=CAU' alt="liked" width="30px" height="30px" style={{height:"25px"}}/>
        </div>        
        <img src='https://www.supercoloring.com/sites/default/files/styles/coloring_medium/public/cif/2022/02/141-red-heart-emoji-coloring-page_1.png' alt="liked" width="30px" height="30px" style={{height:"25px"}}/>
        <img src='https://www.kindpng.com/picc/m/670-6702215_ic-people-user-login-icon-png-transparent-png.png' alt="liked" width="30px" height="30px" style={{height:"25px"}}/>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxjWJ1z9q64s-GEQA_2Oep0ukXUG4Ji_uOvg&usqp=CAU' alt="liked" width="30px" height="30px" style={{height:"25px"}}/>
        </div>
        </div>
        <div id='naw_low'>
          <h5>GIFTS</h5>
          <h5>NEW</h5>
          <h5>SHOP BY</h5>
          <h5>WOMEN</h5>
          <h5>BAGS</h5>
          <h5>COACH (RE)LOVED</h5>
          <h5>COACH INSIDER</h5>
          <h5>SALE</h5>

        </div>
        
      </div>
      <div id='body'>
        <div id="red">
          <h1 className='HEADER'><b>Gift your Heart Out</b></h1>
          <h2 id='t'>Warning: sparks may fly.</h2>
       
<Box className='buto'
  as='button'
  height='32px'
  lineHeight='1.2'
  transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
  border='1px'
  px='8px'
  borderRadius='2px'
  fontSize='14px'
  fontWeight='semibold'
  bg='black'
  borderColor='black'
  color='white'
  _hover={{ bg: '#ebedf0' }}
  _active={{
    bg: 'grey',
    transform: 'scale(0.98)',
    borderColor: '#bec3c9',
  }}
  _focus={{
    boxShadow:
      '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  }}
>
  View Valentine's Day Shop
</Box>
<Box className='buto'
  as='button'
  height='32px'
  lineHeight='1.2'
  transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
  border='1px'
  px='8px'
  borderRadius='2px'
  fontSize='14px'
  fontWeight='semibold'
  bg='black'
  borderColor='black'
  color='white'
  _hover={{ bg: '#ebedf0' }}
  _active={{
    bg: 'grey',
    transform: 'scale(0.98)',
    borderColor: '#bec3c9',
  }}
  _focus={{
    boxShadow:
      '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  }}
>
  View All New Arrivals
</Box>

<video controls width="1300px" height="800px" autoPlay loop muted   webkitallowfullscreen mozallowfullscreen className='pros'>
    <source src="https://assets.coach.com/na/media/web-production/202301/0116-m2-desktop.mp4"
            type="video/mp4"/>

</video>
<h1 className='HEADER'><b>More than just the thought.</b></h1>
          <h2 id='t'>Sometimes it is the gift that counts.</h2>
       
<Box className='buto'
  as='button'
  height='32px'
  lineHeight='1.2'
  transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
  border='1px'
  px='8px'
  borderRadius='2px'
  fontSize='14px'
  fontWeight='semibold'
  bg='black'
  borderColor='black'
  color='white'
  _hover={{ bg: '#ebedf0' }}
  _active={{
    bg: 'grey',
    transform: 'scale(0.98)',
    borderColor: '#bec3c9',
  }}
  _focus={{
    boxShadow:
      '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  }}
>
  See valentines Day Gifts
</Box>
<Box className='buto'
  as='button'
  height='32px'
  lineHeight='1.2'
  transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
  border='1px'
  px='8px'
  borderRadius='2px'
  fontSize='14px'
  fontWeight='semibold'
  bg='black'
  borderColor='black'
  color='white'
  _hover={{ bg: '#ebedf0' }}
  _active={{
    bg: 'grey',
    transform: 'scale(0.98)',
    borderColor: '#bec3c9',
  }}
  _focus={{
    boxShadow:
      '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  }}
>
  See The Gift Guide
</Box>
<div id="flex">
<div>
  <img src='https://cms.coach.com/i/coach/0116-m2-valentines-day?$poi$&w=480&fmt=webp&$qlt_med$' alt="img" />
  <Box className='buto'
  as='button'
  height='32px'
  lineHeight='1.2'
  transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
  border='1px'
  px='8px'
  borderRadius='2px'
  fontSize='14px'
  fontWeight='semibold'
  bg='black'
  borderColor='black'
  color='white'
  _hover={{ bg: '#ebedf0' }}
  _active={{
    bg: 'grey',
    transform: 'scale(0.98)',
    borderColor: '#bec3c9',
  }}
  _focus={{
    boxShadow:
      '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  }}
>
  Shop Valetines Day Gifts
</Box>

</div>
<div>
  <img src='https://cms.coach.com/i/coach/0116-m2-bags-new?$poi$&w=480&fmt=webp&$qlt_med$' />
  <Box className='buto'
  as='button'
  height='32px'
  lineHeight='1.2'
  transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
  border='1px'
  px='8px'
  borderRadius='2px'
  fontSize='14px'
  fontWeight='semibold'
  bg='black'
  borderColor='black'
  color='white'
  _hover={{ bg: '#ebedf0' }}
  _active={{
    bg: 'grey',
    transform: 'scale(0.98)',
    borderColor: '#bec3c9',
  }}
  _focus={{
    boxShadow:
      '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  }}
>
  Shop Bags
</Box>

</div>
<div>
  <img src='https://cms.coach.com/i/coach/0116-m2-under-300?$poi$&w=480&fmt=webp&$qlt_med$' />
  <Box className='buto'
  as='button'
  height='32px'
  lineHeight='1.2'
  transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
  border='1px'
  px='8px'
  borderRadius='2px'
  fontSize='14px'
  fontWeight='semibold'
  bg='black'
  borderColor='black'
  color='white'
  _hover={{ bg: '#ebedf0' }}
  _active={{
    bg: 'grey',
    transform: 'scale(0.98)',
    borderColor: '#bec3c9',
  }}
  _focus={{
    boxShadow:
      '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  }}
>
  Under $300
</Box>

</div>
<div>
  <img src='https://cms.coach.com/i/coach/0116-m2-sustainable?$poi$&w=480&fmt=webp&$qlt_med$' />
  <Box className='buto'
  as='button'
  height='32px'
  lineHeight='1.2'
  transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
  border='1px'
  px='8px'
  borderRadius='2px'
  fontSize='14px'
  fontWeight='semibold'
  bg='black'
  borderColor='black'
  color='white'
  _hover={{ bg: '#ebedf0' }}
  _active={{
    bg: 'grey',
    transform: 'scale(0.98)',
    borderColor: '#bec3c9',
  }}
  _focus={{
    boxShadow:
      '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  }}
>
  Shop Sustainable Gifts
</Box>

</div>

</div>

        </div>
        <marquee behavior="" direction="left" id="slide">ORDER GIFTS BY 2/8 AT NOON EST FOR DELIVERY BY 2/14. ♥   ORDER GIFTS BY 2/8 AT NOON EST FOR DELIVERY BY 2/14. ♥   ORDER GIFTS BY 2/8 AT NOON EST FOR DELIVERY BY 2/14. ♥   ORDER GIFTS BY 2/8 AT NOON EST FOR DELIVERY BY 2/14. ♥ </marquee>
        <h1 className='HEADER'><b>They’re loved by everyone for a reason.</b></h1>
       
<Box className='buto'
  as='button'
  height='32px'
  lineHeight='1.2'
  transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
  border='1px'
  px='8px'
  borderRadius='2px'
  fontSize='14px'
  fontWeight='semibold'
  bg='white'
  borderColor='black'
  color='black'
  _hover={{ bg: '#ebedf0' }}
  _active={{
    bg: 'grey',
    transform: 'scale(0.98)',
    borderColor: '#bec3c9',
  }}
  _focus={{
    boxShadow:
      '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  }}
>
  SHOP BESTSELLERS
</Box>
<Box className='buto'
  as='button'
  height='32px'
  lineHeight='1.2'
  transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
  border='1px'
  px='8px'
  borderRadius='2px'
  fontSize='14px'
  fontWeight='semibold'
  bg='white'
  borderColor='black'
  color='black'
  _hover={{ bg: '#ebedf0' }}
  _active={{
    bg: 'grey',
    transform: 'scale(0.98)',
    borderColor: '#bec3c9',
  }}
  _focus={{
    boxShadow:
      '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  }}
>
  SHOP ALL BAGS
</Box>
      </div>
      <video controls width="1300px" height="800px" autoPlay loop muted   webkitallowfullscreen mozallowfullscreen className='pros'>
    <source src="https://assets.coach.com/na/media/web-production/202301/0116-m1-desktop.mp4"
            type="video/mp4"/>
            </video>
            <h1 className='HEADER'><b>More top-selling things.</b></h1>
          
       
<Box className='buto'
  as='button'
  height='32px'
  lineHeight='1.2'
  transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
  border='1px'
  px='8px'
  borderRadius='2px'
  fontSize='14px'
  fontWeight='semibold'
  bg='white'
  borderColor='black'
  color='black'
  _hover={{ bg: '#ebedf0' }}
  _active={{
    bg: 'grey',
    transform: 'scale(0.98)',
    borderColor: '#bec3c9',
  }}
  _focus={{
    boxShadow:
      '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  }}
>
  See valentines Day Gifts
</Box>
<div className='flex2'>
<div>
  <img src='https://cms.coach.com/i/coach/0116-ecom4-new?$poi$&w=640&fmt=webp&$qlt_med$'/>
  <Box className='buto'
  as='button'
  height='32px'
  lineHeight='1.2'
  transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
  border='1px'
  px='8px'
  borderRadius='2px'
  fontSize='14px'
  fontWeight='semibold'
  bg='white'
  borderColor='black'
  color='black'
  _hover={{ bg: '#ebedf0' }}
  _active={{
    bg: 'grey',
    transform: 'scale(0.98)',
    borderColor: '#bec3c9',
  }}
  _focus={{
    boxShadow:
      '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  }}
>
  SHOP NOW
</Box>

</div>

<div>
  <img src='https://cms.coach.com/i/coach/0116-ecom2-new?$poi$&w=640&fmt=webp&$qlt_med$' />
  <Box className='buto'
  as='button'
  height='32px'
  lineHeight='1.2'
  transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
  border='1px'
  px='8px'
  borderRadius='2px'
  fontSize='14px'
  fontWeight='semibold'
  bg='white'
  borderColor='black'
  color='black'
  _hover={{ bg: '#ebedf0' }}
  _active={{
    bg: 'grey',
    transform: 'scale(0.98)',
    borderColor: '#bec3c9',
  }}
  _focus={{
    boxShadow:
      '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  }}
>
SHOP NOW
</Box>

</div>

<div>
  <img src='https://cms.coach.com/i/coach/0116-ecom3-new?$poi$&w=640&fmt=webp&$qlt_med$' />
  <Box className='buto'
  as='button'
  height='32px'
  lineHeight='1.2'
  transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
  border='1px'
  px='8px'
  borderRadius='2px'
  fontSize='14px'
  fontWeight='semibold'
  bg='white'
  borderColor='black'
  color='black'
  _hover={{ bg: '#ebedf0' }}
  _active={{
    bg: 'grey',
    transform: 'scale(0.98)',
    borderColor: '#bec3c9',
  }}
  _focus={{
    boxShadow:
      '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  }}
>
SHOP NOW
</Box>

</div>

</div>
<div>
<h1 className='HEADER'><b>More Coach stories.</b></h1>
</div>
<div className='flex2'>
<div>
<img src='https://cms.coach.com/i/coach/0116-ecom1-new?$poi$&w=640&fmt=webp&$qlt_med$' />
  <Box className='buto'
  as='button'
  height='32px'
  lineHeight='1.2'
  transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
  border='1px'
  px='8px'
  borderRadius='2px'
  fontSize='14px'
  fontWeight='semibold'
  bg='white'
  borderColor='black'
  color='black'
  _hover={{ bg: '#ebedf0' }}
  _active={{
    bg: 'grey',
    transform: 'scale(0.98)',
    borderColor: '#bec3c9',
  }}
  _focus={{
    boxShadow:
      '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  }}
>
  SHOP DISNEY X COACH
</Box>

</div>

<div>
  <img src='https://cms.coach.com/i/coach/1226-ms-mens?$poi$&w=640&fmt=webp&$qlt_very_high$' />
  <Box className='buto'
  as='button'
  height='32px'
  lineHeight='1.2'
  transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
  border='1px'
  px='8px'
  borderRadius='2px'
  fontSize='14px'
  fontWeight='semibold'
  bg='white'
  borderColor='black'
  color='black'
  _hover={{ bg: '#ebedf0' }}
  _active={{
    bg: 'grey',
    transform: 'scale(0.98)',
    borderColor: '#bec3c9',
  }}
  _focus={{
    boxShadow:
      '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  }}
>
SHOP MEN'S
</Box>

</div>

<div>
  <img src='https://cms.coach.com/i/coach/1226-ms-lunar-new?$poi$&w=640&fmt=webp&$qlt_very_high$' />
  <Box className='buto'
  as='button'
  height='32px'
  lineHeight='1.2'
  transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
  border='1px'
  px='8px'
  borderRadius='2px'
  fontSize='14px'
  fontWeight='semibold'
  bg='white'
  borderColor='black'
  color='black'
  _hover={{ bg: '#ebedf0' }}
  _active={{
    bg: 'grey',
    transform: 'scale(0.98)',
    borderColor: '#bec3c9',
  }}
  _focus={{
    boxShadow:
      '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  }}
>
SHOP LUNAR NEW YEAR
</Box>

</div>

</div>
<h1 className='HEADER'><b>We look good together.</b></h1>
          <h2 id='t'>Keep carrying (and tagging) @coach. #CoachNY</h2>
       
<Box className='buto'
  as='button'
  height='32px'
  lineHeight='1.2'
  transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
  border='1px'
  px='8px'
  borderRadius='2px'
  fontSize='14px'
  fontWeight='semibold'
  bg='white'
  borderColor='black'
  color='black'
  _hover={{ bg: '#ebedf0' }}
  _active={{
    bg: 'grey',
    transform: 'scale(0.98)',
    borderColor: '#bec3c9',
  }}
  _focus={{
    boxShadow:
      '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  }}
>
  SHOP NEW ARRIVALS
</Box>
<Box className='buto'
  as='button'
  height='32px'
  lineHeight='1.2'
  transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
  border='1px'
  px='8px'
  borderRadius='2px'
  fontSize='14px'
  fontWeight='semibold'
  bg='white'
  borderColor='black'
  color='black'
  _hover={{ bg: '#ebedf0' }}
  _active={{
    bg: 'grey',
    transform: 'scale(0.98)',
    borderColor: '#bec3c9',
  }}
  _focus={{
    boxShadow:
      '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  }}
>
  EXPLORE THE COMMUNITY
</Box>
   
    <Box className='buto'
    as='button'
    height='32px'
    lineHeight='1.2'
    transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
    border='1px'
    px='8px'
    borderRadius='2px'
    fontSize='14px'
    fontWeight='semibold'
    bg='white'
    borderColor='black'
    color='black'
    _hover={{ bg: '#ebedf0' }}
    _active={{
      bg: 'grey',
      transform: 'scale(0.98)',
      borderColor: '#bec3c9',
    }}
    _focus={{
      boxShadow:
        '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
    }}
  >
    FOLOW US ON INSTAGRAM
  </Box>
  <div id='last'>
  <h1 className='HEADER'><b>Coach at your service.</b></h1>
  <div id="grid">
<div>
  <img src='https://cms.coach.com/i/coach/coach-insider-hp-icon' />
  <h5><b>Coach Insider</b></h5>
  <p>Instant rewards & more good things.</p>
  <h5><b>Learn More</b></h5>
</div>
<div>
  <img src='https://cms.coach.com/i/coach/icon-klarna.png' />
  <h5><b>Buy Now, Pay Later</b></h5>
  <p>Split your total into four easy, interest-free payments with Klarna.</p>
  <h5><b>Learn More</b></h5>
</div>
<div>
  <img src='https://cms.coach.com/i/coach/coach-insider-hp-icon' />
  <h5><b>More Ways to Shop</b></h5>
  <p>Select stores now offer pickup and virtual shopping appointments.</p>
  <h5><b>Learn More</b></h5>
</div>
<div>
  <img src='https://cms.coach.com/i/coach/icon-free-ship.png' />
  <h5><b>Free Shipping & Returns</b></h5>
  <p>On all orders.</p>
  <h5><b>Learn More</b></h5>
</div>
<div>
  <img src='https://cms.coach.com/i/coach/icon-customize.png' />
  <h5><b>Coach Create Customization</b></h5>
  <p>Our craftsmen can embellish, rivet, or digitally print your designs.</p>
  <h5><b>Learn More</b></h5>
</div>
<div>
  <img src='https://cms.coach.com/i/coach/icon-invite-friend.png' />
  <h5><b>Give $20, get $20.</b></h5>
  <p>When a friend makes their first purchase of $250. (Get $30 if you sign in or sign up to be an Insider!).</p>
  <h5><b>Learn More</b></h5>
</div>
<div>
  <img src='https://cms.coach.com/i/coach/icon-sms.png' />
  <h5><b>Get $15 off your $150 order.</b></h5>
  <p>When you sign up for text messages</p>
  <h5><b>Learn More</b></h5>
</div>
<div>
  <img src='https://cms.coach.com/i/coach/icon-repairs.png' />
  <h5><b>One-Year Warranty & Repairs</b></h5>
  <p>All repairs are handled with care by our Coach Repair Workshop.</p>
  <h5><b>Learn More</b></h5>
</div>
<div>
  <img src='https://cms.coach.com/i/coach/icon-gift-services.png' />
  <h5><b>Gift Services</b></h5>
  <p>Complimentary gift wrap and more.</p>
  <h5><b>Learn More</b></h5>
</div>
<div>
  <img src='https://cms.coach.com/i/coach/icon-chat.png' />
  <h5><b>24/7 Customer Care</b></h5>
  <p>Questions? Ask away. We love hearing from you.</p>
  <h5><b>Learn More</b></h5>
</div>

  </div>
  </div>
  <LargeWithNewsletter/>
      </div>
  );
}

export default App;
