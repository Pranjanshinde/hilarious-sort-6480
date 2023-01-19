
import './App.css';
import { Select } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react'
import { Button, ButtonGroup,Box } from '@chakra-ui/react'

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

<video controls width="1300px" height="800px" autoPlay loop muted   webkitallowfullscreen mozallowfullscreen id='pros'>
    <source src="https://assets.coach.com/na/media/web-production/202301/0116-m2-desktop.mp4"
            type="video/mp4"/>

</video>


        </div>
      </div>

    </div>
  );
}

export default App;
