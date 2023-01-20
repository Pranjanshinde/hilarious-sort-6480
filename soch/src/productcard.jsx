import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { Image,Stack,Heading,Text,Divider,ButtonGroup,Button } from '@chakra-ui/react';



const Productcard = (pros) => {
console.log(pros);
const {image,desc,price,title}=pros
return (
<Card maxW='sm'>
  <CardBody>
    <Image
      src={image}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{title}</Heading>
      <Text>
        {desc}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        ${price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
)


}

export default Productcard;