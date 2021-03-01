import { ArrowBackIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Icon,
  Link,
  Select,
  Text
} from '@chakra-ui/react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CartRow from 'components/cart/cartRow';
import { InjectedCheckoutForm } from 'components/stripe/checkoutForm';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link as RouterLink, useHistory, useLocation } from 'react-router-dom';
import { useAppDispatch } from 'store';
import { RootState } from 'store/rootReducer';
import { cartPriceTotal } from 'utils';

const stripePromise = loadStripe('pk_test_7sQOtVSSKa0t8rdQDRDkWLgQ');

interface CheckoutProps {}

const Checkout = ({}: CheckoutProps) => {
  const dispatch = useAppDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  const history = useHistory();

  const productNum: number = cart.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  const totalPrice = cartPriceTotal(cart);

  return (
    <Box bg="light-grey" minH="30rem">
      <Grid
        py={20}
        mx={{ base: 5, md: '10vw' }}
        templateColumns={{
          base: '1fr',
          '2xl': '5fr 3fr'
        }}
        gridTemplateAreas={{
          base: '"cart" "shipping"',
          '2xl': '"cart shipping"'
        }}
        gridGap={4}
      >
        <Box gridArea="cart">
          <Flex
            pb={4}
            align="center"
            borderBottom="1px solid"
            borderColor="gray.300"
          >
            <Button
              fontFamily="body"
              fontSize={{ base: '2xl' }}
              color="gray.700"
              bg="transparent"
              border="none"
              _hover={{ bg: 'transparent', color: 'primary.500' }}
              leftIcon={<Icon w={6} h={6} mr={2} as={ArrowBackIcon} />}
              onClick={() => history.goBack()}
            >
              Continue Shopping
            </Button>
          </Flex>
          <Box my={6}>
            {cart.length === 0 ? (
              <Heading fontSize="xl">You have no items in your cart.</Heading>
            ) : (
              <>
                <Heading fontSize="3xl">Shopping Cart</Heading>
                <Flex justify="space-between">
                  <Text>You have {productNum} items in your cart.</Text>
                  <Flex>
                    <Text>Sort by:</Text>
                    <Select
                      height={6}
                      width="initial"
                      border="none"
                      fontSize="md"
                    >
                      <option value="price">Price</option>
                    </Select>
                  </Flex>
                </Flex>
                {/* Cart */}
                <Box my={6}>
                  {cart?.map((cartItem, key) => (
                    <CartRow key={key} item={cartItem} />
                  ))}
                </Box>
              </>
            )}
          </Box>
        </Box>
        {cart.length > 0 ? (
          <Box gridArea="shipping" bg="white" borderRadius={8} p={8}>
            <Elements stripe={stripePromise}>
              <InjectedCheckoutForm />
            </Elements>
          </Box>
        ) : null}
      </Grid>
    </Box>
  );
};

export default Checkout;
