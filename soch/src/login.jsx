import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
  } from '@chakra-ui/react'
//   import * as React from 'react'
//   import { Logo } from './Logo'
//   import { OAuthButtonGroup } from './OAuthButtonGroup'
//   import { PasswordField } from './PasswordField'
import './footer.css';
import LargeWithNewsletter from "./footer.jsx";
  
  export  const Sapp = () => (
    <>
    <div id='split'>
        <div id='one'>
    <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
      <Stack spacing="8">
        <Stack spacing="6">
         
          <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
            <Heading size={useBreakpointValue({ base: 'xs', md: 'sm' })}>
              Log in to your account
            </Heading>
            <HStack spacing="1" justify="center">
              <Text color="muted">Don't have an account?</Text>
              <Button variant="link" colorScheme="blue">
                Sign up
              </Button>
            </HStack>
          </Stack>
        </Stack>
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
          boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="email" >Email</FormLabel>
                <Input id="email" type="email" placeholder='Email Address'/>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input id="Password" type="Password" placeholder='Password' />
              </FormControl>
             
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button variant="link" colorScheme="blue" size="sm">
                Forgot password?
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button variant="primary" style={{backgroundColor:"black",color:"white"}}>Sign in</Button>
              <HStack>
                <Divider />
                <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                  or continue with
                </Text>
                <Divider />
              </HStack>
              
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
    </div>
    <div id='two'>
    <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
      <Stack spacing="8">
        <Stack spacing="6">
         
          <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
            <Heading size={useBreakpointValue({ base: 'xs', md: 'sm' })}>
              Become a coach insider
            </Heading>
            <HStack spacing="1" justify="center">
              <Text color="muted">Sign up to receive Coach emails (you can withdraw your consent at any time). Read our Privacy Policy and Contact Us for more details.</Text>
              
            </HStack>
          </Stack>
        </Stack>
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
          boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
            <FormControl>
                <FormLabel htmlFor="first_name">First Name</FormLabel>
                <Input id="first_name" type="text" placeholder='First Name' />
              </FormControl>
              <FormControl>
              <FormLabel htmlFor="last_name">Last Name</FormLabel>
              
                <Input id="last_name" type="text" placeholder='Last Name' />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" type="email" placeholder='Email Address' />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input id="Password" type="Password" placeholder='Password' />
              </FormControl>
             
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked disabled>Must be 8 or more characters</Checkbox>
               <Checkbox defaultChecked disabled>Must include at least one number and letter</Checkbox>
             
             
            </HStack>
            <Stack spacing="6">
              <Button variant="primary" style={{backgroundColor:"black",color:"white"}}>Create account</Button>
              <HStack>
                <Divider />
                <Text fontSize="sm"  color="muted">
                COACH USES YOUR INFORMATION TO CREATE AND ADMINISTER YOUR ACCOUNT. BY CLICKING CREATE ACCOUNT, YOU AGREE TO ABIDE BY COACH TERMS AND CONDITIONS. READ OUR PRIVACY POLICY FOR MORE DETAILS.
                </Text>
                <Divider />
              </HStack>
              
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
    </div>
    
    </div>
    <LargeWithNewsletter/>
    </>
  )