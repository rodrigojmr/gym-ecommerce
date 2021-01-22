import { Flex, Text, VStack } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React, { useLayoutEffect, useRef } from 'react';
import ButtonLink from '../Buttons/ButtonLink';
import HighlightDot from '../HighlightDot';
import { ProductTitle } from '../styled';
import { stars } from '../styled/Stars';

const ProductContainer = styled.article`
  display: flex;
  height: 600px;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 65%;
  text-align: center;
`;

const StyledImage = styled.img`
  display: block;
  position: relative;
  margin: 0 auto;
  object-fit: cover;
  width: 107%;
`;

// TODO Set product prop as a product with product:  image, title, price, rating, link to product, and highlights for points

const ProductHighlight: React.FC<{ product: ProductsWithHighlightPoints }> = ({
  product
}) => {
  const imgContainerRef = useRef<HTMLDivElement>(null!);
  const imgRef = useRef<HTMLImageElement>(null!);

  let heightOffset = 0;

  useLayoutEffect(() => {
    const containerHeight = imgContainerRef?.current.clientHeight;
    const imgHeight = imgRef?.current.clientHeight;

    heightOffset = containerHeight - imgHeight;
  }, []);

  return (
    <ProductContainer>
      <ImageContainer ref={imgContainerRef}>
        <StyledImage ref={imgRef} src={product.image} alt={product.title} />
        {product.highlightPoints.map(point => (
          <HighlightDot {...point} />
        ))}
      </ImageContainer>
      <VStack
        pl="5vw"
        flexBasis="35%"
        spacing="2rem"
        justifyContent="center"
        align="start"
      >
        <Flex>{stars(product.rating)}</Flex>
        <ProductTitle as="h2" color="black" fontSize="3rem">
          {product.title}
        </ProductTitle>
        <Text
          fontWeight={600}
          fontSize="3.5rem"
          fontFamily="Bebas Neue"
        >{`$${product.price}`}</Text>
        <ButtonLink
          fontSize="2.5rem"
          to={'#'}
          color="primary.500"
          buttonColor="primary.500"
          iconColor="white"
        >
          Shop Now
        </ButtonLink>
      </VStack>
    </ProductContainer>
  );
};

export default ProductHighlight;
