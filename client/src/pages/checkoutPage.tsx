import { ArrowBackIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Icon,
  IconButton,
  Link,
  Select,
  SystemStyleObject,
  Text,
  VStack
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { Product } from '@prisma/client';
import CartRow from 'components/cart/cartRow';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { useAppDispatch } from 'store';
import { RootState } from 'store/rootReducer';
import { setProductAmount } from 'store/slices/cartSlice';
import { CustomTheme } from 'theme/theme';
import { CartProduct } from '@shared/types';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { InjectedCheckoutForm } from 'components/stripe/checkoutForm';

const stripePromise = loadStripe('pk_test_7sQOtVSSKa0t8rdQDRDkWLgQ');

interface CheckoutProps {}

const Checkout = ({}: CheckoutProps) => {
  const dispatch = useAppDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  const productNum: number = cart.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  const totalPrice = cart?.reduce((acc, current) => {
    // Round to two decimal places
    return acc + Math.round(current.product.price * current.amount * 100) / 100;
  }, 0);

  return (
    <Box bg="light-grey">
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
            <Link
              to="/"
              as={RouterLink}
              fontSize={{ base: '2xl' }}
              color="gray.700"
            >
              <Icon w={6} h={6} mr={2} as={ArrowBackIcon} />
              Continue Shopping
            </Link>
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
        <Box gridArea="shipping" bg="white" borderRadius={8} p={8}>
          <Elements stripe={stripePromise}>
            <InjectedCheckoutForm />
          </Elements>
        </Box>
      </Grid>
    </Box>
  );
};

export default Checkout;